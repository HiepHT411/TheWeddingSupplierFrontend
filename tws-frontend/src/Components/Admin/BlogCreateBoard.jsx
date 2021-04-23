import React, { Component } from 'react';
import { EditorState, convertFromRaw, convertToRaw, RichUtils } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const getHtml = editorState => draftToHtml(convertToRaw(editorState.getCurrentContent()));

class BlogCreateBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editorState: EditorState.createEmpty()
        };

    }

    componentDidMount() {
        // Load editor data (raw js object) from local storage
        const rawEditorData = this.getSavedEditorData();
        if (rawEditorData !== null) {
            const contentState = convertFromRaw(rawEditorData);
            this.setState({
                editorState: EditorState.createWithContent(contentState),
            });
        }
    }

    onChange(editorState){
        // Convert to raw js object
        const raw = convertToRaw(editorState.getCurrentContent());
        // Save raw js object to local storage
        this.saveEditorContent(raw);

        this.setState({ editorState });
    }

    saveEditorContent(data) {
        localStorage.setItem("editorData", JSON.stringify(data));
    }

    getSavedEditorData() {
        const savedData = localStorage.getItem("editorData");

        return savedData ? JSON.parse(savedData) : null;
    }

    handleKeyCommand(command) {
        const { editorState } = this.state;
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    }

    renderContentAsRawJs() {
        const contentState = this.state.editorState.getCurrentContent();
        const raw = convertToRaw(contentState);

        return JSON.stringify(raw, null, 2);
    }

    onEditorStateChange = (editorState) => {
        // console.log(editorState)
        this.setState({
          editorState,
        });
      };

    render() {
        const { editorState } = this.state;

        function uploadImageCallBack(file) {
            return new Promise(
                (resolve, reject) => {
                    const xhr = new XMLHttpRequest();
                    xhr.open('POST', 'https://api.imgur.com/3/image');
                    xhr.setRequestHeader('Authorization', 'Client-ID 5ec2ab583e0ee0d');
                    const data = new FormData();
                    data.append('image', file);
                    xhr.send(data);
                    xhr.addEventListener('load', () => {
                        const response = JSON.parse(xhr.responseText);
                        console.log(response)
                        resolve(response);
                    });
                    xhr.addEventListener('error', () => {
                        const error = JSON.parse(xhr.responseText);
                        console.log(error)
                        reject(error);
                    });
                }
            );
        }

        return (
            <div class="editor main">
                <Editor
                    editorState={editorState}
                    onEditorStateChange={this.onEditorStateChange}
                    handleKeyCommand={this.handleKeyCommand.bind(this)}

                    toolbar={{
                        inline: { inDropdown: true },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        link: { inDropdown: true },
                        history: { inDropdown: true },
                        image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: false } },
                    }}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                    placeholder="Tạo 1 blog mới ..."
                />
                <div>
                    <h4>Editor content as raw JS</h4>
                    <pre>{this.renderContentAsRawJs()}</pre>
                </div>
                
                <div>
                    <h4>Underlying HTML</h4>
                    <div class="html-view">
                        {getHtml(editorState)}
                    </div>
                    {/* Make a preview modal
                    <button className="btn btn-info" data-toggle="modal" data-target="#previewModal">Preview</button> */}
                </div>
                <div>
                    <h4>Preview</h4>
                    <div dangerouslySetInnerHTML={{__html: getHtml(editorState)}}/>
                </div>
                <button class="btn btn-success">Save</button>
            </div>
        );
    }
}

export default BlogCreateBoard;
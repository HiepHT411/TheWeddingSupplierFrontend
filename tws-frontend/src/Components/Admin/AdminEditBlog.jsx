import { EditorState, convertFromRaw, convertToRaw, RichUtils } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import React, { Component } from 'react';
import TwsService from '../../Services/TwsService';
import AuthService from '../AccountComponent/AuthService';

const getHtml = editorState => draftToHtml(convertToRaw(editorState.getCurrentContent()));
class AdminEditBlog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            title: '',
            author: AuthService.getCurrentUser().username,
            date: '',
            content: '',
            editorState: EditorState.createEmpty()
        };

    }
    componentDidMount() {
        let user = AuthService.getCurrentUser();

        if (user == null) {
            this.props.history.push("/account/login");
        } else if (!user.roles.includes("ROLE_ADMIN")) {
            this.props.hostory.push('/user/cart')
        }
        if (this.state.id === '_add') {
            return
        }
        else {
            TwsService.getBlog(this.state.id).then((res) => {
                let blog = res.data;
                this.setState({
                    title: blog.title,
                    author: blog.author,
                    date: blog.date,
                    editorState: blog.content
                });
            });
        }

    }

    changeTitleHandler = (e) => {
        this.setState({ title: e.target.value });
    }
    changeAuthorHandler = (e) => {
        this.setState({ author: AuthService.getCurrentUser().username });
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

    onChange(editorState) {
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

    onEditorStateChange = (editorState) => {
        // console.log(editorState)
        this.setState({
            editorState,
        });
    };

    createOrUpdateBlog = (e) => {
        e.preventDefault();
        console.log(getHtml(this.state.editorState));
        let updatedBlog = {
            title: this.state.title,
            author: this.state.author,
            date: this.state.date,
            content: getHtml(this.state.editorState)
        };
        console.log('create/update blog: ' + JSON.stringify(updatedBlog));

        if (this.state.id === "_add") {
            TwsService.createBlog(updatedBlog).then((res) => {
                this.props.history.push('/blog-management-page');
            });
        }
        else {
            TwsService.editBlog(updatedBlog, this.state.id).then((res) => {
                this.props.history.push('/blog-management-page');
            });
        }
    }



    cancel() {
        this.props.history.push('/blog-management-page');
    }

    getPageTitle() {
        if (this.state.id == '_add') {
            return <h2 className="text-center">Thêm bài viết mới</h2>
        }
        else {
            return <h2 className="text-center">Chỉnh sửa</h2>
        }
    }
    getUnderLyingHtmlandPreview(){
        if(this.state.id == '_add'){
            return <div>
            <h4>Underlying Html</h4>
            <div>{getHtml(this.state.editorState)}</div>
            <h4>Bản xem trước</h4>
            <div dangerouslySetInnerHTML={{__html: getHtml(this.state.editorState)}}/>
        </div>
        }
        else{
            return <div>
                <h4>Not support this feature
                </h4>
            </div>
        }
    }
    render() {
        const { editorState } = this.state;

        return (
            <div class="main">
                <div class="container">
                    <div className="col-md-6 offset-md-3 offset-md-3">
                        {this.getPageTitle()}
                        <div className="card-body">
                            <form>
                                <div class="form-group">
                                    <label>Tiêu đề: </label>
                                    <input placeholder="Title" name="title" class="form-control"
                                        value={this.state.title} onChange={this.changeTitleHandler}></input>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

                <div className="editor">
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
                            // image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: false } },
                        }}
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"
                        placeholder="Tạo 1 blog mới ..."
                    />
                </div>
                {this.getUnderLyingHtmlandPreview()}
                <button class="btn btn-success" onClick={this.createOrUpdateBlog}>Lưu</button>
                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: '10px' }}>Hủy</button>


            </div>
        );
    }
}

export default AdminEditBlog;
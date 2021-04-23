import React, { Component } from 'react';
import TwsService from '../../Services/TwsService';
import AuthService from '../AccountComponent/AuthService';
import { EditorState, convertFromRaw, convertToRaw, RichUtils } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';

const getHtml = editorState => draftToHtml(convertToRaw(editorState.getCurrentContent()));
class AdminEditProduct extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: this.props.match.params.id,
            title: '',
            date: '',
            content: '',
            price: null,
            type: 'new',
            editorState: EditorState.createEmpty()
        };

    }

    componentDidMount(){
        let user = AuthService.getCurrentUser();

        if(user == null){
            this.props.history.push("/account/login");
        }
        else if(!user.roles.includes("ROLE_ADMIN")){
            this.props.history.push("/user/cart");
        }

        if(this.state.id === "_add"){
            return
        }
        else{
            TwsService.getDetailProduct(this.state.id).then(res=>{
                let product = res.data;
                this.setState({});
            });
        }
    }

    getPageTile(){
        if(this.state.id === "_add"){
            return <h2>Thêm sản phẩm mới</h2>
        }
        else{
            return <h2>Chỉnh sửa sản phẩm</h2>
        }
    }

    changeProductTitleHandler=(event)=>{
        this.setState({title: event.target.value});
    }
    changeProductPriceHandler=(event)=>{
        this.setState({price: event.target.value});
    }
    selectProductTypeHandler=(event)=>{
        this.setState({type: event.target.value});
    }

    createOrUpdateProduct=(e)=>{
        e.preventDefault();
        console.log(getHtml(this.state.editorState));
        let updatedProduct = {
            title: this.state.title,
            date: this.state.date,
            content: getHtml(this.state.editorState),
            price: this.state.price,
            type: this.state.type
        };
        console.log('create/update product: ' + JSON.stringify(updatedProduct));

        if (this.state.id === "_add") {
            TwsService.createProduct(updatedProduct).then((res) => {
                this.props.history.push('/product-management-page');
            });
        }
        else {
            
        }

    }

    cancel(){
        this.props.history.push('/product-managementPage');
    }

    onEditorStateChange=(editorState)=>{
        this.setState({editorState});
    }
    handleKeyCommand(command){
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
        //this.saveEditorContent(raw);

        this.setState({ editorState });
    }
    // saveEditorContent(data) {
    //     localStorage.setItem("editorData", JSON.stringify(data));
    // }
    // getSavedEditorData() {
    //     const savedData = localStorage.getItem("editorData");
    //     return savedData ? JSON.parse(savedData) : null;
    // }
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
                <h4>Not support this feature</h4>
            </div>
        }
    }
    render() {
        const editorState = this.state.editorState;
        return (
            <div class="main">
                <div class="container">
                    <div class= "col-md-6 offset-md-3 offset-md-3">
                        {this.getPageTile()}
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <label>Tiêu đề: </label>
                                    <input class="form-control" placeholder="Title" name="title" value={this.state.title} onChange={this.changeProductTitleHandler}></input>
                                </div>
                                <div class="form-group">
                                    <label>Giá sản phẩm: </label>
                                    <input class="form-control" placeholder="Price" name="price" value={this.state.price} onChange={this.changeProductPriceHandler}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

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
                        placeholder="Tạo nội dung cho sản phẩm mới ..."
                    />
                    <div>
                        <select defaultValue = {this.state.type} onChange={this.selectProductTypeHandler}>
                            <option value="new">Sản phẩm mới</option>
                            <option value="service">Dịch vụ</option>
                            <option value="bestSeller">Bán chạy</option>
                        </select>
                    </div>
                    {this.getUnderLyingHtmlandPreview()}
                    <button class="btn btn-success" onClick={this.createOrUpdateProduct}>Lưu</button>
                    <button class="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: '10px'}}>Hủy</button>
            </div>
        );
    }
}

export default AdminEditProduct;
import React, { Component } from 'react';
import TwsService from '../../Services/TwsService';
import AuthService from '../AccountComponent/AuthService';

class AdminEditBlog extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            author: '',
            date: '',
            content: '',
            imgLink: ''
        }

    }
    componentDidMount(){
        let user = AuthService.getCurrentUser();
        if(user == null){
            this.props.history.push("/account/login");
        }else if (!user.roles.includes("ROLE_ADMIN")){
            this.props.hostory.push('/user/cart')
        }
        if(this.state.id === '_add'){
            return 
        }
        else{
        TwsService.getBlog(this.state.id).then((res)=>{
            let blog = res.data;
            this.setState({
                title: blog.title,
                author: blog.author,
                date: blog.date,
                content: blog.content,
                imgLink: blog.imgLink
            });
        });
        }
    }

    changeTitleHandler=(e)=>{
        this.setState({title: e.target.value});
    }
    changeAuthorHandler=(e)=>{
        this.setState({author: e.target.value});
    }
    changeDateHandler=(e)=>{
        this.setState({date: e.target.value});
    }
    changeContentHandler=(e)=>{
        this.setState({content: e.target.value});
    }
    changeImgLinkHandler=(e)=>{
        this.setState({imgLink: e.target.value});
    }

    createOrUpdateBlog = (e)=>{
        e.preventDefault();
        let updatedBlog = {title: this.state.title,
                            author: this.state.author,
                            date: this.state.date,
                            content: this.state.content,
                            imgLink: this.state.imgLink};
        console.log('update blog: '+ JSON.stringify(updatedBlog));

        if(this.state.id === "_add"){
            TwsService.createBlog(updatedBlog).then((res)=>{
                this.props.history.push('/blog-management-page');
            });
        }
        else{
            TwsService.editBlog(updatedBlog, this.state.id).then((res)=>{
            this.props.history.push('/blog-management-page');
        });
        }
    }
    cancel(){
        this.props.history.push('/blog-management-page');
    }

    getPageTitle(){
        if(this.state.id == '_add'){
            return <h2 className="text-center">Add new blog</h2>
        }
        else{
            return <h2 className="text-center">Edit Blog</h2>
        }
    }

    render() {
        return (
            <div class= "main">
                <div class= "container">
                <div className="col-md-6 offset-md-3 offset-md-3">
                        {this.getPageTitle()}
                        <div className="card-body">
                            <form>
                                <div class="form-group">
                                    <label>Title: </label>
                                    <input placeholder="Title" name="title" class="form-control"
                                        value={this.state.title} onChange={this.changeTitleHandler}></input>
                                </div>

                                <div class="form-group">
                                    <label>Author: </label>
                                    <input placeholder="Author" name="author" class="form-control"
                                        value={this.state.author} onChange={this.changeAuthorHandler}></input>
                                </div>

                                <div class="form-group">
                                    <label>Content: </label>
                                    <input placeholder="Content" name="content" class="form-control"
                                        value={this.state.content} onChange={this.changeContentHandler}></input>
                                </div>

                                <div class="form-group">
                                    <label>Image: </label>
                                    <input placeholder="Image link" name="imgLink" class="form-control"
                                        value={this.state.imgLink} onChange={this.changeImgLinkHandler}></input>
                                </div>
                                <button class="btn btn-success" onClick={this.createOrUpdateBlog}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: '10px'}}>Cancel</button>
                            </form>
                        </div>

                    </div>
                </div>

                
            </div>
        );
    }
}

export default AdminEditBlog;
import React, { Component } from 'react';
import TwsService from '../../Services/TwsService';
import AuthService from '../AccountComponent/AuthService';

class AdminBlog extends Component {
    constructor(props){
        super(props)

        this.state = {
            blogInfo: []
        }
    }
        
     
    componentDidMount(){
        
        this.state.currentUser = AuthService.getCurrentUser();
        let user = this.state.currentUser;
        
        if(user == null){
            this.props.history.push('/account/login');
        }
        else if (!user.roles.includes("ROLE_ADMIN")){
            this.props.history.push('/user/cart');
        }
        TwsService.getAllBlog().then((res)=>{
            this.setState({blogInfo: res.data});
        })
    }
    addBlog(){
        this.props.history.push('/adminEditBlog/_add');
    }
    deleteBlog(id){
        TwsService.deleteBlog(id).then(res=>{
            this.setState({blogInfo: this.state.blogInfo.filter(blog => blog.id !==id)})
        });
    }
    editBlog(id){
        this.props.history.push(`/adminEditBlog/${id}`);
    }

    render() {
        return (
            <div class="main">
                <div class= "container">
                <div>
                <button onClick={()=> this.addBlog()} class="btn btn-success">Add</button>
                </div>
                <div className = "row-table">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr class = "title">
                                <th class = "">Title</th>
                                <th class = "">Author</th>
                                <th class = "">Date</th>
                                <th class = "">Image Link</th>
                                <th class = "">Content</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody className="content">
                            {
                                this.state.blogInfo.map(
                                    blog =>
                                    <tr key={blog.id}>
                                        <td>{blog.title}</td>
                                        <td>{blog.author}</td>
                                        <td>{blog.date}</td>
                                        <td>{blog.imgLink}</td>
                                        <td>{blog.content}</td>
                                        <td>
                                            
                                            <button onClick={()=> this.editBlog(blog.id)} className="btn btn-info" style={{marginLeft:"10px"}}>Edit</button>
                                            <button onClick={()=> this.deleteBlog(blog.id)} className="btn btn-danger" style={{marginLeft:"10px"}}>Delete</button>
                                        </td>
                                    </tr>
                                )

                            }

                        </tbody>


                    </table>
                </div>
                            
            

                </div>
                
            </div>
        );
    }
}

export default AdminBlog;
import React, { Component } from 'react';
import TwsService from '../../Services/TwsService';

class AdminBlog extends Component {
    constructor(props){
        super(props)

        this.state = {
            blogInfo: [],
            id: this.props.match.params.id,
            title: '',
            author: '',
            date: '',
            content: '',
            imgLink: ''

        }
    }

    componentDidMount(){
        TwsService.getAllBlog().then((res)=>{
            this.setState({blogInfo: res.data});
        })
    }

    deleteBlog(id){
        TwsService.deleteBlog(id);
    }
    editBlog(id){
        TwsService.editBlog(id);
    }

    render() {
        return (
            <div class="main">
                <div class= "container">

                <div className = "row-table">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr class = "title">
                                <th class = "">Title</th>
                                <th class = "">Author</th>
                                <th class = "">Date</th>
                                <th class = "">Image Link</th>
                                <th class = "">Content</th>
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
                                            <button onClick={()=> this.editBlog(brand.id)} className="btn btn-info">Edit</button>
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
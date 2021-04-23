import React, { Component } from 'react';
import TwsService from '../../Services/TwsService';
import AuthService from '../AccountComponent/AuthService';
import BlogCreateBoard from './BlogCreateBoard';

class AdminBlog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            blogInfo: []
        }
    }


    componentDidMount() {

        this.state.currentUser = AuthService.getCurrentUser();
        let user = this.state.currentUser;

        if (user == null) {
            this.props.history.push('/account/login');
        }
        else if (!user.roles.includes("ROLE_ADMIN")) {
            this.props.history.push('/user/cart');
        }
        TwsService.getAllBlog().then((res) => {
            this.setState({ blogInfo: res.data });
        })
    }
    addBlog() {
        this.props.history.push('/adminEditBlog/_add');
    }
    deleteBlog(id) {
        TwsService.deleteBlog(id).then(res => {
            this.setState({ blogInfo: this.state.blogInfo.filter(blog => blog.id !== id) })
        });
    }
    editBlog(id) {
        this.props.history.push(`/adminEditBlog/${id}`);
    }

    render() {
        return (
            <div class="main">
                <div class="container">
                    <div>
                        <button onClick={() => this.addBlog()} class="btn btn-success">Thêm mới</button>
                    </div>
                    <div className="row-table">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr class="title-row">
                                    <th class="">Tiêu đề</th>
                                    <th class="">Tác giả</th>
                                    <th class="">Ngày viết</th>
                                    <th class="content-column">Nội dung</th>
                                    <th>Hành động</th>
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
                                                <td>{blog.content.substr(0,333)+"..."}</td>
                                                <td>

                                                    <button onClick={() => this.editBlog(blog.id)} className="btn btn-info" style={{ marginLeft: "10px" }}>Sửa</button>
                                                    <button onClick={() => this.deleteBlog(blog.id)} className="btn btn-danger" style={{ marginLeft: "10px" }}>Xóa</button>
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
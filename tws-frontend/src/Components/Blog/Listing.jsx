import React, { Component } from 'react';
import BlogDetail from './BlogDetail';
import './style.css';
import { withRouter } from "react-router-dom";

class Listing extends Component {
    constructor(props){
        super(props)

        this.state={
            firstImage: ''
        }
    }

    // goToBlogDetailPage(id){
    //     this.props.history.push(`/blog/detail/${id}`) ;
    // }
    render() {
        return (
            <div className="blog_list">
                <div>
                            {
                                this.props.blogs.map(
                                blog => 
                                    <div class = "row blog_list_element">
                                        <div class= "col-lg-3">
                                            <tr key={blog.id}>
                                            {/* <a role="button" onClick={this.goToBlogDetailPage(blog.id)}> */}
                                            <a href={'/blog/detail/'+ blog.id}>
                                                {/* <img style={{width: 230, height: 150}} src={blog.imgLink+ blog.id}/> */}
                                                <div dangerouslySetInnerHTML={{__html: blog.content.substring((blog.content.indexOf("<img")), ((blog.content.indexOf("/>")) + 2) )}}/>
                                            </a>
                                            
                                            </tr>
                                        </div>
                                        <div class="col-lg-6 text-left">
                                            <tr key={blog.id}>
                                                <div>
                                                    
                                                    <div>
                                                        <h3 >{blog.title}</h3>
                                                        <p>Tác giả: {blog.author}</p>
                                                        <p>Ngày viết: {blog.date}</p>
                                                        {/* <div >{ blog.content.substr(0,50) + "..."}</div> */}
                                                        {/* <div dangerouslySetInnerHTML={{ __html: blog.content.substr(0,50)}}/> */}
                                                        <br/>
                                                    </div>
                                                </div>
                                            </tr>
                                        </div>
                                    </div>
                                )
                            }
                </div>
            </div>
        )
    }
}

export default withRouter(Listing);
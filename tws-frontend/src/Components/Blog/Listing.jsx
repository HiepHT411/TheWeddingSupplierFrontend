import React, { Component } from 'react';
import BlogDetail from './BlogDetail';
import './style.css';
import { withRouter } from "react-router-dom";

class Listing extends Component {
    constructor(props){
        super(props)

        this.state={

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
                                    <div class = "row">
                                        <div class= "col-lg-3">
                                            <tr key={blog.id}>
                                            {/* <a role="button" onClick={this.goToBlogDetailPage(blog.id)}> */}
                                            <a href={'/blog/detail/'+ blog.id}>
                                            {/* <div  dangerouslySetInnerHTML={{ __html: blog.imgLink}}/> */}
                                                <img src={blog.imgLink} alt=""/>
                                            </a>
                                            
                                            </tr>
                                        </div>
                                        <div class="col-lg-6 text-left">
                                            <tr key={blog.id}>
                                                <div>
                                                    
                                                    <div>
                                                        <h3 >{blog.title}</h3>
                                                        <p>Author: {blog.author}</p>
                                                        <p>Date: {blog.date}</p>
                                                        <span dangerouslySetInnerHTML={{ __html: blog.content}}/>
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
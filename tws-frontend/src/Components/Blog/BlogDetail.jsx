import React, { Component } from 'react';
import TwsService from '../../Services/TwsService';

class BlogDetail extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            blogs: [],
            blog: {}
        }
    }

    componentDidMount(){
        TwsService.getBlog(this.state.id).then(res =>{
            this.setState({blog : res.data});
        });
        TwsService.getAllBlog().then((response)=>{
            this.setState({blogs: response.data});
        });
    }
    render() {
        
        return (
            <div class= "main">
                <hr/>
            <section class="container-fluid">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="card">
                            <h3>Bài viết mới nhất</h3>
                            <hr/>
                            <div>
                                {
                                    this.state.blogs.map(blog =>
                                        <a href= "/" >
                                            <h6>{blog.title}</h6>
                                        </a>
                                            )
                                }
                            </div>
                        </div>
                        <br/>
                        <div class="card">
                            <h3>Danh mục Blog</h3>
                            <hr/>
                            <ul className="text-left">
                                <li><a href="http://localhost:3000">Home</a></li>
                                <li><a href="/collections">Productions</a></li>
                                <li><a href="/intro">Introduction</a></li>
                                <li><a href="/blog/news">Blog</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="col-md-7 text-left">
                            <h3>{this.state.blog.title}</h3>
                            <p>Author: {this.state.blog.author}</p>
                            <p>Date: {this.state.blog.date}</p>
                            <span dangerouslySetInnerHTML={{ __html: this.state.blog.content}}/>
                            <div dangerouslySetInnerHTML={{ __html: this.state.blog.imgLink}}/>

                        </div>


                    </div>
                

                </div>

            </section>
            
        </div>
        );
    }
}

export default BlogDetail;
import React, { Component } from 'react';
import TwsService from '../../Services/TwsService';
import Listing from './Listing';
import './style.css';

class Blog extends Component {
    constructor(props){
        super(props)

        this.state={
            blogs: []
        }
        this.goToBlogDetailPage = this.goToBlogDetailPage.bind(this);
    }

    componentDidMount(){
        TwsService.getAllBlog().then((response)=>{
            this.setState({blogs: response.data});
        });
    }
    
    deleteBlog(id){
        TwsService.deleteBlog(id).then(res=>{
            this.setState({blogs: this.state.blogs.filter(blog=>(blog.id !== id)) });
        })
    }
    goToBlogDetailPage(id){
        this.props.history.push(`/blog/detail/${id}`) ;
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
                                        <a href= "/blog/detail/${blog.id}" >
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
                        <div><h2>Tin tức</h2></div><br/><br/>
                        <Listing blogs={this.state.blogs}
                                deleteBlog = {this.deleteBlog}
                                goToBlogDetailPage = {this.goToBlogDetailPage}
                        />
                        
                    </div>
                

                </div>

            </section>
            
        </div>
        )
    }
}

export default Blog;
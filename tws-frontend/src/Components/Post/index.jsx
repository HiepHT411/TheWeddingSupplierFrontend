import React, { Component } from 'react';
import './style.css';
export default class index extends Component {
    constructor(props){
        super(props)

        this.state={
            
        }
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
                        <h2>Tin tức</h2>
                    </div>
                

                </div>

            </section>
            
        </div>
        )
    }
}

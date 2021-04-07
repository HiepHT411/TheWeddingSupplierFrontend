import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
class HomePage extends Component {
    constructor(){
        super()

        this.state = {
            
        }
    }

    deleteEvent = (index) =>{
        const copyServiceProductList = Object.assign([], this.state.serviceproductList);
        copyServiceProductList.splice(index, 1);
        this.setState({
            serviceproductList: copyServiceProductList
        })
    }

    
    
    // deletePost = (id) => {
    //     //console.log(id);
    //     axios.delete(`.../posts/${id}`)
    //     .then(res => {
    //         if (res.status === 200) {
    //             const posts = [...this.state.posts];
    //             let result = posts.filter(post => (
    //                 post.id !== id
    //             ));
    //             this.setState({
    //                 posts: result
    //             })
    //         } 
    //     })
    // }

    render() {
        return (
            <div class="main">
                {/* <section class="hero" id="hero">  
                    <div class="container2">
                    <h2 class="sub-headline">
                        <span class="first-letter">W</span>elcome to
                    </h2>
                    <h1 class="headline">ádsasdsaad</h1>
                    <div class="headline-description">
                        <div class="separator">
                            <div class="asterisk"><i class="fas fa-asterisk"></i></div>
                        </div>
                        <div class="single-animation">
                            <a href="#" class="btn cta-btn">Đặt ngay</a>
                        </div>
                    </div>
                    </div>
                </section> */}

                <Carousel autoPlay="true" emulateTouch = "true" interval="2000" >
                    <div><img src = "http://localhost:8080/api/tws/resource/carousel/1"/></div>
                    <div><img src = "http://localhost:8080/api/tws/resource/carousel/2"/></div>
                    <div><img src = "http://localhost:8080/api/tws/resource/carousel/3"/></div>
                    <div><img src = "http://localhost:8080/api/tws/resource/carousel/4"/></div>
                </Carousel>

                <div class = "container-fluid padding">
                    <div class = "row card-group padding" >

                        <div class = "col-md-3">
                            <div class ="card zoom">
                                <img class ="card-img" src = "images/trangtrihoa.jpg"/>
                                <div class = "card-img-overlay d-flex align-items-end">
                                    <h4 class ="card-title">Trang trí hoa tươi/hoa lụa</h4>
                                    <a href = "/collections/font-page" class = "btn btn-outline-secondary">Xem</a>
                                </div>
                            </div>
                        </div>
                      <div class = "col-md-3">
                        <div class ="card zoom">
                            <img class ="card-img-top" src = "images/mamanhoi.jpg" alt=""/>
                            <div class = "card-img-overlay d-flex align-items-end">
                                <h4 class ="card-title">Xếp mâm ăn hỏi rồng phượng</h4>
                                <a href = "/collections/mam-an-hoi-rong-phuong" class = "btn btn-outline-secondary">Xem</a>
                            </div>
                        </div>
                      </div> 
                       <div class = "col-md-3">    
                        <div class ="card zoom">
                            <img class ="card-img-top" src = "images/hongdusty.jpg"/>
                            <div class = "card-img-overlay d-flex align-items-end">
                                <h4 class ="card-title">Nhà bạt cao cấp</h4>
                                <a href = "/collections/hot-products" class = "btn btn-outline-secondary">Xem</a>
                            </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                          <div class = "card zoom">
                              <img class="card-img-top" src = "images/belechuyennghiep.jpg"/>
                              <div class="card-img-overlay d-flex align-items-end">
                                  <h4 class= "card-title">Bê lễ chuyên nghiệp</h4>
                                  <a href="/collections/be-le-chuyen-nghiep" class= "btn btn-outline-secondary">Xem</a>
                              </div>
                          </div>
                      </div>
                    </div>

                </div>

            <hr class = "my-hr"></hr>

            

            <div class ="container-fluid padding">
                <div class= "row section-header text-center">
                    <div class = "col-12">
                        <h5 class = "display-4">Sản phẩm mới</h5>
                    </div>
                </div>
            </div>

            <div class = "container-fluid padding">
                    <div class = "row padding " >
                        <div class = "col-md-3">
                            <div class ="card zoom text-left">
                                <a href="https://www.youtube.com/" class ="btn btn-default">
                                    <img class ="card-img-middle" src = "images/nharieng.jpg"/>
                                    <img class="card-img-middle-hover" src="images/nharieng2.jpg"/>
                                </a>
                                <div class = "card-body">
                                    <h4 class ="card-title-b">Trang trí tiệc cưới tại nhà riêng</h4>
                                    <p class = "card-text-b">15.000.000</p>
                                </div>
                            </div>
                        </div>
                      <div class = "col-md-3">
                        <div class ="card zoom text-left">
                            <a href="https://www.youtube.com/" class ="btn btn-default">
                                <img class ="card-img-middle" src = "images/hocotien.jpg"/>
                                <img class="card-img-middle-hover" src = "images/hocotien2.jpg"/>
                            </a>
                            <div class = "card-body">
                                <h4 class ="card-title-b">Hồ cô tiên</h4>
                                <p class = "card-text-b">20.000.000</p>
                            </div>
                        </div>
                      </div>
                      <div class = "col-md-3">    
                        <div class ="card zoom text-left">
                            
                            <a href="https://www.youtube.com/" class ="btn btn-default">
                                <img class ="card-img-middle" src = "images/khachsansaigon.jpg" alt="image-front"/>
                                <img class ="card-img-middle-hover" src = "images/khachsansaigon2.jpg" alt = "image-back"/>
                            </a>
                            
                            <div class = "card-body">
                                <h4 class ="card-title-b">Khách sạn sài gòn</h4>
                                <p class = "card-text-b">25.000.000</p>
                            </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                          <div class = "card zoom text-left">
                            <a href="https://www.youtube.com/" class ="btn btn-default">
                                <img class ="card-img-middle" src = "images/muongthanh.jpg"/>
                                <img class="card-img-middle-hover" src = "images/muongthanh2.jpg"/>
                            </a>
                              <div class="card-body">
                                  <h4 class= "card-title-b">Mường thanh</h4>
                                  <p class = "card-text-b">25.000.000</p>
                              </div>
                          </div>
                      </div>
                    </div>

            </div>
            
            <hr class="my-hr"></hr>

            <div class="container-fluid padding">
                <div class="row padding ">
                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-under-middle" src="http://localhost:8080/api/tws/resource/images/nhansuphuonglan"/>
                            <div class= "card-img-overlay d-flex flex-column justify-content-end">
                                <p class="card-text">Đội ngũ chuyên nghiệp</p>
                                <h5 class="card-title">Nhân Sự FPT</h5>
                                <a class="btn btn-outline-secondary">Xem thêm</a>
                            </div>
                        </div>
                    </div>
                    <div class= "col-md-4">
                        <div class="card">
                            <img class="card-img-under-middle" src="http://localhost:8080/api/tws/resource/images/cuoihoidep"/>
                            <div class="card-img-overlay d-flex flex-column justify-content-end">
                                <p class="card-text">Bộ sưu tập</p>
                                <h5 class="card-title">Cưới hỏi đẹp FSOFT</h5>
                                <a class="btn btn-outline-secondary">Xem thêm</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-under-middle" src="http://localhost:8080/api/tws/resource/images/tieccuoisangtrong"/>
                            <div class= "card-img-overlay d-flex flex-column justify-content-end">
                                <p class="card-text">Mẫu trang trí nhà hàng khách sạn</p>
                                <h5 class="card-title">Tiệc cưới sang trọng</h5>
                                <a class="btn btn-outline-secondary">Xem thêm</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="my-hr"></hr>

            <div class ="container-fluid padding">
                <div class= "row section-header text-center">
                    <div class = "col-12">
                        <h5 class="display-4">Sản phẩm bán chạy</h5>
                    </div>
                </div>
            </div>
            <hr class="my-hr"/>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2">
                        <div className="card zoom">
                            <a href="https://www.youtube.com/" class ="btn btn-default">
                                <img class ="card-img-bottom" src = "images/hongdusty.jpg"/>
                            </a>
                            <div class="card-body">
                                <p>Dusty Pink</p>
                                <p>10.000.000</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div className="card zoom">
                            <a href="https://www.youtube.com/" class ="btn btn-default">
                                <img class ="card-img-bottom" src = "images/batdodo.jpg"/>
                            </a>
                            <div class="card-body">
                                <p>Red</p>
                                <p>10.000.000</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div className="card zoom">
                            <a href="https://www.youtube.com/" class ="btn btn-default">
                                <img class ="card-img-bottom" src = "images/xanhmatcha.jpg"/>
                            </a>
                            <div class="card-body">
                                <p>Matcha Green</p>
                                <p>10.000.000</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div className="card zoom">
                            <a href="https://www.youtube.com/" class ="btn btn-default">
                                <img class ="card-img-bottom" src = "images/xanhsiment.jpg"/>
                            </a>
                            <div class="card-body">
                                <p>Siment Green</p>
                                <p>10.00.000</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div className="card zoom">
                            <a href="https://www.youtube.com/" class ="btn btn-default">
                                <img class ="card-img-bottom" src = "images/kemgolden.jpg"/>
                            </a>
                            <div class="card-body">
                                <p>Golden Cream</p>
                                <p>10.000.000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-hr"/>

            <div class = "container-fluid padding">
                <div class =  "row padding">
                    <div class= "col-lg-6">
                    <img src = "http://localhost:8080/api/tws/resource/images/home_aboutus" class = "img-fluid" />
                    </div>

                    <div class = "col-lg-6">
                        <h2>About us</h2>
                        <p>Ê ề ề ê ê</p>
                        <button href="/" type="button" className="btn btn-success btn-lg">More information</button>
                        <br/>
                    </div>

                </div>
            </div>
            <hr item-padding></hr>

            </div>
        );
    }
}

export default HomePage;
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
class HomePage extends Component {
    constructor(){
        super()

        this.state = {
            serviceproductList: [{id: 1, imgLink: "/images/trangtrihoa.jpg", title: "Trang trí hoa tươi, hoa lụa", text:"-50%", productLink: "#"},
                                {id: 1, imgLink: "/images/trangtrihoa.jpg", title: "Trang trí hoa tươi, hoa lụa", text:"-50%", productLink: "#"}]
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

                
                {/* <div id="slides" class = "carousel slide carousel-fade" data-bs-ride= "carousel">
                     <ul class = "carousel-indicators">
                        <li  data-bs-target = "#slides" data-slide-to= "0" class = "active"></li>
                        <li data-bs-target = "#slides" data-slide-to= "1"></li>
                        <li data-bs-target = "#slides" data-slide-to= "2"></li>
                        <li  data-bs-target = '#slides' data-slide-to= "3"></li>
                    </ul> 

                    <div class = "carousel-inner">
                        <div class = "carousel-item active">
                            <img class="d-block w-100" src = "images/slideshow_1.jpg" alt=""/>
                              <div class = "carousel-caption">
                            <h3 class ="display-2">Hệ thống cưới hỏi cao cấp FPT</h3>
                            <button type = "button" class = "btn btn-outline-dark btn-lg">Gọi ngay</button>
                             </div> 
                        </div>

                        <div class = "carousel-item">
                            <img class="d-block w-100" src = "/images/slideshow_2.jpg" alt=""/>
                        </div>
        
                        <div class = "carousel-item">
                            <img class="d-block w-100" src = "images/slideshow_3.jpg" alt=""/>
                        </div>

                        <div class="carousel-item">
                            <img class="d-block w-100" src="images/slideshow_4.jpg" alt=""/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#slides"  data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#slides"  data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button> 

                </div> */}

                <Carousel autoPlay="true" emulateTouch = "true" >
                    <div><img src = "images/slideshow_1.jpg"/></div>
                    <div><img src = "images/slideshow_2.jpg"/></div>
                    <div><img src = "images/slideshow_3.jpg"/></div>
                    <div><img src = "images/slideshow_4.jpg"/></div>
                </Carousel>

                <div class = "container-fluid padding">
                    <div class = "row card-group padding" >
                        {/* <div class="col-md-3 row"><ul>
                            <div>
                                {
                                    this.state.serviceproductList.map((product, index)=>{
                                        return (
                                            <ServiceListCard key={product.id}
                                            id={product.id}
                                            title={product.title}
                                            imgLink={product.imgLink}
                                            productLink={product.productLink}
                                            text ={product.text}
                                            delete={this.deleteEvent.bind(this, index)}>
                                            </ServiceListCard>
                                        )
                                    })
                                }
                            </div>
                        </ul>
                        </div> */}
                        <div class = "col-md-3">
                            <div class ="card">
                                <img class ="card-img" src = "images/trangtrihoa.jpg"/>
                                <div class = "card-img-overlay d-flex align-items-end">
                                    <h4 class ="card-title">Trang trí hoa tươi/hoa lụa</h4>
                                    <a href = "#" class = "btn btn-outline-secondary">Xem ngay</a>
                                </div>
                            </div>
                        </div>
                      <div class = "col-md-3">
                        <div class ="card">
                            <img class ="card-img-top" src = "images/mamanhoi.jpg" alt=""/>
                            <div class = "card-img-overlay d-flex align-items-end">
                                <h4 class ="card-title">Xếp mâm ăn hỏi rồng phượng</h4>
                                <a href = "#" class = "btn btn-outline-secondary">Xem ngay</a>
                            </div>
                        </div>
                      </div> 
                       <div class = "col-md-3">    
                        <div class ="card">
                            <img class ="card-img-top" src = "images/hongdusty.jpg"/>
                            <div class = "card-img-overlay d-flex align-items-end">
                                <h4 class ="card-title">Nhà bạt cao cấp</h4>
                                <a href = "#" class = "btn btn-outline-secondary">Xem ngay</a>
                            </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                          <div class = "card">
                              <img class="card-img-top" src = "images/belechuyennghiep.jpg"/>
                              <div class="card-img-overlay d-flex align-items-end">
                                  <h4 class= "card-title">Bê lễ chuyên nghiệp</h4>
                                  <a href="/" class= "btn btn-outline-secondary">Xem ngay</a>
                              </div>
                          </div>
                      </div>
                    </div>

                </div>

            <hr class = "my-hr"></hr>

            

            <div class ="container-fluid padding">
                <div class= "row welcome text-center">
                    <div class = "col-12">
                        <h5 class = "display-4">Sản phẩm mới</h5>
                    </div>
                </div>
            </div>

            <div class = "container-fluid padding">
                    <div class = "row padding " >
                        <div class = "col-md-3">
                            <div class ="card text-left">
                                <a href="https://www.youtube.com/" class ="btn btn-default">
                                    <img class ="card-img-middle" src = "images/nharieng.jpg"/>
                                </a>
                                <div class = "card-body">
                                    <h4 class ="card-title-b">Trang trí tiệc cưới tại nhà riêng</h4>
                                    <p class = "card-text-b">15.000.000</p>
                                </div>
                            </div>
                        </div>
                      <div class = "col-md-3">
                        <div class ="card text-left">
                            <a href="https://www.youtube.com/" class ="btn btn-default">
                                <img class ="card-img-middle" src = "images/hocotien.jpg"/>
                            </a>
                            <div class = "card-body">
                                <h4 class ="card-title-b">Hồ cô tiên</h4>
                                <p class = "card-text-b">20.000.000</p>
                            </div>
                        </div>
                      </div>
                      <div class = "col-md-3">    
                        <div class ="card text-left">
                            <a href="https://www.youtube.com/" class ="btn btn-default">
                                <img class ="card-img-middle" src = "images/khachsansaigon.jpg"/>
                            </a>
                            <div class = "card-body">
                                <h4 class ="card-title-b">Khách sạn sài gòn</h4>
                                <p class = "card-text-b">25.000.000</p>
                            </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                          <div class = "card text-left">
                            <a href="https://www.youtube.com/" class ="btn btn-default">
                                <img class ="card-img-middle" src = "images/muongthanh.jpg"/>
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
                            <img class="card-img-under-middle" src="images/nhansuphuonglan.jpg"/>
                            <div class= "card-img-overlay d-flex flex-column justify-content-end">
                                <p class="card-text">Đội ngũ chuyên nghiệp</p>
                                <h5 class="card-title">Nhân Sự FPT</h5>
                                <a class="btn btn-outline-secondary">Xem thêm</a>
                            </div>
                        </div>
                    </div>
                    <div class= "col-md-4">
                        <div class="card">
                            <img class="card-img-under-middle" src="images/cuoihoidep.jpg"/>
                            <div class="card-img-overlay d-flex flex-column justify-content-end">
                                <p class="card-text">Bộ sưu tập</p>
                                <h5 class="card-title">Cưới hỏi đẹp FSOFT</h5>
                                <a class="btn btn-outline-secondary">Xem thêm</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-under-middle" src="images/tieccuoisangtrong.jpg"/>
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
                <div class= "row text-center">
                    <div class = "col-12">
                        <h5 class="display-4">Sản phẩm bán chạy</h5>
                    </div>
                </div>
            </div>
            <hr class="my-hr"/>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2">
                        <div className="card">
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
                        <div className="card">
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
                        <div className="card">
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
                        <div className="card">
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
                        <div className="card">
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
                    <img src = "images/home_aboutus.jpg" class = "img-fluid" />
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
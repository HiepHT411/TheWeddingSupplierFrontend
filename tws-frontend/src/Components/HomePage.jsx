import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import TwsService from '../Services/TwsService';
class HomePage extends Component {
    constructor(props){
        super(props)

        this.state = {
            serviceProducts: [],
            newProducts: [],
            // newProducts: [{link: "/collections/all", frontImg: "images/nharieng.jpg", backImg: "images/nharieng2.jpg", title: "Trang trí tiệc cưới tại nhà riêng", price: "15.000.000 VND"},
            //                  {link: "/collections/all", frontImg: "images/hocotien.jpg", backImg: "images/hocotien2.jpg", title: "Hồ cô tiên", price: "20.000.000 VND"},
            //                 {link: "/collections/all", frontImg: "images/khachsansaigon.jpg", backImg: "images/khachsansaigon2.jpg", title: "Khách sạn sài gòn", price: "25.000.000 VND"},
            //                 {link: "/collections/all", frontImg: "images/muongthanh.jpg", backImg: "images/muongthanh2.jpg", title: "Mường thanh", price: "25.000.000 VND"}],
            
            introPosts: [{imgLink:"http://localhost:8080/api/tws/resource/images/nhansuphuonglan",text:"Đội ngũ chuyên nghiệp", title:"Nhân Sự FPT", link:"/intro"},
                        {imgLink:"http://localhost:8080/api/tws/resource/images/cuoihoidep",text:"Bộ sưu tập", title:"Cưới hỏi đẹp FSOFT", link:"/collections/all"},
                        {imgLink:"http://localhost:8080/api/tws/resource/images/tieccuoisangtrong",text:"Mẫu trang trí nhà hàng khách sạn", title:"Tiệc cưới sang trọng", link:"/collections/all"}],
            bestSellerProducts: []
        }

        this.goToIntroPage = this.goToIntroPage.bind(this);
    }
    componentDidMount(){
        TwsService.getProducts("service").then(res => {
            this.setState({ serviceProducts: res.data });
        });
        TwsService.getProducts("bestSeller").then(res=>{
            this.setState({ bestSellerProducts: res.data});
        });
        TwsService.getProducts("new").then(res=>{
            this.setState({ newProducts: res.data});
        });
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
    goToIntroPage(){
        this.props.history.push('/intro');
    }

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
                <div class="container-fluid-padding">
                    <div class="row card-group padding">
                        {
                            this.state.serviceProducts.map(product =>
                                <div class = "col-md-3">
                            <div class ="card zoom">
                               <div dangerouslySetInnerHTML ={{__html: product.content.substring((product.content.indexOf("<img")), (product.content.indexOf("/>"))+2 )}}/>
                                <div class = "card-img-overlay d-flex align-items-end">
                                    <h4 class ="card-title">{product.title}</h4>
                                    <a href = "/collections/font-page" class = "btn btn-outline-secondary">Xem</a>
                                </div>
                            </div>
                            </div>    
                            )
                        }
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
                
            <div class="container-fluid-padding">
                <div class="row">
                    {
                        this.state.newProducts.map(product=>
                            <div className="col-md-3">
                                <div className="card zoom text-left">
                                    <a href={"/product/detail/"+product.id}>
                                        <div dangerouslySetInnerHTML={{__html: product.content.substring((product.content.indexOf("<img")), (product.content.indexOf("/>"))+ 2)}}/>
                                        {/* <img class="card-img-middle" src={product.frontImg}/>
                                        <img class="card-img-middle-hover" src={product.backImg}/> */}
                                    </a>
                                    <div className="card-body">
                                        <h4 className="card-title-b">{product.title}</h4>
                                        <p className="card-text-b">{product.price}</p>
                                    </div>
                                </div>
                            </div>    
                        )
                    }
                </div>
            </div>
            
            <hr class="my-hr"></hr>

            <div className="container-fluid padding">
                <div className="row">
                    {
                        this.state.introPosts.map(post=>
                            <div class="col-md-4">
                                <div class="card">
                                    <img class="card-img-under-middle" src={post.imgLink}/>
                                    <div class= "card-img-overlay d-flex flex-column justify-content-end">
                                        <p class="card-text">{post.text}</p>
                                        <h5 class="card-title">{post.title}</h5>
                                        <a class="btn btn-outline-secondary" href={post.link}>Xem thêm</a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
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

            <div className="container-fluid">
                <div className="row">
                    {
                        this.state.bestSellerProducts.map(product =>
                            <div class="col-md-2">
                                <div className="card zoom">
                                    <a href={product.link} class ="btn btn-default">
                                        <div dangerouslySetInnerHTML={{__html: product.content.substring((product.content.indexOf("<img")), (product.content.indexOf("/>"))+2 )}}/>
                                    </a>
                                    <div class="card-body">
                                        <p>{product.title}</p>
                                        <p>{product.price}</p>
                                    </div>
                                </div>
                            </div> 
                        )
                    }
                </div>
            </div>
            
            <hr className="my-hr"/>

            <div class = "container-fluid padding">
                <div class =  "row padding">
                    <div class= "col-lg-6">
                    <img src = "http://localhost:8080/api/tws/resource/images/home_aboutus" class = "img-fluid" />
                    </div>

                    <div class = "col-lg-6">
                        <h2>Về chúng tôi</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eius commodi minima harum, eum rem non odit porro et corrupti, labore aliquid, quod quibusdam autem temporibus itaque natus optio maiores!</p>
                        <button onClick={this.goToIntroPage} type="button" className="btn btn-success btn-lg">Chi tiết</button>
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
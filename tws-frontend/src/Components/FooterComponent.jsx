import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(){
        super()

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <footer className="footer">

                <div class = "container-fluid padding ">
                        <div class="row ">
                            <div class="row col-md-8 align-self-center mail-subcribe item-padding">
                                <img src="images/mail.png"/>
                                <p class="item-padding">Đăng kí nhận tin</p>
                                <form class="form-inline item-padding">
                                    <input className="rmdb-searchbar-input" type="text" placeholder="Email..."></input>
                                </form>
                                <a href="/" class="btn btn-danger">Đăng kí</a>
                            </div>
                            <div class="row col-md-4 align-self-center">
                                
                                <a><i class="fa fa-fw fa-phone"></i></a>
                                <p>Tư vấn thủ tục, trang trí từ A-Z</p>
                            </div>
                        </div>
                        <hr/>

                        <div class = "row text-center">
                            <div class = "col-md-4">
                                <h5>Giới thiệu</h5>
                                <hr class="light"></hr>
                                <p>Cưới Hỏi Phương Lan - Hạ Long Hệ thống Cưới Hỏi Phương Lan – Quảng Ninh 
                                    096 585 6863 - A. Trần Phương / 0368 409080 - 
                                    C. Thắm Nguyễn Phương Lan có hơn 8 năm phục vụ Uy tín DV Cưới Hỏi Trọn Gói tại Quảng Ninh
                                    Xem Các Mẫu trang trí Cưới hỏi tại Fanpage : https://www.facebook.com/cuoihoiPhuongLanHaLong/</p>
                            </div>

                            <div class= "col-md-2">
                                
                                <h5>Liên kết</h5>
                                <hr class="light"></hr>
                                <p>Tìm kiếm</p>
                                <p>Giới thiệu</p>
                                <img src ="images/logo.png"/>
                            </div>

                            <div class = "col-md-3 footer-img">
                                
                                <h5>Thông tin liên hệ</h5>
                                <hr class = "light"/>
                                <div class="row"><img src="images/mark.png"/>
                                <p>Hà Nội</p></div>
                                <div class="row"><img src="images/phone.png"/>
                                <p>0123456789</p></div>
                                <div class="row"><img src="images/send.png"/>
                                <p>weddingplanner@ftws.com</p>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <h5>Fanpage</h5>
                                <hr/>
                                <div class="fb-page" 
                                    data-href="https://www.facebook.com/cuoihoiPhuongLanHaLong/"
                                    data-height="100" 
                                    data-adapt-container-width
                                    data-hide-cover="false"
                                    data-show-facepile="false"></div>                                
                            </div>
                        </div>
                        <div class = "col-12">
                            <hr class = "endpage"/>
                            <p>Copyright &copy; 2021 FPT Wedding Service. Powered by me</p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;
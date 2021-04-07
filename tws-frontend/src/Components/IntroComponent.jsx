import React, { Component } from 'react'

export default class IntroComponent extends Component {
    render() {
        return (
            <div class="main">
                <hr/>
                <div class="container-fluid row">
                    
                    <div class="col-lg-3">
                        <div class="card intro-side-card">
                            <h5>DANH MỤC TRANG</h5>
                            <hr/>
                            <div class= "intro-side-card-content text-left">
                            <a href = "/search"><p>Tìm kiếm</p></a>
                            <a href = "/intro"><p>Giới thiệu</p></a>
                            </div>
                        </div>
                    
                        <div class="intro-side-img">
                            <img src="http://localhost:8080/api/tws/resource/images/side-intro" alt=""/>
                        </div>
                        
                    </div>

                    <div class="col-lg-9">
                        <div class="intro-content text-left">
                        <h3>FSOFT - 22 năm kinh nghiệm cưới hỏi tại toàn quốc</h3><br/>
                            <p>Phương Lan có hơn 07 Năm trang trí Cưới Hỏi tại Hạ Long từ A-Z:</p>

<p>+ Trang trí Nhà Bạt Đẹp Ăn hỏi – Thành Hôn ( Chỉ từ 3500k) với 10 tông màu nhà bạt (Các bạn xem thêm 9 tông màu khác tại Fanpage nhé)</p>

<p>+ Trang trí Tiệc Cưới nhà hàng ( Chỉ từ 10 triệu)</p>

<p>+ Xếp Mâm Ăn Hỏi Rồng Phượng sang trọng</p>

<p>+ Đội Bê Lễ ( 30 loại áo dài khác nhau)</p>

<p>+ Đội Quay Phim, Chụp Ảnh chuyên nghiệp của Ảnh Viện Phương Lan</p>

<p>Inbox hoặc Gọi ngay Phương Lan để được tư vấn gói Hợp lý nhất : 096 585 6863 ( A. Phương) – 01668 --409080 ( C. Thắm)</p>

<p>🏩Trụ sở: #CƯỚI_HỎI_PHƯƠNG_LAN, Số #26_GIẾNG_ĐỒN ( Sau lưng Nhà hàng HƯƠNG DUYÊN mới)</p>

<p>Lưu ý: Giếng Đồn có 2 số nhà 26, các bạn đến đúng nhà hàng Hương Duyên mới xây- màu trắng sẽ thấy Cưới hỏi Phương Lan.</p>

<p>(Còn rất nhiều Mẫu mã xem tại cửa hàng! xin mời các bạn đến chọn lựa sớm)</p>

<p>-----------------------------------</p>
                        </div>
                        <div class="intro-main-img">
                            <img src="http://localhost:8080/api/tws/resource/images/main-intro" alt=""/>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

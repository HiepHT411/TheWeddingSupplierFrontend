import React, { Component } from 'react';
import './style.css';

class CollectionsAll extends Component {
    render() {
        return (
            <div class="main">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Trang chủ</a></li>
                    <li class="breadcrumb-item"><a href="/collections/all">Danh mục</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Tất cả sản phẩm</li>
                    </ol>
                </nav>
                
                <div>
                    <img src ="http://localhost:8080/api/tws/resource/theme/1"></img>
                </div>
                <hr/>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-3 col-sm-12 col-xs-12">
                            <div className="box-sidebar block">
                                <div class="layered-content">
                                <ul class="tree-menu">	
								<li class="">
									<span></span>
									<a class="" href="/collections/hot-products" title="Sản phẩm nổi bật" target="_self">
										Sản phẩm nổi bật
									</a>
								</li>								
								<li class="">
									<span></span>
									<a class="" href="/collections/mam-an-hoi-rong-phuong" title="" target="_self">
										Xếp mâm ăn hỏi rồng phượng
									</a>
								</li>								
								<li class="active">
									<span></span>
									<a class=" current" href="/collections/be-le-chuyen-nghiep" title="Bê lễ chuyên nghiệp FPT" target="_self">
										Bê lễ chuyên nghiệp FPT
									</a>
								</li>
								<li class="">
									<span></span>
									<a class="" href="/collections/font-page" title="" target="_self">
										Trang trí hoa tươi/hoa lụa
									</a>
								</li>						
							    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-9 col-sm-12 col-xs-12">
                            <div class="wrap-collection-title row">
                                
						        <div class="heading-collection row">
							        <div class="col-md-8 col-sm-12 col-xs-12">
								        <h1 class="title">Tất cả sản phẩm</h1>
								        <div class="alert-no-filter"></div>		
							        </div>
							        <div class="col-md-4 hidden-sm hidden-xs">
								      <div class="option browse-tags">
									    <label class="lb-filter hide" for="sort-by">Sắp xếp theo:</label>
                                        <span class="custom-dropdown custom-dropdown--grey">
                                          <select class="sort-by custom-dropdown__select">                                   
											<option value="manual">Sản phẩm nổi bật</option>
											<option value="price-ascending" data-filter="&amp;sortby=(price:product=asc)">Giá: Tăng dần</option>
											<option value="price-descending" data-filter="&amp;sortby=(price:product=desc)">Giá: Giảm dần</option>
											<option value="title-ascending" data-filter="&amp;sortby=(title:product=asc)">Tên: A-Z</option>
											<option value="title-descending" data-filter="&amp;sortby=(price:product=desc)">Tên: Z-A</option>
											<option value="created-ascending" data-filter="&amp;sortby=(updated_at:product=desc)">Cũ nhất</option>
											<option value="created-descending" data-filter="&amp;sortby=(updated_at:product=asc)">Mới nhất</option>
											<option value="best-selling" data-filter="&amp;sortby=(sold_quantity:product=desc)">Bán chạy nhất</option>
											<option value="quantity-descending">Tồn kho: Giảm dần</option>
										  </select>
									    </span>
								      </div>
							        </div>
						        </div>



					        </div>
                        </div>
                    </div>



                </div>
            </div>
        );
    }
}

export default CollectionsAll;
import React, { Component } from 'react';
import './style.css';

class CollectionsSpecial extends Component {
    constructor(props){
        super(props)

        this.state={

        }
    }
    render() {
        return (
            <div class="main">
				<nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Trang chủ</a></li>
                    <li class="breadcrumb-item"><a href="/collections/all">Danh mục</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Xếp mâm ăn hỏi rồng phượng</li>
                    </ol>
                </nav>
                <div>
                    <img src="http://localhost:8080/api/tws/resource/theme/2"/>
                </div>
				<hr/>
                <div className="container-fluid">
                    <div class="row">
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="box-sidebar block">
                                <div class="layered-content">
                                <ul class="tree-menu">
								<li class="">
									<span></span>
									<a class="" href="/collections/all" title="Tất cả sản phẩm" target="_self">
										Tất cả sản phẩm
									</a>
								</li>	
								<li class="">
									<span></span>
									<a class="" href="/collections/hot-products" title="Sản phẩm nổi bật" target="_self">
										Sản phẩm nổi bật
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
								        <h1 class="title">Xếp Mâm Ăn Hỏi Rồng Phượng</h1>
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

                            <div class="row filter-here">
                                <div class="content-product-list product-list filter clearfix">
							        <div class="col-md-3 col-sm-6 col-xs-6 pro-loop col-4">
								        <div class="product-detail clearfix">
		                                    <div class="box-pro-detail">
			                                    <h3 class="pro-name">
				<a href="/products/nhan-ban-cua-doi-ngu-be-le-chuyen-nghiep-phuong-lan-ha-long-096-585-6863" title="Xếp Mâm Ăn Hỏi - Phương Lan ( Hạ Long) 096 585 6863" itemprop="name">
					Xếp Mâm Ăn Hỏi - Phương Lan ( Hạ Long) 096 585 6863
				</a>
			                                    </h3>
			                                    <div class="box-pro-prices">	
				<p class="pro-price " itemprop="priceCurrency">
					<span itemprop="price">12,000,000₫</span>	
				</p>
			                                    </div>
		                                    </div>
	                                    </div>
                                    </div>	
                                </div>
						    </div>				
						    <div class="sortpagibar pagi clearfix text-center">
							    <div id="pagination" class="clearfix">
	                            </div>
						    </div>
					    

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CollectionsSpecial;
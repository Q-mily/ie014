import './product-detail.scss';
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
const ProductDetail = (props) =>{
    const [product, setProduct] = useState({

    });
    return(
    <>
        <div className="container">
            <div className="row">
                <div className="col-7 mt-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex">
                                <div className="slider h-100 w-25" style={{backgroundColor:'tomato'}}>
                                    slider
                                </div>
                                <div className="h-100"  style={{width:'100%'}}>
                                    <img src="https://media-api-beta.thinkpro.vn/media/core/products/2023/3/14/in5630nt-cnb-00055rf110-sl.jpg" alt="" style={{width:'100%', height:'100%', objectFit:'contain'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mt-5">
                        <div className="card-body">
                            <h2 style={{fontSize:'1.6em'}}>Cấu hình đặc điểm</h2>
                            <div className="row" style={{ fontSize:'0.9em'}}>
                                <div className="col-6 mt-3">
                                    <p><strong>Bộ xử lý</strong></p>
                                    <p>
                                        <span>Loại CPU:</span>
                                        <span>Intel Core i5 1340P, 12C/16T</span>
                                    </p>
                                </div>
                                <div className="col-6 mt-3">
                                    <p><strong>Bộ xử lý</strong></p>
                                    <p>
                                        <span>Loại CPU:</span>
                                        <span>Intel Core i5 1340P, 12C/16T</span>
                                    </p>
                                </div>
                                <div className="col-6 mt-3">
                                    <p><strong>Bộ xử lý</strong></p>
                                    <p>
                                        <span>Loại CPU:</span>
                                        <span>Intel Core i5 1340P, 12C/16T</span>
                                    </p>
                                </div>
                                <div className="col-6 mt-3">
                                    <p><strong>Bộ xử lý</strong></p>
                                    <p>
                                        <span>Loại CPU:</span>
                                        <span>Intel Core i5 1340P, 12C/16T</span>
                                    </p>
                                </div>
                                <div className="col-6 mt-3">
                                    <p><strong>Bộ xử lý</strong></p>
                                    <p>
                                        <span>Loại CPU:</span>
                                        <span>Intel Core i5 1340P, 12C/16T</span>
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <h2 style={{fontSize:'1.6em'}}>Bảo hành đổi trả</h2>
                            <ul>
                                <li>Bảo hành <strong>12 tháng tại chuỗi cửa hàng</strong></li>
                                <li>Đổi mới trong 15 ngày đầu tiên</li>
                            </ul>
                            <hr />
                            <h2 style={{fontSize:'1.6em'}}>Bài viết mô tả</h2>
                            <p>abc xyz</p>

                        </div>
                    </div>
                </div>
                <div className="col-5 mt-3">
                    <div className="card">
                        <div className="card-body">
                            <p>SKU: Inspirion16563001NF</p>
                            <p><strong>Dell Inspiron 16 5630</strong></p>
                            <hr />
                            <div className="option-group">
                                <div className="option-item">
                                    <p>Phiên bản</p>
                                    <div className="row" style={{margin: '0'}}>
                                        <div className="col-3 alert alert-primary p-1">
                                        Intel Core i5 1340P, 12C/16T
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex">
                                <p style={{fontSize:'1.6em', color: 'red', fontWeight:'bold'}}>21.990.000</p>
                                <div className="spacer"></div>
                                <button className='btn btn-add-cart'>Thêm vào giỏ</button>
                                <button className="btn btn-danger" style={{marginLeft: '8px', fontWeight:'500'}}>Mua ngay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>    
    )
}

export default ProductDetail;
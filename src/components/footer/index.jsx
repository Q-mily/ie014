import './styles.scss';

const Footer = () =>{
    return(
        <footer className="footer">
            <div className="container d-flex align-items-center">
                <div className="row">
                    <div className="col-12 mt-4">
                        <img src="./logo-thinkpro.svg" alt="logo" style={{height: '30px'}}/>
                    </div>
                    <div className="col-12 mt-4">
                        <h3>Cần hỗ trợ thêm?</h3>
                        <p className="mb-3">Nhận tư vấn miễn phí từ chuyên gia</p>
                        <img src="https://inkythuatso.com/uploads/images/2021/10/logo-messenger-inkythuatso-2-01-30-15-47-51.jpg?gidzl=rjLSGvphocJOo5X2dF38PTR4M4A4g9zco94FHTRwoJERarCRqloIFfQL14-Ehf5dn9K6JsLy3QCGc-pEOG" alt="mess" className="rounded-circle img-fluid" style={{height: '50px'}}/>
                        <img src="https://classic.vn/wp-content/uploads/2022/07/zalo-icon.png" alt="zalo" className="rounded-circle img-fluid" style={{height: '50px', marginLeft: '20px'}}/>
                        <img src="https://inkythuatso.com/uploads/images/2021/11/logo-telegram-inkyhtuatso-3-01-30-11-25-40.jpg?gidzl=OPtbNjPEINXlWE5VrbLBTcU6vr781nfqUTEmLffLJ24gqUm8dbCNB2VNkrp20HHrTTUvN6M1u9aHqKbDVG" alt="zalo" className="rounded-circle img-fluid" style={{height: '50px', marginLeft: '20px'}}/>
                    </div>

                    <div className="col-12 mt-4">
                        <h3>Hệ thống cửa hàng</h3>
                        <div className="row">
                            <div className="col-3 alert alert-primary p-3" style={{fontSize:13, marginLeft:10}}>
                                <p><strong>Số 5 - 7 Nguyễn Huy Tưởng, Phường 6, Quận Bình Thạnh, Hồ Chí Minh</strong></p>
                                <p><a href="https://goo.gl/maps/3d8XF1wEscqqqnBb7">Chỉ đường</a></p>
                            </div>
                            <div className="col-3 alert alert-primary p-3" style={{fontSize:13, marginLeft:10}}>
                                <p><strong>95 Trần Thiện Chánh, F12, Q10, HCM</strong></p>
                                <p><a href="https://goo.gl/maps/VWkTEToumtxVSWxp6">Chỉ đường</a></p>
                            </div>
                            <div className="col-3 alert alert-primary p-3" style={{fontSize:13, marginLeft:10}}>
                                <p><strong>53 Thái Hà, Trung Liệt, Đống Đa, Hà Nội</strong></p>
                                <p><a href="https://goo.gl/maps/EsyMRcyhUAucZHBS9">Chỉ đường</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        <h3>Đa dạng thanh toán</h3>
                        <div className="row">
                            <div className="col-1 alert alert-secondary p-2" style={{fontSize:10, marginLeft:10}}>
                                <div className="navi">
                                    <i className="bi bi-phone-fill"></i>
                                    <span>Chuyển khoản</span>
                                </div>
                            </div> 
                            <div className="col-1 alert alert-secondary p-2" style={{fontSize:10, marginLeft:10}}>
                                <div className="navi">
                                    <i className="bi bi-cash"></i>
                                    <span>Tiền mặt</span>
                                </div>                           
                            </div> 
                            <div className="col-1 alert alert-secondary p-2" style={{fontSize:10, marginLeft:10}}>
                                <div className="navi">
                                    <i className="bi bi-wallet-fill"></i>
                                    <span>Ví điện tử</span>
                                </div>                           
                            </div> 
                            <div className="col-1 alert alert-secondary p-2" style={{fontSize:10, marginLeft:10}}>
                                <div className="navi">
                                    <i className="bi bi-credit-card-fill"></i>
                                    <span>Thẻ ATM</span>
                                </div>
                            </div> 
                            <div className="col-1 alert alert-secondary p-2" style={{fontSize:10, marginLeft:10}}>
                                <div className="navi">
                                    <i className="bi bi-credit-card-2-back-fill"></i>
                                    <span>Thẻ Quốc tế</span>
                                </div>
                            </div>
                        </div>     
                    </div>

                    <div className="col-12 mt-3">
                        <h3>ThinkPro trên social networks</h3>
                        <div className="row">
                            <div className="col-1 alert alert-secondary p-2" style={{fontSize:10, marginLeft:10}}>
                                <div className="navi">
                                    <i className="bi bi-facebook"></i>
                                    <span>Facebook</span>
                                </div>
                            </div> 
                            <div className="col-1 alert alert-secondary p-2" style={{fontSize:10, marginLeft:10}}>
                                <div className="navi">
                                    <i className="bi bi-youtube"></i>
                                    <span>Youtube</span>
                                </div>                            
                            </div> 
                            <div className="col-1 alert alert-secondary p-2" style={{fontSize:10, marginLeft:10}}>
                                <div className="navi">
                                    <i className="bi bi-tiktok"></i>
                                    <span>Tiktok</span>
                                </div>
                            </div> 
                            <div className="col-1 alert alert-secondary p-2" style={{fontSize:10, marginLeft:10}}>
                                <div className="navi">    
                                    <i className="bi bi-telegram"></i>
                                    <span>Telegram</span>
                                </div>
                            </div>
                        </div>     
                    </div>
                </div>
            </div>
        </footer> 
    )
}

export default Footer;
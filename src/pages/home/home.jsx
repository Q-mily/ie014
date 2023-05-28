import './styles.scss';

import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CategoryContext } from '../../context/category-context';

const Home = () =>{
    const [categories] = useContext(CategoryContext);
    return(
    <div className="wrapper">
        <section className="section-banner container">
            <div className="row">
                <div className="col-4 para">
                    <h1 style={{color: "white"}}>Giao diện mới, phục vụ bạn và người thân tốt hơn 💚💚💚</h1>
                    <p>Sau 6 tháng cải tiến, ThinkPro chính thức ra mắt phiên bản Website mới. Đội ngũ ThinkPro luôn tự hào với sứ mệnh trở thành thương hiệu bán lẻ Laptop và đồ công nghệ tốt cho bạn và người thân!</p>
                </div>
                <div className="col-8 img">
                    <img src="./section-banner.webp" alt="section-banner" style={{width: "100%", height: "100%"}}/>
                </div>
            </div>
        </section>
        <section className="section-category container mt-5">
            <h2>Danh mục</h2>
            <div className="card mt-3" style={{border: "none"}}>
                <div className="card-body" style={{height: '200px'}}>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                        type:""
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {categories.map(cate => (
                        <SwiperSlide key={cate.slug}>
                            <Link to={`/products?cate_slug=${cate.slug}`}>
                                <div className="cat-item" style={{margin: 'auto'}}>
                                    <img src={`https://images.thinkgroup.vn/unsafe/212x212/https://media-api-beta.thinkpro.vn/${cate.icon}`} alt="section-banner" />
                                    <p>{cate.name}</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
                </div>
            </div>
        </section>
        <section className='section-info container mt-5'>
            <div className="card" style={{border: 'none'}}>
                <div className="card-body">
                    <h2> <span>ThinkPro</span> <span style={{fontSize:'0.8em', color: 'rgba(107 ,112 ,117, 1)'}}>Là nơi để bạn và người thân tin tưởng lựa chọn</span></h2>
                    <div className="row mt-3 p-3">
                        <div className="col-3" style={{backgroundColor: 'rgb(245,253,255)'}}>
                            <i className='bi bi-info-circle-fill' style={{color: '#00D4FF', fontSize:'1.3em'}}></i>
                            <p className='mt-3' style={{fontWeight: '600'}}>Được trải nghiệm thực tế sản phẩm, lựa chọn đúng hơn.</p>
                            <p className='mt-2'>Không còn bọc nilon, hạn chế quyền được trải nghiệm trước mua hàng của người dùng.</p>
                        </div>
                        <div className="col-3" style={{backgroundColor: 'rgb(245,253,255)'}}>
                            <i className='bi bi-info-circle-fill' style={{color: '#00D4FF', fontSize:'1.3em'}}></i>
                            <p className='mt-3' style={{fontWeight: '600'}}>Bạn lo lắng khi không biết sản phẩm nào phù hợp? ThinkPro có đội ngũ tư vấn tận tâm và có chuyên môn.</p>
                            <p className='mt-2'>Giúp khách hàng lựa chọn sản phẩm đúng nhu cầu là trách nhiệm đầu tiên của Nhân viên tư vấn tại ThinkPro.</p>
                        </div>
                        <div className="col-3" style={{backgroundColor: 'rgb(245,253,255)'}}>
                            <i className='bi bi-info-circle-fill' style={{color: '#00D4FF', fontSize:'1.3em'}}></i>
                            <p className='mt-3' style={{fontWeight: '600'}}>Bạn gặp khó khi gặp lỗi hỏng, ThinkPro có Trung tâm bảo vệ quyền lợi khách hàng</p>
                            <p className='mt-2'>Để không bỏ sót bất kỳ một trải nghiệm không tốt nào của khách hàng, Ban Lãnh Đạo Tập đoàn có chuyên trang bảo vệ quyền lợi khách hàng.</p>
                        </div>
                        <div className="col-3" style={{backgroundColor: 'rgb(245,253,255)'}}>
                            <i className='bi bi-info-circle-fill' style={{color: '#00D4FF', fontSize:'1.3em'}}></i>
                            <p className='mt-3' style={{fontWeight: '600'}}>Bạn bận, ThinkPro phục vụ từ sáng tới khuya.</p>
                            <p className='mt-2'>Khách hàng bận bịu. Cán bộ, nhân viên ThinkPro càng phải phục vụ ngoài giờ để trải nghiệm của khách hàng được thông suốt.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Home;
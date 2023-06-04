import "./product-detail.scss";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import http from "../../utils/request";
import Counter from "./counter";
const ProductDetail = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    SKU: "",
    assets: [
      {
        src: "",
        alt: "alt",
      },
    ],
    article: {
      title: "",
      description: "",
      content: "",
    },
    model: {
      name: "",
      slug: "",
      price: "",
    },
    attributes: [
      {
        groupName: '',
        items: []
      }
    ]
  });
  const [imageSelected, setImageSelected] = useState(null);
  useEffect(() => {
    http.get(`/products/details?skuId=${id}`).then((res) => {
      setProduct(res.data);
      setImageSelected(res.data.assets[0].src);
    });
  }, []);
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-7">
            <div className="card">
              <div className="card-body">
                <div className="" style={{ width: "50vw", height: "60vh" }}>
                  <img
                    src={`https://media-api-beta.thinkpro.vn/${imageSelected}`}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <hr />
                <Swiper
                  slidesPerView={6}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                    type: "ver",
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                >
                  {product.assets.map((image) => (
                    <SwiperSlide
                      key={image.src}
                      onClick={() => setImageSelected(image.src)}
                    >
                      <div
                        className={
                          image.src == imageSelected ? "img-selected" : ""
                        }
                      >
                        <img
                          src={`https://images.thinkgroup.vn/unsafe/212x212/https://media-api-beta.thinkpro.vn/${image.src}`}
                          alt="section-banner"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="col-5">
          <div className="card">
              <div className="card-body">
                <p>SKU: {product.SKU}</p>
                <p>
                  <strong>{product.model.name}</strong>
                </p>
                <hr />
                <div className="counter">
                  <p>Số lượng: </p>
                  <div className="d-flex">
                    <Counter />
                  </div>
                </div>
                <hr />
                <div className="d-flex">
                  <p
                    style={{
                      fontSize: "1.6em",
                      color: "red",
                      fontWeight: "bold",
                    }}
                  >
                    {product.model.price.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </p>
                  <div className="spacer"></div>
                  <button className="btn btn-add-cart">Thêm vào giỏ</button>
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "8px", fontWeight: "500" }}
                  >
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card mt-5">
            <div className="card-body">
              <h2 style={{ fontSize: "1.6em" }}>Cấu hình đặc điểm</h2>
              <div className="row" style={{ fontSize: "0.9em" }}>
                {product.attributes.map(attribute =>(
                  <div className="col-6 mt-3" key={attribute.groupName}>
                    <p>
                      <strong>{attribute.groupName}</strong>
                    </p>
                    {
                      attribute.items.map(item => (
                        <p>
                          <span>{item.label}</span> : <span> {item.value}</span>
                        </p>
                      )) 
                    }
                  </div>
                ))}
              </div>
              <hr />
              <h2 style={{ fontSize: "1.6em" }}>Bảo hành đổi trả</h2>
              <ul>
                <li>
                  Bảo hành <strong>12 tháng tại chuỗi cửa hàng</strong>
                </li>
                <li>Đổi mới trong 15 ngày đầu tiên</li>
              </ul>
              <hr />
              <h2 style={{ fontSize: "1.6em" }}>Bài viết mô tả</h2>
              {
                product.article ? (
                  <section className="section-article">
                    <h1>{product.article.title}</h1>
                    <p>{product.article.description}</p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: product.article.content,
                      }}
                    />
                  </section>
                ) : '-- chưa có mô tả --'
              }
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

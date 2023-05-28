import './product-list.scss';
import logo from '../../logo.svg';
import { useState } from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import { useEffect } from 'react';
import { getProductList } from '../../mockup/mockup';
const ProductList = (props) =>{
    console.log('rendered');
    const [searchParams] = useSearchParams();
    const cate_slug = searchParams.get('cate_slug');
    const [datas, setDatas] = useState({
        items: [
            {   
              "_id": "646a4550d84afb72dd203fad",
              "skuId": 6692,
              "productId": 2363,
              "categoryId": 1,
              "sharedUrl": "laptop/lenovo-thinkpad-x1-carbon-gen-11-6692",
              "slug": "lenovo-thinkpad-x1-carbon-gen-11-sample-edition",
              "image": "media/core/products/2022/12/23/lenovo-thinkpad-x1-carbon-gen-11-thinkpro-01.png",
              "name": "Lenovo ThinkPad X1 Carbon Gen 11",
              "colors": [
                {
                  "name": "Black",
                  "code": "#000000"
                }
              ],
              "price": 47990000,
              "modelValues": [
                "i7 1360P, 2.2K\n16GB, 1TB",
                "Black",
                "Outlet, Nhập khẩu"
              ],
              "brand": {
                "id": 170,
                "description": "ThinkPad là thương hiệu Laptop Business tới từ Lenovo. Thinkpad nổi tiếng với chất liệu cao cấp, hiệu năng ổn định và bàn phím được đánh giá tốt nhất ngành công nghiệp laptop.",
                "icon": "media/core/brands/2023/3/17/logo-lenovo-thinkpro-01.png",
                "name": "ThinkPad",
                "sharedUrl": "laptop-lenovo-thinkpad",
                "slug": "laptop-lenovo-thinkpad",
                "parentId": 4
              },
              "__v": 0
            },
            {
              "_id": "646a4550d84afb72dd203fae",
              "skuId": 6485,
              "productId": 2486,
              "categoryId": 1,
              "sharedUrl": "laptop/dell-inspiron-16-5630-6485",
              "slug": "dell-inspiron-16-5630-inspirion16563001nf",
              "image": "media/core/products/2023/3/9/in5630nt-cnb-00000ff090-sl.jpg",
              "name": "Dell Inspiron 16 5630",
              "colors": [
                {
                  "name": "Plantium Silver",
                  "code": "#c0c0c0"
                }
              ],
              "price": 21490000,
              "modelValues": [
                "i5 1340P, QHD+\n16GB, 512GB",
                "Plantium Silver",
                "Mới, Full box, Nhập khẩu"
              ],
              "brand": {
                "id": 418,
                "description": "Dell Inspiron 16 là dòng máy phổ thông, giá thành phải chăng nhưng vẫn đảm bảo được độ ổn định, hiệu suất bền bỉ cho học tập và làm việc. Sản phẩm dòng này luôn có được độ cứng cáp và chắc chắn nhất định về chất lượng hoàn thiện, đi kèm với đó là màn hình rộng rãi, cấu hình mạnh mẽ để xử lý các tác vụ chuyên biệt",
                "icon": "media/core/brands/2023/4/5/logo-dell-thinkpro-10.png",
                "name": "Inspiron 16",
                "sharedUrl": "laptop-dell-inspiron-16",
                "slug": "laptop-dell-inspiron-16",
                "parentId": 312
              },
              "__v": 0
            },
            {
              "_id": "646a4550d84afb72dd203faf",
              "skuId": 6309,
              "productId": 2484,
              "categoryId": 1,
              "sharedUrl": "laptop/dell-inspiron-14-5430-6309",
              "slug": "dell-inspiron-14-5430-inspirion14543001ns",
              "image": "media/core/products/2023/3/9/in5430nt-cnb-00000ff090-sl-2pc.jpg",
              "name": "Dell Inspiron 14 5430",
              "colors": [
                {
                  "name": "Platinum Silver",
                  "code": "#c0c0c0"
                }
              ],
              "price": 21990000,
              "modelValues": [
                "i5 1340P, QHD+\n16GB, 512GB",
                "Platinum Silver",
                "Mới, Sealed, Nhập khẩu"
              ],
              "brand": {
                "id": 416,
                "description": "Dell Inspiron 14 là dòng máy phổ thông, giá thành phải chăng nhưng vẫn đảm bảo được độ ổn định, hiệu suất bền bỉ cho học tập và làm việc. Sản phẩm dòng này luôn có được độ cứng cáp và chắc chắn nhất định về chất lượng hoàn thiện, đi kèm với đó là màn hình rộng rãi, cấu hình mạnh mẽ để xử lý các tác vụ chuyên biệt",
                "icon": "media/core/brands/2023/4/5/logo-dell-thinkpro-10.png",
                "name": "Inspiron 14",
                "sharedUrl": "laptop-dell-inspiron-14",
                "slug": "laptop-dell-inspiron-14",
                "parentId": 312
              },
              "__v": 0
            },
            {
              "_id": "646a4550d84afb72dd203fb0",
              "skuId": 6308,
              "productId": 2483,
              "categoryId": 1,
              "sharedUrl": "laptop/dell-inspiron-13-5330-6308",
              "slug": "dell-inspiron-13-5330-inspiron13553001ns",
              "image": "media/core/products/2023/3/22/dell-inspiron-5330-thinkpro-1.png",
              "name": "Dell Inspiron 13 5330",
              "colors": [
                {
                  "name": "Platium Silver",
                  "code": "#ECECEC"
                }
              ],
              "price": 21990000,
              "modelValues": [
                "i5 1340P, QHD+\n16GB, 512GB",
                "Platium Silver",
                "Mới, Sealed, Nhập khẩu"
              ],
              "brand": {
                "id": 415,
                "description": "Dell Inspiron 13 là dòng máy phổ thông, giá thành phải chăng nhưng vẫn đảm bảo được độ ổn định, hiệu suất bền bỉ cho học tập và làm việc. Sản phẩm dòng này luôn có được độ cứng cáp và chắc chắn nhất định về chất lượng hoàn thiện, đi kèm với đó là màn hình rộng rãi, cấu hình mạnh mẽ để xử lý các tác vụ chuyên biệt",
                "icon": "media/core/brands/2023/4/5/logo-dell-thinkpro-10.png",
                "name": "Inspiron 13",
                "sharedUrl": "laptop-dell-inspiron-13",
                "slug": "laptop-dell-inspiron-13",
                "parentId": 312
              },
              "__v": 0
            },
            {
              "_id": "646a4550d84afb72dd203fb1",
              "skuId": 6662,
              "productId": 2509,
              "categoryId": 1,
              "sharedUrl": "laptop/lenovo-thinkbook-16-g5-6662",
              "slug": "lenovo-thinkbook-16-g5-thinkbook16g501nf",
              "image": "media/core/products/2023/4/18/lenovo-thinkbook-16-g5-01-thinkpro-Woa.png",
              "name": "Lenovo ThinkBook 16 G5+",
              "colors": [
                {
                  "name": "Storm Grey",
                  "code": "#666666"
                }
              ],
              "price": 24390000,
              "modelValues": [
                "R7 7735H, 2.5K\n16GB, 512GB",
                "Storm Grey",
                "Mới, Full box, Nhập khẩu"
              ],
              "brand": {
                "id": 450,
                "description": "Sở hữu thiết kế thanh lịch, tối giản cùng kiểu dáng đơn giản mà hiện đại, laptop Lenovo ThinkBook 16 luôn đảm bảo được sự trau chuốt trên từng đường nét. Đi kèm với đó là tổ hợp cấu hình mạnh mẽ, bộ vi xử lý tân tiến nhất, thời lượng pin ấn tượng mang đến cho người dùng sự linh hoạt về thiết kế và mượt mà về hiệu năng",
                "icon": "media/core/brands/2023/4/6/logo-lenovo-thinkpro-10.png",
                "name": "ThinkBook 16",
                "sharedUrl": "laptop-lenovo-thinkbook-16",
                "slug": "laptop-lenovo-thinkbook-16",
                "parentId": 318
              },
              "__v": 0
            }
        ],
        total: 20,
        page: 1,
        limit: 5
    });
    const [overview, setOverview] = useState({
        name: 'Null',
        description: '',
        brands: [
            {
                "_id": "646a4550d84afb72dd203eab",
                "id": 1,
                "description": "Dell là thương hiệu nổi tiếng khi sở hữu nhiều sản phẩm laptop, phụ kiện, PC chất lượng cao với mức giá rất phải chăng. Các dòng laptop nổi bật và được ưa chuộng như Dell XPS, Dell Inspiron, Dell Vostro, Dell Latitude, Dell Alienware, Dell Gaming trải dài tới nhiều phân khúc khác nhau, dễ dàng lựa chọn và sử dụng",
                "icon": "backend/uploads/brand/icon/2020/8/7/dell.png",
                "name": "Dell",
                "sharedUrl": "laptop-dell",
                "slug": "dell",
                "parentId": null,
                "__v": 0
            },
            {
                "_id": "646a4550d84afb72dd203eae",
                "id": 11,
                "description": "Acer là thương hiệu công nghệ nổi tiếng của Đài Loan được nhiều người tin dùng bởi những công nghệ thông minh. Acer đã tiếp cận thị trường Việt Nam với sản phẩm máy tính cá nhân vào năm 1996. Bên cạnh sản phẩm máy tính xách tay,  Acer còn sản xuất đồng hồ thông minh, máy tính bảng, màn hình và bàn phím,...",
                "icon": "backend/uploads/brand/icon/2020/8/7/acer.png",
                "name": "Acer",
                "sharedUrl": "laptop-acer",
                "slug": "acer",
                "parentId": null,
                "__v": 0
            },
        ]
    })
    const [filter, setFilter] = useState({
        brand_ids: [],
        price_from: undefined,
        price_to: undefined
    })
    useEffect(() =>{
        const data_fetched = getProductList(cate_slug)
        setOverview({
            name: data_fetched.data.name,
            description: data_fetched.data.description,
            brands: data_fetched.data.brands
        })
    }, [cate_slug])


    const clickBrand = (id) => {
        const index = filter.brand_ids.indexOf(id);
        console.log('index: ' + index)
        if (index > -1){
            setFilter({
                ...filter,
                brand_ids: filter.brand_ids.filter(brand_id => brand_id !== id)
            })
            return;
        }else{
            setFilter({
                ...filter,
                brand_ids: [...filter.brand_ids, id]
            })
            return;
        }
    }
    console.log(filter.brand_ids)
    return(
    <>
        <div className="container">
            <div className="card" style={{border: 'none'}}>
                <div className="card-body">
                    <h1 style={{fontSize: 24}}>{overview.name}</h1>
                    <div className="row">
                        <div className="col-6">
                            <p style={{fontSize: 14}}>{overview.description}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex">
                        <button className="btn btn-secondary">Apple</button>
                        <button className="btn btn-secondary">Lenovo</button>
                        <button className="btn btn-secondary">Dell</button>
                        <button className="btn btn-secondary">Asus</button>
                        <button className="btn btn-secondary">HP</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="Brand">
                                <h3>THƯƠNG HIỆU</h3>
                                {
                                    overview.brands.map(item =>(
                                        <div className="form-check" key={item.slug}>
                                            <input className="form-check-input" type="checkbox" value="" id={`${item.name}`} onClick={()=>clickBrand(item.id)}/>
                                            <label className="form-check-label" htmlFor={`${item.name}`}>
                                                {item.name}
                                            </label>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="Price mt-3">
                                <h3>Khoảng giá</h3>
                                <div className="form-group">
                                    <label htmlFor=""> Price</label>
                                    <select className='form-control form-select'>
                                        <option>Tất cả</option>
                                        <option>0đ - 2.000.000đ</option>
                                        <option>2.000.000đ - 5.000.000đ</option>
                                        <option>5.000.000đ - 10.000.000đ</option>
                                    </select>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="row gx-1">
                        {datas.items.map(item => (
                            <Link className="col-3" to={`/products/${item.skuId}`} key={`${item.slug}`}>                  
                                <div className="card">
                                    <img className="card-img-top" src={`https://images.thinkgroup.vn/unsafe/212x212/https://media-api-beta.thinkpro.vn/${item.image}`} alt="" />
                                    <div className="card-body">
                                        <p><strong>{item.name}</strong></p>
                                        <p style={{color: 'red'}}>{item.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default ProductList;
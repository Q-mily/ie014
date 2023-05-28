import './styles.scss';
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { CategoryContext } from '../../context/category-context';
const Header = () =>{
    const [categories] = useContext(CategoryContext);
    return(
        <header className='header'>
            <div className="container d-flex align-items-center h-100">
                <img src="./logo-thinkpro.svg" alt="logo" style={{height: '40px'}}/>
                <div className="search">
                    <input className="form-control" type="text" placeholder='Tên sản phẩm, nhu cầu, hàng' />
                </div>
                <nav className='nav'>
                    <Link to={"/home"}>
                        <div className="nav-item">
                            <i className="bi bi-house-door-fill"></i>
                            <span>Trang chủ</span>
                        </div>
                    </Link>
                    <div className="dropdown">
                        <div className="nav-item" data-bs-toggle="dropdown">
                            <i className="bi bi-list"></i>
                            <span>Danh mục</span>
                        </div>
                        <ul className="dropdown-menu">
                            {
                                categories.map((cate) => (
                                    <li key={cate.slug}><Link to="/products?cate_slug=laptop" className="dropdown-item">{cate.name}</Link></li>
                                ))
                            }
                        </ul>
                    </div>
                    <Link to={"/about"}>
                        <div className="nav-item">
                            <i className="bi bi-info-circle-fill"></i>
                            <span>Về chúng tôi</span>
                        </div>
                    </Link>
                </nav>
                <div className="spacer"></div>
                <Link to={'/register'}>
                    <div className="nav-item">
                        <span>Đăng ký</span>
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default Header;
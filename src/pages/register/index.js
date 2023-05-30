import './styles.scss';

const Register = () =>{
    return(
    <>
        <div className="container">
            <div className="bg-body rounded p-3">
                <h1>ĐĂNG KÝ TÀI KHOẢN</h1>
                <div className="my-4">
                    <p>Nếu chưa có tài khoản vui lòng đăng ký tại đây!</p>
                </div>
                <form className="row">
                    <div className="col-md-6">
                        <label for="inputFirstname" className="form-label">Họ</label>
                        <input type="text" className="form-control" id="inputFirstname" required></input>
                    </div>
                    <div className="col-md-6">
                        <label for="inputLastname" className="form-label">Tên</label>
                        <input type="text" className="form-control" id="inputLastName" required></input>
                    </div>
                    <div className="col-md-6">
                        <label for="inputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail" required></input>
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword" className="form-label">Mật khẩu</label>
                        <input type="password" className="form-control" id="inputPassword" required></input>
                    </div>
                    <div className="col-12 mt-4">
                        <button class="btn btn-success" type="submit">Đăng ký</button>
                    </div>
                </form>
            </div>
        </div>
    </>)
}
export default Register;
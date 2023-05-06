const Register = () =>{
    return(
    <>
        <h1>ĐĂNG KÝ TÀI KHOẢN</h1>
        <p>Nếu chưa có tài khoản vui lòng đăng ký tại đây!</p>
        <form id="register-form">
            <div className='flex1'>
                <label for="first-name">Họ*
                    <br></br>
                         <input
                            type="text"
                            id="first-name"
                            name="first-name"
                            size="50"
                            required
                        />
                </label>
                    
                <label for="last-name">Tên*
                    <br></br>
                        <input
                            type="text"
                            id="last-name"
                            name="last-name"
                            size="50"
                            required
                        />
                    </label>
             </div>
                    <label for="email">Email*
                    <br></br>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            size="50"
                            required
                            />
                    </label>
                    
                    <label for="password">Mật khẩu*
                    <br></br>
                            <input
                            type="password"
                            id="password"
                            name="password"
                            size="50"
                            required
                            />
                    </label>
                   
                <div className='flex1'>
                    <input type="submit" value="Đăng ký"/>
                    <a href="login.html">Đăng nhập</a>
                </div>
        </form>  
    </>)
}
/*
document.getElementById('register-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '') {
            alert('Vui lòng điền đầy đủ thông tin đăng ký');
            return;
        }
        if (!validateEmail(email)) {
            alert('Vui lòng nhập email hợp lệ');
            return;
        }
        if (!validatePassword(password)) {
            alert('Mật khẩu phải có ít nhất 8 ký tự');
            return;
        }
        
        register(firstName, lastName, email, password);
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        return password.length >= 8;
    }

    function register(firstName, lastName, email, password) {
        
        alert('Bạn đã đăng ký thành công');
    }
*/
export default Register;

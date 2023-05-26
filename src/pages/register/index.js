import './styles.scss';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Register = () =>{
    return(
    <>
        <h1>ĐĂNG KÝ TÀI KHOẢN</h1>
        <Form>
        
            <Row className="mb-3">
            <p>Nếu chưa có tài khoản vui lòng đăng ký tại đây!</p>
            </Row>

            <Row className="mb-2">
                <Col sm={5} className="my-1">
                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label>Họ*</Form.Label>
                        <Form.Control type="text" placeholder="Hãy nhập họ"/>
                    </Form.Group>
                </Col>
                <Col sm={5} className="my-1">
                    <Form.Group as={Col} controlId="formBasicLastName">
                        <Form.Label>Tên*</Form.Label>
                        <Form.Control type="text" placeholder="Hãy nhập tên"/>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-2">
                <Col sm={5} className="my-1">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email*</Form.Label>
                        <Form.Control type="email" placeholder="Hãy nhập email"/>
                    </Form.Group>
                </Col>
                <Col sm={5} className="my-1">
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Mật khẩu*</Form.Label>
                        <Form.Control type="password" placeholder="Hãy nhập mật khẩu"/>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col>
                    <Button variant="primary" type="submit">Đăng ký</Button>
                </Col>
                <Col xs={11} className="my-2">
                    <a href="login.html">Đăng nhập</a>
                </Col>
            </Row>
        </Form>
    </>)
}
export default Register;

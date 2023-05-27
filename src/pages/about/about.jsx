import { Container, Row, Col, Figure } from 'react-bootstrap'
import './styles.scss'
const About = () =>{
    return(
    <>
        <Container className="container">
            <Row className='my-3'>
                <Col>
                    <h1>Về chúng tôi - ThinkPro</h1>
                    <p><i>ThinkPro là đơn vị tiên phong thay đổi mô hình bán lẻ và trải nghiệm công nghệ tại Việt Nam.</i></p>
                    <p>Được thành lập từ năm 2013 bởi những chàng trai 9x đầy nhiệt huyết và đam mê công nghệ, với xuất phát điểm là số vốn ít ỏi 8,5 triệu đồng cho một cửa hàng laptop nhỏ trên đường Láng (Hà Nội), cho đến nay ThinkGroup (tên đăng ký: Công ty TNHH Công Nghệ Think Việt Nam) đã phát triển và vận hành nhiều cửa hàng lớn nhỏ bán lẻ máy tính và phụ kiện công nghệ trên hai miền đất nước dưới thương hiệu ThinkPro, trở thành đơn vị tiên phong trong việc thay đổi mô hình bán lẻ và trải nghiệm công nghệ tại Việt Nam với chuỗi cửa hàng tiêu chuẩn mới - Dạo Bước Công Nghệ.</p>
                    <Figure>
                        <Figure.Image src="https://images.thinkgroup.vn/unsafe/1600x900/https://media-api-beta.thinkpro.vn/media/social/articles/2022/3/7/dao-buoc-cong-nghe-2.jpeg" alt="image1" className="image" height={350} width={720}/>
                        <Figure.Caption>Showroom Dạo Bước Công Nghệ ThinkPro</Figure.Caption>
                    </Figure>
                    <p>Song song bên cạnh hệ thống bán lẻ máy tính và phụ kiện, ThinkGroup còn phát triển thương hiệu Alpha Media – giải pháp truyền thông toàn diện trong lĩnh vực công nghệ và giải trí bao gồm các kênh youtube ThinkView, The Reviewer, Người tối cổ, Điểm 10 ngữ văn,... cộng đồng yêu công nghệ ThinkView & Friends, trang tin tức công nghệ 
                    <a href="https://thinkview.vn/" className='link'> Thinkview.vn</a>,... mang đến thông tin hữu ích và chuyên sâu về công nghệ và giải trí cho người dùng trên đa nền tảng, đồng thời là đối tác truyền thông tin cậy của nhiều nhãn hàng và đơn vị phân phối sản phẩm tại Việt Nam.</p>
                </Col>
            </Row>
            <Row className='my-3'>
                <Col>
                    <h2>Tầm Nhìn</h2>
                    <p>Với hơn 100 thành viên (tiếp tục mở rộng) tại Hà Nội, Sài Gòn và 200% tăng trưởng doanh thu trong suốt 3 năm liên tiếp, ThinkGroup tự tin thực hiện tầm nhìn 2025 trở thành Top 5 nhà cung cấp máy tính tại thị trường Việt Nam.</p>
                    <Figure>
                        <Figure.Image src="https://images.thinkgroup.vn/unsafe/1600x900/https://media-api-beta.thinkpro.vn/media/social/articles/2022/3/7/ve-chung-toi-thinkpro-1.png" alt="image2" className="image" height={350} width={720}/>
                        <Figure.Caption>Tầm nhìn của ThinkPro</Figure.Caption>
                    </Figure>                
                </Col>
            </Row>
            <Row className='my-3'>
                <Col>
                    <h2>Sứ Mệnh</h2>
                    <p>ThinkPro với sứ mệnh mang lại những giá trị tốt đẹp, luôn lấy khách hàng làm trung tâm, bằng kiến thức chuyên môn, sự chân thành và nhiệt huyết của tuổi trẻ, đồng thời ứng dụng công nghệ số để tối ưu và linh hoạt, mang lại trải nghiệm tốt nhất dành cho khách hàng qua từng dịch vụ mà công ty cung cấp.</p>
                    <Figure>
                        <Figure.Image src="https://images.thinkgroup.vn/unsafe/1600x900/https://media-api-beta.thinkpro.vn/media/social/articles/2022/3/7/lang%20nghe%205.jpeg" alt="image3" className="image" height={350} width={720}/>
                        <Figure.Caption>Sứ mệnh ThinkPro</Figure.Caption>
                    </Figure>  
                </Col>
            </Row>
            <Row className='my-3'>
                <Col>
                    <h2>Giá Trị Cốt Lõi</h2>
                    <p>Chuyên môn - Chân thành - Linh hoạt là những Giá trị cốt lõi mà ThinkPro sử dụng trong quá trình hình thành và phát triển:</p>
                    <Figure>
                        <Figure.Image src="https://images.thinkgroup.vn/unsafe/1600x900/https://media-api-beta.thinkpro.vn/media/social/articles/2022/3/7/lang%20nghe%20kh%20thipj.jpeg" alt="image4" className="image" height={350} width={720}/>
                        <Figure.Caption>Giá trị cốt lõi ThinkPro</Figure.Caption>
                    </Figure> 
                    <p><b>Chân thành</b>: ThinkPro luôn phục vụ khách hàng bằng tất cả sự chân thành và tin cậy.</p>
                    <p><b>Chuyên môn</b>: ThinkPro luôn sẵn sàng phục vụ quý khách hàng với đội ngũ chuyên viên tư vấn có chuyên môn, được đào tạo bài bản, có kiến chuyên sâu về sản phẩm, thấu hiểu nhu cầu của khách hàng.</p> 
                    <p><b>Linh hoạt</b>: Linh hoạt là giá trị quan trọng mà ThinkPro mang đến để vận hành và phục vụ khách hàng tốt nhất trong bối cảnh xã hội liên tục vận động hiện nay.</p>
                     <p>---------------------------</p>
                    <p>ThinkPro là hệ thống bán lẻ máy tính và phụ kiện uy tín tại Việt Nam với chuỗi cửa hàng trải nghiệm độc đáo và đội ngũ tư vấn chuyên sâu, hình thức thanh toán đa dạng và bảo hành uy tín, tin cậy giúp khách hàng tự tin lựa chọn các sản phẩm công nghệ phù hợp nhất.</p>
                </Col>
            </Row>
        </Container>
    </>
    )
}
export default About

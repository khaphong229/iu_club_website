import { PhoneOutlined, MailOutlined, GlobalOutlined } from "@ant-design/icons"; // Import các icon từ Ant Design
import "./Footer.css"; // Import CSS

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        {/* Cột liên hệ */}
        <div className="footer-column contact-info">
          <h2 className="footer-brand">
            <GlobalOutlined style={{ marginRight: "10px" }} /> IUC
          </h2>
          <ul>
            <li>
              <PhoneOutlined style={{ marginRight: "10px" }} /> 097 467 8647
            </li>
            <li>
              <MailOutlined style={{ marginRight: "10px" }} />{" "}
              anhpd.ptit@gmail.com
            </li>
            <li>
              <GlobalOutlined style={{ marginRight: "10px" }} /> proptit.com
            </li>
          </ul>
        </div>

        {/* Các cột khác */}
        <div className="footer-column">
          <h3>VỀ CHÚNG TÔI</h3>
          <ul>
            <li>
              <a href="#">Sự kiện nổi bật</a>
            </li>
            <li>
              <a href="#">Video giới thiệu</a>
            </li>
            <li>
              <a href="#">Q & A</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>TRANG CHỦ</h3>
          <ul>
            <li>
              <a href="#">Giới thiệu</a>
            </li>
            <li>
              <a href="#">Hoạt động</a>
            </li>
            <li>
              <a href="#">Giải thưởng</a>
            </li>
            <li>
              <a href="#">Team dự án</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>TRANG KHÁC</h3>
          <ul>
            <li>
              <a href="#">Trang chủ</a>
            </li>
            <li>
              <a href="#">Đào tạo</a>
            </li>
            <li>
              <a href="#">Sự kiện</a>
            </li>
            <li>
              <a href="#">Phòng truyền thông</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Phần bản quyền */}
      <div className="footer-bottom">
        <p>&copy;2024 | Design by AnhPD D23</p>
        <div className="social-links">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

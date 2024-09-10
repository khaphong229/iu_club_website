
import "./footer.css"; // Import CSS

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        {/* Cột liên hệ */}
        <div className="footer-column contact-info">
          <h2 className="footer-brand">
            <i className="bi bi-suit-heart-fill"></i>IU CLUB
          </h2>
          <ul>
            <li>
              <i className="bi bi-telephone"></i>19001222
            </li>
            <li>
              <i className="bi bi-mailbox"></i>iuclub.ptit@dev.com
            </li>
            <li>
              <i className="bi bi-globe"></i>iuclub.com
            </li>
          </ul>
        </div>

        {/* Các cột khác */}
        <div className="footer-column">
          <h3>VỀ CHÚNG TÔI</h3>
          <ul>
            <li>
              <a href="#">Fanpage</a>
            </li>
            <li>
              <a href="#">Video giới thiệu</a>
            </li>
            <li>
              <a href="#">Q&A</a>
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
              <a href="#">Thành viên</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Phần bản quyền */}
      <div className="footer-bottom">
        <p>&copy;2024 | Design by WEB TEAM GEN 1</p>
        <div className="social-links">
          <a href="#">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#">
            <i className="bi bi-youtube"></i>
          </a>
          <a href="#">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

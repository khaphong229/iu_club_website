import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h2 className="footer-brand tex-primary fw-bold text-primary">
              <i className="bi bi-suit-heart-fill me-2"></i>IU CLUB
            </h2>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-telephone me-2"></i>19001222
              </li>
              <li className="mb-2">
                <i className="bi bi-mailbox me-2"></i>iuclub.ptit@dev.com
              </li>
              <li>
                <i className="bi bi-globe me-2"></i>iuclub.com
              </li>
            </ul>
          </div>

          {/* Các cột khác */}
          <div className="col-md-3 mb-4">
            <h4 className="fw-semibold">VỀ CHÚNG TÔI</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-dark text-decoration-none">
                  Fanpage
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-dark text-decoration-none">
                  Video giới thiệu
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Q&A
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h4 className="fw-semibold">TRANG CHỦ</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-dark text-decoration-none">
                  Giới thiệu
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-dark text-decoration-none">
                  Hoạt động
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-dark text-decoration-none">
                  Giải thưởng
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Team dự án
                </a>
              </li>
            </ul>
          </div>
          {/* Cột liên hệ */}

          <div className="col-md-3 mb-4">
            <h4 className="fw-semibold">TRANG KHÁC</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-dark text-decoration-none">
                  Trang chủ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-dark text-decoration-none">
                  Đào tạo
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-dark text-decoration-none">
                  Sự kiện
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Thành viên
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Phần bản quyền */}
      <div className="text-center pt-4 border-top mt-4">
        <p>&copy;2024 | Design by WEB TEAM GEN 1</p>
        <div className="d-flex justify-content-center social-link">
          <a href="#" className="text-dark me-3">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-dark me-3">
            <i className="bi bi-youtube"></i>
          </a>
          <a href="#" className="text-dark">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

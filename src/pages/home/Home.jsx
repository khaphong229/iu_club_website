import image from "../../../public/images/c++ bg.jpg";
import "./Home.css";
const HomePage = () => {
  return (
    <>
      <div className="header-slider container">
        <div className="row">
          <div className="header-slider__title fs-1 fw-bold my-3 my-md-5 col-12 col-md-6">Tuyển thành viên gen 2</div>
          <div className="header-slider__description col-12 col-md-6 my-md-4">
            <div className="header-detail__text lh-base">
              CLB IUC PTIT mở đơn tuyển thành viên năm 2024.
              <br />
              <strong>Đối tượng:</strong> Sinh viên các ngành Cử nhân Công nghệ thông tin Định hướng ứng dụng và các bạn trẻ có đam mê với lập trình.
              <br />
              <strong>Thời gian ứng tuyển: 03/09/2024 - 29/09/2024</strong>
            </div>
            <div className="header-detail__button d-flex justify-content-center gap-5 my-4">
              <button className="px-3 py-2 rounded-pill">Đăng ký ngay</button>
              <button className="px-3 py-2 rounded-pill">Xem thêm</button>
            </div>
          </div>
          <div id="carouselExampleIndicators" className="carousel slide col-12">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={image} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={image} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={image} className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;

import React, { useEffect, useState } from "react";
import './styles.css'

function Slider() {
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    const loadImage = () => {
      const imageNames = ["6.jpg", "1.jpg", "7.jpg", "8.jpg"];
      const urls = imageNames.map(
        (imageName) => `/images/activities/${imageName}`
      );
      setImageURLs(urls);
    };

    loadImage();
  }, []);
  return (
    <>
      <div className="header-slider container mb-5 ">
        <div className="row">
          <div className="header-slider__title fs-1 fw-bold my-3 my-md-5 col-12 col-md-6">
            Tuyển thành viên gen 2
          </div>
          <div className="header-slider__description col-12 col-md-6 my-md-4">
            <div className="header-detail__text lh-base">
              CLB IUC PTIT mở đơn tuyển thành viên năm 2024.
              <br />
              <strong>Đối tượng:</strong> Sinh viên các ngành Cử nhân Công nghệ
              thông tin Định hướng ứng dụng và các bạn trẻ có đam mê với lập
              trình.
              <br />
              <strong>Thời gian ứng tuyển: 03/09/2024 - 29/09/2024</strong>
            </div>
            <div className="header-detail__button d-flex justify-content-center gap-5 my-4">
              <button className="px-3 py-2 rounded-pill">Đăng ký ngay</button>
              <button className="px-3 py-2 rounded-pill">Xem thêm</button>
            </div>
          </div>
          <div
            id="carouselExampleIndicators"
            className="carousel slide col-md-12"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-indicators">
              {imageURLs.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : "false"}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {imageURLs.map((item, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={item}
                    className="d-block w-100"
                    alt={`Slide ${index + 1}`}
                  />
                  <div className="carousel-caption d-none d-xl-block">
                    <h2 className="fw-bold">Câu lạc bộ IU PTIT</h2>
                    <p>
                      Một trong những câu lạc bộ thuộc Học viện Công nghệ Bưu
                      chính Viễn thông về lĩnh vực công nghệ thông tin
                    </p>
                    <a href="#" className="btn btn-primary">
                      Xem thêm
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;

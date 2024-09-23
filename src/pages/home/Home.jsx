import { useEffect } from "react";
import { useState } from "react";
import "./Home.css";

import imgHuynh from '../../../public/images/advisors/1.jpg'
import imgDai from '../../../public/images/advisors/2.jpg'

const HomePage = () => {
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
      {/* section header start */}
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
      {/* section header end */}

      {/* section introduce start */}
      <section id="introduce" className="introduce section-padding py-5">
        <div className="container">
          <h1 className="introduce-content__title mb-4 text-xl-center lh-base fw-semibold">
            Giới Thiệu
          </h1>
          <div className="row introduce-container shadow-lg rounded">
            <div className="introduce-content col-12 col-xl-5 d-flex flex-column justify-content-start align-items-center align-items-xl-end p-4">
              <p className="introduce-content__slogan fs-4">
                <strong>IU CLUB - Shine and Thrive</strong>
              </p>
              <p className="introduce-content__description">
                <strong>IU Club (IUC) </strong>
                là câu lạc bộ CNTT định hướng ứng dụng thuộc UDU, thành lập ngày
                03/01/2020, với môi trường "Shine and Thrive" giúp mỗi thành
                viên phát triển tối đa tiềm năng. Tại đây, sinh viên được khuyến
                khích sáng tạo, học hỏi, và hỗ trợ vượt qua thử thách. IUC quy
                tụ những người trẻ đam mê công nghệ, cùng nhau chinh phục các
                mục tiêu lớn, tạo dựng tương lai bền vững.
              </p>
              <div className="ocean d-none d-xl-block">
                <div className="wave"></div>
                <div className="wave"></div>
              </div>
            </div>
            <div className="introduce-img col-12 col-xl-7 p-0 position-relative">
              <img src={imageURLs[1]} alt="" className="img-fluid" />
              <div className="introduce-btn">
                <a href="#" className="btn btn-primary">
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section introduce end */}
      {/* section advisors start */}
      <section id="advisors" className="advisors section-padding py-5">
        <div className="container">
          <div className="advisors-head">
            <h1 className="advisors-head__title text-center mb-4 fw-semibold">
              Cố vấn
            </h1>
            <p className="advisors-head__description text-center">
              Để phát triển thành một CLB vững mạnh và đoàn kết như hiện nay,
              ngay từ những ngày đầu tiên IU Club đã rất may mắn khi nhận được
              sự hỗ trợ, chỉ dẫn từ các thầy cô cố vấn đã có nhiều năm kinh
              nghiệm giảng dạy tại khoa Viện khoa học kĩ thuật bưu điện
            </p>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4 ">
            <div className="col">
              <div className="card">
                <img src={imgHuynh} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Thầy Phan Lý Huỳnh</h5>
                  <p className="card-text">
                    Giảng viên Khoa Viện kỹ thuật Bưu điện - Cố vấn CLB
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={imgDai} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Anh Trần Quang Đại</h5>
                  <p className="card-text">
                    Công tác tại Khoa Viện kỹ thuật Bưu điện - Cố vấn CLB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section advisors end */}

      {/* section mangement start */}

      {/* section mangement end */}

      {/* section team project start */}
      <section className="team-project py-5">
        <div className="container text-center">
          <h1 className="team-head__title mb-4 fw-semibold">Team dự án</h1>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="Team Member 1"
                  style={{ width: "150px" }}
                />
                <div className="card-body">
                  <h3 className="card-title">Data</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="Team Member 2"
                  style={{ width: "150px" }}
                />
                <div className="card-body">
                  <h3 className="card-title">Web</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="Team Member 3"
                  style={{ width: "150px" }}
                />
                <div className="card-body">
                  <h3 className="card-title">Game</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section team project end  */}
    </>
  );
};
export default HomePage;

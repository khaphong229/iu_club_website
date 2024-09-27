import React from "react";
import "./styles.css";
import imgIntroduce from "../../../../../public/images/activities/1.jpg";
import { Link } from "react-router-dom";

function Introduce() {
  return (
    <div>
      <section id="introduce" className="introduce section-padding py-5">
        <div className="container">
          <h1 className="introduce-content__title mb-4 text-xl-center lh-base fw-bold">
            Giới Thiệu
          </h1>
          <div className="row introduce-container shadow-lg rounded position-relative">
            <div className="introduce-content col-12 col-xl-5 d-flex flex-column justify-content-start align-items-center align-items-xl-end p-4">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
              <p className="introduce-content__slogan fs-4">
                <strong>IU CLUB - Shine and Thrive</strong>
              </p>
              <p className="introduce-content__description">
                <strong>IU Club (IUC) </strong>
                là câu lạc bộ CNTT định hướng ứng dụng thuộc UDU, thành lập ngày
                03/01/2024, với môi trường "Shine and Thrive" giúp mỗi thành
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
              <img src={imgIntroduce} alt="" className="img-fluid" />
              <div className="introduce-btn">
                <Link
                  to="https://www.facebook.com/profile.php?id=61564322655289"
                  className="text-decoration-none text-light btn btn-primary"
                  target="_blank"
                >
                  Xem thêm
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Introduce;

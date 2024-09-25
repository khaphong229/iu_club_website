import React from 'react';
import imgHuynh from '../../../../../public/images/advisors/1.jpg';
import imgDai from '../../../../../public/images/advisors/2.jpg';

function Advisors() {
  return (
    <div>
      <section id="advisors" className="advisors section-padding py-5">
        <div className="container">
          <div className="advisors-head">
            <h1 className="advisors-head__title text-center mb-4 fw-bold">
              Cố vấn
            </h1>
            <p className="advisors-head__description text-center">
              Để phát triển thành một CLB vững mạnh và đoàn kết như hiện nay,
              ngay từ những ngày đầu tiên IU Club đã rất may mắn khi nhận được
              sự hỗ trợ, chỉ dẫn từ các thầy cô cố vấn đã có nhiều năm kinh
              nghiệm giảng dạy tại khoa Viện khoa học kĩ thuật bưu điện.
            </p>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card h-100">
                <img
                  src={imgHuynh}
                  className="card-item__image card-img-top img-fixed h-100"
                  alt="Thầy Phan Lý Huỳnh"
                />
                <div className="card-body">
                  <h5 className="card-title">Thầy Phan Lý Huỳnh</h5>
                  <p className="card-text">
                    Giảng viên Khoa Viện kỹ thuật Bưu điện - Cố vấn CLB
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src={imgDai}
                  className="card-item__image card-img-top img-fixed h-100"
                  alt="Anh Trần Quang Đại"
                />
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
    </div>
  );
}

export default Advisors;

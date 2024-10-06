import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const advisorsData = [
  {
    id: 1,
    name: "Thầy Phan Lý Huỳnh",
    position: "Giảng viên Khoa Viện kỹ thuật Bưu điện - Cố vấn CLB",
    imgSrc: "../../../../../public/images/advisors/1.jpg",
    aosDelay: 300,
  },
  {
    id: 2,
    name: "Anh Trần Quang Đại",
    position: "Công tác tại Khoa Viện kỹ thuật Bưu điện - Cố vấn CLB",
    imgSrc: "../../../../../public/images/advisors/2.jpg",
    aosDelay: 400,
  },
];

function Advisors() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section id="advisors" className="advisors section-padding py-5">
      <div className="container">
        <div className="advisors-head">
          <h1
            className="advisors-head__title text-center mb-4 fw-bold"
            data-aos="fade-up"
          >
            Cố vấn
          </h1>
          <p
            className="advisors-head__description text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Để phát triển thành một CLB vững mạnh và đoàn kết như hiện nay, ngay
            từ những ngày đầu tiên IU Club đã rất may mắn khi nhận được sự hỗ
            trợ, chỉ dẫn từ các thầy cô cố vấn đã có nhiều năm kinh nghiệm giảng
            dạy tại khoa Viện khoa học kĩ thuật bưu điện.
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          {advisorsData.map((advisor) => (
            <div
              className="col"
              key={advisor.id}
              data-aos="flip-left"
              data-aos-delay={advisor.aosDelay}
            >
              <div className="card h-100">
                <img
                  src={advisor.imgSrc}
                  className="card-item__image card-img-top img-fixed h-100"
                  alt={advisor.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{advisor.name}</h5>
                  <p className="card-text">{advisor.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Advisors;

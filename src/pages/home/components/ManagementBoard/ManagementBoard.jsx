import React from "react";
import dinh from "../../../../../public/images/management_board/1.jpg";

const members = [
  {
    name: "Bùi Thế Vĩnh Nguyên",
    role: "Trưởng ban đào tạo",
    term: "Khóa 2023-2024",
    imgSrc: dinh,
    status: "ĐANG CẬP NHẬT",
    isButtonDisabled: true,
  },
  {
    name: "Chế Đình Sơn",
    role: "Người sáng lập",
    term: "Chủ nhiệm khóa 2010-2011",
    imgSrc: dinh,
    status: "HUMANS OF PROPTIT",
    isButtonDisabled: false,
  },
  {
    name: "Nguyễn Tuấn Ninh",
    role: "Phó chủ nhiệm CLB",
    term: "Khóa 2011-2012",
    imgSrc: dinh,
    status: "ĐANG CẬP NHẬT",
    isButtonDisabled: true,
  },
];

const ManagementBoard = () => {
  return (
    <section className="manager-board py-5">
      <div className="container">
        <div
          id="managementCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex justify-content-center">
                {members.map((member, index) => (
                  <div key={index} className="text-center mx-3">
                    <img
                      src={member.imgSrc}
                      className="rounded-circle mb-3 img-manager"
                      alt={member.name}
                      width="150"
                      height="150"
                    />
                    <h5 className="text-primary">{member.name}</h5>
                    <p className="mb-0">{member.role}</p>
                    <p>{member.term}</p>
                    <button
                      className={`btn ${
                        member.isButtonDisabled
                          ? "btn-secondary"
                          : "btn-primary"
                      } rounded-pill`}
                      disabled={member.isButtonDisabled}
                    >
                      {member.status}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#managementCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#managementCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ManagementBoard;

import React, { useState, useEffect } from "react";
import minh from "../../../../../public/images/management_board/1.jpg";
import dinh from "../../../../../public/images/management_board/2.jpg";
import linh from "../../../../../public/images/management_board/3.jpg";
import phong from "../../../../../public/images/management_board/4.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Sử dụng react-icons
import './styles.css'

const members = [
  {
    name: "Đỗ Văn Minh",
    role: "Lead Game",
    term: "Khóa 2023-2024",
    imgSrc: minh,
    status: "ĐANG CẬP NHẬT",
    isButtonDisabled: true,
  },
  {
    name: "Trần Đức Định",
    role: "Chủ nhiệm CLB",
    term: "Khóa 2023-2024",
    imgSrc: dinh,
    status: "XEM CHI TIẾT",
    isButtonDisabled: false,
  },
  {
    name: "Nguyễn Khả Phong",
    role: "Lead Web",
    term: "Khóa 2023-2024",
    imgSrc: phong,
    status: "ĐANG CẬP NHẬT",
    isButtonDisabled: true,
  },
  {
    name: "Nguyễn Phương Linh",
    role: "Lead Data",
    term: "Khóa 2023-2024",
    imgSrc: linh,
    status: "ĐANG CẬP NHẬT",
    isButtonDisabled: true,
  },
];

const ManagementBoard = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState(""); // Điều chỉnh hướng trượt
  const [visibleMembers, setVisibleMembers] = useState(3); // Số lượng thành viên hiển thị

  // Hàm điều chỉnh số lượng thành viên hiển thị dựa trên kích thước màn hình
  const handleResize = () => {
    if (window.innerWidth < 576) {
      setVisibleMembers(1);
    } else if (window.innerWidth < 768) {
      setVisibleMembers(2);
    } else {
      setVisibleMembers(3);
    }
  };

  // Gọi hàm khi component mounted và khi window thay đổi kích thước
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setAnimationDirection("slide-left");
    setStartIndex((prevIndex) => (prevIndex + 1) % members.length);
  };

  const handlePrev = () => {
    setAnimationDirection("slide-right");
    setStartIndex((prevIndex) =>
      prevIndex - 1 < 0 ? members.length - 1 : prevIndex - 1
    );
  };

  const displayedMembers = members
    .slice(startIndex, startIndex + visibleMembers)
    .concat(
      members.slice(0, Math.max(0, startIndex + visibleMembers - members.length))
    );

  return (
    <section id="manager-board" className="manager-board pb-5">
      <div className="container">
        <div className="manager-board__head">
          <h1 className="manager-head__title mb-4 fw-bold text-center">
            Ban điều hành
          </h1>
        </div>
        <div className="d-flex justify-content-center align-items-center position-relative my-5">
          {/* Nút điều hướng trái */}
          <button
            className="carousel-control-prev position-absolute"
            type="button"
            onClick={handlePrev}
            style={{
              backgroundColor: "transparent",
              border: "none",
              top: "50%",
              left: "0",
              transform: "translateY(-50%)",
              zIndex: 1,
            }}
          >
            <FaArrowLeft size={30} color="blue" />
          </button>

          {/* Hiển thị thành viên */}
          <div className={`d-flex justify-content-center transition-slide gap-5 ${animationDirection}`}>
            {displayedMembers.map((member, index) => (
              <div key={index} className="text-center mx-3">
                <img
                  src={member.imgSrc}
                  className="rounded-circle mb-3 img-manager"
                  alt={member.name}
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

          {/* Nút điều hướng phải */}
          <button
            className="carousel-control-next position-absolute"
            type="button"
            onClick={handleNext}
            style={{
              backgroundColor: "transparent",
              border: "none",
              top: "50%",
              right: "0",
              transform: "translateY(-50%)",
              zIndex: 1,
            }}
          >
            <FaArrowRight size={30} color="blue" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ManagementBoard;

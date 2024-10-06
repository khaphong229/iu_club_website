import React from "react";
import './styles.css';
import bg from '../../../../../public/images/education/1.jpg'

function Slider() {
  return (
    <div className="hero-section position-relative overflow-hidden">
      <img src={bg} className="img-fluid w-100 h-100" alt="Hero Background" />
      <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end">
        <div className="container text-white p-4">
          <div className="content-wrapper">
            <h1 className="display-4 fw-bold mb-3 animate-up">Đào Tạo</h1>
            <p className="lead animate-up delay-1">
              CLB sẽ đào tạo các bạn từ những thứ cơ bản nhất của lập trình đến
              những thứ nâng cao hơn. Các bạn sẽ có được nền tảng vững chắc và từ
              đó có thể tạo ra những sản phẩm của riêng mình như web, game,
              app,... Những kiến thức này sẽ giúp các bạn rất nhiều trong quá
              trình học tập tại Học Viện cũng như trong công việc sau này.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
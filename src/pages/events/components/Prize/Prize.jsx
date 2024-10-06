import React, { useEffect } from 'react';
import './styles.css';
import AOS from 'aos';

const events = [
  { img: "/images/activities/pic12.jpg", title: "Hoạt động ngoại khóa" },
  { img: "/images/activities/pic13.jpg", title: "Coding FEST 2024 The University of Sydney" },
  { img: "/images/activities/pic14.jpg", title: "UDU x NEWS" },
  { img: "/images/activities/pic15.jpg", title: "Company Tour 2024" },
  { img: "/images/activities/pic16.jpg", title: "Giải bóng đá UDU CUP 2024" },
  { img: "/images/activities/pic17.jpg", title: "Cuộc thi AI Challenge 2024" },
];

const EventCard = ({ img, title, index }) => (
  <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
    <div className="card h-100" data-aos="fade-up" data-aos-delay={index * 100}>
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body d-flex justify-content-center align-items-center">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  </div>
);

function Prize() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="events-Prizes">
      <div className="container">
        <h3 className="sub-title fw-bold mb-5" data-aos="fade-up">Các hoạt động khác</h3>
        <div className="row">
          {events.map((event, index) => (
            <EventCard key={index} {...event} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Prize;

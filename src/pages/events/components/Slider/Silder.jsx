import React, { useEffect } from "react";
import pictures1 from "../../../../../public/images/activities/pic1.jpg";
import pictures2 from "../../../../../public/images/activities/pic2.jpg";
import pictures3 from "../../../../../public/images/activities/pic7.jpg";
import "./styles.css";
import AOS from "aos";

const eventList = [
  {
    id: 1,
    image: pictures3,
    title: "Hoạt Động",
    description: "Một số hoạt động diễn ra trong sự kiện này.",
    aosDelay: 300,
  },
  {
    id: 2,
    image: pictures2,
    title: "Giải Thưởng",
    description: "Các giải thưởng đã được trao trong sự kiện.",
    aosDelay: 400,
  },
];

function Slider() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div>
      <div className="events-pages position-relative overflow-hidden">
        <div className="events-images d-flex justify-content-center align-items-center">
          <img
            src={pictures1}
            alt="events"
            className="w-100 object-fit-cover"
            loading="lazy"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-overlay"></div>
        </div>
        <div className="events-contents position-absolute top-50 start-50 translate-middle text-center text-white z-1">
          <h1 className="display-1 fw-bold mb-4 animate-up">EVENTS</h1>
          <p className="lead animate-up delay-1">
            CLB thường xuyên có các sự kiện lớn nhỏ, được tổ chức giúp gắn kết
            các thành viên và mở rộng các mối quan hệ.
          </p>
        </div>
      </div>

      <div className="events-list py-5">
        <div className="container">
          <div className="row g-4">
            {eventList.map((event, index) => (
              <div
                className="col-lg-6 col-md-12"
                data-aos="zoom-in"
                data-aos-delay={event.aosDelay}
                key={event.id}
              >
                <div className="card h-100 shadow-sm rounded-3 overflow-hidden">
                  <img
                    src={event.image}
                    className="card-img-top object-fit-cover"
                    alt={event.title}
                    style={{ height: "50vh" }}
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h3 className="card-title h4">{event.title}</h3>
                    <p className="card-text text-muted">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;

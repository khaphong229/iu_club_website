import { NavLink } from "react-router-dom";
import "./header.css";
import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
        style={{
          boxShadow: scrolled ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" : "none",
          transition: "box-shadow 0.3s ease-in-out",
        }}
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <span className="text-primary fw-bolder">IU</span> CLUB
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link px-4" : "nav-link px-4"
                  }
                  aria-current="page"
                  to="/"
                >
                  Trang chủ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link px-4" : "nav-link px-4"
                  }
                  aria-current="page"
                  to="/dao-tao"
                >
                  Đào tạo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link px-4" : "nav-link px-4"
                  }
                  aria-current="page"
                  to="/su-kien"
                >
                  Sự kiện
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link px-4" : "nav-link px-4"
                  }
                  aria-current="page"
                  to="/thanh-vien"
                >
                  Thành viên
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

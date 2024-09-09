import { useEffect, useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import "./Header.css"; // Import custom CSS

const Header = () => {
  const [current, setCurrent] = useState("");
  useEffect(() => {
    if (location && location.pathname) {
      const totalPathName = ["dao-tao", "thanh-vien", "su-kien"];
      const current = totalPathName.find((item) => {
        return `/${item}` === `${location.pathname}`;
      });
      if (current) {
        setCurrent(current);
      } else {
        setCurrent("home");
      }
    }
  }, [location]);

  const items = [
    {
      label: <Link to="/">TRANG CHỦ</Link>,
      key: "home",
    },
    {
      label: <Link to="/dao-tao">ĐÀO TẠO</Link>,
      key: "dao-tao",
    },
    {
      label: <Link to="/su-kien">SỰ KIỆN</Link>,
      key: "su-kien",
    },
    {
      label: <Link to="/thanh-vien">THÀNH VIÊN</Link>,
      key: "phong-truyen-thong",
    },
  ];

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <header className="custom-header">
      <div className="container header-container">
        {/* Logo và tên CLB */}
        <div className="logo">
          <img src="/public/vite.svg" alt="Logo" />
          <span className="brand-name">CLB Lập Trình PTIT</span>
        </div>
        {/* Menu */}
        <div className="menu-container">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            className="custom-menu"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

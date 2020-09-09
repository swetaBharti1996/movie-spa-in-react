import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Menu, Icon } from "antd";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <Menu mode="horizontal" className="navbar">
        <Menu.Item>
          <Link to="/">
            <Icon type="home" /> Home
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="popular" style={{ marginLeft: 1000 }}>
            <Icon type="heart-o" /> Favorities
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

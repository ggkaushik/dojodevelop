import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import "./Drawer.css";
import "../../public/dojoicon.svg";

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

class Drawer extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  getLogoImageCSS() {
    if (this.state.collapsed == true) {
      return "logo-image-collapsed";
    }
    return "logo-image";
  }

  getLogoTextCSS() {
    if (this.state.collapsed == true) {
      return "logo-text-collapsed";
    }
    return "logo-text";
  }

  menuItemClick = (item) => {
    console.log(item);
    this.props.inject(item.key);
  };

  render() {
    const { collapsed } = this.state;

    return (
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
        <div className="siderlogo">
          <a>
            <img
              className={this.getLogoImageCSS()}
              src="dojoicon.svg"
              alt="logo"
            />
            <h1 className={this.getLogoTextCSS()}>Dojo Dev</h1>
          </a>
        </div>
        <Menu
          onClick={this.menuItemClick}
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Swagger UI
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default Drawer;

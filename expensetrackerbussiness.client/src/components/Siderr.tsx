// import React, { useState } from "react";
// import {
//   DashboardOutlined,
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   ShoppingCartOutlined,
//   UploadOutlined,
// } from "@ant-design/icons";
// import { Button, Layout, Menu } from "antd";
// import { Link, Outlet, useParams } from "react-router-dom";

// const { Header, Sider, Content } = Layout;

// const Siderr: React.FC = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   // const location = useLocation();
//   localStorage.setItem("role", "admin");
//   const { id } = useParams();

//   const userRole = localStorage.getItem("role") || "submitter";

//   // const {
//   //   token: { colorBgContainer, borderRadiusLG },
//   // } = theme.useToken();

//   const menuConfig = [
//     {
//       key: "/dashboard",
//       icon: <DashboardOutlined />,
//       label: "Dashboard",
//       roles: ["admin", "subadmin", "approver", "submitter"],
//     },
//     {
//       key: "/expenses",
//       icon: <UploadOutlined />,
//       label: "Expenses",
//       roles: ["admin", "subadmin", "approver", "submitter"],
//     },
//     {
//       key: "/trips",
//       icon: <UploadOutlined />,
//       label: "Trips",
//       roles: ["admin", "subadmin", "approver", "submitter"],
//     },
//     {
//       key: "/reports",
//       icon: <ShoppingCartOutlined />,
//       label: "Reports",
//       roles: ["admin", "subadmin", "approver", "submitter"],
//     },
//     {
//       key: "/advances",
//       icon: <UploadOutlined />,
//       label: "Advances",
//       roles: ["admin", "subadmin"],
//     },
//     {
//       key: "/approvals",
//       icon: <UploadOutlined />,
//       label: "Approvals",
//       roles: ["admin", "subadmin", "approver"],
//     },
//     {
//       key: "/user-management",
//       icon: <UploadOutlined />,
//       label: "User Management",
//       roles: ["admin", "subadmin"],
//     },
//     {
//       key: "/create-user",
//       icon: <UploadOutlined />,
//       label: "Create User",
//       roles: ["admin", "subadmin"],
//     },
//     {
//       key: "/create-category",
//       icon: <UploadOutlined />,
//       label: "Create Category",
//       roles: ["admin", "subadmin"],
//     },
//     {
//       key: "/analytics",
//       icon: <UploadOutlined />,
//       label: "Analytics",
//       roles: ["admin", "subadmin", "approver", "submitter"],
//     },
//   ];

//   // Filter menu based on current user's role
//   const filteredMenu = menuConfig
//     .filter((item) => item.roles.includes(userRole))
//     .map((item) => ({
//       ...item,
//       label: <Link to={`/${id}${item.key}`}>{item.label}</Link>,
//     }));

//   return (
//     <Layout style={{ height: "100vh"}}>
//       <Sider
//         collapsible
//         collapsed={collapsed}
//         trigger={null}
//         breakpoint="lg"
//         collapsedWidth={0}
//         onBreakpoint={(broken) => setCollapsed(broken)}
//         style={{color:"linear-gradient(#1667c2, #48cae4)"}}

//       >
//         {/* <div /> */}
//         <Menu
//           // theme="dark"
//           style={{background: "linear-gradient( #1667c2, #48cae4)"}}
//           // mode="inline"
//           selectedKeys={[location.pathname]}
//           items={filteredMenu}
//         />
//       </Sider>

//       <Layout>
//         <Header
//           style={{
//             paddingRight: "2rem",
//             paddingLeft: 0,
//             // background: colorBgContainer,
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <Button
//             type="text"
//             icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//             onClick={() => setCollapsed(!collapsed)}
//             style={{
//               fontSize: "16px",
//               width: 64,
//               height: 64,
//             }}
//           />
//         </Header>

//         <Content
//           style={{
//             padding: "16px",
//             // background: colorBgContainer,
//             // borderRadius: borderRadiusLG,
//              overflow: "auto",
//           }}
//         >
//           <Outlet />
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default Siderr;

import {
  AppstoreAddOutlined,
  BookOutlined,
  CarryOutOutlined,
  CheckSquareOutlined,
  DashboardOutlined,
  LineChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoneyCollectOutlined,
  UploadOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import {  Layout, Menu, Typography } from "antd";
import React, { useState } from "react";
import "../App.css";
import { Link, Outlet, useParams } from "react-router-dom";
import capsi from "../assets/capsi.png";

// import { icons } from "antd/es/image/PreviewGroup";

const { Header, Sider, Content } = Layout;

const Siderr = () => {
  const [collapsed, setCollapsed] = useState(false);
  localStorage.setItem("role", "admin");
  const { id } = useParams();

  const userRole = localStorage.getItem("role") || "submitter";

  const menu = [
    {
      key: "/dashboard",
      style: { color: "white", fontSize: 15 },
      icon: <DashboardOutlined style={{ fontSize: '130%'}}/>,
      label: "Dashboard",
      roles: ["admin", "subadmin", "approver", "submitter"],
    },
    {
      key: "/expenses",
      style: { color: "white", fontSize: 15 },
      icon: <MoneyCollectOutlined style={{ fontSize: '130%'}}/>,
      label: "Expenses",
      roles: ["admin", "subadmin", "approver", "submitter"],
    },
    {
      key: "/trips",
      style: { color: "white", fontSize: 15 },
      icon: <CarryOutOutlined style={{ fontSize: '130%'}}/>,
      label: "Trips",
      roles: ["admin", "subadmin", "approver", "submitter"],
    },
    {
      key: "/reports",
      style: { color: "white", fontSize: 15 },
      icon: <BookOutlined style={{ fontSize: '130%'}}/>,
      label: "Reports",
      roles: ["admin", "subadmin", "approver", "submitter"],
    },
    {
      key: "/advances",
      style: { color: "white", fontSize: 15 },
      icon: <UploadOutlined style={{ fontSize: '130%'}}/>,
      label: "Advances",
      roles: ["admin", "subadmin", "approver", "submitter"],
    },
    {
      key: "/approvals",
      style: { color: "white", fontSize: 15 },
      icon: <CheckSquareOutlined style={{ fontSize: '130%'}}/>,
      label: "Approvals",
      roles: ["admin", "subadmin", "approver"],
    },
    {
      key: "/user-management",
      style: { color: "white", fontSize: 15 },
      icon: <UsergroupAddOutlined style={{ fontSize: '130%'}}/>,
      label: "User Management",
      roles: ["admin", "subadmin"],
    },
    {
      key: "/create-category",
      style: { color: "white", fontSize: 15 },
      icon: <AppstoreAddOutlined style={{ fontSize: '130%'}}/>,
      label: "Create Category",
      roles: ["admin", "subadmin", "approver", "submitter"],
    },
    {
      key: "/analytics",
      style: { color: "white", fontSize: 15 },
      label: "Analytics",
      icon: <LineChartOutlined style={{ fontSize: '130%'}}/>,
      roles: ["admin", "subadmin", "submitter", "approver"],
    },
  ];

  const filteredMenu = menu
    .filter((item) => item.roles.includes(userRole))
    .map((item) => ({
      ...item,
      label: <Link to={`/${id}${item.key}`}>{item.label}</Link>,
    }));

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* {" "} */}
      {/* Full page height */}
      <Sider
        
        collapsed={collapsed}
        // trigger={null}
        style={{
          background: "linear-gradient(to bottom right, #48CAE4, #1667C2)", // your Sider gradient
        }}
      >
        <div
          className="logo"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed ? "center" : "flex-start",
            height: 64,
            margin: 16,
            // background: "rgba(255,255,255,0.3)",
            borderRadius: 8,
          }}
        >
          <img
            src={capsi}
            alt="Capsi Logo"
            style={{ width: 32, height: 32, marginRight: collapsed ? 0 : 8 }}
          />{" "}
          {!collapsed && (
            <Typography.Title
              level={4}
              style={{
                color: "white",
                margin: 0,
                fontSize: 20,
                whiteSpace: "nowrap",   //isse capi expense ik sath ho rha h logo ke side me agr nhi likh rhe ye to capsi logo ke side me or expense niche ho ja rha h 
              }}
            >
              Capsi Expense
            </Typography.Title>
          )}
        </div>
        <Menu
          // mode="inline"
          style={{
            background: "transparent", // transparent so it shows Sider’s gradient
          }}
          //  selectedKeys={[location.pathname]}
          items={filteredMenu}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            // background: "linear-gradient(to bottom right, #48CAE4,#1667C2)",
            background: "white",
            padding: "0 16px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <h3 style={{ marginLeft: 16 }}>Dashboard</h3>
        </Header>
        <Content
          style={{
            margin: "16px",
            padding: 24,
            background: "#fff",
            minHeight: "calc(100vh - 112px)", // Full height minus header/footer
            borderRadius: 8,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
    
  );
};

export default Siderr;

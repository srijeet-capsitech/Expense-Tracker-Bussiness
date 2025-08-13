// import React, { useState } from "react";
// import {
//   DashboardOutlined,
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   ShoppingCartOutlined,
//   UploadOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// import { Button, Layout, Menu, theme } from "antd";
// import { Link, Outlet, useLocation, useParams } from "react-router-dom";

// const { Header, Sider, Content } = Layout;

// const Siderr: React.FC = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   //   const location = useLocation();
//   //   const { id } = useParams();

//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   return (
//     <Layout style={{ height: "100vh" }}>
//       <Sider
//         collapsible
//         collapsed={collapsed}
//         trigger={null}
//         breakpoint="lg"
//         collapsedWidth={0}
//         onBreakpoint={(broken) => {
//           setCollapsed(broken);
//         }}
//       >
//         <div className="demo-logo-vertical" />
//         <Menu
//           theme="dark"
//           mode="inline"
//           selectedKeys={[location.pathname]}
//           items={[
//             {
//               key: "/dashboard",
//               icon: <DashboardOutlined />,
//               //   label: <Link to={`/billing/${id}/dashboard`}>Dashboard</Link>,
//               label: "Dashboard",
//             },
//             {
//               key: "/expenses",
//               icon: <UploadOutlined />,
//               //   label: <Link to={`/billing/${id}/parties`}>Parties</Link>,
//               label: "Expenses",
//             },
//             {
//               key: "/trips",
//               icon: <UploadOutlined />,
//               //   label: <Link to={`/billing/${id}/items`}>Items</Link>,
//               label: "Trips",
//             },
//             {
//               key: "/reports",
//               icon: <ShoppingCartOutlined />,
//               //   label: <Link to={`/billing/${id}/sales/invoice`}>Sales</Link>,
//               label: "Reports",
//             },
//             {
//               key: "/advances",
//               icon: <UploadOutlined />,
//               //   label: <Link to={`/billing/${id}/purchase`}>Purchase</Link>,
//               label: "Dashboard",
//             },
//             {
//               key: "/approvals",
//               icon: <UploadOutlined />,
//               //   label: <Link to={`/billing/${id}/journal`}>Journal</Link>,
//               label: "Approvals",
//             },
//             {
//               key: "/user-managemnet",
//               icon: <UploadOutlined />,
//               //   label: <Link to={`/billing/${id}/journal`}>Journal</Link>,
//               label: "User Management",
//             },
//             {
//               key: "/create-user",
//               icon: <UploadOutlined />,
//               //   label: <Link to={`/billing/${id}/journal`}>Journal</Link>,
//               label: "Create User",
//             },
//             {
//               key: "/create-category",
//               icon: <UploadOutlined />,
//               //   label: <Link to={`/billing/${id}/journal`}>Journal</Link>,
//               label: "Create Category",
//             },
//             {
//               key: "/analytics",
//               icon: <UploadOutlined />,
//               //   label: <Link to={`/billing/${id}/journal`}>Journal</Link>,
//               label: "Analytics",
//             },
//           ]}
//         />
//       </Sider>

//       <Layout>
//         <Header
//           style={{
//             paddingRight: "2rem",
//             paddingLeft: 0,
//             background: colorBgContainer,
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
//             background: colorBgContainer,
//             borderRadius: borderRadiusLG,
//             overflow: "auto",
//           }}
//         >
//           <Outlet />
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default Siderr;

import React, { useState } from "react";
import {
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Link, Outlet, useParams } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const Siderr: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  // const location = useLocation();
  localStorage.setItem("role", "admin");
  const { id } = useParams();

  const userRole = localStorage.getItem("role") || "submitter";

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuConfig = [
    {
      key: "/dashboard",
      icon: <DashboardOutlined />,
      label: "Dashboard",
      roles: ["admin", "subadmin", "approver", "submitter"],
    },
    {
      key: "/expenses",
      icon: <UploadOutlined />,
      label: "Expenses",
      roles: ["admin", "subadmin", "approver", "submitter"],
    },
    {
      key: "/trips",
      icon: <UploadOutlined />,
      label: "Trips",
      roles: ["admin", "subadmin", "approver", "submitter"],
    },
    {
      key: "/reports",
      icon: <ShoppingCartOutlined />,
      label: "Reports",
      roles: ["admin", "subadmin", "approver", "submitter"],
    },
    {
      key: "/advances",
      icon: <UploadOutlined />,
      label: "Advances",
      roles: ["admin", "subadmin"],
    },
    {
      key: "/approvals",
      icon: <UploadOutlined />,
      label: "Approvals",
      roles: ["admin", "subadmin", "approver"],
    },
    {
      key: "/user-management",
      icon: <UploadOutlined />,
      label: "User Management",
      roles: ["admin", "subadmin"],
    },
    {
      key: "/create-user",
      icon: <UploadOutlined />,
      label: "Create User",
      roles: ["admin", "subadmin"],
    },
    {
      key: "/create-category",
      icon: <UploadOutlined />,
      label: "Create Category",
      roles: ["admin", "subadmin"],
    },
    {
      key: "/analytics",
      icon: <UploadOutlined />,
      label: "Analytics",
      roles: ["admin", "subadmin", "approver", "submitter"],
    },
  ];

  // Filter menu based on current user's role
  const filteredMenu = menuConfig
    .filter((item) => item.roles.includes(userRole))
    .map((item) => ({
      ...item,
      label: <Link to={`/${id}${item.key}`}>{item.label}</Link>,
    }));

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        trigger={null}
        breakpoint="lg"
        collapsedWidth={0}
        onBreakpoint={(broken) => setCollapsed(broken)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={filteredMenu}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            paddingRight: "2rem",
            paddingLeft: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>

        <Content
          style={{
            padding: "16px",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: "auto",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Siderr;

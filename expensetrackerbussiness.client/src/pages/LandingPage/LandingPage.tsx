import React from "react";
import { Layout, Menu, Typography } from "antd";


const { Header } = Layout;

const menu = [
  {
    key: "/",
    style: { color: "white", fontSize: 20 },
    label: "SignUp",
  },
  {
    key: "/login",
    style: { color: "white", fontSize: 20    },
    label: "Login",
  },
];

const LandingPage: React.FC = () => {
  return (
    <div>
      <Layout>
        <Header
          style={{
            background: "linear-gradient(to bottom right, #48CAE4, #1667C2)",
          }}
        >
          <div className="demo-logo" />
          <Menu
            style={{
                justifyContent:"end",
              background: "transparent", // transparent so it shows Sider’s gradient
              flex: 1,
              minWidth: 0,
            }}
            items={menu}
            mode="horizontal"
            //   defaultSelectedKeys={['2']}

            //   style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
      </Layout>

      <div>
        <div>
            <Typography.Title level={3}>Expense Tracker Business</Typography.Title>
            <Typography.Text></Typography.Text>
        </div>

        <div>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;

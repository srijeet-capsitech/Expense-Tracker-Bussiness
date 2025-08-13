import { Form, Input, Typography, Button, Row, Col } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "antd/es/typography/Link";
import { FcGoogle } from "react-icons/fc";
import capsi from "../../assets/image.png";

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="login-wrapper">
      <Row className="login-row">
        {/* Left Section */}
        <Col xs={24} md={12} className="login-left">
          <div className="left-content">
            <Typography.Title
              level={2}
              style={{ fontSize: 30, color: "white", marginBottom: 6 }}
            >
              Don’t have an account Yet?
            </Typography.Title>
            <Typography.Paragraph
              style={{ fontSize: 13, height: 48, color: "white" }}
            >
              Let’s get you all set up so you can start getting an experience of
              Capsi Expense
            </Typography.Paragraph>

            <Button
              onClick={() => navigate("/")}
              className="transparent-button"
              style={{ height: 40, width: 140 }}
            >
              Sign Up
            </Button>
          </div>
        </Col>

        {/* Right Section */}
        <Col xs={24} md={12} className="login-right">
          <Form
            layout="vertical"
            requiredMark={false}
            style={{ width: "100%", maxWidth: 400 }}
          >
            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
              <div className="capsi">
                <img
                  src={capsi}
                  alt="Capsi Logo"
                  style={{ width: 58.78, height: 59.89, marginRight: 8 }}
                />
                <Typography.Title
                  level={1}
                  style={{
                    width: 226,
                    height: 60,
                    fontSize: 33.72,
                    background: "linear-gradient(to right, #48CAE4, #1667C2)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    margin: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  Capsi Expense
                </Typography.Title>
              </div>

              <Typography.Title
                level={4}
                style={{ height: 32, marginBottom: 0 }}
              >
                Good to see you again!
              </Typography.Title>
              <Typography.Title
                level={5}
                style={{ height: 24, marginBottom: 20 }}
              >
                Track more, stress less
              </Typography.Title>
            </div>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Email is required" },
                // { type: "email", message: "Please enter a valid email" },
                // {
                //   pattern: /^(?=.*\d)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/,
                //   message:
                //     "Email must include a number, contain '@', and end with '.com'",
                // },
                {
                  // pattern: /^(?=.*\d)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/,
                  message:
                    "Email is incorrect",
                },
              ]}
            >
              <Input placeholder="Enter Email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter a password" },
                // {
                //   pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
                //   message:
                //     "Must contain at least one number, one uppercase and lowercase letter, one special character, and be at least 8 characters",
                // },
                {
                  // pattern: /^(?=.*\d)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/,
                  message:
                     "Password is incorrect",
                },
              ]}
            >
              <Input.Password placeholder="Enter Password" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{
                  height: 40,
                  background:
                    "linear-gradient(to bottom right,#48CAE4, #1667C2)",
                  border: "none",
                  marginBottom: "8px",
                }}
              >
                Sign In{" "}
                <ArrowRightOutlined
                  style={{ width: 14, height: 14, marginLeft: 6 }}
                />
              </Button>

              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  marginTop: "8px",
                }}
              >
                <Link style={{ color: "Black" }}>Forgot Password?</Link>
              </div>
            </Form.Item>

            <div style={{ textAlign: "center", marginTop: "24px" }}>
              <div
                style={{
                  color: "rgba(0, 0, 0, 0.45)",
                  fontSize: "15px",
                  marginBottom: "10px",
                }}
              >
                or continue with
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <FcGoogle
                  style={{
                    width: 41.46,
                    height: 41.46,
                    fontSize: "28px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;

import { Form, Input, Button, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
const VerifyOTPpage: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values: { email: string }) => {
    console.log("Email submitted:", values.email);
    navigate("/reset-password");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f5f5f5",
      }}
    >
      <Card
        title="Forgot Password"
        bordered={false}
        style={{
          width: 400,
          borderRadius: 10,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Form
          form={form}
          name="forget-password"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            label="OTP:"
            name="otp"
            rules={[{ required: true, message: "Please enter the OTP!" }]}
          >
            <Input.OTP length={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default VerifyOTPpage;

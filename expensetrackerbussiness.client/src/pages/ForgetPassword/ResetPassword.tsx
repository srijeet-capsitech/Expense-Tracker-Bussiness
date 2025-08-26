import React from "react";
import { Form, Input, Button, Card } from "antd";
import { useNavigate } from "react-router-dom";

const ResetPassword: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values: { email: string }) => {
    console.log("Email submitted:", values.email);
    navigate("/login");
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
            label="New Password"
            name="newPassword"
            rules={[
              { required: true, message: "Please enter new Password!" },
              {
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,15}$/,
                message:
                  "Must contain at least one number, one uppercase and lowercase letter, one special character, and be at least 8 to 15 characters",
              },
            ]}
          >
            <Input.Password placeholder="Enter your new password" />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["newPassword"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm your password" />
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

export default ResetPassword;



import { Button, Input, Select, Typography, Drawer, Space, message } from "antd";
import React, { useState } from "react";

import { Form } from "antd";
import { UserRoles, type UserRole } from "../enums/roles";
import axios from "axios";

interface createUserFormProps {
  open: boolean | undefined;
  onClose: () => void;
}

interface userData{
  firstname:string,
  lastname:string,
  email:string,
  password:string,
  phoneno:number,
  role:string
}

const CreateUserForm: React.FC<createUserFormProps> = ({ open, onClose }) => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (values: userData) => {
    form.validateFields().then(async(values) => {
      try {
        setLoading(true)
        const payload = {
          name: `${values.firstname} ${values.lastname}`,
          email: values.email,
          password: values.password,
          phone: values.phone,
          role: values.role,
        };
        console.log(payload);
        const res = await axios.post("/create-user",payload)
        console.log(res.data)
        setLoading(false)
        onClose();
      } catch (err:any) {
        messageApi.error(err.response?.data?.message || "Failed to add User!")
        setLoading(false)
      }
    });
  };

  return (
    <div>
      {contextHolder}
      <Drawer
        open={open}
        onClose={onClose}
        title="Create User"
        extra={
          <Space>
            <Button type="primary" onClick={() => form.submit()} loading={loading}>
              Save
            </Button>
          </Space>
        }
      >

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          autoComplete="off"
        >
           <Title
            level={3}
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            Create User
          </Title>
      
          <Form.Item
            label="First Name"
            name="firstname"
            rules={[
              { required: true, message: "First name is required" },
              {
                max: 30,
                message: "First name cannot exceed 30 characters",
              },
              {
                whitespace: true,
                message: "First name cannot be empty",
              },
              {
                pattern: /^[A-Z][a-zA-Z]*$/,
                message:
                  "First name must start with an uppercase letter and contain only letters",
              },
            ]}
          >
            <Input placeholder="Enter first name" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastname"
            rules={[
              { required: true, message: "Last name is required" },
              {
                max: 30,
                message: "Last name cannot exceed 30 characters",
              },
              {
                whitespace: true,
                message: "Last name cannot be empty",
              },
              {
                pattern: /^[A-Z][a-zA-Z]*$/,
                message:
                  "Last name must start with an uppercase letter and contain only letters",
              },
            ]}
          >
            <Input placeholder="Enter last name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Please enter a valid email" },
              {
                pattern: /^(?=.*\d)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/,
                message:
                  "Email must include a letter, number, contain '@', and end with '.com'",
              },
            ]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please enter a Password" },
              {
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,10}$/,
                message:
                  "Must contain at least one number, one uppercase and lowercase letter, one special character, and be at least 8 to 10 characters",
              },
            ]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>

          <Form.Item
            label="Phone No"
            name="phoneno"
            rules={[
              {
                required: true,
                message: "Please enter phone number",
              },
              {
                min: 0,
                max: 10,
                message: "Length must be of 10 digits long",
              },
              {
                pattern: /^[6-9][\d]{9}$/,
                message: "Enter a valid phone number",
              },
            ]}
          >
            <Input placeholder="Enter phone no" />
          </Form.Item>
          <Form.Item
            label="Department"
            name="dept"
            rules={[
              {
                required: true,
                message: "Please select a department",
              },
            ]}
          >
            <Select placeholder="Select a Role">
              {UserRoles.map((role) => (
                <Option key={role.id} value={role.id}>
                  {role.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Department"
            name="dept"
            rules={[
              {
                required: true,
                message: "Please Select a Department",
              },
            ]}
          >
            <Select placeholder="Select a Role">
              {UserRoles.map((role) => (
                <Option key={role.id} value={role.id}>
                  {role.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Role"
            name="role"
            rules={[
              {
                required: true,
                message: "Please select a role",
              },
            ]}
          >
            <Select placeholder="Select a role">
              {UserRoles.map((role) => (
                <Option key={role.id} value={role.id}>
                  {role.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              style={{
                height: 40,
                background: "linear-gradient(to bottom right, #48CAE4,#1667C2)",
              }}
            >
              Create User


          
            </Button>
          </Form.Item> 
        </Form>
        {/* </Card> */}
      </Drawer>
    </div>
  );
};

export default CreateUserForm;

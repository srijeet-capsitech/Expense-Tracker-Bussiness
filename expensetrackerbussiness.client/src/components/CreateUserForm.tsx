import { Button, Input, Select, Typography, Drawer } from "antd";
import React from "react";
import { Form } from "antd";
import { UserRoles } from "../enums/roles";
interface createUserFormProps {
  open: boolean | undefined;
  onClose: () => void;
}

const CreateUserForm: React.FC<createUserFormProps> = ({ open, onClose }) => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const { Title } = Typography;

  const handleSubmit = (values: any) => {
    const payload = {
      name: `${values.firstname} ${values.lastname}`,
      email: values.email,
      password: values.password,
      phone: values.phone,
      role: values.role,
    };
    console.log(payload);
    onClose();
  };

  return (
    <div>
      <Drawer open={open} onClose={onClose}>
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
              { required: true, message: "Fisrt name is required" },
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
            <Input placeholder="Enter First Name" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastname"
            rules={[
              { required: true, message: "Fisrt name is required" },
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
            <Input placeholder="Enter Last Name" />
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
            <Input placeholder="Enter Email" />
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
            <Input.Password placeholder="Enter Password" />
          </Form.Item>

          <Form.Item
            label="Phone No"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please Enter Phone Number",
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
            <Input placeholder="Enter Phone No" />
          </Form.Item>

          <Form.Item
            label="Role"
            name="role"
            rules={[
              {
                required: true,
                message: "Please Select a Role",
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

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Create
            </Button>
          </Form.Item>
        </Form>
        {/* </Card> */}
      </Drawer>
    </div>
  );
};

export default CreateUserForm;

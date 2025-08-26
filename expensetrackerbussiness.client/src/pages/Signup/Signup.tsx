import { Form, Input, Button, Typography, Col, Row, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import { FcGoogle } from "react-icons/fc";
import capsi from "../../assets/image.png";

interface signdata{
  firstname:string,
  lastname:string,
  businessname:string,
  email:string,
  phoneno:number,
  password:string,
  confirmpassword:string
}

const Signup: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // const onFinish = (values: any) => {
  //   console.log("Form Submitted", values);
  //   navigate("/:id");
  // };

  const onFinish = (values: signdata) => {
    const payload = {
      name: `${values.firstname} ${values.lastname}`,
      businessname:values.businessname,
      email: values.email,
      password: values.password,
      phoneno: values.phoneno,
      confirmpassword: values.confirmpassword,
    };
    console.log(payload);
    form.resetFields();
  };

  return (
    <div className="signup-wrapper">
      <Row className="signup-row">
        {/* Left Section (Form) */}
        <Col xs={24} md={12} className="form-column">
          <Form
            requiredMark={false}
            layout="vertical"
            form={form}
            onFinish={onFinish}
            style={{ width: "100%", maxWidth: 500 }}
          >
            <div
              style={{
                textAlign: "center",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
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
              <div>
                <Typography.Title
                  level={4}
                  style={{
                    height: 32,
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: 0,
                  }}
                >
                  Sign Up for an Account
                </Typography.Title>
              </div>

              <Typography.Title
                level={5}
                style={{
                  height: 24,
                  fontSize: 16,
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: "20px",
                }}
              >
                Track more, stress less
              </Typography.Title>
            </div>
            <div className="form">
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="First Name"
                    name="firstname"
                    rules={[
                      { required: true, message: "First name is required" },
                      {
                        min: 3,
                        message: "First name must be at least 3 characters",
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
                    hasFeedback
                  >
                    <Input placeholder="Enter first name" />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Last Name"
                    name="lastname"
                    rules={[
                      { required: true, message: "Last name is required" },
                      {
                        max: 30,
                        message: "Last name cannot exceed 15 characters",
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
                    hasFeedback
                  >
                    <Input placeholder="Enter last name" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                label="Business Name"
                name="businessname"
                rules={[
                  { required: true, message: "Business name is required" },
                  {
                    min: 3,
                    message: "Business name must be at least 3 characters",
                  },
                  {
                    whitespace: true,
                    message: "Business name cannot be empty",
                  },
                  {
                    pattern: /^[A-Z][a-zA-Z]*$/,
                    message:
                      "Business name must start with an uppercase letter and contain only letters",
                  },
                ]}
                hasFeedback
              >
                <Input placeholder="Enter business name" />
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
                hasFeedback
              >
                <Input placeholder="Enter email" />
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
                hasFeedback
              >
                <Input placeholder="Enter phone no." />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please enter a password" },
                  {
                    pattern:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,15}$/,
                    message:
                      "Must contain at least one number, one uppercase and lowercase letter, one special character, and be at least 8 to 15 characters",
                  },
                ]}
                hasFeedback
              >
                <Input.Password placeholder="Enter a strong password" />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="confirmpassword"
                dependencies={["password"]}
                rules={[
                  {
                    required: true,
                    message: "Please enter a correct Password",
                  },

                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(new Error("Password Not Match"));
                    },
                  }),
                ]}
                hasFeedback
              >
                <Input.Password placeholder="Enter a confirm password" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  style={{
                    height: 40,
                    background:
                      "linear-gradient(to bottom right, #48CAE4,#1667C2)",
                  }}
                >
                  Sign Up <ArrowRightOutlined style={{ marginLeft: 6 }} />
                </Button>
              </Form.Item>

              <Form.Item
                name="terms"
                valuePropName="checked"
                colon={false}
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(
                            new Error(
                              "You must accept the Terms and Conditions"
                            )
                          ),
                  },
                ]}
              >
                <Checkbox>
                  I accept Capsi Expense's{" "}
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Terms and Conditions
                  </a>
                </Checkbox>
              </Form.Item>

              <div
                style={{
                  textAlign: "center",
                  marginTop: "24px",
                }}
              >
                <div
                  style={{
                    color: "rgba(0, 0, 0, 0.45)",
                    fontSize: "15px",
                    marginBottom: "10px",
                  }}
                >
                  or continue with
                </div>
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

        {/* {/* Right Section *} */}
        <Col xs={24} md={12} className="right-column">
          <div className="right-column-content">
            <Typography.Title
              level={1}
              style={{
                height: 38,
                fontWeight: 600,
                fontSize: 30,
                color: "white",
              }}
            >
              Already Signed up?
            </Typography.Title>
            <Typography.Paragraph
              style={{ width: 449, height: 24, color: "white" }}
            >
              Log in to your account so you can continue tracking your expenses.
            </Typography.Paragraph>
            <Button
              htmlType="submit"
              onClick={() => navigate("/login")}
              style={{
                color: "white",
                height: 40,
                width: 140,
                padding: "10px",
                border: "1px solid white",
                backgroundColor: "transparent",
                marginTop: 10,
              }}
            >
              Sign In
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Signup;

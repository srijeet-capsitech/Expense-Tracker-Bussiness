import { Form, Input, Modal } from "antd";
interface departmentProps {
  open: boolean;
  onClose: () => void;
}

const CreateDepartmentForm: React.FC<departmentProps> = (props) => {
  const [form] = Form.useForm();
  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      console.log(values);
      props.onClose();
      form.resetFields();
    } catch (error) {
      console.log("Validation failed:", error);
    }
  };
  return (
    <div>
      <Modal
        okButtonProps={{
          style: {
            color: "white",
            width: 80,
            height: 30,
            background: "linear-gradient(to bottom right, #48CAE4, #1667C2)",
          },
        }}
        title="Add Department"
        open={props.open}
        onCancel={props.onClose}
        onOk={handleOk}
        okText="Save"
      >
        <Form form={form}>
          <Form.Item
            label="Department"
            name="department"
            rules={[
              {
                required: true,
                message: "Please enter the department name.",
              },
              {
                whitespace: true,
                message: "Department name cannot be empty.",
              },
              {
                max: 20,
                min: 5,
                message: "Department name must be between 5 and 20 characters",
              },
              {
                pattern: /^[A-Z][a-zA-Z]*$/,
                message:
                  "Department name must start with an uppercase letter and contain only letters",
              },
            ]}
          >
            <Input placeholder="Enter department name:" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CreateDepartmentForm;

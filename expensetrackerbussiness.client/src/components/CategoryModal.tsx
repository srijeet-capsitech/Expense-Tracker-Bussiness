import { Form, Input, Modal } from "antd";

import React from "react";

interface createCategoryProps {
  open: boolean | undefined;
  onClose: () => void;
}
const CategoryModal: React.FC<createCategoryProps> = ({ open, onClose }) => {
  const [form] = Form.useForm();
   const handleOk = async () => {
    try {
      const values = await form.validateFields(); 
      console.log(values);
      onClose();
      form.resetFields();
    } catch (error) {
      console.log("Validation failed:", error);
    }
  };
  return (
    <>
      <Modal open={open} onCancel={onClose} onOk={handleOk}>
        <Form form={form} layout="vertical">
          <Form.Item name="categoryName" label="Category Name" rules={[{
            required:true,
            message:"Please Enter Category name"
          },
          {
            pattern:/^[A-Za-z\s&-]+$/,
            message:"Category name can only include alphabets and some special characters like - and &"
          },
          {
            min:3,
            message:"Category name can't be less than 3 characters"
          },
          {
            max:25,
            message:"Category name can't be more than 25 characters"
          }]}>
            <Input placeholder="Enter Category Name" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CategoryModal;

import { Button, Form, Input, Modal } from "antd";

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
          <Form.Item name="categoryName" label="Category Name">
            <Input placeholder="Enter Category Name" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CategoryModal;

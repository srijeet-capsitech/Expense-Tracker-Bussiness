import { UserAddOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";
import CreateUserForm from "../../components/CreateUserForm";

const CreateUserPage: React.FC = () => {
  const [openCreateUserModal, setOpenCreateUserModal] = useState<
    boolean | undefined
  >(false);
  return (
    <>
      <Button
        icon={<UserAddOutlined />}
        onClick={() => setOpenCreateUserModal(true)}
      >
        Add User
      </Button>
      <CreateUserForm open={openCreateUserModal} onClose={()=>setOpenCreateUserModal(false)} />
    </>
  );
};

export default CreateUserPage;

import { UserAddOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";
import CreateUserForm from "../../components/CreateUserForm";
import CreateDepartment from "./CreateDepartment"

 
const CreateUserPage: React.FC = () => {
  const [openCreateUserModal, setOpenCreateUserModal] = useState<
    boolean | undefined
  >(false);
  return (
    <>
      <Button
      style={{color:"white",width:150,height:40,background:"linear-gradient(to bottom right, #48CAE4, #1667C2)"}}
        icon={<UserAddOutlined />}
        onClick={() => setOpenCreateUserModal(true)}
      >
        Add User
      </Button>
      <CreateUserForm open={openCreateUserModal} onClose={()=>setOpenCreateUserModal(false)} />
        <CreateDepartment/>
    </>
  );
};
 
export default CreateUserPage;
 
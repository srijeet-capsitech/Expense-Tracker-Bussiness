import { Button } from "antd";
import { useState } from "react";
import CreateDepartmentForm from "../../components/CreateDepartmentForm";
import { PlusOutlined } from "@ant-design/icons";

const CreateDepartment = () => {
    const [open,setOpen]=useState(false);
  return (
    <>
    <Button onClick={()=>setOpen(true)}
    icon={<PlusOutlined />}
     style={{color:"white",width:150,height:40,background:"linear-gradient(to bottom right, #48CAE4, #1667C2)"}}
      >
         Add Department
    </Button>
    <CreateDepartmentForm open={open} onClose={()=>setOpen(false)}/>
    </>
  )
}

export default CreateDepartment

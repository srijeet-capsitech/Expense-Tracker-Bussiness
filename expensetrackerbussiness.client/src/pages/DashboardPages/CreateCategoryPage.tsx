import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd'
import React, { useState } from 'react'
import CategoryModal from '../../components/CategoryModal';

const CreateCategoryPage:React.FC = () => {
    const [openCategoryModal,setOpenCategoryModal] = useState<boolean>(false);
  return (
    <>
        <Button onClick={()=>setOpenCategoryModal(true)} icon={<PlusOutlined/>}>Add Catgeory</Button>
        <CategoryModal open={openCategoryModal} onClose={()=>setOpenCategoryModal(false)}/>
    </>
  )
}

export default CreateCategoryPage

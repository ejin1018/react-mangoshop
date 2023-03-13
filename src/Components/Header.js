import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button,Space } from 'antd';
import { SearchOutlined,UploadOutlined } from '@ant-design/icons';

function Header(){
  const nav = useNavigate();
 return(
  <>
    <div id="header">
      <div id="header-area">
        <h1 onClick={()=>{nav("/")}}>
          <img src="../images/icons/logo.png" alt="로고" />
        </h1>
        <Space className="header-btns">
          <Button onClick={() => {nav('/Uploadpage')}} icon={<UploadOutlined />}>상품 등록하기</Button>
          <Button shape="circle" icon={<SearchOutlined />} />
        </Space>
      </div>
    </div>
  </>
 )
}

export default Header;
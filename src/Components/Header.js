import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header(){
  const nav = useNavigate();
 return(
  <>
    <div id="header">
      <div id="header-area">
        <h1 onClick={()=>{nav("/")}}>
          <img src="../images/icons/logo.png" alt="로고" />
        </h1>
      </div>
    </div>
  </>
 )
}

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import { CorpIntro,Terms } from '../Pages/Toe';

function Footer(){
  return(
    <>
      <div id="footer">
        <CorpIntro/>
        <Terms/>
        <Link to={`tel:123-1234`}>통신판매업신고번호: 123-1234</Link>
        <Link to={`tel:456-56-4564566`}>사업자등록번호: 456-56-4564566</Link>
        <Link to={`tel:789-78978`}>고객센터: 789-78978</Link>
      </div>
    </>
  )
}

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';

function CorpIntro(){
  return(
    <>
      <Link to="/CorpIntro">회사소개</Link>
    </>
  )
}
function Terms(){
  return(
    <>
      <Link to="/Terms">이용약관</Link>
    </>
  )
}

export {CorpIntro, Terms};
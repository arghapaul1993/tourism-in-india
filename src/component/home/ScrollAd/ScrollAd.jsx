import React from 'react';
import './ScrollAd.css';

import Ad1 from './imggg/img1.jpeg'

const ScrollAd = () => {
  return (
    <>
     <div className="marquee-container">
      <div className="marquee">
        <span>For Posting Ads just Contact with </span> &nbsp;
        <img src={Ad1} alt="" height={80} width={700}/>
      </div>
    </div>
    
    
    
    
    </>
  )
}

export default ScrollAd




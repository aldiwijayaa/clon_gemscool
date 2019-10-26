import React from 'react';

const BodyHeader= (props) =>{
  return(
    <div class="left_top">
      <ul class="head">
          <li>
              <a href="all.html">{props.title}</a>
          </li>
      </ul>
    </div>
  )
}
export default BodyHeader;
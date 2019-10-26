import React from 'react';
import icon1 from '../../../img/cross-remove-sign.png'

const ViewChat = (props) => {
  return (
    <div class="view_chat">
      <ul class="chat">
        <li>{props.name}</li>
        <li>{props.date}</li>
      </ul>
      <ul class="close">
        <li class="ex">{props.chat}</li>
        <div class="xx"><img src={icon1} alt=""/></div>
      </ul>
    </div>
  )
}
export default ViewChat;

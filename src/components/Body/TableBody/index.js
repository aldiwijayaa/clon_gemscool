import React from 'react';
import img1 from '../../img/cover-atlantica.jpg'

const TableBody = (props) => {
  return (
    <div class="table-left">
        <img src={props.img} alt="none"/>
        <div class="content-table">
            <ul class="table">
                <li><strong>{props.judul}</strong></li>
                <li>{props.event}</li>   
            </ul>
            <ul class="table_">
                <li>{props.date}</li>
                <li> {props.time}</li>
                <li><img src="https://img.gemscool.com/allservice/gemscool/megaphone_red.png" alt=""/><img src="https://img.gemscool.com/allservice/gemscool/view-14x27.png" alt=""/></li>
            </ul>
        </div>
    </div>
  )
}
export default TableBody;
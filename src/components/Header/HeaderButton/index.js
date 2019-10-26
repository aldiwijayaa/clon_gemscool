import React,{Fragment} from 'react';

const HeaderButton = () =>{
  return(
    <Fragment>
      <div class="button_login">
          <input type="submit" value="Login"/>
      </div>
      <div class="button_regis">
          <input type="submit" value="Register"/>
      </div>
    </Fragment>
  )
}
export default HeaderButton;
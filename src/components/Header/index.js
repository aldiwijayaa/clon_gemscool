import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderNavigasi from './HeaderNavigasi';
import HeaderButton from './HeaderButton'

const Header = () => {
  return (
    <div class="top-head">
      <HeaderLogo/>
      <HeaderNavigasi/>
      <HeaderButton/>
    </div>
  )
};
 

 export default Header;
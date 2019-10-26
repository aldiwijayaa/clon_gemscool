import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Sidebar from './components/Sidebar'
import logo from './logo.svg';
import './App.css';
import icon1 from './img/cross-remove-sign.png'
import img1 from './img/cover-atlantica.jpg'

function App() {
  return (
    <main class="container">
        <Header />
        <Body />
        
         <div class="wrap-cp">
                <div class="company">
                    <div class="left-cp">
                        <img src="https://img.gemscool.com/allservice/gemscool/media/footer/kreon_logo.png" alt=""/>
                        <p>Gedung Gandaria 8 Lt.20 Unit B-C, Gandaria City
                            <br/>
                            Jl.Sultan Iskandar Muda Kebayoran Lama Jakarta Selatan, Telp. 021-29303499
                            <br/>
                            Copyright © 2019 PT. KREON. All Right Reserved.
                        </p>
                    </div>
                    <div class="right-cp">
                        <div class="contact">CONNECT WITH US</div>
                        <div class="contact-with-us">
                            <ul class="cp-li">
                                <li><a href="https://www.facebook.com/gemscool.official"> <img src="https://img.gemscool.com/allservice/gemscool/2016/sns/sns/fb.png" alt=""/></a></li>
                                <li><a href="https://https://twitter.com/KreonGemscool"> <img src="https://img.gemscool.com/allservice/gemscool/2016/sns/sns/twitter.png" alt=""/></a></li>
                                <li><a href="https://www.youtube.com/user/gemscoolkreon"> <img src="https://img.gemscool.com/allservice/gemscool/2016/sns/sns/utub.png" alt=""/></a></li>
                                <li><a href="https://www.instagram.com/gemscool_/"> <img src="https://img.gemscool.com/allservice/gemscool/2016/sns/sns/insta.png" alt=""/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
            </main> 
)
};

export default App;

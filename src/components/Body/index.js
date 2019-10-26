import React, { Fragment } from 'react';
import img1 from '../img/cover-atlantica.jpg'
import Sidebar from '../Sidebar'
import TableBody from './TableBody'
import img from '../img/l.jpg'
import img2 from '../img/dr.jpg'
import img3 from '../img/s.jpg'
import img4 from '../img/ls-1.jpg'
import img5 from '../img/ls.jpg'
import BodyHeader from '../Body/BodyHeader'

export const Body = () =>{
  return(
    <Fragment>
      <div class="banner"><img src="https://img.gemscool.com/service/AD/adtype_189/9136_20190723.jpg" alt="spoiler"/></div>
      <div class="wrapping">
      <div class="row">
          <div class="left"> 
              <h3>NEWS</h3>
              <div id="top">
              <BodyHeader title='ALL'/>
              <BodyHeader title='NOTICE'/>
              </div>
          <div class="wrap_left">
              <div class="item_left">
                  <select name="pilih" id="">
                  <option value="all">ALL</option>
                  <option value="ls">LOST SAGA</option>
                  <option value="alc">ATLANTICA</option>
                  <option value="icr">ICARUS</option>
                  <option value="ln">LUNA</option>
                  <option value="gs">GEMSCOOL</option>
                  </select>
                </div>
                <TableBody img={img} judul='Spanding Lost Saga Championship day 2' event='Mari datang dan ramaikan jcc senyan dengan kemerihan event ini, banyak hal yang dapat di peroleh,mulai dari headset gamming dan bebagai macam hadiah lainya . akan di laksanakan pada tanggal 10 november 2019 Pukul:09:00.WIB s.d Selesai' date='(2019-10-11)' time='10:02 Wib.'/>
                <TableBody img={img1} judul='Top-up Cash-back 70%' event='Untuk Player LS yang belum pernah top-up akan di mendapatkan 70% cash-back pada event kali ini dari tanggal 27-30 Oktober' date='(2019-26-10)' time='11:30 Wib.'/>
                <TableBody img={img2} judul='Hero Baru Chou' event='Hero ini bisa didapatkan dengan harga discount 30% untuk pembelian dari tanggal 30 Oktober-2 November' date='(2019-28-10)' time='11:02 Wib'/>
                <TableBody img={img3} judul='Maintenance!!!' event='Untuk Player Yang sedang di loby agar segera log-out karna akan ada maintenance mingguan untuk upgrade sistem dan perbaikan beberapo bug dan jaringan yang tidak stabil di beberapa daerah maintenance ini diperkirakan dari pukul 7:35 s.d 9:30 Wib' date='(2019-10-10)' time='07:30 Wib'/>
                <TableBody img={img4} judul='Banned List' event='Dikarnakan Banyak Player yang melakukan kecurang,sistem kami mediteksi bahwa adanya sebuah program ilegal yang dapat merubah sistem dan cara pemainan. Maka kami akan tindak tegas untuk yang melakukanya Akun anda akan kami banner permanen. sekian dan terimakasih' date='(2019-7-10)' time='14:22 WIb'/>
                <TableBody img={img5} judul='Indo Pride' event='Dukung Team LS indonesia untuk tournament di los Angels AS pada bulan agustus ini,agar mereka bisa mendapatkan trophy .maju terus player LS indo #indopride' date='2019-17-08' time='10:00 Wib'/>
             </div>
            </div> 
          <Sidebar/>
        </div>
      </div>
    </Fragment>
)
};

export default Body;
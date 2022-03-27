/*
 * @Author: your name
 * @Date: 2022-03-26 17:02:24
 * @LastEditTime: 2022-03-27 16:56:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \demo\src\Header.js
 */
import back from "../../image/return.png";
import more from "../../image/组 95.png"
import './Header.css';


function Header () {
  return (
      <div className='top'>
        <div className='left'>
          <a href='javascirpt:void(0)' className='return'><img src={back} alt=''/></a>
        </div>
        <div className='topic'>木犀官方周边纪念品</div>
        <div className='right'>
          <a href='javascirpt:void(0)' className='more'><img src={more} alt=''/></a>
        </div>
      </div>
  )
}

export default Header
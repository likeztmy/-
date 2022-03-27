/*
 * @Author: your name
 * @Date: 2022-03-26 17:02:24
 * @LastEditTime: 2022-03-27 16:54:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \demo\src\Content.js
 */
import zhou from '../../image/周边元素.png'
import t from '../../image/标题.png'
import zu from '../../image/组 91.png'
import p1 from "../../image/蒙版组 2.png"
import p2 from '../../image/蒙版组 5.png'
import p3 from '../../image/蒙版组 6.png'
import p4 from '../../image/组 93.png'
import p5 from '../../image/组 92.png'
import p6 from '../../image/product.png'
import p7 from '../../image/组 90.png'
import p8 from '../../image/组 97.png'
import p9 from '../../image/组 94.png'
import end from '../../image/桂花1.png'
import './Content.css';

function Content() {
    return (
        <div className="content">
            {/* 广告面  */}
            <div className="banner">
                <div className="zbys1"><img src={zhou} alt=''/></div>
                <div className="title1"><img src={t} alt=''/></div>
                <div className='zbys2'><img src={zhou} alt=''/></div>
                <div className='introduce'><img src={zu} alt=''/></div>
            </div>

            {/* 图片展示 */}
            <div className='img-show'>
                <div className="show1">
                    <img src={p1} alt=""/>
                </div>

                <div className="show2">
                    <img src={p2} alt=""/>
                </div>

                <div className="show3">
                    <img src={p3} alt=""/>
                </div>
            </div>

            {/* 文段 */}
            <div  className="words">
                <div className='P'>
                    <div> 
                        你或许经历过<br/>
                        教学楼早起抢座的百米冲刺<br/>
                        体育场上每年两次的体测“哀嚎”
                    </div>

                    <div>
                        无论是守点抢课的惊喜<br/>
                        还是进错教室的尴尬<br/>
                    </div>

                    <div>
                        过去吃过的东南门小吃<br/>
                        现在佑铭夜晚的灯火通明<br/>
                    </div>

                    <div>
                        “我想把这四年<br/>
                        喜怒哀乐<br/>
                        全部都装下”<br/>
                    </div>
                </div>
                {/* 背景图片 */}
                <div className='pic1'>
                    <img src={p4} alt=''/>
                </div>
            </div>

            {/* 产品参数 */}
            <div className='detail'>
                <div className='title2'><img src={p5} alt=''/></div>
                <div className='product'>
                    <div className='bag'><img src={p6} alt=''/></div>
                    <div className='num1'><img src={p7} alt=''/></div>
                    <div className='num2'><img src={p8} alt=''/></div>
                </div>
                <div className='pic2'><img src={p9} alt=''/></div>
                <div className='msg'>
                    <div className='msg1'>
                        产品材质：100%棉<br/>
                        产品底色：米色<br/>
                        尺寸：33cm*35cm
                    </div>
                    <div className='msg2'>#更多周边信息请持续关注木犀团队～</div>
                    <div className='msg3'>木犀团队官Q：2017304902</div>
                </div>
                <div className='guihua'><img src={end} alt=''/></div>
            </div>
        </div>
    )
}

export default Content;
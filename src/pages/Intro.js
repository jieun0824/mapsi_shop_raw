import styles from '../css/intro.module.css';
import React, {useState, useEffect} from 'react';
import pic1 from '../img/pic1.jpg';
import pic2 from '../img/pic2.jpg';
import pic3 from '../img/pic3.jpg';
import pic4 from '../img/pic4.jpg';
import pic5 from '../img/pic5.jpg';
import pic6 from '../img/pic6.jpg';
import pic7 from '../img/pic7.jpg';
import logo from '../img/logo.png';
import {useNavigate} from 'react-router-dom'
import intro from '../img/intro2.jpg';
import { motion } from "framer-motion";

function Intro(){
    let navigate = useNavigate();
    // const [currentImageNum, setCurrentImageNum] = useState(1);
    // const changeBackground = () => {
    //     setCurrentImageNum((currentImageNum+1)%7);
    // };
    // const randomGame = setTimeout(()=>{
    //     changeBackground();
    // }, 4000);
    // let array1 = [pic1, pic2, pic3, pic4, pic5, pic6, pic7]

    return(
        <motion.div
        /* 2. 원하는 애니메이션으로 jsx를 감싸준다 */
             initial={{opacity: 0}}
             animate={{opacity: 1}}
             exit={{opacity: 0}}
             >
        <div className={styles.background} onClick={()=>{navigate('/main')}}>
            {/* <img src={array1[currentImageNum]} width='100%' className={styles.image}/> */}
            <div className={styles.imagebox}>
                <img src={intro} width='100%' className={styles.image}/> 
            </div>
            <div className={styles.logo}>
                <img src={logo}/>
            </div>
            <div className={styles.define}>Sinchon Pop-up</div>
            <div className={styles.sign}>Click anywhere➤</div>
        </div>
        </motion.div>
    )
}

export default Intro;
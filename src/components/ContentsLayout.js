import styles from './contentslayout.module.css';
import {useNavigate} from 'react-router-dom';
import logo from '../img/logo.png';
import {useState} from 'react';


function ContentsLayout({children}){
    let navigate = useNavigate();
    //     const style = {
    //         backgroundColor:"black",
    //         height:"10px",
    //         position: "fixed",

    //     }
    // let [currentHeight, setHeight] = useState(0);
    // let [scrollAmount, setAmount] = useState(0);


    return(
        <div className ={styles.container} >
                <div className={styles.bg}></div>
                {/* <div className={styles.progressBar} style={style}></div> */}
                <div className={styles.wrap}>
                    <div className={styles.logo} onClick={()=>{navigate('/main')}}>
                        <img src={logo}/>
                    </div>
                    <div className={styles.children}>
                        {children}
                    </div>


                </div>
                <footer>
                    <div className={styles.copyright}>
                    Copyright 2023.MAPSI.All right reserved.<br/>
                    instagram@mapsi.zine
                    </div>
                </footer>
        </div>
    )
}

export default ContentsLayout;
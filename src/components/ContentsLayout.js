import styles from './contentslayout.module.css';
import {useNavigate} from 'react-router-dom';
import logo from '../img/logo.png';


function ContentsLayout({children}){
    let navigate = useNavigate();
    return(
        <div className ={styles.container}>
            <div className={styles.bg}></div>
            <div className={styles.logo} onClick={()=>{navigate('/main')}}>
                <img src={logo}/>
            </div>
                {children}
                <footer>
                    <div className={styles.copyright}>
                    Copyright 2023.MAPSI.All right reserved.
                    </div>
                </footer>
        </div>
    )
}

export default ContentsLayout;
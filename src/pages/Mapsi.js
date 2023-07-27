import styles from '../css/mapsi.module.css';
import {useNavigate} from 'react-router-dom';
import logo from '../img/logo2.png';
import ContentsLayout from './../components/ContentsLayout';
import { motion } from "framer-motion";

function Mapsi(){

    return(
        <motion.div
        /* 2. 원하는 애니메이션으로 jsx를 감싸준다 */
             initial={{opacity: 0}}
             animate={{opacity: 1}}
             exit={{opacity: 0}}
             >
          <ContentsLayout>
              <div className={styles.explain}>
                  <div className={styles.content}>
                      <div className={styles.logo}>
                      <img src={logo}/>
                      </div>

                      <div className={styles.text}>
                      맵시는 맵시입니다.<br/>
                      패션 화보를 찍죠
                      </div>



                        
                      </div>  
              </div>
              </ContentsLayout>
            </motion.div>
    )
}

export default Mapsi;
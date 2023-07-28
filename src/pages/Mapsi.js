import styles from '../css/mapsi.module.css';
import {useNavigate} from 'react-router-dom';
import logo from '../img/logo2.png';
import ContentsLayout from './../components/ContentsLayout';
import { motion } from "framer-motion";
import crew from '../crew';
import { useState } from 'react';

function Mapsi(){
  let [data] = useState(crew);
    return(
        <motion.div
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
                      맵시는 맵시입니다<br/>
                      패션 화보를 찍죠 <br/>
                      <br/>
                      (뻐끔뻐끔)
                      </div>
                      <div className={styles.crew}>
                        <div className={styles.title}>CREW</div>
                        <div className={styles.crewinfo}>
                          {
                            data.map(function(a,i){
                              return(
                                <div className={styles.crewcontents}>
                                  <div className={styles.border}>
                                  <span className={styles.name}> {a.name}</span>
                                  <span className={styles.role}> / {a.role}</span>


                                  </div>
                                  {/* <div className={styles.comment}>{a.comment}</div> */}
                                </div>
                          )
                        })
                          }
                        </div>
                      </div>



                        
                </div>  
              </div>
              </ContentsLayout>
            </motion.div>
    )
}

export default Mapsi;
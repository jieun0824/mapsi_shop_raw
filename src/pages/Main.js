import background from '../img/background.jpg';
import background1 from '../img/background1.jpg';
import styles from '../css/main.module.css';
import sinchon from '../img/pic1.jpg';
import pic1 from '../img/pic4.jpg';
import pic2 from '../img/pic6.jpg';
import logo from '../img/logo.png';
import sticker from '../img/sticker.jpg'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import data from '../data';
import {useNavigate} from 'react-router-dom';
import Modal from '../components/Modal'
import ContentsLayout from '../components/ContentsLayout';
import pic4 from '../img/pic8.jpg';
import pic3 from '../img/pic9.jpg';
import pic5 from '../img/pic5.jpg';
import { motion } from "framer-motion";


function Card(props){
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
};
    return(
      <div className={styles.contents}>
        <img src={props.image} className={styles.image} onClick={showModal}/>
        {modalOpen && <Modal setModalOpen={setModalOpen} />}
        <div className={styles.sub}>{props.data.content}</div>
        <div className={styles.bigo}>{props.data.sub}</div>
        <div className={styles.price}>{props.data.price}</div>

      </div>
    )
  }

function Main(){
    let [products] = useState(data);
    let navigate = useNavigate();
    let array1 = [pic1, pic2, pic3, pic4, pic5]


    return(
      <motion.div
      /* 2. 원하는 애니메이션으로 jsx를 감싸준다 */
           initial={{opacity: 0}}
           animate={{opacity: 1}}
           exit={{opacity: 0}}
           >
        <ContentsLayout>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img src={sinchon} text="First slide" />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img src={pic2} text="First slide" />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item onClick={()=>{navigate('/mapsi_about')}}>
                    <img src={background1} text="First slide" />
                    <Carousel.Caption>
                    <h3>MAPSI</h3>
                    <p>맵시는 맵시입니다</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className={styles.ment}>
            </div>
            <div className={styles.products}>All products</div>
            <div className="row">
                {
                products.map(function(a, i){
                  return(
                    <Card data={a} image={array1[i]}/>
                  )
                })
                }
              </div>
          </ContentsLayout>
          </motion.div>
        
    )
}





export default Main;
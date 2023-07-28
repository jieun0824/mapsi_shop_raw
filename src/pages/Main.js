import styles from '../css/main.module.css';
import pic1 from '../img/pic4.jpg';
import pic2 from '../img/pic6.jpg';
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
import popup1 from '../img/popup1.jpg';
import popup2 from '../img/popup2.jpg';
import poster from '../img/poster2.png';
import mapsi from '../img/wearemapsi.png';


function Card(props){
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
    console.log(props.key)
};
    return(
      <div className={styles.contents}>
        <img src={props.image} className={styles.image} onClick={showModal}/>
        {modalOpen && <Modal setModalOpen={setModalOpen} detailcontent = {props.data.detailcontent} detailimage={props.data.detailimage} index={props.data.id}
        offline={props.data.offline} online={props.data.online}
        />}
        <div className={styles.information}>
          <div className={styles.title}>{props.data.title}</div>
          <div className={styles.sub}>{props.data.content}</div>
          <div className={styles.bigo}>{props.data.sub}</div>
          <div className={styles.price}>{props.data.price}</div>
        </div>



      </div>
    )
  }

function Main(){
    let [products] = useState(data);
    let navigate = useNavigate();
    let array1 = [pic1, pic2, pic3, pic4, pic5, poster]


    return(
      <motion.div
      /* 2. 원하는 애니메이션으로 jsx를 감싸준다 */
           initial={{opacity: 0}}
           animate={{opacity: 1}}
           exit={{opacity: 0}}
           >
        <ContentsLayout>
            <Carousel>
                <Carousel.Item interval={1000} onClick={()=>{navigate('/mapsi_about')}}>
                <img src={mapsi} text="First slide"/>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img src={popup1} text="First slide" />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img src={popup2} text="First slide" />
                    <Carousel.Caption>
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
                    <Card data={a} image={array1[i]} key={i}/>
                  )
                })
                }
              </div>
          </ContentsLayout>
          </motion.div>
        
    )
}





export default Main;
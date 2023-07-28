import styles from './modal.module.css';
import clothdetail from '../img/clothdetail.jpg';
import illustickerdetail from '../img/illustickerdetail.png';
import postdetail from '../img/postdetaiil.png';
import stickerdetail from '../img/stickerdetail.png'
import posterImage from '../img/posterImage.png';
import vintagedetail from '../img/vintagedetail.jpg';

function Modal({ setModalOpen, detailimage, detailcontent, index, offline, online }){
    
        // 모달 끄기 
        const closeModal = () => {
            setModalOpen(false);
        };
        console.log(detailcontent)
        console.log(detailimage)
        console.log(index)

        let array1 = [clothdetail, stickerdetail, illustickerdetail, postdetail, vintagedetail, posterImage]
    
    
    return(
        <div className={styles.background}>
            <div className={styles.container}>

                <button className={styles.close} onClick={closeModal}>
                    X
                </button>
                <div className={styles.contents}>
                    <div className={styles.image}>
                        <img src={array1[index]}/>
                    </div>
                    <div className={styles.detailcontent}>{detailcontent}</div>
                    <div className={styles.shopinfo}>
                        <div className={styles.bold}>{online}</div>
                    </div>
                </div>
            </div>
        </div>
    )

    }

export default Modal;
import styles from './modal.module.css';

function Modal({ setModalOpen, id, title, content, writer }){
    
        // 모달 끄기 
        const closeModal = () => {
            setModalOpen(false);
        };
    
    
    return(
        <div className={styles.background}>
            <div className={styles.container}>

                <button className={styles.close} onClick={closeModal}>
                    X
                </button>
                <p>상세내용 들어갈것</p>
            </div>
        </div>
    )

    }

export default Modal;
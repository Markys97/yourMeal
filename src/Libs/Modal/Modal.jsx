import './modal.css'
import {useContext} from 'react'
import { ModalContext } from '../App/App';



function Modal({children}) {
  const {stateGlobalInModal} = useContext(ModalContext)
  const {modal:[isOpenModal,setIsOpenModal]}= stateGlobalInModal;
  const closeModal = () => setIsOpenModal(() => false)
  return (
    <div className="modal">
        <div className="modal__container">
            <div onClick={closeModal} className="modal__close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5.07422" y="5.28249" width="1" height="20" transform="rotate(-45 5.07422 5.28249)" fill="#B1B1B1"/>
                <rect x="5.78125" y="19.4246" width="1" height="20" transform="rotate(-135 5.78125 19.4246)" fill="#B1B1B1"/>
                </svg>
            </div>
            <div className="modal__content">
                {
                   children
                }
            </div>
        </div>
    </div>
  )
}

export default Modal
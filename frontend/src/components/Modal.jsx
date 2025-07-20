import React from 'react'
import { buttonStyles, modalStyles as styles} from '../assets/dummystyle'
import {X} from 'lucide-react'


const Modal = (
    {children, isOpen, onClose, title, hideHeader, showActionBtn, actionBtnIcon = null,
    actionBtnText, onActionClick=()=>{},
    }
) => {
    if (!isOpen) return null;
    return (  
        <div className={styles.overlay}>
            <div className={styles.container}>
                {!hideHeader && (
                    <div className={styles.header}>
                        <h2 className={styles.title}>{title}</h2>

                        {showActionBtn &&
                        (
                            <button className={styles.actionButton} onClick={onActionClick}>
                                {actionBtnIcon}
                                {actionBtnText}
                            </button>
                        )}
                    </div>
                )}

                <button type="button" className={styles.closeButton} onClick={onClose}>
                    <X size={20}/>

                </button>
        
            </div>
        
        </div>
  )
}

export default Modal

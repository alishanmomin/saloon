import React, { useEffect, useRef } from 'react'
import Clickoutside from '../Clickoutside/Clickoutside';
import crossImg from "../../assets/images/cross.png"
import acceptImg from "../../assets/images/accept.png"


const Confirmation = ({ setModal, handleModal, tick }) => {
    const Ref = useRef();
    const Ref2 = useRef();



    useEffect(() => {
        Clickoutside(Ref, Ref2, setModal)
        // eslint-disable-next-line
    }, []);

    return (
        <div ref={Ref} className='confirmation'>
            <div ref={Ref2} className='confirmation_inner'>
                <div className='confirmation_img'>
                    <img src={tick ? crossImg : acceptImg} alt="crossImg" />
                </div>
                <p className='confirmation_topHead'>Are you sure?</p>
                <div className='confirmation_btnGrid'>
                    <button onClick={() => handleModal('yes')} className={tick ? 'confirmation_btnRed' : "confirmation_btn "}>Yes</button>
                    <button onClick={() => setModal("")} className='confirmation_btn confirmation_no'>No</button>
                </div>
            </div>
        </div>
    )
}

export default Confirmation
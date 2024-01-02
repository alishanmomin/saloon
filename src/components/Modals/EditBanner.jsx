import React, { useRef, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Clickoutside from '../Clickoutside/Clickoutside'
import uploadIcon from "../../assets/images/uploadIcon.png"
import { FaRegTrashAlt } from "react-icons/fa";

const EditBanner = ({ setModal }) => {
    const [uploadImg, setUploadImg] = useState("")
    const ref1 = useRef()
    const ref2 = useRef()
    const inputRef = useRef()

    // handle file upload
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setUploadImg(URL.createObjectURL(file));
        inputRef.current.value = null
    };


    const handleAdd = async () => {
        if (!uploadImg) {
            toast.warning("Banner required")
        } else {
            setModal('')
            toast.success("Banner Updated Succesfully")
        }

    }

    useEffect(() => {
        Clickoutside(ref1, ref2, setModal)
        // eslint-disable-next-line
    }, [])


    return (
        <div ref={ref1} className='addProductCategory'>
            <div ref={ref2} className='addProductCategory_inner'>
                <div className='addProductCategory_topHead'>
                    <p>Edit Banner</p>
                </div>

                <div style={{ display: "flex", justifyContent: "center", width: "100%", }}>
                    <div className="addProductCategory_imgWrap">
                        {uploadImg &&
                            <div onClick={() => setUploadImg("")} className='addProductCategory_bgColor'>
                                <FaRegTrashAlt className='addProductCategory_deleteIcon' />
                            </div>
                        }
                        <img
                            src={uploadImg ? uploadImg : uploadIcon}
                            alt="saleUserIcon"
                        />
                        <input ref={inputRef} accept="image/*" type="file" onChange={(e) => handleFileUpload(e)} />
                    </div>
                </div>

                <div className='addProductCategory_inputWrap'>
                    <div className='addProductCategory_inputSec'>
                        <input type="text" placeholder='Enter URL' />
                    </div>

                    <div className='addProductCategory_done'>
                        <button onClick={() => handleAdd()} >Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditBanner
import React, { useRef, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Clickoutside from '../Clickoutside/Clickoutside'
import uploadIcon from "../../assets/images/uploadIcon.png"
import { FaRegTrashAlt } from "react-icons/fa";
import { CreateBanner } from '../../utilities/api';


const AddBanner = ({ setModal, getBanners }) =>
{
    const [uploadImg, setUploadImg] = useState("")
    const ref1 = useRef()
    const ref2 = useRef()
    const inputRef = useRef()
    const [inputValues, setInputValues] = useState({
        image: "https://menshaircuts.com/wp-content/uploads/2023/02/tp-low-fade-haircut-1.jpg"
    })

    // handle value change
    const handleValueChange = (e) =>
    {
        setInputValues({ ...inputValues, [e?.target?.name]: e?.target?.value })
    }

    // handle file upload
    const handleFileUpload = (e) =>
    {
        const file = e.target.files[0];
        setUploadImg(URL.createObjectURL(file));
        inputRef.current.value = null
    };


    const handleAdd = async () =>
    {
        if (!inputValues?.link)
        {
            toast.warning("Link required")
        } else
        {
            try
            {
                const data = await CreateBanner(inputValues)
                if (data?.message === "banner created successfully")
                {
                    setModal('')
                    toast.success("Banner created succesfully")
                    getBanners()
                } else
                {
                    toast.error("Some error occurred")
                }

            } catch (error)
            {
                toast.error("Some error occurred")
            }
        }

    }

    useEffect(() =>
    {
        Clickoutside(ref1, ref2, setModal)
        // eslint-disable-next-line
    }, [])


    return (
        <div ref={ref1} className='addProductCategory'>
            <div ref={ref2} className='addProductCategory_inner'>
                <div className='addProductCategory_topHead'>
                    <p>Add Banner</p>
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
                        <input ref={inputRef} type="file" accept="image/*" onChange={(e) => { handleFileUpload(e) }} />
                    </div>
                </div>

                <div className='addProductCategory_inputWrap'>
                    <div className='addProductCategory_inputSec'>
                        <input onChange={handleValueChange} name="link" type="text" placeholder='Enter URL' />
                    </div>

                    <div className='addProductCategory_done'>
                        <button onClick={() => handleAdd()} >Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBanner
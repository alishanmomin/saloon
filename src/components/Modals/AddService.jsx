import React, { useRef, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Clickoutside from '../Clickoutside/Clickoutside'
import uploadIcon from "../../assets/images/uploadIcon.png"
import { FaRegTrashAlt } from "react-icons/fa";
import { CreateCategory } from '../../utilities/api';

const AddService = ({ setModal, getCategories }) =>
{

    const [inputValues, setInputValues] = useState({
        image: "https://menshaircuts.com/wp-content/uploads/2023/02/tp-low-fade-haircut-1.jpg"
    })
    const [uploadImg, setUploadImg] = useState("")
    const ref1 = useRef()
    const ref2 = useRef()
    const inputRef = useRef()

    // handle value change
    const handleValueChange = (e) =>
    {
        setInputValues({ ...inputValues, [e?.target?.name]: e?.target?.value })
    }

    const handleEdit = async () =>
    {
        if (!inputValues?.heading)
        {
            toast.warning("Service name required")
        }
        else if (!inputValues?.text)
        {
            toast.warning("Service description required")
        }
        else
        {
            try
            {
                const data = await CreateCategory(inputValues)
                if (data?.message === "category added successfully")
                {
                    setModal('')
                    toast.success("Service created succesfully")
                    getCategories()
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



    // handle file upload
    const handleFileUpload = (e) =>
    {
        const file = e.target.files[0];
        setUploadImg(URL.createObjectURL(file));
        inputRef.current.value = null
    };


    // const handleAdd = async () => {
    //     if (!uploadImg) {
    //         toast.warning("Banner required")
    //     } else {
    //         setModal('')
    //         toast.success("Banner Created Succesfully")
    //     }

    // }

    useEffect(() =>
    {
        Clickoutside(ref1, ref2, setModal)
        // eslint-disable-next-line
    }, [])


    return (
        <div ref={ref1} className='addProductCategory'>
            <div ref={ref2} className='addProductCategory_inner'>
                <div className='addProductCategory_topHead'>
                    <p>Add Service</p>
                </div>
                <div className='addProductCategory_inputWrap'>

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
                    <div className='addProductCategory_inputSec'>
                        <input onChange={handleValueChange} name="heading" type="text" placeholder='Enter service name' />
                    </div>
                    <div className='addProductCategory_inputSec'>
                        <input onChange={handleValueChange} name="text" type="text" placeholder='Enter service description' />
                    </div>

                    <div className='addProductCategory_done'>
                        <button onClick={() => handleEdit()}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddService
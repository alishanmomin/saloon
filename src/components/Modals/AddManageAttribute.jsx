import React, { useRef, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Clickoutside from '../Clickoutside/Clickoutside'
import uploadIcon from "../../assets/images/uploadIcon.png"
import { FaRegTrashAlt } from "react-icons/fa";
import { CreateService } from '../../utilities/api';

const AddManageService = ({ setModal, getServiceTypes, categoryId }) =>
{

    const [inputValues, setInputValues] = useState({
        image: "https://menshaircuts.com/wp-content/uploads/2023/02/tp-low-fade-haircut-1.jpg",
        categoryId: categoryId
    })
    const [uploadImg, setUploadImg] = useState("")

    const ref1 = useRef()
    const ref2 = useRef()
    const inputRef = useRef()

    const handleValueChange = (e) =>
    {
        setInputValues({ ...inputValues, [e?.target?.name]: e?.target?.value })
    }

    const handleAdd = async () =>
    {
        if (!inputValues?.service)
        {
            toast.warning("Service type name required")
        }
        else if (!inputValues?.price)
        {
            toast.warning("Service price required")
        }
        else
        {
            try
            {
                const data = await CreateService(inputValues)
                if (data?.message === "services create successfully")
                {
                    setModal('')
                    toast.success("Service type created succesfully")
                    getServiceTypes()
                } else
                {
                    toast.error("Some error occurred")
                }

            } catch (error)
            {
                toast.error("Server error")
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


    useEffect(() =>
    {
        Clickoutside(ref1, ref2, setModal)
        // eslint-disable-next-line
    }, [])


    return (
        <div ref={ref1} className='addProductCategory'>
            <div ref={ref2} className='addProductCategory_inner'>
                <div className='addProductCategory_topHead'>
                    <p>Add Service Type</p>
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
                        <input onChange={handleValueChange} name="service" type="text" placeholder='Enter service type' />
                    </div>
                    <div className='addProductCategory_inputSec'>
                        <input onChange={handleValueChange} name="price" type="number" placeholder='Enter price' />
                    </div>

                    <div className='addProductCategory_done'>
                        <button onClick={handleAdd}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddManageService
import React, { useRef, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Clickoutside from '../Clickoutside/Clickoutside'
import uploadIcon from "../../assets/images/uploadIcon.png"
import { FaRegTrashAlt } from "react-icons/fa";
import { UpdateService } from '../../utilities/api';

const EditManageService = ({ setModal, service, getServiceTypes }) =>
{

    const [inputValues, setInputValues] = useState({
        serviceId: service?.id,
        image: "https://menshaircuts.com/wp-content/uploads/2023/02/tp-low-fade-haircut-1.jpg",
        service: service?.service,
        price: service?.price
    })
    const ref1 = useRef()
    const ref2 = useRef()

    const [uploadImg, setUploadImg] = useState("")
    const inputRef = useRef()

    // handle file upload
    const handleFileUpload = (e) =>
    {
        const file = e.target.files[0];
        setUploadImg(URL.createObjectURL(file));
        inputRef.current.value = null
    };

    const handleValueChange = (e) =>
    {
        setInputValues({ ...inputValues, [e?.target?.name]: e?.target?.value })
    }

    const handleEdit = async () =>
    {
        if (!inputValues?.service)
        {
            toast.warning("Service name required")
        }
        else if (!inputValues?.price)
        {
            toast.warning("Service price required")
        }
        else
        {
            try
            {
                const data = await UpdateService(inputValues)
                if (data?.message === "service updated successfully")
                {
                    setModal('')
                    toast.success("Service updated succesfully")
                    getServiceTypes()
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
                    <p>Edit Service</p>
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
                        <input type="text" placeholder='Enter service name' name='service' value={inputValues?.service} onChange={handleValueChange} />
                    </div>
                    <div className='addProductCategory_inputSec'>
                        <input type="text" placeholder='Enter price' name='price' value={inputValues?.price} onChange={handleValueChange} />
                    </div>

                    <div className='addProductCategory_done'>
                        <button onClick={() => handleEdit()}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditManageService
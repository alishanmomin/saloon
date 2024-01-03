import React, { useRef, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Clickoutside from '../Clickoutside/Clickoutside'
import uploadIcon from "../../assets/images/uploadIcon.png"
import { FaRegTrashAlt } from "react-icons/fa";
import { UpdateCategory } from '../../utilities/api';

const EditProductCategory = ({ setModal, category, getCategories }) =>
{

    const [inputValues, setInputValues] = useState({
        categoryId: category?.id,
        image: "https://menshaircuts.com/wp-content/uploads/2023/02/tp-low-fade-haircut-1.jpg",
        heading: category?.heading,
        text: category?.text
    })
    const ref1 = useRef()
    const ref2 = useRef()

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
                const data = await UpdateCategory('/updateCategory', inputValues)
                if (data?.message === "category updated successfully")
                {
                    setModal('')
                    toast.success("Service updated succesfully")
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

    const [uploadImg, setUploadImg] = useState("")
    const inputRef = useRef()

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
                        <input onChange={handleValueChange} value={inputValues?.heading} name="heading" type="text" placeholder='Enter service name' />
                    </div>
                    <div className='addProductCategory_inputSec'>
                        <input onChange={handleValueChange} value={inputValues?.text} name="text" type="text" placeholder='Enter service description' />
                    </div>

                    <div className='addProductCategory_done'>
                        <button onClick={() => handleEdit()}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProductCategory
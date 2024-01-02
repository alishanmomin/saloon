import React, { useRef, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Clickoutside from '../Clickoutside/Clickoutside'

const AddProductAttribute = ({ setModal }) => {
    const [name, setName] = useState("")
    const ref1 = useRef()
    const ref2 = useRef()

    const handleAdd = async () => {
        if (!name) {
            toast.warning("Product Attribute name required")
        } else {
            setModal('')
            toast.success("Product Attribute Created Succesfully")
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
                    <p>Add Product Attribute</p>
                </div>
                <div className='addProductCategory_inputWrap'>
                    <div className='addProductCategory_inputSec'>
                        <input type="text" placeholder='Enter Product Attribute name' onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className='addProductCategory_done'>
                        <button onClick={() => handleAdd()} >Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProductAttribute
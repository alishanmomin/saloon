import React from 'react'
import Sidebar from '../../components/Sidebar'
import { useState } from 'react'
import ProductAttributeTable from '../../components/Tables/ProductAttributeTable'
import AddProductAttribute from '../../components/Modals/AddProductAttribute'
import EditProductAttribute from '../../components/Modals/EditProductAttribute'
import { useNavigate } from 'react-router-dom'
import { BiSearchAlt } from 'react-icons/bi'

const ProductAttribute = () => {
    const [modal, setModal] = useState("")
    const productAttributeData = [
        {
            categoryName: "Color",
        },
        {
            categoryName: "Size",
        },
        {
            categoryName: "Weight",
        },
        {
            categoryName: "Material",
        },
        {
            categoryName: "Color",
        },
        {
            categoryName: "Size",
        },
        {
            categoryName: "Weight",
        },
        {
            categoryName: "Material",
        },
        {
            categoryName: "Color",
        },
        {
            categoryName: "Size",
        },
        {
            categoryName: "Weight",
        },
        {
            categoryName: "Material",
        },
        {
            categoryName: "Color",
        },
        {
            categoryName: "Size",
        },
        {
            categoryName: "Weight",
        },
        {
            categoryName: "Material",
        },
    ]
    const navigate = useNavigate()

    return (
        <>
            <div className="mainLayout">
                <div className="mainLayout_parent">
                    <Sidebar index={"7"} />
                    {modal === 'create' && <AddProductAttribute setModal={setModal} />}
                    {modal === 'edit' && <EditProductAttribute setModal={setModal} />}
                    <div className="dashboard">
                        <div className='dashboard_infoOptionTop'>
                            <div>
                                <div className='dashboard_topLeftHead'>
                                    <p className="dashboard_title"><i onClick={() => navigate("/dashboard")} class="fa-solid dashIcon fa-house"></i> / Product Attributes</p>
                                    {/* <p className='bottomSpel'>Product Attribute</p> */}
                                </div>
                            </div>

                            <div className='dashboard_lastTop'>
                                <div className="dashboard_inputWrap">
                                    <input type="text" placeholder='Type attribute name...' />
                                    <BiSearchAlt className='fa-solid' />
                                    {/* <i class="fa-solid fa-magnifying-glass"></i> */}
                                </div>
                                <button onClick={() => setModal("create")}>Create</button>
                                {/* <i onClick={() => disptach(setOpen(open === true ? false : true))} class="fa-solid dashboard_links fa-bars"></i> */}
                            </div>
                        </div>

                        <div style={{ marginTop: "10px" }} className='dashboard_whiteBox'>
                            <ProductAttributeTable setModal={setModal} productAttributeData={productAttributeData} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductAttribute
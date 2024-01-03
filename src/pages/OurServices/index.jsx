import React from 'react'
import Sidebar from '../../components/Sidebar'
import ServiceTable from '../../components/Tables/ServiceTable'
import AddService from '../../components/Modals/AddService'
import { useState } from 'react'
import EditService from '../../components/Modals/EditService'
import { useNavigate } from 'react-router-dom'
import { BiSearchAlt } from 'react-icons/bi'

const OurServices = () => {
    const [modal, setModal] = useState("")
    const productCategoryData = [
        {
            categoryName: "Women Hair Cut",
        },
        {
            categoryName: "Men Hair Cut",
        },
        {
            categoryName: "Hair Color",
        },
        {
            categoryName: "Blowouts",
        },
        {
            categoryName: "Waxing",
        },
    ]
    const navigate = useNavigate()

    return (
        <>
            <div className="mainLayout">
                <div className="mainLayout_parent">
                    <Sidebar index={"6"} />
                    {modal === 'create' && <AddService setModal={setModal} />}
                    {modal === 'edit' && <EditService setModal={setModal} />}
                    <div className="dashboard">
                        <div className='dashboard_infoOptionTop'>
                            <div>
                                <div className='dashboard_topLeftHead'>
                                    <p className="dashboard_title"><i onClick={() => navigate("/dashboard")} class="fa-solid dashIcon fa-house"></i> /Our Services</p>
                                    {/* <p className='bottomSpel'>Product Category</p> */}
                                </div>
                            </div>

                            <div className='dashboard_lastTop'>
                                <div className="dashboard_inputWrap">
                                    <input type="text" placeholder='Type service name...' />
                                    <BiSearchAlt className='fa-solid' />
                                    {/* <i class="fa-solid fa-magnifying-glass"></i> */}
                                </div>
                                <button onClick={() => setModal("create")}>Create</button>
                                {/* <i onClick={() => disptach(setOpen(open === true ? false : true))} class="fa-solid dashboard_links fa-bars"></i> */}
                            </div>
                        </div>

                        <div style={{ marginTop: '10px' }} className='dashboard_whiteBox'>
                            <ServiceTable setModal={setModal} productCategoryData={productCategoryData} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurServices
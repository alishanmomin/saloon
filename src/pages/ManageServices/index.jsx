import React from 'react'
import Sidebar from '../../components/Sidebar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ManageAttributeTable from '../../components/Tables/ManageServiceTable'
import AddManageAttribute from '../../components/Modals/AddManageAttribute'
import EditManageAttribute from '../../components/Modals/EditManageAttribute'
import { BiSearchAlt } from 'react-icons/bi'

const ManageService = () => {
    const [modal, setModal] = useState("")
    const navigate = useNavigate()

    const manageAttributeData = [
        {
            categoryName: "Red",
        },
        {
            categoryName: "Blue",
        },
        {
            categoryName: "Red",
        },
        {
            categoryName: "Blue",
        },
        {
            categoryName: "Red",
        },
        {
            categoryName: "Blue",
        },
        {
            categoryName: "Red",
        },
        {
            categoryName: "Blue",
        },
        {
            categoryName: "Red",
        },
        {
            categoryName: "Blue",
        },
        {
            categoryName: "Red",
        },
        {
            categoryName: "Blue",
        },
        {
            categoryName: "Red",
        },
        {
            categoryName: "Blue",
        },
        {
            categoryName: "Red",
        },
        {
            categoryName: "Blue",
        },
        {
            categoryName: "Red",
        },
        {
            categoryName: "Blue",
        },
        {
            categoryName: "Red",
        },
        {
            categoryName: "Blue",
        },
    ]


    return (
        <>
            <div className="mainLayout">
                <div className="mainLayout_parent">
                    <Sidebar index={"6"} />
                    <div className="dashboard">
                        {modal === "create" && <AddManageAttribute setModal={setModal} />}
                        {modal === "edit" && <EditManageAttribute setModal={setModal} />}
                        <div className='dashboard_infoOptionTop'>
                            <div>
                                <div className='dashboard_topLeftHead'>
                                    <p className="dashboard_title"><i onClick={() => navigate("/dashboard")} class="fa-solid dashIcon fa-house"></i> / <p onClick={() => navigate("/services")}>Our Services</p>  / Manage Services</p>
                                    {/* <p className='bottomSpel'>Product Attribute</p> */}
                                </div>
                            </div>

                            <div className='dashboard_lastTop'>
                                <div className="dashboard_inputWrap">
                                    <input type="text" placeholder='Type manage attribute name...' />
                                    <BiSearchAlt className='fa-solid' />
                                    {/* <i class="fa-solid fa-magnifying-glass"></i> */}
                                </div>
                                <button onClick={() => setModal("create")}>Create</button>
                                {/* <i onClick={() => disptach(setOpen(open === true ? false : true))} class="fa-solid dashboard_links fa-bars"></i> */}
                            </div>
                        </div>
                        <div style={{ marginTop: "10px" }} className='dashboard_whiteBox'>
                            <ManageAttributeTable setModal={setModal} manageAttributeData={manageAttributeData} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageService
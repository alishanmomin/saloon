import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/Sidebar'
import { useNavigate } from 'react-router-dom'
import ManageAttributeTable from '../../components/Tables/ManageServiceTable'
import AddManageAttribute from '../../components/Modals/AddManageAttribute'
import EditManageAttribute from '../../components/Modals/EditManageAttribute'
import { BiSearchAlt } from 'react-icons/bi'
import { GetServiceTypes } from '../../utilities/api'

const ManageService = () =>
{
    const [modal, setModal] = useState("")
    const [servicesTypes, setServicesTypes] = useState([])
    const [service, setService] = useState({})
    const navigate = useNavigate()
    const categoryId = new URLSearchParams(window?.location?.search)?.get("id")

    const getServiceTypes = async () =>
    {
        const data = await GetServiceTypes('/getServices', { categoryId })
        setServicesTypes(data?.data?.services)
    }
    useEffect(() =>
    {
        getServiceTypes()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="mainLayout">
                <div className="mainLayout_parent">
                    <Sidebar index={"6"} />
                    <div className="dashboard">
                        {modal === "create" && <AddManageAttribute categoryId={categoryId} getServiceTypes={getServiceTypes} setModal={setModal} />}
                        {modal === "edit" && <EditManageAttribute categoryId={categoryId} service={service} getServiceTypes={getServiceTypes} setModal={setModal} />}
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
                            <ManageAttributeTable setService={setService} setModal={setModal} servicesTypes={servicesTypes} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageService
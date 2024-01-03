import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/Sidebar'
import AllAppointmentsTable from '../../components/Tables/AllAppointmentsTable'
import VendorDetail from '../../components/Modals/VendorDetail'
import girlImg from "../../assets/images/girlImg.png"
import { BiSearchAlt } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { GetAllAppointment } from '../../utilities/api'

const AllVendors = () =>
{
    const [modal, setModal] = useState("")
    const [appointments, setAppointments] = useState([])
    const navigate = useNavigate()

    const allVendorData = [
        {
            vendorName: "Tom",
            email: "tom@gmail.com",
            contact: "212121",
            joiningDate: "04/03/2023",
            approvalDate: "02/03/2023",
            paymentStatus: true,
            totalProducts: "5",
            vendorImg: girlImg,
            type: "Home Visit"
        },
        {
            vendorName: "Tom",
            email: "tom@gmail.com",
            contact: "212121",
            joiningDate: "04/03/2023",
            approvalDate: "02/03/2023",
            paymentStatus: false,
            totalProducts: "5",
            vendorImg: girlImg,
            type: "Walk In"
        },
        {
            vendorName: "Tom",
            email: "tom@gmail.com",
            contact: "212121",
            joiningDate: "04/03/2023",
            approvalDate: "02/03/2023",
            paymentStatus: true,
            totalProducts: "5",
            vendorImg: girlImg,
            type: "Walk In"
        },
        {
            vendorName: "Tom",
            email: "tom@gmail.com",
            contact: "212121",
            joiningDate: "04/03/2023",
            approvalDate: "02/03/2023",
            paymentStatus: true,
            totalProducts: "5",
            vendorImg: girlImg,
            type: "Walk In"
        },
        {
            vendorName: "Tom",
            email: "tom@gmail.com",
            contact: "212121",
            joiningDate: "04/03/2023",
            approvalDate: "02/03/2023",
            paymentStatus: false,
            totalProducts: "5",
            vendorImg: girlImg,
            type: "Walk In"
        },
        {
            vendorName: "Tom",
            email: "tom@gmail.com",
            contact: "212121",
            joiningDate: "04/03/2023",
            approvalDate: "02/03/2023",
            paymentStatus: true,
            totalProducts: "5",
            vendorImg: girlImg,
            type: "Home Visit"
        },
        {
            vendorName: "Tom",
            email: "tom@gmail.com",
            contact: "212121",
            joiningDate: "04/03/2023",
            approvalDate: "02/03/2023",
            paymentStatus: false,
            totalProducts: "5",
            vendorImg: girlImg,
            type: "Walk In"
        },
        {
            vendorName: "Tom",
            email: "tom@gmail.com",
            contact: "212121",
            joiningDate: "04/03/2023",
            approvalDate: "02/03/2023",
            paymentStatus: true,
            totalProducts: "5",
            vendorImg: girlImg,
            type: "Home Visit"
        },
        {
            vendorName: "Tom",
            email: "tom@gmail.com",
            contact: "212121",
            joiningDate: "04/03/2023",
            approvalDate: "02/03/2023",
            paymentStatus: false,
            totalProducts: "5",
            vendorImg: girlImg,
            type: "Walk In"
        },
        {
            vendorName: "Tom",
            email: "tom@gmail.com",
            contact: "212121",
            joiningDate: "04/03/2023",
            approvalDate: "02/03/2023",
            paymentStatus: true,
            totalProducts: "5",
            vendorImg: girlImg,
            type: "Home Visit"
        },
    ]

    const getAppointments = async () =>
    {
        const data = await GetAllAppointment()
        setAppointments(data?.data?.services)
    }
    useEffect(() =>
    {
        getAppointments()
        // eslint-disable-next-line
    }, [])


    return (
        <>
            <div className="mainLayout">
                <div className="mainLayout_parent">
                    {modal === "view" && <VendorDetail setModal={setModal} />}
                    <Sidebar index={"2a"} />
                    <div className="dashboard">

                        <div className='dashboard_infoOptionTop'>
                            <div>
                                <div className='dashboard_topLeftHead'>
                                    <p className="dashboard_title"><i onClick={() => navigate("/dashboard")} class="fa-solid dashIcon fa-house"></i> / All Appointments</p>
                                    {/* <p className='bottomSpel'>All Vendors</p> */}
                                </div>
                            </div>

                            <div className='dashboard_lastTop'>
                                <div className="dashboard_inputWrap">
                                    <input type="text" placeholder='Type customer name or email...' />
                                    <BiSearchAlt className='fa-solid' />
                                    {/* <i class="fa-solid fa-magnifying-glass"></i> */}
                                </div>
                                {/* <i onClick={() => disptach(setOpen(open === true ? false : true))} class="fa-solid dashboard_links fa-bars"></i> */}
                            </div>
                        </div>

                        <div className='dashboard_whiteBox'>
                            <AllAppointmentsTable setModal={setModal} allVendorData={allVendorData} appointments={appointments} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllVendors
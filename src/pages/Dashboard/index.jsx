import React, {useEffect} from 'react'
import Sidebar from '../../components/Sidebar'
import DashboardTopCards from '../../components/DashboardTopCards'
import AllAppointmentsTable from '../../components/Tables/AllAppointmentsTable'
import { useState } from 'react'
import VendorDetail from '../../components/Modals/VendorDetail'
import girlImg from "../../assets/images/girlImg.png"
import { BiSearchAlt } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { GetStats } from '../../utilities/api'

const Dashboard = () => {
  
    const [modal, setModal] = useState()
    const [stats, setStats] = useState({})

    const getStats = async () =>
    {
        const data = await GetStats()
        setStats(data?.data)

    }
    useEffect(() =>
    {
        getStats()
        // eslint-disable-next-line
    }, [])
    
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

    return (
        <>
            <div className="mainLayout">
                <div className="mainLayout_parent">
                    {modal === "view" && <VendorDetail setModal={setModal} />}
                    <Sidebar index={"1"} />
                    <div className="dashboard">
                        <div className='dashboard_infoOptionTop'>
                            <div>
                                <div className='dashboard_topLeftHead'>
                                    <p className="dashboard_title"><i onClick={() => navigate("/dashboard")} class="fa-solid dashIcon fa-house"></i> / <p onClick={() => navigate("/dashboard")} className='dashboard_title'>Dashboard</p></p>
                                    {/* <p className='bottomSpel'>Dashboard</p> */}
                                </div>
                            </div>

                            <div className='dashboard_lastTop'>
                                <div className="dashboard_inputWrap">
                                    <input type="text" placeholder='Type customer name or email...' />
                                    <BiSearchAlt className='fa-solid' />
                                    {/* <i class="fa-solid fa-magnifying-glass"></i> */}

                                </div>
                                {/* <i onClick={() => disptach(setOpen((prev) => !prev))} class="fa-solid dashboard_links fa-bars"></i> */}
                            </div>
                        </div>
                        <div className="dashboardTopCards">
                        <DashboardTopCards stats={stats}/>
                            {/* {
                                data?.map((item, index) => (
                                    <>
                                        <DashboardTopCards index={index} item={item} Icons={item?.Icons} />
                                    </>
                                ))
                            } */}
                        </div>
                        <div style={{ marginTop: "10px" }} className='dashboard_whiteBox'>
                            <AllAppointmentsTable homeView={true} setModal={setModal} allVendorData={allVendorData} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
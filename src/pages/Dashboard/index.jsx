import React, {useEffect} from 'react'
import Sidebar from '../../components/Sidebar'
import DashboardTopCards from '../../components/DashboardTopCards'
import AllAppointmentsTable from '../../components/Tables/AllAppointmentsTable'
import { useState } from 'react'
import VendorDetail from '../../components/Modals/VendorDetail'
import girlImg from "../../assets/images/girlImg.png"
import { BiSearchAlt } from 'react-icons/bi'
import { IoWallet, IoCart } from "react-icons/io5"
import { TbWorld } from "react-icons/tb";
import { FaFileLines } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'
import { GetStats } from '../../utilities/api'

const Dashboard = () => {

    const temp = [
        {
            text: "50",
            number: "Customer Request",
            Icons: IoWallet,
            bottomText: " Update Now",
        },
        {
            text: "10",
            number: "Total Appointments",
            pic: "fa-solid fa-globe",
            Icons: TbWorld,
            bottomText: "Last day"
        },
        {
            text: "2",
            number: "Total Reviews",
            Icons: FaFileLines,
            bottomText: " In the last hour",
        },
        {
            text: "20",
            number: "Total Services",
            Icons: IoCart,
            pic: "fa-solid fa-cart-shopping",
            bottomText: " Update now",
        },
    ];

    const [modal, setModal] = useState()
    const [stats] = useState({})
    const [data] = useState(temp)

    const getStats = async () =>
    {
        const data = await GetStats()
        let stat = data?.data

        // const updatedData = temp.map((item) => {
        //     const statKey = Object.keys(item).find(key => key.toLowerCase().includes('number'));
        //     const statValue = statKey ? stat[statKey] : null;

        //     return {
        //         ...item,
        //         text: statValue !== null ? statValue.toString() : item.text,
        //         // Add other properties you want to update
        //     };
        // });
        // console.log("updatedData", updatedData)
        // setData(updatedData);
    }
    useEffect(() =>
    {
        getStats()
        // eslint-disable-next-line
    }, [])
    console.log("stats", stats)
    
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
                            {
                                data?.map((item, index) => (
                                    <>
                                        <DashboardTopCards index={index} item={item} Icons={item?.Icons} />
                                    </>
                                ))
                            }
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
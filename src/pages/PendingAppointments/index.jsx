import React, {useState, useEffect} from 'react'
import Sidebar from '../../components/Sidebar'
import PendingAppointmentTable from '../../components/Tables/PendingAppointmentTable'
import Confirmation from '../../components/Modals/Confirmation'
import { toast } from 'react-toastify'
import girlImg from "../../assets/images/girlImg.png"
import { useNavigate } from 'react-router-dom'
import { BiSearchAlt } from 'react-icons/bi'
import { GetPendingAppointment } from '../../utilities/api'

const PendingAppointments = () => {
    const [modal, setModal] = useState("")
    const [appointments, setAppointments] = useState([])
    const [tick, setTick] = useState(false)

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
            type: "Home Visit"
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
            type: "Home Visit"
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
            type: "Home Visit"
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

    const handleAction = (res) => {
        if (res === 'accept') {
            setTick(false)
            setModal('view')
        } else if (res === "reject") {
            setTick(true)
            setModal('view')
        }
    }


    const handleModal = (res) => {
        if (res === "yes") {
            setModal("")
            toast.success(`Vendor ${!tick ? "accepted" : "rejected"} succesfully`)
        }
    }

    const getPendingAppointments = async () =>
    {
        const data = await GetPendingAppointment()
        setAppointments(data?.data?.services)
    }
    useEffect(() =>
    {
        getPendingAppointments()
        // eslint-disable-next-line
    }, [])


    return (
        <>
            <div className="mainLayout">
                <div className="mainLayout_parent">
                    {modal === "view" && <Confirmation handleModal={handleModal} tick={tick} setModal={setModal} />}
                    <Sidebar index={"2b"} />
                    <div className="dashboard">
                        <div className='dashboard_infoOptionTop'>
                            <div>
                                <div className='dashboard_topLeftHead'>
                                    <p className="dashboard_title"><i onClick={() => navigate("/dashboard")} class="fa-solid dashIcon fa-house"></i> / Pending Appointments</p>
                                    {/* <p className='bottomSpel'>Pending Vendors</p> */}
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

                        <div style={{ marginTop: "10px" }} className='dashboard_whiteBox'>
                            <PendingAppointmentTable handleAction={handleAction} allVendorData={allVendorData} appointments={appointments} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PendingAppointments
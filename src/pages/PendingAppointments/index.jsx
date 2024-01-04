import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/Sidebar'
import PendingAppointmentTable from '../../components/Tables/PendingAppointmentTable'
import Confirmation from '../../components/Modals/Confirmation'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { BiSearchAlt } from 'react-icons/bi'
import { GetPendingAppointment, UpdateAppointmentStatus } from '../../utilities/api'
import { filterData } from '../../utilities/filterData'

const PendingAppointments = () =>
{
    const [modal, setModal] = useState("")
    const [search, setSearch] = useState("")
    const [appointments, setAppointments] = useState([])
    const [appointmentId, setAppointmentId] = useState("")
    const [tick, setTick] = useState(false)

    const navigate = useNavigate()
    const temp = filterData(["type", "vendorName"], search, appointments)
    console.log("temp", temp)
    const getPendingAppointments = async () =>
    {
        const data = await GetPendingAppointment()
        setAppointments(data?.data)
    }

    const handleAction = (res) =>
    {
        if (res === 'accept')
        {
            setModal('view')
            setTick(false)
        } else if (res === "reject")
        {
            setModal('view')
            setTick(true)
        }
    }


    const handleModal = async (res) =>
    {
        if (res === "yes")
        {
            try
            {
                const data = await UpdateAppointmentStatus({ id: appointmentId, status: tick ? 2 : 1 })
                if (data?.message === "appointment status updated successfully")
                {
                    setModal('')
                    toast.success(tick === 2 ? "Appointment rejected succesfully" : "Appointment accepted succesfully" )
                    getPendingAppointments()
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
                                    <input type="text" placeholder='Type customer name or email...' onChange={(e) => setSearch(e.target.value)} />
                                    <BiSearchAlt className='fa-solid' />
                                    {/* <i class="fa-solid fa-magnifying-glass"></i> */}
                                </div>
                                {/* <i onClick={() => disptach(setOpen(open === true ? false : true))} class="fa-solid dashboard_links fa-bars"></i> */}
                            </div>
                        </div>

                        <div style={{ marginTop: "10px" }} className='dashboard_whiteBox'>
                            <PendingAppointmentTable setAppointmentId={setAppointmentId} handleAction={handleAction} appointments={appointments} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PendingAppointments
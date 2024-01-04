import React from 'react'
import girlImg from "../../assets/images/girlImg.png"
import { dateFormat } from '../../utilities/dateFormat'

const PendingAppointmentTable = ({ appointments, handleAction, setAppointmentId }) =>
{

    const header = ['No.', 'Customer', 'Category', 'Service', 'Appointment Type', 'Date', 'Contact', 'Accept', 'Reject']


    return (
        <div className='tables'>
            <div className='tables_infoOption'>
                <div>
                    <p>Pending Appointments</p>
                </div>
                <div></div>
            </div>
            <div style={{ height: 'calc(100vh - 220px)' }} className='tables_scroller'>
                <table id="table-to-xls">
                    <tbody>
                        <tr>
                            {header?.map((item) => <th>{item}</th>)}
                        </tr>
                        {appointments?.map((item, index) =>
                        {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className='tables_authorInfo'>
                                            <img src={girlImg} alt="vendorImg" />
                                            <div className='tables_nameEmail'>
                                                <p className='name'>{item?.user?.name}</p>
                                                <p className='email'>{item?.user?.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item?.service?.category?.heading}</td>
                                    <td>{item?.service?.service}</td>
                                    <td>{item?.location === 1 ? 'Home Visit' :  "Walk In"}</td>
                                    <td>{dateFormat(item?.createdAt)}</td>
                                    <td>{item?.user?.phone}</td>                                    
                                    <td onClick={() => {setAppointmentId(item?.id); handleAction("accept")}}> <button className='tables_accept'><i class="fa-solid fa-check"></i></button> </td>
                                    <td onClick={() => {setAppointmentId(item?.id); handleAction("reject")}} ><button className='tables_reject'><i class="fa-solid fa-x"></i></button> </td>
                                </tr >
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </div >
    )
}

export default PendingAppointmentTable




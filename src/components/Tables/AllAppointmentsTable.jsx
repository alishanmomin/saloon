import React from 'react'
import {statusClass, statusText} from '../../utilities/statusText'
import girlImg from "../../assets/images/girlImg.png"
import { dateFormat } from '../../utilities/dateFormat'

const AllVendorsTable = ({ homeView, appointments }) => {
    console.log(homeView)
    const header = ['No.', 'Customer', 'Category', 'Service', 'Appointment Type', 'Location', 'Contact No', 'Date and Time', 'Appointment Status']

    return (
        <div className='tables'>
            <div className='tables_infoOption'>
                <div>
                    {homeView ? <p>Daily Appointments</p> : <p>All Appointments</p>}
                </div>
                <div></div>
            </div>
            <div style={{ height: homeView ? "calc(100vh - 350px)" : 'calc(100vh - 240px)' }} className='tables_scroller'>
                <table id="table-to-xls">
                    <tbody>
                        <tr>
                            {header?.map((item) => <th>{item}</th>)}
                        </tr>
                        {appointments?.map((item, index) => {
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
                                    <td>{item?.type}</td>
                                    <td>{item?.type === 'Home Visit' ?  "ABC Road, Karachi" : "-"}</td>
                                    <td>{item?.user?.phone}</td>
                                    <td>{dateFormat(item?.createdAt)}</td>
                                    <td> <p style={{ maxWidth: item?.paymentStatus ? "120px" : "120px", textAlign: "center" }} className={statusClass(item?.status)}>{statusText(item?.status)}</p> </td>
                                    {/* <td> <button onClick={() => handleView()} className='tables_view'>View</button> </td> */}
                                </tr >
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </div >
    )
}

export default AllVendorsTable




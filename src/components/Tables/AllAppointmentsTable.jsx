import React from 'react'

const AllVendorsTable = ({ allVendorData, setModal, homeView }) => {
    console.log(homeView)
    const header = ['No.', 'Customer', 'Appointment Type', 'Contact No', 'Date and Time', 'Appointment Status']

    const handleView = () => {
        setModal("view")
    }
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
                        {allVendorData?.map((item, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className='tables_authorInfo'>
                                            <img src={item?.vendorImg} alt="vendorImg" />
                                            <div className='tables_nameEmail'>
                                                <p className='name'>{item?.vendorName}</p>
                                                <p className='email'>{item?.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item?.type}</td>
                                    <td>{item?.contact}</td>
                                    <td>Fri Dec 29 2023 2:00 PM</td>
                                    <td> <p style={{ maxWidth: item?.paymentStatus ? "120px" : "120px", textAlign: "center" }} className={item?.paymentStatus ? "tables_green" : "tables_remove"}>{item?.paymentStatus ? "Active" : "Non Active"}</p> </td>
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




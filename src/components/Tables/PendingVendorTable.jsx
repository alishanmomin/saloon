import React from 'react'

const PendingVendorTable = ({ allVendorData, handleAction }) => {

    const header = ['No.', 'Vendor', 'Vendor Type', 'Date', 'Contact', 'Accept', 'Reject']


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
                                    <td>{new Date()?.toDateString()}</td>
                                    <td>{item?.contact}</td>
                                    <td onClick={() => handleAction("accept")}> <button className='tables_accept'><i class="fa-solid fa-check"></i></button> </td>
                                    <td onClick={() => handleAction("reject")} ><button className='tables_reject'><i class="fa-solid fa-x"></i></button> </td>
                                </tr >
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </div >
    )
}

export default PendingVendorTable




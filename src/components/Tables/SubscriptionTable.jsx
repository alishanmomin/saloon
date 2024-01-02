import React from 'react'

const SubscriptionTable = ({ subscriptionData }) => {

    const header = ['No.', 'Vendor', 'Vendor Type', 'Date', 'Pending Dues', 'Total Amount', "Payment Status", 'Disable/Enable']


    return (
        <div className='tables'>
            <div className='tables_infoOption'>
                <div>
                    <p>Subscription</p>
                </div>
                <div></div>
            </div>
            <div style={{ height: 'calc(100vh - 340px)' }} className='tables_scroller' >
                <table id="table-to-xls">
                    <tbody>
                        <tr>
                            {header?.map((item) => <th>{item}</th>)}
                        </tr>
                        {subscriptionData?.map((item, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className='tables_authorInfo'>
                                            <img src={item?.vendorImg} alt="vendorImg" />
                                            <div className='tables_nameEmail'>
                                                <p className='name'>{item?.name}</p>
                                                <p className='email'>{item?.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item?.type}</td>
                                    <td>{new Date()?.toDateString()}</td>
                                    <td>{item?.pendingDues}</td>
                                    <td>{item?.totalAmount}</td>
                                    <td> <p style={{ maxWidth: item?.status ? "120px" : '120px' }} className={item?.status ? 'tables_green' : "tables_remove"}>{item?.status ? "Paid" : "Unpaid"}</p> </td>
                                    <td>
                                        <label className="switch">
                                            <input
                                                // onChange={() => handleToggler(res)}
                                                type="checkbox"
                                            // checked={res?.isActive === true ? true : false}
                                            />
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                </tr >
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </div >
    )
}

export default SubscriptionTable




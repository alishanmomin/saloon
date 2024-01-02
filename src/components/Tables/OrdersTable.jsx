import React from 'react'

const OrdersTable = ({ orderData, setModal }) => {

    const header = ['No.', "Vendor", 'Buyer Name', "Date", 'Buyer Contact', 'Order Status', "View"]


    return (
        <div className='tables'>
            <div className='tables_infoOption'>
                <div>
                    <p>Orders</p>
                </div>
                <div></div>
            </div>
            <div style={{ height: 'calc(100vh - 220px)' }} className='tables_scroller'>
                <table id="table-to-xls">
                    <tbody>
                        <tr>
                            {header?.map((item) => <th>{item}</th>)}
                        </tr>
                        {orderData?.map((item, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className='tables_authorInfo'>
                                            <img src={item?.vendorImg} alt="vendorImg" />
                                            <div className='tables_nameEmail'>
                                                <p className='name'>{item?.vendorName}</p>
                                                <p className='email'>{item?.vendorEmail}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item?.buyerName}</td>
                                    <td>{new Date()?.toDateString()}</td>
                                    <td>{item?.buyerContact}</td>
                                    <td><p style={{ maxWidth: item?.orderStatus ? "120px" : "120px" }} className={item?.orderStatus ? "tables_green" : "tables_remove"}>{item?.orderStatus ? "Delivered" : "Not Delivered"}</p> </td>
                                    <td><button onClick={() => setModal("view")} className='tables_view'>View</button></td>
                                </tr >
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </div >
    )
}

export default OrdersTable




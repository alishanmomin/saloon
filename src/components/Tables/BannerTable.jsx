import React from 'react'

const BannerTable = ({ bannerData, setModal, handleAction }) => {
    const header = ['No.', "Banner", 'Disable/Enable', "Edit", "Delete"]

    return (
        <div className='tables'>
            <div className='tables_infoOption'>
                <div>
                    <p>Banners</p>
                </div>
                <div></div>
            </div>
            <div style={{ height: 'calc(100vh - 220px)' }} className='tables_scroller'>
                <table id="table-to-xls">
                    <tbody>
                        <tr>
                            {header?.map((item) => <th>{item}</th>)}
                        </tr>
                        {bannerData?.map((item, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td> <img className='tables_img' src={item?.img} alt="banner" /> </td>
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
                                    <td><button onClick={() => setModal("edit")} className='tables_view'>Edit</button></td>
                                    <td><button onClick={() => handleAction("reject")} className='tables_remove'>Delete</button></td>
                                </tr >
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default BannerTable




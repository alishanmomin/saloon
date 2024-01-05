import React from 'react'
import NoDataFound from '../NoDataFound';

const BannerTable = ({ bannerData, setModal, handleAction, setBanner, handleBannerStatus }) =>
{
    const header = ['No.', "Banner", "URL", 'Disable/Enable', "Edit", "Delete"]

    return (
        <div className='tables'>
            <div className='tables_infoOption'>
                <div>
                    <p>Banners</p>
                </div>
                <div></div>
            </div>
            {bannerData?.length > 0 ?
                    <div style={{ height: 'calc(100vh - 220px)' }} className='tables_scroller'>
                        <table id="table-to-xls">
                            <tbody>
                                <tr>
                                    {header?.map((item) => <th>{item}</th>)}
                                </tr>
                                {bannerData?.map((item, index) =>
                                {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td> <img className='tables_img' src={item?.image} alt="banner" /> </td>
                                            <td>{item?.link}</td>
                                            <td>
                                                <label className="switch">
                                                    <input
                                                        onChange={() => handleBannerStatus(item)}
                                                        type="checkbox"
                                                        checked={item?.isActive}
                                                    />
                                                    <span className="slider round"></span>
                                                </label>
                                            </td>
                                            <td><button onClick={() => { setBanner(item); setModal("edit") }} className='tables_view'>Edit</button></td>
                                            <td><button onClick={() => handleAction("reject")} className='tables_remove'>Delete</button></td>
                                        </tr >
                                    );
                                })}
                            </tbody>
                        </table>
                    </div> : <NoDataFound />}
        </div >
    )
}

export default BannerTable




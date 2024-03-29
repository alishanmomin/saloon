import React from 'react'
import hair from '../../assets/images/hairCut.jpg'

const ManageServiceTable = ({ manageAttributeData, setModal }) =>
{
    const header = ['No.', 'Image', "Name", "Price", "Edit"]

    return (
        <div className='tables'>
            <div className='tables_infoOption'>
                <div>
                    <p>Manage Services</p>
                </div>
                <div></div>
            </div>
            <div style={{ height: 'calc(100vh - 220px)' }} className='tables_scroller'>
                <table id="table-to-xls">
                    <tbody>
                        <tr>
                            {header?.map((item) => <th>{item}</th>)}
                        </tr>
                        {manageAttributeData?.map((item, index) =>
                        {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img className='tables_img' src={hair} alt='' />
                                    </td>
                                    <td>{item?.categoryName}</td>
                                    <td>$20.5</td>
                                    {/* <td>
                                        <label className="switch">
                                            <input
                                                onChange={() => handleToggler(res)}
                                                type="checkbox"
                                                checked={res?.isActive === true ? true : false}
                                            />
                                            <span className="slider round"></span>
                                        </label>
                                    </td> */}
                                    <td><button onClick={() => setModal("edit")} className='tables_view'>Edit</button></td>
                                </tr >
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default ManageServiceTable




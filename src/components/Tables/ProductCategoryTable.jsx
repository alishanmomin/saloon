import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCategoryTable = ({ productCategoryData, setModal }) => {

    const header = ['No.', "Service Name", 'Description', 'Disable/Enable', "Edit", 'Types']
    const navigate = useNavigate()

    return (
        <div className='tables'>
            <div className='tables_infoOption'>
                <div>
                    <p>Our Services</p>
                </div>
                <div></div>
            </div>
            <div style={{ height: 'calc(100vh - 220px)' }} className='tables_scroller'>
                <table id="table-to-xls">
                    <tbody>
                        <tr>
                            {header?.map((item) => <th>{item}</th>)}
                        </tr>
                        {productCategoryData?.map((item, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item?.categoryName}</td>
                                    <td>Cut + Hairstyle</td>
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
                                    <td><button onClick={() => navigate('/manageServices')} className='tables_manage'>View Types</button></td>

                                </tr >
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </div >
    )
}

export default ProductCategoryTable




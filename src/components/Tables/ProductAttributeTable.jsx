import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductAttributeTable = ({ productAttributeData, setModal }) => {
    const header = ['No.', "Attribute Name", 'Disable/Enable', "Edit", "Manage Attribute"]
    const navigate = useNavigate()

    return (
        <div className='tables'>
            <div className='tables_infoOption'>
                <div>
                    <p>Product Attributes</p>
                </div>
                <div></div>
            </div>
            <div style={{ height: 'calc(100vh - 220px)' }} className='tables_scroller'>
                <table id="table-to-xls">
                    <tbody>
                        <tr>
                            {header?.map((item) => <th>{item}</th>)}
                        </tr>
                        {productAttributeData?.map((item, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item?.categoryName}</td>
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
                                    <td><button onClick={() => navigate(`/manageAttribute?attributeId=${23232}`)} className='tables_manage'>Manage</button></td>
                                </tr >
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default ProductAttributeTable




import React from 'react'
import { useNavigate } from 'react-router-dom'
// import color from '../../assets/images/hair-coloring.png'

const ServiceTable = ({ categories, setModal, setCategory }) =>
{

    const header = ['No.', "Image", "Service Name", 'Description', "Edit", 'Types']
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
                        {categories?.map((item, index) =>
                        {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img className='tables_img' src={item?.image} alt='' />
                                    </td>
                                    <td>{item?.heading}</td>
                                    <td>{item?.text}</td>
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
                                    <td><button onClick={() => {setCategory(item); setModal("edit")}} className='tables_view'>Edit</button></td>
                                    <td><button onClick={() => navigate(`/manageServices?id=${item?.id}`)} className='tables_manage'>View Types</button></td>

                                </tr >
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </div >
    )
}

export default ServiceTable




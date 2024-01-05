import React from 'react'
import {dateFormat} from '../../utilities/dateFormat'

const ComplaintsCard = ({ item, index }) => {
    return (
        <div className="complaints_all">
            <div className="complaints_content">
                <div className="complaints_layout">
                    <div className="complaints_top">
                        <div className="circle">
                            <i className="fas fa-save"></i>
                        </div>
                        <div className="complaints_star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>

                        </div>
                        {/* <p>Complaint Id#{item.id}</p> */}
                    </div>
                    <div className="corner">
                        <p>{dateFormat(item?.createdAt)}</p>
                    </div>
                </div>
                <p className="complaints_title">{item?.service?.category?.heading} - {item?.service?.service}</p>
                <p className="complaints_desc">{item?.review}</p>
                <div className="complaints_bottom">
                    <p className="name">{item?.user?.email}</p>
                    <p className="role">{item?.user?.name}</p>
                </div>
            </div>
        </div>
    )
}

export default ComplaintsCard
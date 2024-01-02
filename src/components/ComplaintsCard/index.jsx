import React from 'react'

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
                        <p>Fri Dec 29 2023</p>
                    </div>
                </div>
                <p className="complaints_title">{item?.title}</p>
                <p className="complaints_desc">{item?.description}</p>
                <div className="complaints_bottom">
                    <p className="name">user@gmail.com</p>
                    <p className="role">{item?.author}</p>
                </div>
            </div>
        </div>
    )
}

export default ComplaintsCard
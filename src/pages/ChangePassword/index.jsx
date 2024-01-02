import React from 'react'
import Password from '../../components/Password'
import Sidebar from '../../components/Sidebar'
import { useNavigate } from 'react-router-dom';
const ChangePassword = () => {

    const navigate = useNavigate()

    return (
        <div className="mainLayout">
            <div className="mainLayout_parent">
                <Sidebar index={"4"} />
                <div className="dashboard">
                    <div className='dashboard_infoOptionTop'>
                        <div>
                            <div className='dashboard_topLeftHead'>
                                <p className="dashboard_title"><i onClick={() => navigate("/dashboard")} class="fa-solid dashIcon fa-house"></i> / Change Password</p>
                                {/* <p className='bottomSpel'>Change Password</p> */}
                            </div>
                        </div>

                        <div className='dashboard_lastTop'>
                            {/* <i onClick={() => disptach(setOpen(open === true ? false : true))} class="fa-solid dashboard_links fa-bars"></i> */}
                        </div>
                    </div>
                    <Password />
                </div>
            </div>
        </div>

    )
}

export default ChangePassword
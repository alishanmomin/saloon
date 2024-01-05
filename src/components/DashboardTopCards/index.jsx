import CountUp from 'react-countup';
import { IoWallet, IoCart } from "react-icons/io5"
import { TbWorld } from "react-icons/tb";
import { FaFileLines } from "react-icons/fa6";

const DashboardTopCards = ({stats}) =>
{
    return (
        <>
            <div className="dashboardTopCards_single">
                <div>
                    <p className='smallLable'>Customer Request</p>
                    <p className='euros'><CountUp start={0} end={stats?.appointmentReq} />
                    </p>
                </div>

                <div className='dashboardTopCards_rightSide'>
                    <div className='dashboardTopCards_bgColor'>
                        {<IoWallet size={23} className='icon' />}
                    </div>
                </div>
            </div>
            <div className="dashboardTopCards_single">
                <div>
                    <p className='smallLable'>Total Appointments</p>
                    <p className='euros'><CountUp start={0} end={stats?.totalAppointment} />
                    </p>
                </div>

                <div className='dashboardTopCards_rightSide'>
                    <div className='dashboardTopCards_bgColor'>
                        <TbWorld size={23} className='icon' />
                    </div>
                </div>
            </div>
            <div className="dashboardTopCards_single">
                <div>
                    <p className='smallLable'>Total Reviews</p>
                    <p className='euros'><CountUp start={0} end={stats?.totalReview} />
                    </p>
                </div>

                <div className='dashboardTopCards_rightSide'>
                    <div className='dashboardTopCards_bgColor'>
                        <FaFileLines size={23} className='icon' />
                    </div>
                </div>
            </div>
            <div className="dashboardTopCards_single">
                <div>
                    <p className='smallLable'>Total Services</p>
                    <p className='euros'><CountUp start={0} end={stats?.totalServices} />
                    </p>
                </div>

                <div className='dashboardTopCards_rightSide'>
                    <div className='dashboardTopCards_bgColor'>
                        <IoCart size={23} className='icon' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardTopCards;

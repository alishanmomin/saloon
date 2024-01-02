import CountUp from 'react-countup';

const SubscriptionTop = ({ Icons, item, index }) => {

    return (
        <div className="subscriptionTop_single" key={index}>
            <div>
                <p className='smallLable'>{item?.number}</p>
                <p className='euros'><CountUp start={0} end={parseInt(item?.text)} />
                    {/* <span className='green'>+55%</span> */}
                </p>
            </div>

            <div className='subscriptionTop_rightSide'>
                <div className='subscriptionTop_bgColor' style={{}}>
                    {Icons && <Icons size={23} className='icon' />}
                </div>
            </div>
        </div>
    );
};

export default SubscriptionTop;

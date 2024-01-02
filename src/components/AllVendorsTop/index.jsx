import CountUp from 'react-countup';

const AllVendorsTop = ({ Icons, item, index }) => {

    return (
        <div className="allVendorsTop_single" key={index}>
            <div>
                <p className='smallLable'>{item?.number}</p>
                <p className='euros'><CountUp start={0} end={parseInt(item?.text)} />
                    {/* <span className='green'>+55%</span> */}
                </p>
            </div>

            <div className='allVendorsTop_rightSide'>
                <div className='allVendorsTop_bgColor'>
                    {Icons && <Icons size={23} className='icon' />}
                </div>
            </div>
        </div>
    );
};

export default AllVendorsTop;

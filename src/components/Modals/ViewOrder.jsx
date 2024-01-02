import React, { useRef, useEffect } from 'react'
import camera from "../../assets/images/camera.jpg";
import watch from "../../assets/images/watch.avif";
import bodyspray from "../../assets/images/bodySpray.webp";
import Clickoutside from '../Clickoutside/Clickoutside';

const ViewOrder = ({ setModal }) => {
    const Ref1 = useRef();
    const Ref2 = useRef();
    const productList = [
        {
            name: "Camera",
            img: camera,
            price: "€50",
            qty: 1,
        },
        {
            name: "Watch",
            img: watch,
            price: "€80",
            qty: 2,
        },
        {
            name: "Body Spray",
            img: bodyspray,
            price: "€120",
            qty: 3,
        },
        {
            name: "Camera",
            img: camera,
            price: "€50",
            qty: 1,
        },
        {
            name: "Watch",
            img: watch,
            price: "€80",
            qty: 2,
        },
        {
            name: "Body Spray",
            img: bodyspray,
            price: "€120",
            qty: 3,
        },
    ]

    useEffect(() => {
        Clickoutside(Ref1, Ref2, setModal)
        // eslint-disable-next-line
    }, [])


    return (
        <div ref={Ref1} className='viewOrder'>
            <div ref={Ref2} className='viewOrder_inner'>
                <div className='viewOrder_orderId'>
                    <div className='left'>
                        <p className='lable'>Vendor Name</p>
                    </div>

                    <div className='right'>
                        <p className='deliveryStatus'>Tom</p>
                    </div>
                </div>

                <div className='viewOrder_orderId'>
                    <div className='left'>
                        <p className='lable'>Order Id <span className='id'>#12342</span> </p>
                        <p className='id'>{`${new Date()?.toLocaleDateString()} 2:40 PM`}</p>
                    </div>

                    <div className='right'>
                        <p className='deliveryStatus'><i class="fa-solid status fa-check"></i> Delivered</p>
                    </div>
                </div>

                <div className='viewOrder_address'>
                    <p className='lable'>Delivery Address</p>
                    <p className='address'>New York City, 2093033</p>
                </div>

                <p className='viewOrder_heading'>Products</p>

                <div className='viewOrder_scroller'>
                    {productList?.map((item) => {
                        return (
                            <div className='viewOrder_list'>
                                <div>
                                    <img src={item?.img} alt="img" />
                                </div>
                                <div>
                                    <p>{item?.name} x {item?.qty}</p>
                                </div>
                                <div>
                                    <p>{item?.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>


                <div className='viewOrder_totalInfo'>
                    <div className='viewOrder_total'>
                        <div>
                            <p className='viewOrder_subhead'>Subtotal</p>
                        </div>

                        <div>
                            <p>€300</p>
                        </div>
                    </div>

                    <div className='viewOrder_total'>
                        <div>
                            <p className='viewOrder_subhead'>Delivery</p>
                        </div>

                        <div>
                            <p>Free</p>
                        </div>
                    </div>


                    <div className='viewOrder_total'>
                        <div>
                            <p className='viewOrder_subhead'>Total</p>
                        </div>

                        <div>
                            <p>€300</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewOrder
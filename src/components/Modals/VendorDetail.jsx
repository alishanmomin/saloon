import React, { useEffect, useRef } from 'react'
import Clickoutside from '../Clickoutside/Clickoutside'
import headphone from "../../assets/images/headphone.avif"
import watch from "../../assets/images/watch.avif"
import bodySpray from "../../assets/images/bodySpray.webp"
import camera from "../../assets/images/camera.jpg"


const ServiceDetail = ({ setModal }) => {
    const Ref1 = useRef()
    const Ref2 = useRef()

    const list = [
        {
            title: "Headphone",
            img: headphone,
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequatur quasi cum excepturi explicabo animi repudiandae provident adipisci sequi enim dolore odio sint omnis deserunt temporibus ut, eos exercitationem alias.`,
            price: "30",
            sizeChart: "M",
        },
        {
            title: "Watch",
            img: watch,
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequatur quasi cum excepturi explicabo animi repudiandae provident adipisci sequi enim dolore odio sint omnis deserunt temporibus ut, eos exercitationem alias.`,
            price: "25",
            sizeChart: "S",
        },
        {
            title: "Body Spray",
            img: bodySpray,
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequatur quasi cum excepturi explicabo animi repudiandae provident adipisci sequi enim dolore odio sint omnis deserunt temporibus ut, eos exercitationem alias.`,
            price: "35",
            sizeChart: "M",
        },
        {
            title: "Camera",
            img: camera,
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequatur quasi cum excepturi explicabo animi repudiandae provident adipisci sequi enim dolore odio sint omnis deserunt temporibus ut, eos exercitationem alias.`,
            price: "55",
            sizeChart: "L",
        }
    ]


    useEffect(() => {
        Clickoutside(Ref1, Ref2, setModal)
        // eslint-disable-next-line
    }, [])


    return (
        <div ref={Ref1} className='vendorDetail'>
            <div ref={Ref2} className='vendorDetail_inner'>
                <div className='vendorDetail_space'>
                    <br />
                    {list?.map((item) => {
                        return (
                            <div className='vendorDetail_list shadow'>

                                <div className='vendorDetail_left'>
                                    <img src={item?.img} alt="img" />
                                </div>

                                <div className='vendorDetail_center'>
                                    <div>
                                        <p className='title'>{item?.title}</p>
                                    </div>
                                    <div className='vendorDetail_descScroller'>
                                        <p className='desc'>{item?.desc}</p>
                                    </div>
                                </div>

                                <div className='vendorDetail_right'>
                                    <div>
                                        <p className='price'>Price : €{item?.price}</p>
                                    </div>

                                    <div >
                                        <p className='size'>Qty : 5</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </div>
        </div>
    )
}

export default ServiceDetail
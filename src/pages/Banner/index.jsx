import React from 'react'
import Sidebar from '../../components/Sidebar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BannerTable from '../../components/Tables/BannerTable'
import AddBanner from '../../components/Modals/AddBanner'
import EditBanner from '../../components/Modals/EditBanner';
import slideImg from "../../assets/images/slide.jpg"
import Confirmation from '../../components/Modals/Confirmation'
import { toast } from 'react-toastify';


const Banner = () => {
    const [modal, setModal] = useState("")
    const navigate = useNavigate()
    const bannerData = [
        {
            img: slideImg
        },
        {
            img: slideImg
        },
        {
            img: slideImg
        },
        {
            img: slideImg
        },
        {
            img: slideImg
        },
        {
            img: slideImg
        },
        {
            img: slideImg
        },
        {
            img: slideImg
        },
        {
            img: slideImg
        },
        {
            img: slideImg
        },
        {
            img: slideImg
        },
        {
            img: slideImg
        },
        {
            img: slideImg
        },
        {
            img: slideImg
        },
        {
            img: slideImg
        },
        {
            img: slideImg
        },
        {
            img: slideImg
        },
        {
            img: slideImg
        },
    ]

    const handleAction = (res) => {
        if (res === 'accept') {
            // setTick(false)
            setModal('view')
        } else if (res === "reject") {
            // setTick(true)
            setModal('view')
        }
    }


    const handleModal = (res) => {
        if (res === "yes") {
            setModal("")
            toast.success(`Banner Deleted Successfully`)
        }
    }

    return (
        <>
            <div className="mainLayout">
                <div className="mainLayout_parent">
                    <Sidebar index={"8"} />
                    {modal === 'create' && <AddBanner setModal={setModal} />}
                    {modal === 'edit' && <EditBanner setModal={setModal} />}
                    {modal === "view" && <Confirmation handleModal={handleModal} tick={true} setModal={setModal} />}
                    <div className="dashboard">
                        <div className='dashboard_infoOptionTop'>
                            <div>
                                <div className='dashboard_topLeftHead'>
                                    <p className="dashboard_title"><i onClick={() => navigate("/dashboard")} class="fa-solid dashIcon fa-house"></i> / Banners</p>
                                    {/* <p className='bottomSpel'>Product Attribute</p> */}
                                </div>
                            </div>

                            <div className='dashboard_lastTop'>
                                {/* <div className="dashboard_inputWrap">
                                    <input type="text" placeholder='Type here...' />
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div> */}
                                <button onClick={() => setModal("create")}>Create</button>
                                {/* <i onClick={() => disptach(setOpen(open === true ? false : true))} class="fa-solid dashboard_links fa-bars"></i> */}
                            </div>
                        </div>

                        <div style={{ marginTop: "10px" }} className='dashboard_whiteBox'>
                            <BannerTable handleAction={handleAction} setModal={setModal} bannerData={bannerData} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
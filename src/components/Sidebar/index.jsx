import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/sidebarLogo.png";
import sidebarLogo from "../../assets/images/sidebarIcon.svg";

// 
import { setOpen } from "../../redux/reducers/info";

// Product Category-01
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/reducers/info";
import { BiCategory } from "react-icons/bi";

import { BsSpeedometer2 } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
// import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdOutlineMoodBad } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { TfiLayoutSlider } from "react-icons/tfi";


const Sidebar = ({ index }) => {
    // const [open, setOpen] = useState(true);
    const [showSidebar, setShowSidebar] = useState(false);
    const [list] = useState([
        {
            name: "Dashboard",
            Icon: BsSpeedometer2,
            // dark: homel,
            url: "/dashboard",
            index: "1",
        },
        {
            name: "Appointments",
            Icon: FiShoppingBag,
            url: "/",
            index: "2",
            subMenu: [
                {
                    name: "Pending Appointments",
                    url: "/pendingAppointments",
                    index: "2b",
                },
                {
                    name: "All Appointments",
                    url: "/allAppointments",
                    index: "2a",
                },
            ]
        },
        {
            name: "Services",
            Icon: BiCategory,
            url: "/services",
            index: "6",
        },
        // {
        //     name: "Product Attributes",
        //     Icon: MdOutlineProductionQuantityLimits,
        //     url: "/productAttribute",
        //     index: "7",
        // },
        // {
        //     name: "Orders",
        //     Icon: FaHistory,
        //     url: "/orders",
        //     index: "3",
        // },
        {
            name: "Banners",
            Icon: TfiLayoutSlider,
            url: "/banner",
            index: "8",
        },
        {
            name: "Reviews",
            Icon: MdOutlineMoodBad,
            url: "/reviews",
            index: "5",
        },
        {
            name: "Change Password",
            Icon: RiLockPasswordLine,
            url: "/changePassword",
            index: "4",
        },
    ])
    const disptach = useDispatch()
    const { sidebarState, open } = useSelector((state) => state.tooltipInfo);
    const [event, setEvent] = useState(sidebarState)
    const navigate = useNavigate();
    const componentRef = useRef();
    const componentRef2 = useRef();

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
        // eslint-disable-next-line
    }, []);

    function handleClick(e) {
        if (window.innerWidth <= 700) {
            const toggleRef = componentRef.current;
            const outsideRef = componentRef2.current;
            if (!outsideRef?.contains(e.target) && !toggleRef?.contains(e.target)) {
                disptach(setOpen(false));
            }
        }
    }

    // const handleRoute = (route) => {
    //     if (route === "logout") {
    //         window.localStorage.clear();
    //         window.location.reload();
    //     } else {
    //         navigate(`/${route}`);
    //     }
    // };

    const handleSubMenu = (item) => {
        navigate(item?.url)
    }

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };

    const handleRouteClick = (item) => {
        if (item.subMenu) {
            setEvent(item.index !== event ? item.index : null);
            disptach(toggleSidebar({ event: item.index !== event ? item.index : null }));
        } else {
            navigate(item?.url);
        }
    };


    useEffect(() => {
        const handleResize = () => {
            disptach(setOpen(window.innerWidth >= 700));
        };

        const resizeTimeout = setTimeout(() => {
            handleResize();
            setShowSidebar(true);
        }, 100);

        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(resizeTimeout);
            window.removeEventListener('resize', handleResize);
        };
        // eslint-disable-next-line
    }, []);


    return (
        <>
            <div className="navBar" ref={componentRef}>
                <div className="navBar_left">
                    {window?.innerWidth <= 700 &&
                        <i
                            className="fas fa-bars"
                            onClick={() => disptach(setOpen((prev) => !prev))}
                        ></i>
                    }

                    {/* <img
                        className="navBar_logo"
                        src={logo}
                        alt="logo"
                        onClick={() => handleRoute("")}
                    /> */}
                </div>
                <div className="navBar_right"></div>
            </div>
            {
                showSidebar &&
                <div className={!open ? "sideBar" : "sideBar sideBar_sidebarActive"} ref={componentRef2}>
                    <div className={open ? "sideBar_inner" : "sideBar_innersmall"}>
                        <div className="sideBar_eventInfo">
                            {/* <img src={circleImg} alt="eventInfo" /> */}
                            <div className="sideBar_eventText">
                                <p className="channelName">
                                    <img src={sidebarLogo} className="sidebarLogo" alt="sidebarLogo" /> <img onClick={() => navigate("/dashboard")} className="logo" src={logo} alt="logo" /></p>

                                <hr />
                            </div>
                        </div>


                        <ul>
                            {list?.map((item) => {
                                const { Icon } = item
                                return (
                                    <>
                                        <li onClick={() => handleRouteClick(item)} className={index === item?.index ? "sideBar_title sideBar_active" : "sideBar_title"}>
                                            <div className={index === item?.index ? 'sideBar_bgColorSelect' : 'sideBar_bgColor'}>
                                                <Icon className={index === item?.index ? "sideBar_iconSelect" : "sideBar_icon"} />
                                            </div>
                                            {item?.name}
                                            {item.subMenu && (
                                                <i className={event === item.index ? "fas fa-chevron-down" : "fas fa-chevron-right"}></i>
                                            )}
                                        </li>
                                        {event === item.index && (
                                            <div className="sideBar_list ">
                                                <ul>
                                                    {item?.subMenu?.map((res) => (
                                                        <li
                                                            key={res.index}
                                                            className={index === res.index ? "sideBar_subMenu sideBar_active" : "sideBar_subMenu"}
                                                            onClick={() => handleSubMenu(res)}>
                                                            {res.name}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </>
                                )
                            })}


                            <li className="sideBar_title" onClick={() => handleLogout("")} >
                                <div className="sideBar_bgColor">
                                    <IoIosLogOut className="sideBar_icon" />
                                </div>
                                Logout
                            </li>
                        </ul>

                    </div>
                </div>
            }
        </>

    );
};

export default Sidebar;

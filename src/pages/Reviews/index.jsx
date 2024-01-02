import React from 'react'
import ComplaintsCard from '../../components/ComplaintsCard'
import Sidebar from '../../components/Sidebar'
import { useNavigate } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi'

const Complaints = () => {
    const navigate = useNavigate()
    const complaintData = [
        {
            title: "Excellent Service",
            description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia assumenda nam tempora voluptatem nemo, corrupti neque illo perspiciatis! Optio maiores magnam magni omnis debitis perspiciatis sunt aliquam repellendus molestias. Exercitationem.`,
            author: "Chris Evan",
            id: "23324",
            designation: "User",
        },
        {
            title: "Excellent Service",
            description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia assumenda nam tempora voluptatem nemo, corrupti neque illo perspiciatis! Optio maiores magnam magni omnis debitis perspiciatis sunt aliquam repellendus molestias. Exercitationem.`,
            author: "Chris Evan",
            id: "23324",
            designation: "User",
        },
        {
            title: "Excellent Service",
            description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia assumenda nam tempora voluptatem nemo, corrupti neque illo perspiciatis! Optio maiores magnam magni omnis debitis perspiciatis sunt aliquam repellendus molestias. Exercitationem.`,
            author: "Chris Evan",
            id: "23324",
            designation: "User",
        },
        {
            title: "Excellent Service",
            description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia assumenda nam tempora voluptatem nemo, corrupti neque illo perspiciatis! Optio maiores magnam magni omnis debitis perspiciatis sunt aliquam repellendus molestias. Exercitationem.`,
            author: "Chris Evan",
            id: "23324",
            designation: "User",
        },
        {
            title: "Excellent Service",
            description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia assumenda nam tempora voluptatem nemo, corrupti neque illo perspiciatis! Optio maiores magnam magni omnis debitis perspiciatis sunt aliquam repellendus molestias. Exercitationem.`,
            author: "Chris Evan",
            id: "23324",
            designation: "User",
        },
        {
            title: "Excellent Service",
            description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia assumenda nam tempora voluptatem nemo, corrupti neque illo perspiciatis! Optio maiores magnam magni omnis debitis perspiciatis sunt aliquam repellendus molestias. Exercitationem.`,
            author: "Chris Evan",
            id: "23324",
            designation: "User",
        },
        {
            title: "Excellent Service",
            description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia assumenda nam tempora voluptatem nemo, corrupti neque illo perspiciatis! Optio maiores magnam magni omnis debitis perspiciatis sunt aliquam repellendus molestias. Exercitationem.`,
            author: "Chris Evan",
            id: "23324",
            designation: "User",
        },
        {
            title: "Excellent Service",
            description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia assumenda nam tempora voluptatem nemo, corrupti neque illo perspiciatis! Optio maiores magnam magni omnis debitis perspiciatis sunt aliquam repellendus molestias. Exercitationem.`,
            author: "Chris Evan",
            id: "23324",
            designation: "User",
        },
        {
            title: "Excellent Service",
            description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia assumenda nam tempora voluptatem nemo, corrupti neque illo perspiciatis! Optio maiores magnam magni omnis debitis perspiciatis sunt aliquam repellendus molestias. Exercitationem.`,
            author: "Chris Evan",
            id: "23324",
            designation: "User",
        },
        {
            title: "Excellent Service",
            description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia assumenda nam tempora voluptatem nemo, corrupti neque illo perspiciatis! Optio maiores magnam magni omnis debitis perspiciatis sunt aliquam repellendus molestias. Exercitationem.`,
            author: "Chris Evan",
            id: "23324",
            designation: "User",
        },
    ]

    return (
        <div className="mainLayout">
            <div className="mainLayout_parent">
                <Sidebar index={"5"} />
                <div className="dashboard">
                    <div className='dashboard_infoOptionTop'>
                        <div>
                            <div className='dashboard_topLeftHead'>
                                <p className="dashboard_title"><i onClick={() => navigate("/dashboard")} class="fa-solid dashIcon fa-house"></i> / Complaints</p>
                                {/* <p className='bottomSpel'>Complaints</p> */}
                            </div>
                        </div>

                        <div className='dashboard_lastTop'>
                            <div className="dashboard_inputWrap">
                                <input type="text" placeholder='Type username or email...' />
                                <BiSearchAlt className='fa-solid' />
                                {/* <i class="fa-solid fa-magnifying-glass"></i> */}
                            </div>
                            {/* <i onClick={() => disptach(setOpen(open === true ? false : true))} class="fa-solid dashboard_links fa-bars"></i> */}
                        </div>
                    </div>

                    <div className="complaints">
                        <div className="complaints_parent">
                            {complaintData?.map((item, index) => (
                                <ComplaintsCard
                                    item={item}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Complaints
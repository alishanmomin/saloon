import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { lazy } from "react";
import AdminPrivate from './adminPrivateRoute';
import { ToastContainer } from 'react-toastify';
import { ThreeDots } from 'react-loader-spinner';


const MyRoutes = () =>
{
    const token = localStorage?.getItem("token");

    const Login = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/Login")), 1300);
        });
    });


    const Dashboard = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/Dashboard")), 1300);
        });
    });


    const ChangePassword = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/ChangePassword")), 1300);
        });
    });


    const AllAppointments = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/AllAppointments")), 1300);
        });
    });


    const PendingAppointments = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/PendingAppointments")), 1300);
        });
    });

    const Reviews = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/Reviews")), 1300);
        });
    });


    const OurServices = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/OurServices")), 1300);
        });
    });

    const ManageServices = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/ManageServices")), 1300);
        });
    });

    const Banner = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/Banner")), 1300);
        });
    });


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <BrowserRouter>
                <Suspense fallback={
                    <div style={{ background: "#090E25", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                        <ThreeDots
                            visible={true}
                            height="80"
                            width="80"
                            color="#f2b203"
                            radius="9"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                    </div>}>
                    <Routes>
                        {token ? <Route path="/dashboard" element={<Dashboard />}></Route> : <Route path="/login" element={<Login />}></Route>}
                        <Route element={<AdminPrivate token={token} />}>
                            <Route path="/dashboard" element={<Dashboard />}></Route>
                            <Route path='/pendingAppointments' element={<PendingAppointments />} ></Route>
                            <Route path='/allAppointments' element={<AllAppointments />} ></Route>
                            <Route path='/services' element={<OurServices />} ></Route>
                            <Route path='/banner' element={<Banner />} ></Route>
                            <Route path='/reviews' element={<Reviews />} ></Route>
                            <Route path='/manageServices' element={<ManageServices />} ></Route>
                            <Route path='/changePassword' element={<ChangePassword />} ></Route>
                        </Route>
                        <Route path="*" element={token ? (<Navigate to="/dashboard" replace />) : (<Navigate to="/login" replace />)}></Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    )
}

export default MyRoutes
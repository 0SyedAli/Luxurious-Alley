"use client"
import React from 'react';
import MyCalender from '@/components/MyCalender';
import { RxCaretSort } from "react-icons/rx";
import Link from 'next/link';

const appointments = [
    {
        "_id": "687fff9557c57ae2196284a1",
        "userId": "67e1a32982124b9a6a749882",
        "adminId": "687ffe4557c57ae21962844e",
        "clientName": "Obcaecati error exce",
        "treatment": "Hair Color",
        "date": "2016-10-09",
        "services": [
            "687ffe7157c57ae21962845d"
        ],
        "stylist": "687fff7d57c57ae21962847a",
        "timeSlot": "9:00 AM",
        "notes": "Nulla nobis assumend",
        "price": 44,
        "createdByModel": "Admin",
        "createdBy": "687ffe4557c57ae21962844e",
        "status": "Pending",
        "createdAt": "2025-07-22T21:16:05.183Z",
        "updatedAt": "2025-07-22T21:16:05.183Z",
        "__v": 0
    }
]
const Appointment = () => {
    return (
        <div style={{ margin: '20px', width: "100%" }}>
            <div className="cal_container row align-items-center">
                {/* <button className="btn add_appointment" >ADD APPOINTMENT</button> */}
                <div className='col-3'>
                    <div className="time_slot">
                        <h3>Time Slot</h3>
                        <div className="form-check mt-3">
                            <input className="form-check-input" type="checkbox" value="" id="Booked" />
                            <label className="form-check-label" htmlFor="Booked">
                                Booked
                            </label>
                        </div>
                        <div className="form-check mt-3">
                            <input className="form-check-input" type="checkbox" value="" id="Available" />
                            <label className="form-check-label" htmlFor="Available">
                                Available
                            </label>
                        </div>
                    </div>
                    <div className="stylist">
                        <h3>Stylists</h3>
                        <div className="form-check mt-3">
                            <input className="form-check-input" type="checkbox" value="" id="Booked" />
                            <label className="form-check-label" htmlFor="Booked">
                                Sara Jackal
                            </label>
                        </div>
                        <div className="form-check mt-2">
                            <input className="form-check-input" type="checkbox" value="" id="Available" />
                            <label className="form-check-label" htmlFor="Available">
                                June Smith
                            </label>
                        </div>
                        <div className="form-check mt-2">
                            <input className="form-check-input" type="checkbox" value="" id="Available" />
                            <label className="form-check-label" htmlFor="Available">
                                Mark William
                            </label>
                        </div>
                        <div className="form-check mt-2">
                            <input className="form-check-input" type="checkbox" value="" id="Available" />
                            <label className="form-check-label" htmlFor="Available">
                                Abby Jin
                            </label>
                        </div>
                        <div className="form-check mt-2">
                            <input className="form-check-input" type="checkbox" value="" id="Available" />
                            <label className="form-check-label" htmlFor="Available">
                                Jack Banner
                            </label>
                        </div>
                    </div>
                </div>
                <div className='col-9'>
                    <MyCalender />
                </div>
                <div className="col-12 mt-4">

                    <div className="dr_table">
                        <div className="pt-2 dash_list page">
                            <div className="dr_head">
                                <h5>Appointments</h5>
                                <Link href="#!" className="dr_btn">View All</Link>
                            </div>
                            <div className="table-responsive">
                                <table className="table caption-top">
                                    <thead>
                                        <tr className="borderless">
                                            <th scope="col">Customer ID <span><RxCaretSort /></span></th>
                                            <th scope="col">Name <span><RxCaretSort /></span></th>
                                            <th scope="col">Date & Time <span><RxCaretSort /></span></th>
                                            <th scope="col">Treatment <span><RxCaretSort /></span></th>
                                            <th scope="col">Status <span><RxCaretSort /></span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {appointments.map((order, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td scope="row">{order._id}</td>
                                                    <td className="user_td">{order.clientName}</td>
                                                    <td>{`${order.date} ${order.timeSlot}`}</td>
                                                    <td>{order.treatment}</td> {/* Display service titles here */}
                                                    <td className={`status_td ${order.status.toLowerCase()}`}>
                                                        <span>{order.status}</span>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* <div className="text-end pt-3">
                            <button className="btn det_ins">DETAILED INSIGHTS</button>
                        </div> */}
                </div>
            </div>
        </div>
    );
};

export default Appointment;

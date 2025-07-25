"use client"
import { LuUsersRound } from "react-icons/lu";
import { IoMdArrowUp } from "react-icons/io";
import { RxCaretSort } from "react-icons/rx";
import Link from "next/link";
import { useEffect, useState } from "react";
import IncomeChart from "@/components/IncomeChart";
import Image from "next/image";
const image1 = "/images/user1.png";
const image2 = "/images/user1.png";
const image3 = "/images/user1.png";
const image4 = "/images/user1.png";
const image5 = "/images/user1.png";
const image6 = "/images/user1.png";
const image7 = "/images/user1.png";
const image8 = "/images/user1.png";
const image9 = "/images/user1.png";
const image10 = "/images/user1.png";
const image11 = "/images/user1.png";
const image12 = "/images/user1.png";

export default function Dashboard() {
  const [tab, setTab] = useState();
  const [activeTab, setActiveTab] = useState('complete');
  useEffect(() => {
    setTab();
    setTimeout(() => {
      setTab(activeTab);
    }, 1);
  }, [activeTab])
  const orders = [
    {
      cust_id: "PB-001",
      name: "Claire Thompson",
      treatment: "Facial Rejuvenation",
      date: "2028-09-12, 9:00 AM",
      status: activeTab,
    },
    {
      cust_id: "PB-001",
      name: "Ronald Richards",
      treatment: "Burger",
      date: "2028-09-12, 9:00 AM",
      status: activeTab,
    },
    {
      cust_id: "PB-001",
      name: "Ronald Richards",
      treatment: "Facial Rejuvenation",
      date: "2028-09-12, 9:00 AM",
      status: activeTab,
    },
    {
      cust_id: "PB-001",
      name: "Ronald Richards",
      treatment: "Burger",
      date: "2028-09-12, 9:00 AM",
      status: activeTab,
    },
    {
      cust_id: "PB-001",
      name: "Ronald Richards",
      treatment: "Burger",
      date: "2028-09-12, 9:00 AM",
      status: activeTab,
    }
  ];
  const response23 = {
    success: true,
    msg: "Yearly Revenue!",
    data: [
      {
        totalRevenue: 400,
        appointmentsCount: 4,
        year: 2025,
        month: 2,
      },
      {
        totalRevenue: 100,
        appointmentsCount: 4,
        year: 2025,
        month: 3,
      },
      {
        totalRevenue: 100,
        appointmentsCount: 4,
        year: 2025,
        month: 4,
      },
      {
        totalRevenue: 100,
        appointmentsCount: 4,
        year: 2025,
        month: 5,
      },
      {
        totalRevenue: 100,
        appointmentsCount: 4,
        year: 2025,
        month: 6,
      },
      {
        totalRevenue: 100,
        appointmentsCount: 4,
        year: 2025,
        month: 7,
      },
    ],
  };
  if (!tab) {
    return <></>;
  }
  return (
    <div className="w-100">
      <div className="row gx-5 w-100">
        <div className="col-4 pe-1">
          <div className="dash_profile1">
            <div className="dp_img mb-4">
              <Image 
              src="/images/emp_img1.png"
              width={100}
              height={100}
              alt=""
              />
            </div>
            <h5>Jazy Dewo Beauty</h5>
            <div className="d-flex align-items-center justify-content-center  flex-wrap gap-2">
              <h6><span>DB-001</span></h6>
              <div className="dp_dot"></div>
              <h6>Beauty Saloon</h6>
            </div>
          </div>
          <div className="dash_profile2">
            <div className="row g-3">
              <div className="col-6">
                <div className="dp2_item">
                  <div className="tc">
                    <span><LuUsersRound /></span>
                    <h5>Total<br />
                      Customers</h5>
                  </div>
                  <h3>2,150</h3>
                  <div className="profit_perc">
                    <span><IoMdArrowUp /></span>
                    <h5>2.45%</h5>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="dp2_item">
                  <div className="tc">
                    <span><LuUsersRound /></span>
                    <h5>Total<br />
                      Customers</h5>
                  </div>
                  <h3>2,150</h3>
                  <div className="profit_perc">
                    <span><IoMdArrowUp /></span>
                    <h5>2.45%</h5>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="dp2_item">
                  <div className="tc">
                    <span><LuUsersRound /></span>
                    <h5>Total<br />
                      Customers</h5>
                  </div>
                  <h3>2,150</h3>
                  <div className="profit_perc">
                    <span><IoMdArrowUp /></span>
                    <h5>2.45%</h5>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="dp2_item">
                  <div className="tc">
                    <span><LuUsersRound /></span>
                    <h5>Total<br />
                      Customers</h5>
                  </div>
                  <h3>2,150</h3>
                  <div className="profit_perc">
                    <span><IoMdArrowUp /></span>
                    <h5>2.45%</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8 ps-5">
          <div className="dash-right">
            <div className="dr_head">
              <h5>Statistics</h5>
              <Link href="/" className="dr_btn">Last 7 Days</Link>
            </div>
            <div className="dr_graph">
              {/* <Image src="/images/chart2.svg" width={500} height={100} alt="chart" /> */}
              <div className="dg_income">
                <h4>Income</h4>
                {/* <h5>{revenue.totalRevenue ? revenue.totalRevenue : "0"}</h5> */}
              </div>
              <IncomeChart data={response23.data} />
            </div>
            <div className="dr_head mb-3">
              <h5>Appointments</h5>
              {/* <Link href="/" className="dr_btn">View All</Link> */}
            </div>
            <div className="dr_table">
              <div className="pt-2 dash_list page">
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
                      {orders
                        .filter((val) => val.status.toLowerCase().includes(activeTab))
                        .map((order, index) => (
                          <tr key={index}>
                            <td scope="row">{order.cust_id}</td>
                            <td className="user_td">
                              {order.name}
                            </td>
                            <td>{order.date}</td>
                            <td>{order.treatment}</td>
                            <td className={`status_td ${order.status.toLowerCase()}`}>
                              <span>{order.status}</span>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                {/* <div className="pagination justify-content-end">
                  <button className="active">1</button>
                  <button>2</button>
                  <button>3</button>
                  <button>4</button>
                  <button>&gt;&gt;</button>
                </div> */}
              </div>
            </div>
            <div className="text-end pt-3">
              <button className="btn det_ins">DETAILED INSIGHTS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
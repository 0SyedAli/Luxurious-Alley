"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import styles from "./EmpoloyeeDetail.module.css"

function getWeek(startISO) {
    const start = new Date(startISO)
    const days = Array.from({ length: 7 }, (_, i) => {
        const d = new Date(start)
        d.setDate(start.getDate() + i)
        return d
    })
    const fmtDay = new Intl.DateTimeFormat(undefined, { weekday: "short" })
    const fmtNum = new Intl.DateTimeFormat(undefined, { day: "numeric" })
    const fmtMon = new Intl.DateTimeFormat(undefined, { month: "short" })
    return days.map((d) => ({
        key: d.toISOString().slice(0, 10),
        label: `${fmtDay.format(d)}, ${fmtNum.format(d)} ${fmtMon.format(d)}`,
        date: d,
    }))
}

export default function ProfileScheduleSection({
    name = "Ann Merry",
    avatarSrc = "/images/emp_img1.png",
    weekStart = "2024-12-01",
}) {
    const week = useMemo(() => getWeek(weekStart), [weekStart])

    const [selectedDay, setSelectedDay] = useState(week[0]?.key ?? "")
    const [hoursByDay, setHoursByDay] = useState({
        [week[0]?.key ?? ""]: "09 AM - 06 PM",
    })
    const [about, setAbout] = useState(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    )
    const [access, setAccess] = useState("everyone")

    function setHours(dayKey, value) {
        setHoursByDay((prev) => ({ ...prev, [dayKey]: value }))
    }

    return (
        <section
            aria-labelledby="profile-heading"
            className={`${styles.glassCard} mx-start rounded-4 p-4 p-md-5`}
        >
            {/* Header */}
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3 gap-md-4">
                <div className="position-relative rounded-4 overflow-hidden border border-opacity-25 border-white" style={{ width: 144, height: 144 }}>
                    <Image
                        src={avatarSrc || "/placeholder.svg"}
                        alt="Profile photo"
                        width={144}
                        height={144}
                        className="object-fit-cover w-100 h-100"
                        priority
                    />
                </div>
                <div>
                    <h1 id="profile-heading" className="h3 fw-semibold mb-0 text-white">
                        {name}
                    </h1>
                </div>
            </div>

            {/* Body */}
            <div className="mt-4 mt-md-5">
                {/* Working Days */}
                <div className="mb-3">
                    <div className="small text-white mb-2">Working Days</div>
                    <div
                        role="tablist"
                        aria-label="Select a day"
                        className={`row g-0 overflow-hidden rounded-3 ${styles.borderedRow}`}
                    >
                        {week.map((d) => {
                            const active = d.key === selectedDay
                            return (
                                <div key={d.key} className={`col-12 col-md d-flex align-items-center ${styles.borderedCol}`}>
                                    <button
                                        type="button"
                                        role="tab"
                                        aria-selected={active}
                                        className={`w-100 text-start px-3 py-3 small border-0 ${styles.cell}`}
                                    >
                                        {d.label}
                                        <span className="visually-hidden">{active ? " Selected" : ""}</span>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Hours of Operation */}
                <div className="mb-3">
                    <div className="small text-white mb-2">Hours of Operation</div>
                    <div className={`row g-0 overflow-hidden rounded-3 ${styles.borderedRow}`}>
                        
                        {week.map((d, idx) => {
                            // const isSelected = d.key === selectedDay
                            const value = hoursByDay[d.key] ?? ""
                            const filled = value && value !== "—"
                            return (
                                <div key={d.key} className={`col-12 col-md d-flex align-items-center ${styles.borderedCol}`}>
                                    <div className={`w-100 px-2 py-2 ${styles.cell} `}>
                                        <button
                                            type="button"
                                            className={`btn ${filled ? styles.selectedAmber : ""} btn-sm rounded-2 px-3 w-auto`}
                                            
                                            // aria-label={value ? `Set hours for ${d.label}: ${value}` : `Set hours for ${d.label}`}
                                        >
                                            {value || " "}
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* About Employee */}
                <div className="mb-3">
                    <label htmlFor="about" className="small text-white mb-2 d-block">
                        About Employee
                    </label>
                    <div className={`${styles.fieldSurface} rounded-3 p-2`}>
                        <textarea
                            id="about"
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                            className="form-control border-0 bg-transparent text-white"
                            style={{ minHeight: 110 }}
                        />
                    </div>
                    {/* <div className="form-text text-white-50">
                        Use this space to describe the employee&apos;s background and notes.
                    </div> */}
                </div>

                {/* Stylist Message Access */}
                <div className="mb-4">
                    <div className="small text-white-50 mb-2">Stylist Message Access</div>
                    <div className={`${styles.fieldSurface} rounded-3 p-1`}>
                        <select
                            className="form-select border-0 bg-transparent text-white"
                            value={access}
                            onChange={(e) => setAccess(e.target.value)}
                        >
                            <option className="bg-dark" value="everyone">Everyone</option>
                            <option className="bg-dark" value="clients">Clients only</option>
                            <option className="bg-dark" value="team">Team only</option>
                            <option className="bg-dark" value="noone">No one</option>
                        </select>
                    </div>
                </div>

                {/* Save */}
                <div className="pt-2">
                    <button
                        type="button"
                        className={`btn ${styles.btnAmber} rounded-pill px-4 py-2 `}
                        onClick={() => {
                            console.log({ selectedDay, hoursByDay, about, access })
                            alert("Saved!")
                        }}
                    >
                        Save
                    </button>
                </div>
            </div>
        </section>
    )
}

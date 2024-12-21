"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState(null); // Initialize as null
  const [type, setType] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setAppointments(parsedUser.appointments || []); // Safely set appointments
      setType(parsedUser.type || ""); // Safely set type
    } else {
      alert("You should be signed in!");
      router.push("/pages/choose");
    }
  }, []); // Run only once on initial render

  return (
    <div
      style={{
        padding: "100px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#61d0b4", // Matching the green background color
        minHeight: "50vh",
      }}
    >
      {/* Profile Icon */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Link href={type === "doctor" ? "/pages/doctor_profile" : "/pages/user_profile"}>
          <img
            src="/images/user.png"
            style={{ width: "40px", height: "40px", cursor: "pointer" }}
            alt="User Profile"
          />
        </Link>
      </div>

      <h1 style={{ textAlign: "center", margin: "20px 0", color: "#ffffff" }}>
        My Appointments
      </h1>
      <ul style={{ listStyleType: "none", padding: 0, textAlign: "center" }}>
        {appointments.map((appointment) => (
          <li
            key={appointment.id}
            style={{
              margin: "10px 0",
              padding: "15px",
              border: "1px solid #ffffff",
              borderRadius: "5px",
              backgroundColor: "#ffffff",
              color: "#61d0b4",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p>
              <strong>Date:</strong> {appointment.date}
            </p>
            <p>
              <strong>Time:</strong> {appointment.time}
            </p>
            <p>
              <strong>Doctor:</strong> {appointment.doctor}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

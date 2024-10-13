"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Use Next.js router

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
        field: "",
        price: "",
    });

    const router = useRouter(); // Use Next.js router

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (typeof window !== 'undefined') { // Ensure localStorage is accessed on the client-side
            localStorage.setItem("user", JSON.stringify(formData));
        }

        alert("Registration successful");
        router.push("../pages/taskerDashboard"); // Navigate to login page
    };

    return (
        <><div className="h-[200px] w-full"></div>
            <div className="flex justify-center items-center h-screen">
                <form className="bg-[#1B262C]/90 p-10 rounded-3xl shadow-2xl max-w-lg w-full mx-auto flex flex-col space-y-6 border border-[#FBE4CC] mt-10 mb-[150px]" onSubmit={handleSubmit}>
                    <h2 className="text-2xl text-center text-white mb-4">Registration</h2>
                    {["name", "email", "password", "age", "field", "price"].map((field) => (
                        <div key={field} className="mb-4">
                            <label className="block text-white mb-2 capitalize">{field}</label>
                            <input
                                type={field === "password" ? "password" : field === "age" || field === "price" ? "number" : "text"}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                placeholder={field}
                                className="block w-full px-4 py-3 rounded-lg text-[#1B262C] bg-[#FBE4CC] placeholder-gray-600 focus:ring focus:ring-[#FBE4CC] focus:outline-none"
                                required
                            />
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Register
                    </button>
                </form>
            </div></>
    );
};

export default RegistrationForm;

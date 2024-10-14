import ContactForm from "@/app/components/contactUs/form";
import Header from "@/app/components/contactUs/header";
import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-[#FBE4CC] text-[#1B262C]">
      <Header />
      {/* Hero Section */}
      <p className="text-xl max-w-3xl mx-auto mt-5">
        We're here to help! If you have any questions or need assistance, please
        reach out.
      </p>

      {/* Contact Information */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactInfo icon="📞" label="Phone" info="(123) 456-7890" />
          <ContactInfo icon="✉️" label="Email" info="fixitcompany@gmail.com" />
          <ContactInfo icon="🌐" label="Website" info="www.fixit.com" />
          <ContactInfo
            icon="📍"
            label="Location"
            info="*** St, *** City,*** Country"
          />
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

// Sample ContactInfo Component
const ContactInfo = ({ icon, label, info }) => (
  <div className="flex items-center p-4 bg-[#1B262C] text-[#FBE4CC] rounded-lg shadow-lg">
    <span className="text-3xl mr-4">{icon}</span>
    <div>
      <h3 className="font-bold">{label}</h3>
      <p>{info}</p>
    </div>
  </div>
);

export default ContactUs;

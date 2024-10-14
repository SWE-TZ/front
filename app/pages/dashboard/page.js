"use client";
import Head from "next/head";
import SideMenu from "@/app/components/dashboard/sideMenu";
import Header from "@/app/components/dashboard/header";
import StatisticCards from "@/app/components/dashboard/statsCard";
import RecentServiceRequests from "@/app/components/dashboard/recentReq";
import RecentReviews from "@/app/components/dashboard/recentReview";
import { useState } from "react";
import Earnings from "@/app/components/dashboard/earning";
import Jobs from "@/app/components/dashboard/jobs";
import Reviews from "@/app/components/dashboard/reviews";
import Help from "@/app/components/dashboard/help";
import Settings from "@/app/components/dashboard/settings";
import MyServices from "@/app/components/dashboard/myServices";

const Dashboard = () => {

  const [category , setCategory] = useState("Dashboard");

  const handleChange = (menuCategory)=>{
    setCategory(menuCategory)
  }

  return (
    <div className="flex h-screen bg-dark text-light">
      <Head>
        <title>FixIt Dashboard</title>
        <meta
          name="description"
          content="Service Provider Dashboard for FixIt Home Service App"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Side Menu */}
      <SideMenu menuCategory={handleChange}/>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        {/* Content */}
        <main className="flex-1 p-6 bg-dark overflow-y-auto">
          {category === "Dashboard" && <DashboardStatistics />}
          {category === "My Services" && <MyServices />}
          {category === "Jobs" && <Jobs />}
          {category === "Earnings" && <Earnings />}
          {category === "Reviews" && <Reviews />}
          {category === "Help" && <Help />}
          {category === "Settings" && <Settings />}
        </main>
      </div>
    </div>
  );
};

function DashboardStatistics(){
  return(
    <>
      {/* Statistic Cards */}
      <StatisticCards />
      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentServiceRequests />
        <RecentReviews />
      </div>
    
    </>

  )
}

export default Dashboard;

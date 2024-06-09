import { UserButton } from "@clerk/nextjs";
import React from "react";
import Header from "./_components/Header";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <h1>Dashboard</h1>
      <p>This is the dashboard page</p>
      <UserButton />
    </div>
  );
};

export default Dashboard;

import React from "react";
import { motion } from "framer-motion";
import { UserCheck, UserIcon, UserPlus, UserX } from "lucide-react";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import UserTable from "../components/users/UserTable";

const userStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};

const UserPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="User" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px:8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Users"
            icon={UserIcon}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <StatCard
            name="New Users Today"
            icon={UserPlus}
            value={userStats.newUsersToday.toLocaleString()}
            color="#10b981"
          />
          <StatCard
            name="Active Users"
            icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#f59e0b"
          />
          <StatCard
            name="Churn Rate"
            icon={UserX}
            value={userStats.churnRate}
            color="#EF4444"
          />
        </motion.div>

        <UserTable />
      </main>
    </div>
  );
};

export default UserPage;

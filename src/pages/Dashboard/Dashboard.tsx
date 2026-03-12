import React from "react";
import { motion } from "framer-motion";
import { Plus, Download, Bell } from "lucide-react";
import { useState, useEffect } from "react";
import "./DashboardStyle.scss";
import RecentApplications from "../../components/layout/recentapplication/RecentApplication";

const Dashboard: React.FC = () => {
  const quickActions = [
    { id: "new-user", title: "Add New User", icon: Plus },
    { id: "export", title: "Export Data", icon: Download },
    { id: "notifications", title: "View Notifications", icon: Bell },
  ];

  const recentActivity = [
    {
      id: 1,
      user: "John Doe",
      action: "Applied for loan",
      time: "2 minutes ago",
      avatar: "JD",
    },
    {
      id: 2,
      user: "Jane Smith",
      action: "Loan approved",
      time: "15 minutes ago",
      avatar: "JS",
    },
    {
      id: 3,
      user: "Mike Johnson",
      action: "Profile updated",
      time: "1 hour ago",
      avatar: "MJ",
    },
    {
      id: 4,
      user: "Sarah Wilson",
      action: "Payment received",
      time: "2 hours ago",
      avatar: "SW",
    },
  ];

  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome back! </h1>
        <p>Here's what's happening with your loan applications today.</p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="welcome-banner"
      >
        <div className="banner-content">
          <div className="welcome-text">
            <h2>{greeting}, Admin!</h2>
            <p>Here's your loan application overview for today</p>
            <div className="quick-stats">
              <div className="stat-item">
                <span className="stat-number">500</span>
                <span className="stat-label">Total Users</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">143</span>
                <span className="stat-label">New Applications</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">₦2.4M</span>
                <span className="stat-label">Total Disbursed</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="dashboard-content">
        <RecentApplications />
        <div className="sidebar-section">
          <div className="quick-actions">
            <h3>Quick Actions</h3>
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <div key={action.id} className="action-item">
                  <Icon className="action-icon" size={18} />
                  <span>{action.title}</span>
                </div>
              );
            })}
          </div>

          <div className="recent-activity">
            <h3>Recent Activity</h3>
            {recentActivity.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="activity-avatar">{activity.avatar}</div>
                <div className="activity-content">
                  <div className="activity-title">
                    {activity.user} {activity.action}
                  </div>
                  <div className="activity-time">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

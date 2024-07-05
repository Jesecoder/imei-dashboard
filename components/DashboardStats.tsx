// components/DashboardStats.tsx
import React from 'react';

const DashboardStats = () => {
  const stats = {
    success: 50,
    failed: 5,
    pending: 10
  };

  return (
    <div>
      <h2>Order Statistics</h2>
      <p>Successful Orders: {stats.success}</p>
      <p>Failed Orders: {stats.failed}</p>
      <p>Pending Orders: {stats.pending}</p>
    </div>
  );
};

export default DashboardStats;

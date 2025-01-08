import React from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../admin/AdminSidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <AdminNavbar />
      <div className="admin-container">
        <AdminSidebar />
        <main className="admin-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
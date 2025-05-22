import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const tabs = [
  { key: 'account', label: 'My Account' },
  { key: 'orders', label: 'My Orders' },
  { key: 'wishlist', label: 'My Wish List' },
  { key: 'address', label: 'Address Book' },
  { key: 'info', label: 'Account Information' },
];

function AccountInfo({ user, onEdit, onChangePassword, onLogout }) {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white rounded shadow p-6">
        <h3 className="font-bold mb-2">Account Information</h3>
        <div className="mb-2">
          <span className="font-semibold">Contact Information</span>
          <div className="mt-1 text-gray-800">{user.displayName || 'No Name'}</div>
          <div className="text-gray-600">{user.email}</div>
          <div className="mt-2 flex flex-wrap gap-4 items-center">
            <button onClick={onEdit} className="text-red-700 font-medium hover:underline">Edit</button>
            <span className="text-gray-400">|</span>
            <button onClick={onChangePassword} className="text-red-700 font-medium hover:underline">Change Password</button>
            <span className="text-gray-400">|</span>
            <button onClick={onLogout} className="text-white bg-red-700 hover:bg-red-800 font-medium px-4 py-1 rounded transition">Logout</button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded shadow p-6">
        <h3 className="font-bold mb-2">Newsletters</h3>
        <div className="mb-2">
          <span className="font-semibold">You aren't subscribed to our newsletter.</span>
          <div className="mt-2">
            <button className="text-red-700 font-medium hover:underline">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AddressBook() {
  return (
    <div className="bg-white rounded shadow p-6 mt-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">Address Book</h3>
        <button className="text-red-700 font-medium hover:underline">Manage Addresses</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="font-semibold">Default Billing Address</div>
          <div className="text-gray-600">You have not set a default billing address.</div>
          <button className="text-red-700 font-medium hover:underline mt-2">Edit Address</button>
        </div>
        <div>
          <div className="font-semibold">Default Shipping Address</div>
          <div className="text-gray-600">You have not set a default shipping address.</div>
          <button className="text-red-700 font-medium hover:underline mt-2">Edit Address</button>
        </div>
      </div>
    </div>
  );
}

function OrdersList() {
  // डमी डेटा
  const orders = [
    { id: 'ORD123', date: '2024-06-01', status: 'Delivered', total: '₹2,999' },
    { id: 'ORD124', date: '2024-05-15', status: 'Shipped', total: '₹1,499' },
  ];
  return (
    <div className="bg-white rounded shadow p-6">
      <h3 className="font-bold mb-4">My Orders</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">Order #</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="border-b hover:bg-gray-50">
              <td className="py-2">{order.id}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function WishList() {
  // डमी डेटा
  const items = [
    { id: 1, name: 'Rolex Submariner', price: '₹7,99,999' },
    { id: 2, name: 'Omega Speedmaster', price: '₹4,99,999' },
  ];
  return (
    <div className="bg-white rounded shadow p-6">
      <h3 className="font-bold mb-4">My Wish List</h3>
      <ul>
        {items.map(item => (
          <li key={item.id} className="flex justify-between py-2 border-b last:border-b-0">
            <span>{item.name}</span>
            <span className="text-gray-700">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AccountInformation({ user }) {
  return (
    <div className="bg-white rounded shadow p-6">
      <h3 className="font-bold mb-4">Account Information</h3>
      <div className="mb-2">Name: <span className="text-gray-800">{user.displayName || 'No Name'}</span></div>
      <div className="mb-2">Email: <span className="text-gray-800">{user.email}</span></div>
      <div className="mb-2">Password: <span className="text-gray-800">********</span></div>
      <button className="text-red-700 font-medium hover:underline">Edit</button>
    </div>
  );
}

export default function ProfileDashboard() {
  const { currentUser, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('account');
  const navigate = useNavigate();

  if (!currentUser) {
    return <div className="text-center py-20 text-xl">Please login to view your profile.</div>;
  }

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <div className="bg-white rounded shadow p-4">
            <ul>
              {tabs.map(tab => (
                <li
                  key={tab.key}
                  className={`py-3 px-4 cursor-pointer border-l-4 ${activeTab === tab.key ? 'border-red-700 text-red-700 bg-gray-50 font-bold' : 'border-transparent text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Content */}
        <div className="w-full md:w-3/4">
          {activeTab === 'account' && <AccountInfo user={currentUser} onEdit={() => setActiveTab('info')} onChangePassword={() => setActiveTab('info')} onLogout={handleLogout} />}
          {activeTab === 'orders' && <OrdersList />}
          {activeTab === 'wishlist' && <WishList />}
          {activeTab === 'address' && <AddressBook />}
          {activeTab === 'info' && <AccountInformation user={currentUser} />}
        </div>
      </div>
    </div>
  );
} 
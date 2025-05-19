import React from 'react';
import { Cog6ToothIcon, PencilSquareIcon, NewspaperIcon, BellIcon, UserIcon } from '@heroicons/react/24/outline';

const navItems = [
  { title: 'Edit Profile', icon: PencilSquareIcon },
  { title: 'Personalize Feed', icon: NewspaperIcon },
  { title: 'Notifications', icon: BellIcon },
  { title: 'Settings', icon: Cog6ToothIcon },
];

const UserDashboard = () => {
  return (
    <div className="min-h-screen p-4">
      <div className="max-w-6xl mt-[150px] mx-auto grid md:grid-cols-4 gap-6">
        
        {/* Sidebar */}
        <aside className="md:col-span-1 bg-white rounded-xl shadow p-6">
          <div className="flex flex-col items-center">
            <img
              src="https://images.pexels.com/photos/3764545/pexels-photo-3764545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="User avatar"
              className="w-24 h-24 rounded-full object-cover mb-3"
            />
            <h2 className="text-lg font-semibold">Okoli Divine</h2>
            <p className="text-sm text-gray-500 mb-6">okolikosi0@gmail.com</p>
          </div>
          <div className="space-y-4">
            {navItems.map((item, index) => (
              <button
                key={index}
                className="flex items-center gap-3 w-full text-left text-sm px-4 py-2 rounded-md hover:bg-blue-50 transition"
              >
                <item.icon className="h-5 w-5 text-blue-600" />
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Main content */}
        <main className="md:col-span-3 space-y-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold mb-4">Welcome back, Divine 👋</h3>
            <p className="text-gray-600 text-sm">
              Use the options on the left to customize your dashboard experience. You can edit your profile,
              personalize your feed, and configure your settings.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-4 shadow hover:shadow-md transition">
              <h4 className="font-semibold text-lg mb-2">Profile Overview</h4>
              <p className="text-sm text-gray-500">Last updated 2 days ago. Keep your info fresh and accurate.</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow hover:shadow-md transition">
              <h4 className="font-semibold text-lg mb-2">Feed Preferences</h4>
              <p className="text-sm text-gray-500">Customize the type of content you want to see.</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow hover:shadow-md transition">
              <h4 className="font-semibold text-lg mb-2">Notification Settings</h4>
              <p className="text-sm text-gray-500">Manage alerts and email preferences.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;

import React from 'react';
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import StatsCard from '../Layout/StatsCard';


const Dashboard = () => {
  const pieChartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (pieChartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = pieChartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Applicants', 'Downloads', 'Website Visits', 'New Registrations'],
          datasets: [{
            data: [45, 25, 20, 10],
            backgroundColor: [
              '#003366',
              '#D4AF37',
              '#5B8C9D',
              '#F4F6F8'
            ],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right',
              labels: {
                usePointStyle: true,
                padding: 20
              }
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  const stats = [
    { icon: 'fa-bullhorn', color: 'blue', title: 'Active Notices', value: '12', change: '+2' },
    { icon: 'fa-chalkboard-teacher', color: 'gold', title: 'Faculty Members', value: '48', change: '+3' },
    { icon: 'fa-calendar-alt', color: 'teal', title: 'Schedules', value: '36', change: '0' },
    { icon: 'fa-file-export', color: 'gray', title: 'Pending Exports', value: '5', change: '-1' }
  ];

  const quickActions = [
    { icon: 'fa-plus', color: 'blue', label: 'Add New Notice' },
    { icon: 'fa-user-plus', color: 'gold', label: 'Add Faculty' },
    { icon: 'fa-calendar-plus', color: 'teal', label: 'Create Schedule' },
    { icon: 'fa-cloud-download-alt', color: 'gray', label: 'Export Data' }
  ];

  return (
    <div className="flex-1 overflow-auto p-4 md:p-6 bg-[#F4F6F8]">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            icon={stat.icon}
            color={stat.color}
            title={stat.title}
            value={stat.value}
            change={stat.change}
          />
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Pie Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Analytics Overview</h3>
          <div className="h-64">
            <canvas ref={pieChartRef}></canvas>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            {quickActions.map((action, index) => (
              <button 
                key={index}
                className={`flex items-center w-full p-3 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200
                  ${action.color === 'blue' ? 'hover:bg-[#003366] hover:text-white' : 
                    action.color === 'gold' ? 'hover:bg-[#D4AF37] hover:text-[#003366]' :
                    'hover:bg-gray-100'}`}
              >
                <div className={`p-2 rounded-full 
                  ${action.color === 'blue' ? 'bg-[#003366] text-white' : 
                    action.color === 'gold' ? 'bg-[#D4AF37] text-[#003366]' :
                    'bg-gray-200 text-gray-700'} mr-3`}>
                  <i className={`fas ${action.icon}`}></i>
                </div>
                <span>{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { icon: 'fa-bullhorn', color: 'blue', text: 'New notice published: "Semester Registration"', time: '2 hours ago' },
            { icon: 'fa-user-edit', color: 'gold', text: 'Faculty profile updated: Dr. Smith', time: '5 hours ago' },
            { icon: 'fa-calendar', color: 'teal', text: 'Class schedule modified for BHM 3rd Year', time: '1 day ago' },
            { icon: 'fa-file-export', color: 'gray', text: 'Student data exported for backup', time: '2 days ago' }
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <div className={`p-2 rounded-full 
                ${item.color === 'blue' ? 'bg-[#003366] text-white' : 
                  item.color === 'gold' ? 'bg-[#D4AF37] text-[#003366]' :
                  'bg-gray-200 text-gray-700'} mr-3 mt-1`}>
                <i className={`fas ${item.icon}`}></i>
              </div>
              <div>
                <p className="text-sm font-medium">{item.text}</p>
                <p className="text-xs text-gray-500 mt-1">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
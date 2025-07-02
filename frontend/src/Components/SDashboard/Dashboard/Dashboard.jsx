import React from 'react';
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import StatsCard from '../Layout/StatsCard';

const Dashboard = () => {
  const attendanceChartRef = useRef(null);
  const chartInstance = useRef(null);

  // Initialize and manage chart lifecycle
  useEffect(() => {
    if (attendanceChartRef.current) {
      // Destroy previous chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = attendanceChartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Attendance %',
            data: [85, 79, 88, 91, 76, 82],
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            borderColor: 'rgba(99, 102, 241, 1)',
            borderWidth: 2,
            tension: 0.3,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: false,
              min: 50,
              max: 100,
              ticks: {
                callback: function(value) {
                  return value + '%';
                }
              }
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    }

    // Cleanup function to destroy chart when component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  // Stats data
  const stats = [
    { icon: 'fa-book-open', color: 'indigo', title: 'Current Semester', value: '4th Year - 1st Sem' },
    { icon: 'fa-clipboard-check', color: 'green', title: 'Overall Attendance', value: '87.5%' },
    { icon: 'fa-chart-line', color: 'blue', title: 'Current GPA', value: '3.45' },
    { icon: 'fa-tasks', color: 'yellow', title: 'Pending Assignments', value: '2' }
  ];

  // Quick actions data
  const quickActions = [
    { icon: 'fa-upload', color: 'indigo', label: 'Upload Assignment' },
    { icon: 'fa-file-alt', color: 'green', label: 'Generate Bonafide' },
    { icon: 'fa-book', color: 'blue', label: 'Access Library' },
    { icon: 'fa-project-diagram', color: 'purple', label: 'Project Submission' }
  ];

  // Recent activities data
  const activities = [
    { icon: 'fa-check-circle', color: 'indigo', title: 'Assignment submitted for Research Methodology', time: '2 hours ago' },
    { icon: 'fa-book', color: 'green', title: 'New material uploaded for Tourism Planning', time: '1 day ago' },
    { icon: 'fa-exclamation-circle', color: 'yellow', title: 'Attendance below 75% in Hotel Operations', time: '2 days ago' },
    { icon: 'fa-chart-line', color: 'blue', title: 'Internal marks updated for Semester 4', time: '3 days ago' }
  ];

  // Upcoming events data
  const events = [
    { date: '15 Jun', color: 'red', title: 'Final Project Submission Deadline', desc: 'BHM 4th Year' },
    { date: '20 Jun', color: 'purple', title: 'TU Semester Exams Begin', desc: 'All Programs' },
    { date: '25 Jun', color: 'green', title: 'Internship Orientation', desc: 'Mandatory for BHM' },
    { date: '30 Jun', color: 'blue', title: 'Library Due Date', desc: 'Return borrowed books' }
  ];

  return (
    <div className="flex-1 overflow-auto p-4 md:p-6 bg-gray-50">
      {/* Welcome banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-6 mb-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Welcome back, John!</h2>
            <p className="mt-2 text-indigo-100">You have 3 new notifications and 2 pending assignments</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition duration-200 shadow-md hover:shadow-lg">
              View Notifications
            </button>
          </div>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            icon={stat.icon}
            color={stat.color}
            title={stat.title}
            value={stat.value}
          />
        ))}
      </div>

      {/* Charts and quick actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Attendance chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Attendance Overview</h3>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>This Semester</option>
              <option>Last Semester</option>
              <option>All Time</option>
            </select>
          </div>
          <div className="h-64">
            <canvas ref={attendanceChartRef}></canvas>
          </div>
        </div>

        {/* Quick links */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            {quickActions.map((action, index) => (
              <a 
                key={index}
                href="#" 
                className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition duration-200 hover:shadow-sm"
              >
                <div className={`p-2 rounded-full bg-${action.color}-100 text-${action.color}-600 mr-3`}>
                  <i className={`fas ${action.icon}`}></i>
                </div>
                <span>{action.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Recent activities and upcoming events */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent activities */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start">
                <div className={`p-2 rounded-full bg-${activity.color}-100 text-${activity.color}-600 mr-3 mt-1`}>
                  <i className={`fas ${activity.icon}`}></i>
                </div>
                <div>
                  <p className="text-sm font-medium">{activity.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming events */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            {events.map((event, index) => (
              <div key={index} className="flex items-start">
                <div className={`bg-${event.color}-100 text-${event.color}-600 rounded-lg px-3 py-1 text-xs font-medium mr-3 mt-1`}>
                  {event.date}
                </div>
                <div>
                  <p className="text-sm font-medium">{event.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{event.desc}</p>
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
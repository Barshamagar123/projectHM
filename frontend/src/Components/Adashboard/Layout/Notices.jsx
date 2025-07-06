import React, { useState, useRef } from 'react';
import { FaSearch, FaFilter, FaPlus, FaEdit, FaTrash, FaCalendarAlt, FaBullhorn, FaNewspaper, FaImage, FaTimes } from 'react-icons/fa';

const Notices = () => {
  const [activeTab, setActiveTab] = useState('notices');
  const [notices, setNotices] = useState([
    {
      id: 1,
      type: 'notice',
      title: 'Semester Registration Deadline',
      content: 'Last date for semester registration is June 30, 2023',
      date: '2023-06-15',
      status: 'active',
      priority: 'high',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      type: 'news',
      title: 'College Wins National Award',
      content: 'Our institution has been awarded the Best Hospitality College 2023',
      date: '2023-06-10',
      status: 'active',
      priority: 'medium',
      image: 'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      type: 'event',
      title: 'Annual Cultural Fest',
      content: 'Join us for the 3-day cultural festival starting July 15',
      date: '2023-07-15',
      status: 'active',
      priority: 'high',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    }
  ]);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    type: 'notice',
    date: new Date().toISOString().split('T')[0],
    status: 'draft',
    priority: 'medium',
    image: null
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData(prev => ({ ...prev, image: file }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    setFormData(prev => ({ ...prev, image: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setNotices(notices.map(notice => 
        notice.id === currentId ? { ...formData, id: currentId } : notice
      ));
    } else {
      const newNotice = {
        ...formData,
        id: notices.length > 0 ? Math.max(...notices.map(n => n.id)) + 1 : 1
      };
      setNotices([...notices, newNotice]);
    }
    resetForm();
    document.getElementById('create-notice-modal').close();
  };

  const handleEdit = (notice) => {
    setFormData(notice);
    setImagePreview(notice.image || null);
    setIsEditing(true);
    setCurrentId(notice.id);
    document.getElementById('create-notice-modal').showModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setNotices(notices.filter(notice => notice.id !== id));
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      type: 'notice',
      date: new Date().toISOString().split('T')[0],
      status: 'draft',
      priority: 'medium',
      image: null
    });
    setImagePreview(null);
    setIsEditing(false);
    setCurrentId(null);
  };

  const filteredNotices = notices.filter(notice => {
    if (activeTab === 'notices') return notice.type === 'notice';
    if (activeTab === 'news') return notice.type === 'news';
    if (activeTab === 'events') return notice.type === 'event';
    return true;
  });

  return (
    <div className="p-6 bg-[#F4F6F8] min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold text-[#003366] mb-4 md:mb-0">Notices/News/Events</h1>
        <div className="flex space-x-2">
          <button 
            onClick={() => {
              resetForm();
              document.getElementById('create-notice-modal').showModal();
            }}
            className="flex items-center bg-[#D4AF37] hover:bg-[#C9A227] text-[#003366] px-4 py-2 rounded-lg font-medium"
          >
            <FaPlus className="mr-2" /> Create New
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`px-4 py-2 font-medium ${activeTab === 'notices' ? 'text-[#003366] border-b-2 border-[#003366]' : 'text-gray-500'}`}
          onClick={() => setActiveTab('notices')}
        >
          <FaBullhorn className="inline mr-2" /> Notices
        </button>
        <button
          className={`px-4 py-2 font-medium ${activeTab === 'news' ? 'text-[#003366] border-b-2 border-[#003366]' : 'text-gray-500'}`}
          onClick={() => setActiveTab('news')}
        >
          <FaNewspaper className="inline mr-2" /> News
        </button>
        <button
          className={`px-4 py-2 font-medium ${activeTab === 'events' ? 'text-[#003366] border-b-2 border-[#003366]' : 'text-gray-500'}`}
          onClick={() => setActiveTab('events')}
        >
          <FaCalendarAlt className="inline mr-2" /> Events
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search notices..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366]"
          />
        </div>
        <div className="flex items-center space-x-2">
          <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#003366]">
            <option>All Status</option>
            <option>Active</option>
            <option>Draft</option>
            <option>Archived</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#003366]">
            <option>All Priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <button className="flex items-center border border-gray-300 rounded-lg px-3 py-2 hover:bg-gray-100">
            <FaFilter className="mr-2" /> Filter
          </button>
        </div>
      </div>

      {/* Notices List - Card View */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {filteredNotices.map((notice) => (
          <div key={notice.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            {notice.image && (
              <div className="h-48 overflow-hidden">
                <img 
                  src={notice.image} 
                  alt={notice.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <span className={`px-2 py-1 text-xs rounded-full 
                  ${notice.type === 'notice' ? 'bg-blue-100 text-blue-800' : 
                    notice.type === 'news' ? 'bg-green-100 text-green-800' : 
                    'bg-purple-100 text-purple-800'}`}>
                  {notice.type}
                </span>
                <span className={`px-2 py-1 text-xs rounded-full 
                  ${notice.priority === 'high' ? 'bg-red-100 text-red-800' : 
                    notice.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-gray-100 text-gray-800'}`}>
                  {notice.priority}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#003366] mb-2">{notice.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{notice.content}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">{notice.date}</span>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleEdit(notice)}
                    className="text-[#D4AF37] hover:text-[#C9A227]"
                  >
                    <FaEdit />
                  </button>
                  <button 
                    onClick={() => handleDelete(notice.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create/Edit Modal */}
      <dialog id="create-notice-modal" className="modal">
        <div className="modal-box max-w-3xl bg-white rounded-xl">
          <h3 className="font-bold text-lg mb-4 text-[#003366]">
            {isEditing ? 'Edit Item' : 'Create New Item'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image</label>
              <div className="relative group">
                <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200 overflow-hidden">
                  {imagePreview ? (
                    <>
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-200">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeImage();
                          }}
                          className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                        >
                          <FaTimes className="text-sm" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center p-5 text-gray-400">
                      <FaImage className="text-3xl mb-3" />
                      <p className="text-sm">Click to upload an image</p>
                      <p className="text-xs mt-1">PNG, JPG up to 5MB</p>
                    </div>
                  )}
                  <input 
                    ref={fileInputRef}
                    type="file" 
                    className="hidden" 
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title*</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter a descriptive title"
                required
              />
            </div>
            
            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content*</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Write your content here..."
                required
              />
            </div>
            
            {/* Meta Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="notice">Notice</option>
                  <option value="news">News</option>
                  <option value="event">Event</option>
                </select>
              </div>
              
              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="draft">Draft</option>
                  <option value="active">Active</option>
                </select>
              </div>
            </div>
            
            {/* Priority */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            
            {/* Form Actions */}
            <div className="flex justify-end space-x-4 pt-4 border-t border-gray-100">
              <button
                type="button"
                className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => {
                  document.getElementById('create-notice-modal').close();
                  resetForm();
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#D4AF37] hover:bg-[#C9A227] text-[#003366] rounded-lg font-medium"
              >
                {isEditing ? 'Update' : 'Create'}
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Notices;
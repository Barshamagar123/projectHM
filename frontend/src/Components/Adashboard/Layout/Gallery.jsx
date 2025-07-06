import React ,{ useState } from 'react';
import { FaSearch, FaPlus, FaEdit, FaTrash, FaImage, FaQuoteLeft, FaBriefcase } from 'react-icons/fa';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('gallery');
  const [mediaItems, setMediaItems] = useState([
    {
      id: 1,
      type: 'image',
      title: 'Campus View',
      description: 'Main building of our college',
      url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'campus',
      featured: true
    },
    {
      id: 2,
      type: 'testimonial',
      title: 'Alumni Success Story',
      description: 'John Doe, Class of 2018 - Now Hotel Manager',
      content: 'This college gave me the skills and confidence to excel in the hospitality industry.',
      author: 'John Doe',
      position: 'Hotel Manager',
      featured: true
    },
    {
      id: 3,
      type: 'career',
      title: 'Front Desk Associate',
      description: 'Opportunity at Grand Hotel',
      content: 'We are hiring for front desk associates with good communication skills.',
      company: 'Grand Hotel',
      location: 'New York',
      posted: '2023-06-01',
      featured: true
    }
  ]);

  const [formData, setFormData] = useState({
    type: 'image',
    title: '',
    description: '',
    url: '',
    category: '',
    featured: false,
    // Testimonial fields
    content: '',
    author: '',
    position: '',
    // Career fields
    company: '',
    location: '',
    posted: new Date().toISOString().split('T')[0]
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setMediaItems(mediaItems.map(item => 
        item.id === currentId ? { ...formData, id: currentId } : item
      ));
    } else {
      setMediaItems([...mediaItems, { ...formData, id: mediaItems.length + 1 }]);
    }
    resetForm();
    document.getElementById('media-modal').close();
  };

  const handleEdit = (item) => {
    setFormData(item);
    setIsEditing(true);
    setCurrentId(item.id);
    document.getElementById('media-modal').showModal();
  };

  const handleDelete = (id) => {
    setMediaItems(mediaItems.filter(item => item.id !== id));
  };

  const resetForm = () => {
    setFormData({
      type: 'image',
      title: '',
      description: '',
      url: '',
      category: '',
      featured: false,
      content: '',
      author: '',
      position: '',
      company: '',
      location: '',
      posted: new Date().toISOString().split('T')[0]
    });
    setIsEditing(false);
    setCurrentId(null);
  };

  const filteredItems = mediaItems.filter(item => {
    if (activeTab === 'gallery') return item.type === 'image';
    if (activeTab === 'testimonials') return item.type === 'testimonial';
    if (activeTab === 'careers') return item.type === 'career';
    return true;
  });

  const renderItemContent = (item) => {
    switch(item.type) {
      case 'image':
        return (
          <div className="relative group">
            <img 
              src={item.url} 
              alt={item.title} 
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
              <button 
                onClick={() => handleEdit(item)}
                className="text-white bg-[#D4AF37] bg-opacity-80 p-2 rounded-full mr-2 hover:bg-opacity-100"
              >
                <FaEdit />
              </button>
              <button 
                onClick={() => handleDelete(item.id)}
                className="text-white bg-red-500 bg-opacity-80 p-2 rounded-full hover:bg-opacity-100"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        );
      case 'testimonial':
        return (
          <div className="border border-gray-200 rounded-lg p-4 h-full flex flex-col">
            <FaQuoteLeft className="text-[#003366] text-2xl mb-2" />
            <p className="text-gray-700 mb-4 flex-grow">{item.content}</p>
            <div className="border-t border-gray-200 pt-3">
              <p className="font-medium text-[#003366]">{item.author}</p>
              <p className="text-sm text-gray-500">{item.position}</p>
            </div>
          </div>
        );
      case 'career':
        return (
          <div className="border border-gray-200 rounded-lg p-4 h-full flex flex-col">
            <h3 className="font-bold text-[#003366] text-lg mb-1">{item.title}</h3>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <p className="text-gray-700 mb-4 flex-grow">{item.content}</p>
            <div className="border-t border-gray-200 pt-3">
              <p className="font-medium text-[#003366]">{item.company}</p>
              <p className="text-sm text-gray-500">{item.location} • Posted: {item.posted}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-[#F4F6F8] min-h-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold text-[#003366] mb-4 md:mb-0">Gallery Management</h1>
        <div className="flex space-x-2">
          <button 
            onClick={() => {
              resetForm();
              document.getElementById('media-modal').showModal();
            }}
            className="flex items-center bg-[#D4AF37] hover:bg-[#C9A227] text-[#003366] px-4 py-2 rounded-lg font-medium"
          >
            <FaPlus className="mr-2" /> Add New
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`px-4 py-2 font-medium ${activeTab === 'gallery' ? 'text-[#003366] border-b-2 border-[#003366]' : 'text-gray-500'}`}
          onClick={() => setActiveTab('gallery')}
        >
          <FaImage className="inline mr-2" /> Gallery
        </button>
        <button
          className={`px-4 py-2 font-medium ${activeTab === 'testimonials' ? 'text-[#003366] border-b-2 border-[#003366]' : 'text-gray-500'}`}
          onClick={() => setActiveTab('testimonials')}
        >
          <FaQuoteLeft className="inline mr-2" /> Testimonials
        </button>
        <button
          className={`px-4 py-2 font-medium ${activeTab === 'careers' ? 'text-[#003366] border-b-2 border-[#003366]' : 'text-gray-500'}`}
          onClick={() => setActiveTab('careers')}
        >
          <FaBriefcase className="inline mr-2" /> Careers
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366]"
          />
        </div>
        <div className="flex items-center space-x-2">
          {activeTab === 'gallery' && (
            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#003366]">
              <option>All Categories</option>
              <option>Campus</option>
              <option>Events</option>
              <option>Students</option>
            </select>
          )}
          <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#003366]">
            <option>All Items</option>
            <option>Featured Only</option>
          </select>
        </div>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            {renderItemContent(item)}
            <div className="p-4">
              <h3 className="font-bold text-[#003366]">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <div className="flex justify-between items-center mt-3">
                <span className={`text-xs px-2 py-1 rounded-full 
                  ${item.featured ? 'bg-[#D4AF37] text-[#003366]' : 'bg-gray-200 text-gray-700'}`}>
                  {item.featured ? 'Featured' : 'Regular'}
                </span>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleEdit(item)}
                    className="text-[#003366] hover:text-[#D4AF37]"
                  >
                    <FaEdit />
                  </button>
                  <button 
                    onClick={() => handleDelete(item.id)}
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
      <dialog id="media-modal" className="modal">
        <div className="modal-box max-w-2xl">
          <h3 className="font-bold text-lg mb-4 text-[#003366]">
            {isEditing ? 'Edit Media' : 'Add New Media'}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                >
                  <option value="image">Image</option>
                  <option value="testimonial">Testimonial</option>
                  <option value="career">Career Opportunity</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                  required
                />
              </div>

              {formData.type === 'image' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                    <input
                      type="url"
                      name="url"
                      value={formData.url}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <input
                      type="text"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                    />
                  </div>
                </>
              )}

              {formData.type === 'testimonial' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                    <textarea
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                      required
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                      <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                      <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              {formData.type === 'career' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Opportunity Details</label>
                    <textarea
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                      required
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Posted Date</label>
                      <input
                        type="date"
                        name="posted"
                        value={formData.posted}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#003366]"
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-[#003366] focus:ring-[#003366] border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">Featured Item</label>
              </div>
            </div>
            
            <div className="modal-action">
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => document.getElementById('media-modal').close()}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn bg-[#D4AF37] hover:bg-[#C9A227] text-[#003366]"
              >
                {isEditing ? 'Update' : 'Create'}
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Gallery;
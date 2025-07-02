import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The hands-on training and supportive faculty helped me launch my career in hospitality!",
      name: "Rahul Sharma",
      role: "BHM Graduate",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      borderColor: "border-blue-600"
    },
    {
      quote: "The international internship program gave me global exposure and confidence.",
      name: "Sneha Thapa",
      role: "+2 in Hotel Management",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      borderColor: "border-purple-600"
    },
    {
      quote: "Modern facilities and a vibrant campus life made my learning experience memorable.",
      name: "Dipesh Chaudhary",
      role: "BHM Student",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      borderColor: "border-amber-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50" id="testimonials">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">What Our Students Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ quote, name, role, image, borderColor }) => (
  <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
    <img 
      src={image} 
      alt={name} 
      className={`w-20 h-20 rounded-full mb-4 border-4 ${borderColor}`} 
    />
    <p className="text-gray-700 mb-3">"{quote}"</p>
    <span className="font-bold text-blue-700">{name}</span>
    <span className="text-sm text-gray-500">{role}</span>
  </div>
);

export default TestimonialsSection;
import React from "react";

const EventsSection = () => {
  const events = [
    {
      title: "International Food Festival 2024",
      description: "Experience cuisines from around the world, prepared by our students and faculty.",
      date: "April 15, 2024"
    },
    {
      title: "Guest Lecture: Hospitality Trends",
      description: "Join us for an insightful session with industry leaders on the future of hospitality.",
      date: "March 28, 2024"
    },
    {
      title: "Admissions Open for 2024",
      description: "Apply now for our +2 and Bachelor programs in Hotel Management.",
      date: "February 10, 2024"
    }
  ];

  return (
    <section className="py-16 bg-white" id="events">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Latest Events & News</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard 
              key={index}
              title={event.title}
              description={event.description}
              date={event.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const EventCard = ({ title, description, date }) => (
  <div className="bg-gray-50 rounded-xl shadow p-6">
    <h4 className="font-bold text-lg mb-2">{title}</h4>
    <p className="text-gray-600 mb-2">{description}</p>
    <span className="text-xs text-blue-600">{date}</span>
  </div>
);

export default EventsSection;
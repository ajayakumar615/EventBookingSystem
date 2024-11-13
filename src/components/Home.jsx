import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

const Home = ({ events, setEvents, isAuthenticated }) => {
  let navigate = useNavigate();
  
  let eventsPerPage = 5;
  let [currentPage, setCurrentPage] = useState(1);

  let paginatedEvents = useMemo(() => {
    let startIndex = (currentPage - 1) * eventsPerPage;
    return events.slice(startIndex, startIndex + eventsPerPage);
  }, [events, currentPage]);

  let handleBookingClick = (eventId) => {
    if (!isAuthenticated) {
      alert("Please login to book tickets.");
      navigate('/login');
    } else {
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === eventId && event.availableSeats > 0
            ? { ...event, availableSeats: event.availableSeats - 1 }
            : event
        )
      );
    }
  };

  let totalPages = Math.ceil(events.length / eventsPerPage);

  let handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prevPage => prevPage + 1);
  };

  let handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(prevPage => prevPage - 1);
  };

  return (
    <div className="home">
      <h1>Event Booking System</h1>
      <div className="event-list">
        {paginatedEvents.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p><strong>Category:</strong> {event.category}</p>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
            <p><strong>Description:</strong> {event.description}</p>
            <p><strong>Available Seats:</strong> {event.availableSeats}</p>
            <p><strong>Price:</strong> ${event.price}</p>
            {event.availableSeats > 0 ? (
              <button onClick={() => handleBookingClick(event.id)}>
                Book Ticket
              </button>
            ) : (
              <button disabled className="fully-booked">
                Fully Booked
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{currentPage} / {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;

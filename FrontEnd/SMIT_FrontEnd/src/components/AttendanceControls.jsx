import React from "react";

const AttendanceControls = ({ setIsOpenScanner }) => {
  const handleStartAttendance = () => {
    setIsOpenScanner(true);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-4">
      <h2 className="text-xl font-bold mb-4">Attendance</h2>
      <div className="flex flex-wrap mb-4">
        <button
          onClick={handleStartAttendance}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Attendance start
        </button>
        <select className="border p-2 mr-2 mb-2 rounded">
          <option>Select Campus</option>
          {/* Add campus options here */}
        </select>
        <select className="border p-2 mr-2 mb-2 rounded">
          <option>Select Course</option>
          {/* Add course options here */}
        </select>
        <select className="border p-2 mr-2 mb-2 rounded">
          <option>Select Batch</option>
          {/* Add batch options here */}
        </select>
        <select className="border p-2 mr-2 mb-2 rounded">
          <option>Instructor Name</option>
          {/* Add instructor options here */}
        </select>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>
    </div>
  );
};

export default AttendanceControls;

import React, { useState, useEffect } from "react";
import axios from "axios";

const AttendanceControls = ({ setIsOpenScanner }) => {
  const [campuses, setCampuses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [batches, setBatches] = useState([]);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/students");
        const students = response.data;

        const campusSet = new Set();
        const courseSet = new Set();
        const batchSet = new Set();
        const instructorSet = new Set();

        students.forEach((student) => {
          campusSet.add(student.campus_id);
          if (student.courses[0]) courseSet.add(student.courses[0]);
          batchSet.add(student.batch_id);
          instructorSet.add(student.trainer_name);
        });

        setCampuses(Array.from(campusSet));
        setCourses(Array.from(courseSet));
        setBatches(Array.from(batchSet));
        setInstructors(Array.from(instructorSet));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleStartAttendance = () => {
    setIsOpenScanner(true);
  };

  return (
    <div className="shadow rounded-lg p-6 flex flex-wrap justify-center gap-3 items-center">
      <button
        onClick={handleStartAttendance}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Start Attendance
      </button>
      <select className="border p-2 rounded">
        <option>Select Campus</option>
        {campuses.map((campus) => (
          <option key={campus} value={campus}>
            {campus}
          </option>
        ))}
      </select>
      <select className="border p-2 rounded">
        <option>Select Course</option>
        {courses.map((course) => (
          <option key={course} value={course}>
            {course}
          </option>
        ))}
      </select>
      <select className="border p-2 rounded">
        <option>Select Batch</option>
        {batches.map((batch) => (
          <option key={batch} value={batch}>
            {batch}
          </option>
        ))}
      </select>
      <select className="border p-2 rounded">
        <option>Instructor Name</option>
        {instructors.map((instructor) => (
          <option key={instructor} value={instructor}>
            {instructor}
          </option>
        ))}
      </select>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Search
      </button>
    </div>
  );
};

export default AttendanceControls;

// Testing code
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import QRScanner from "./QrModal";

// const AttendanceControls = () => {
//   const [campuses, setCampuses] = useState([]);
//   const [courses, setCourses] = useState([]);
//   const [batches, setBatches] = useState([]);
//   const [instructors, setInstructors] = useState([]);
//   const [isScannerOpen, setIsScannerOpen] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/students");
//         const students = response.data;

//         const campusSet = new Set();
//         const courseSet = new Set();
//         const batchSet = new Set();
//         const instructorSet = new Set();

//         students.forEach((student) => {
//           campusSet.add(student.campus_id);
//           if (student.courses[0]) courseSet.add(student.courses[0]);
//           batchSet.add(student.batch_id);
//           instructorSet.add(student.trainer_name);
//         });

//         setCampuses(Array.from(campusSet));
//         setCourses(Array.from(courseSet));
//         setBatches(Array.from(batchSet));
//         setInstructors(Array.from(instructorSet));
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleToggleScanner = () => {
//     setIsScannerOpen(!isScannerOpen);
//   };

//   return (
//     <div className="shadow rounded-lg p-6 flex flex-wrap justify-center gap-3 items-center">
//       <button
//         onClick={handleToggleScanner}
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         {isScannerOpen ? "Stop Attendance" : "Start Attendance"}
//       </button>
//       <select className="border p-2 rounded">
//         <option>Select Campus</option>
//         {campuses.map((campus) => (
//           <option key={campus} value={campus}>
//             {campus}
//           </option>
//         ))}
//       </select>
//       <select className="border p-2 rounded">
//         <option>Select Course</option>
//         {courses.map((course) => (
//           <option key={course} value={course}>
//             {course}
//           </option>
//         ))}
//       </select>
//       <select className="border p-2 rounded">
//         <option>Select Batch</option>
//         {batches.map((batch) => (
//           <option key={batch} value={batch}>
//             {batch}
//           </option>
//         ))}
//       </select>
//       <select className="border p-2 rounded">
//         <option>Instructor Name</option>
//         {instructors.map((instructor) => (
//           <option key={instructor} value={instructor}>
//             {instructor}
//           </option>
//         ))}
//       </select>
//       <button className="bg-blue-600 text-white px-4 py-2 rounded">
//         Search
//       </button>
//       {isScannerOpen && <QRScanner />}
//     </div>
//   );
// };

// export default AttendanceControls;

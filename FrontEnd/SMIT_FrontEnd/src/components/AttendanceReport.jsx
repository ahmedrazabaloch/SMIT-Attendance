import React, { useEffect, useState } from "react";
// import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import AttendanceTable from "./AttendanceTable";

const AttendanceReport = ({ scannedStudents }) => {
  // const [allData, setAllData] = useState([]);
  const [studentData, setStudentData] = useState([]);
  const [attendanceRecord, setAttendanceRecord] = useState({});
  const [currentDay, setCurrentDay] = useState(1);

  const gettingStudents = async () => {
    try {
      const response = await axios.get("http://localhost:3000/students");
      console.log("response-->", response.data);
      setStudentData(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    gettingStudents();
  }, []);

  useEffect(() => {
    if (scannedStudents.length > 0) {
      setAttendanceRecord((prevRecord) => {
        const newRecord = { ...prevRecord };
        scannedStudents.forEach((rollNo) => {
          if (!newRecord[rollNo]) {
            newRecord[rollNo] = {};
          }
          newRecord[rollNo][currentDay] = true;
        });
        return newRecord;
      });
    }
  }, [scannedStudents, currentDay]);

  return (
    <div className="flex flex-1 flex-col md:flex-row">
      <main className="flex-1 p-6">
        <AttendanceTable
          studentData={studentData}
          attendanceRecord={attendanceRecord}
          // currentDay={currentDay}
          // setCurrentDay={setCurrentDay}
        />
      </main>
    </div>
  );
};

export default AttendanceReport;

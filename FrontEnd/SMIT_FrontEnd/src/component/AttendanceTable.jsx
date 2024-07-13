import { useState, useEffect } from "react";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";

const AttendanceTable = ({
  scannedStudents,
  currentDay,
  attendanceRecord,
  setAttendanceRecord
}) => {
  const [studentData, setStudentData] = useState([]);

  // Fetch student data from the backend
  const gettingStudents = async () => {
    try {
      const response = await axios.get("http://localhost:3000/students");
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
  }, [scannedStudents, currentDay, setAttendanceRecord]);

  return (
    <div className="overflow-auto h-[55vh]">
      <table className="table-auto w-full">
        <thead className="sticky top-0 bg-white">
          <tr>
            <th className="border px-4 py-2">Students</th>
            {Array.from({ length: 12 }, (_, i) => (
              <th key={i} className="border px-4 py-2">
                {i + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {studentData.map((student, idx) => (
            <tr key={idx}>
              <td className="border bg-white px-4 py-2 flex items-center">
                <p className="w-max">{`${student.name} ${student.roll_no}`}</p>
              </td>
              {Array.from({ length: 12 }, (_, dayIdx) => (
                <td key={dayIdx} className="border px-4 py-2 text-center">
                  {attendanceRecord[student.roll_no] &&
                  attendanceRecord[student.roll_no][dayIdx + 1] ? (
                    <FaCheckCircle className="text-green-500" />
                  ) : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AttendanceTable = ({
  studentData,
  attendanceRecord,
  currentDay,
  setCurrentDay,
}) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      {/* <div>
        <label htmlFor="currentDay" className="mr-2">
          Day:
        </label>
        <select
          id="currentDay"
          value={currentDay}
          onChange={(e) => setCurrentDay(Number(e.target.value))}
          className="border p-2 mr-2 mb-2 rounded"
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div> */}
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
            {studentData?.map((student, idx) => (
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
    </div>
  );
};

export default AttendanceTable;

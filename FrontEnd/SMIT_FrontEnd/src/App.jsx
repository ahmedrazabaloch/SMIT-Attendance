import { useState } from "react";
import "./App.css";
import AttendanceReport from "./components/AttendanceReport.jsx";
import QRScanner from "./components/QrModal.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [students, setStudents] = useState([]);

  const handleScannedStudents = (scannedStudents) => {
    setStudents(scannedStudents);
  };

  return (
    <>
      <div className="bg-red-50">
        <Navbar />
        <QRScanner onScannedStudentsChange={handleScannedStudents} />
        <AttendanceReport scannedStudents={students} />
      </div>
    </>
  );
}

export default App;

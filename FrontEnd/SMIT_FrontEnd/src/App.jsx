import { useState } from "react";
import "./App.css";
import AttendanceReport from "./components/AttendanceReport.jsx";
import QRScanner from "./components/QrModal.jsx";
import Navbar from "./components/Navbar.jsx";
import AttendanceControls from "./components/AttendanceControls.jsx";

function App() {
  const [students, setStudents] = useState([]);
  const [isOpenScanner, setIsOpenScanner] = useState(false);

  const handleScannedStudents = (scannedStudents) => {
    setStudents(scannedStudents);
  };

  return (
    <>
      <div className="bg-white w-full m-auto">
        <Navbar />
        <AttendanceControls setIsOpenScanner={setIsOpenScanner} />
        {isOpenScanner && (
          <QRScanner onScannedStudentsChange={handleScannedStudents} />
        )}
        <AttendanceReport scannedStudents={students} />
      </div>
    </>
  );
}

export default App;

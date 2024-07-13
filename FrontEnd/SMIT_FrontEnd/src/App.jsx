// import { useState } from "react";
// import "./App.css";
// import AttendanceReport from "./component/AttendanceReport.jsx";
// import QRScanner from "./component/QrModal.jsx";

// function App() {
//   const [students, setStudents] = useState([]);

//   const handleScannedStudents = (scannedStudents) => {
//     setStudents(scannedStudents);
//   };

//   return (
//     <>
//       <div className="bg-red-50">
//         <QRScanner onScannedStudentsChange={handleScannedStudents} />
//         <AttendanceReport scannedStudents={students} />
//       </div>
//     </>
//   );
// }

// export default App;
import { useState } from "react";
import "./App.css";
import AttendanceReport from "./component/AttendanceReport.jsx";
import QRScanner from "./component/QrModal.jsx";
import Navbar from "./component/Navbar.jsx";

function App() {
  const [students, setStudents] = useState([]);
  const [isScannerActive, setIsScannerActive] = useState(false);

  const handleScannedStudents = (scannedStudents) => {
    setStudents(scannedStudents);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <QRScanner
        onScannedStudentsChange={handleScannedStudents}
        isScannerActive={isScannerActive}
      />
      <AttendanceReport
        scannedStudents={students}
        onStartScanner={() => setIsScannerActive(true)}
      />
    </div>
  );
}

export default App;

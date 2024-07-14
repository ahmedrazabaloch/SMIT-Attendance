import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QRScanner = ({ onScannedStudentsChange }) => {
  const videoElementRef = useRef(null);
  const [students, setStudents] = useState([]);
  const qrScannerRef = useRef(null);
  useEffect(() => {
    const video = videoElementRef.current;

    const startScanner = () => {
      if (qrScannerRef.current) {
        qrScannerRef.current.destroy();
      }

      qrScannerRef.current = new QrScanner(
        video,
        (result) => {
          const isExist = students.some((student) => student === result.data);
          if (!isExist) {
            const updatedStudents = [...students, result.data];
            setStudents(updatedStudents);
            onScannedStudentsChange(updatedStudents);
            toast.success("Student added successfully!");
          } else {
            toast.error("Student already exists!");
          }

          stopScanner();
          startScanner();
        },
        {
          returnDetailedScanResult: true,
          highlightScanRegion: true,
          highlightCodeOutline: true,
        }
      );

      qrScannerRef.current.start();
    };

    const stopScanner = () => {
      if (qrScannerRef.current) {
        qrScannerRef.current.stop();
        qrScannerRef.current.destroy();
        qrScannerRef.current = null;
      }
      if (video.srcObject) {
        video.srcObject.getTracks().forEach((track) => track.stop());
        video.srcObject = null;
      }
    };

    startScanner();

    return () => {
      stopScanner();
    };
  }, [students, onScannedStudentsChange]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && qrScannerRef.current) {
        qrScannerRef.current.stop();
        const video = videoElementRef.current;
        if (video && video.srcObject) {
          video.srcObject.getTracks().forEach((track) => track.stop());
          video.srcObject = null;
        }
        qrScannerRef.current.start();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="videoWrapper w-[400px] h-fit mx-auto my-10">
      <video className="qrVideo rounded" ref={videoElementRef} />
      <ToastContainer />
    </div>
  );
};

export default QRScanner;

// testing code
// import React, { useEffect, useRef, useState } from "react";
// import QrScanner from "qr-scanner";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const QRScanner = ({ onScannedStudentsChange }) => {
//   const videoElementRef = useRef(null);
//   const [students, setStudents] = useState([]);
//   const qrScannerRef = useRef(null);

//   useEffect(() => {
//     const video = videoElementRef.current;

//     const startScanner = () => {
//       if (qrScannerRef.current) {
//         qrScannerRef.current.destroy();
//       }

//       qrScannerRef.current = new QrScanner(
//         video,
//         (result) => {
//           const isExist = students.some((student) => student === result.data);
//           if (!isExist) {
//             const updatedStudents = [...students, result.data];
//             setStudents(updatedStudents);
//             onScannedStudentsChange(updatedStudents);
//             toast.success("Student added successfully!");
//           } else {
//             toast.error("Student already exists!");
//           }

//           stopScanner();
//           startScanner();
//         },
//         {
//           returnDetailedScanResult: true,
//           highlightScanRegion: true,
//           highlightCodeOutline: true,
//         }
//       );

//       qrScannerRef.current.start();
//     };

//     const stopScanner = () => {
//       if (qrScannerRef.current) {
//         qrScannerRef.current.stop();
//         qrScannerRef.current.destroy();
//         qrScannerRef.current = null;
//       }
//       if (video.srcObject) {
//         video.srcObject.getTracks().forEach((track) => track.stop());
//         video.srcObject = null;
//       }
//     };

//     startScanner();

//     return () => {
//       stopScanner();
//     };
//   }, [students, onScannedStudentsChange]);

//   useEffect(() => {
//     const handleVisibilityChange = () => {
//       if (document.visibilityState === "visible" && qrScannerRef.current) {
//         qrScannerRef.current.stop();
//         const video = videoElementRef.current;
//         if (video && video.srcObject) {
//           video.srcObject.getTracks().forEach((track) => track.stop());
//           video.srcObject = null;
//         }
//         qrScannerRef.current.start();
//       }
//     };

//     document.addEventListener("visibilitychange", handleVisibilityChange);

//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//     };
//   }, []);

//   return (
//     <div className="videoWrapper w-[400px] h-fit mx-auto my-10">
//       <video className="qrVideo rounded" ref={videoElementRef} />
//       <ToastContainer />
//     </div>
//   );
// };

// export default QRScanner;

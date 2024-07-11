// teacherData.js

const teachers = [
  {
    name: "Ms. Smith",
    courses: ["Math", "Physics"],
    batches: ["60d0fe4f5311236168a109cb", "60d0fe4f5311236168a109cc"], // Example ObjectId(s)
    classes_taught: 100,
    campus_id: ["60d0fe4f5311236168a109ca"], // Example ObjectId(s)
    class_days: ["Monday", "Wednesday", "Friday"]
  },
  {
    name: "Mr. Johnson",
    courses: ["Biology", "Chemistry"],
    batches: ["60d0fe4f5311236168a109cd", "60d0fe4f5311236168a109ce"], // Example ObjectId(s)
    classes_taught: 80,
    campus_id: ["60d0fe4f5311236168a109cf"], // Example ObjectId(s)
    class_days: ["Tuesday", "Thursday"]
  },
  {
    name: "Dr. Taylor",
    courses: ["History", "Geography"],
    batches: ["60d0fe4f5311236168a109d0"], // Example ObjectId(s)
    classes_taught: 120,
    campus_id: ["60d0fe4f5311236168a109d1"], // Example ObjectId(s)
    class_days: ["Monday", "Thursday"]
  }
];

export { teachers };

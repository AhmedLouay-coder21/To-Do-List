// Get current date
const today = new Date();

// Extract day, month, and year
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

// Add leading zero to day and month if needed
day = day < 10 ? '0' + day : day;
month = month < 10 ? '0' + month : month;

// Format the date as dd/mm/yyyy
const formattedTodayDate = `${year}-${month}-${day}`;
export const data = [
  {
    name: "Finish TanStack Table",
    priority: "High",
    details: "Read the documentation and integrate it into the to-do app.",
    creationDate: "2026-08-01",
    dueDate: "2026-08-06",
    daysSinceCreation: 4,
    IsComplete: false,
  },
  {
    name: "Finish TanStack Table",
    priority: "High",
    details: "Read the documentation and integrate it into the to-do app.",
    creationDate: "2026-08-01",
    dueDate: formattedTodayDate,
    daysSinceCreation: 4,
    IsComplete: false,
  },
  {
    name: "Finish TanStack Table",
    priority: "High",
    details: "Read the documentation and integrate it into the to-do app.",
    creationDate: "2026-08-01",
    dueDate: "2027-08-06",
    daysSinceCreation: 4,
    IsComplete: false,
  },
  {
    name: "Buy groceries",
    priority: "Medium",
    details: "Milk, eggs, bread, and coffee.",
    creationDate: "2026-08-03",
    dueDate: "2026-08-05",
    daysSinceCreation: 2,
    IsComplete: true,
  },
  {
    name: "Workout",
    priority: "Low",
    details: "30 minutes of cardio and stretching.",
    creationDate: "2026-08-04",
    dueDate: "2026-08-05",
    daysSinceCreation: 1,
    IsComplete: false,
  },
  {
    name: "Study Algorithms",
    priority: "High",
    details: "Solve three greedy algorithm problems.",
    creationDate: "2026-07-30",
    dueDate: "2026-08-07",
    daysSinceCreation: 6,
    IsComplete: false,
  },
  {
    name: "Update Portfolio",
    priority: "Medium",
    details: "Add the new To-Do application project.",
    creationDate: "2026-07-28",
    dueDate: "2026-08-10",
    daysSinceCreation: 8,
    IsComplete: true,
  },
];
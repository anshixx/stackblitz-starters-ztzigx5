// Sample data for testing
const students = [
  { name: "dfghj", chemistry: 80, biology: 85, dob: "15-05-2000" },
  { name: "Afgh", chemistry: 85, biology: 98, dob: "12-12-1997" },
  { name: "sdf", chemistry: 80, biology: 85, dob: "12-12-1998" },
  { name: "ffg", chemistry: 85, biology: 90, dob: "15-05-2001" },
];

// Helper function to calculate total marks
function totalMarks(student) {
  return student.chemistry + student.biology;
}

// Helper function to parse date of birth
function parseDate(dob) {
  const [day, month, year] = dob.split("-").map(Number);
  return new Date(year, month - 1, day);
}

// Sorting function
students.sort((a, b) => {
  const totalA = totalMarks(a);
  const totalB = totalMarks(b);

  // 1. Sort by total marks (descending)
  if (totalA !== totalB) {
    return totalB - totalA;
  }

  // 2. If total marks are equal, sort by biology marks (descending)
  if (a.biology !== b.biology) {
    return b.biology - a.biology;
  }

  // 3. If biology marks are equal, sort by date of birth (ascending)
  const dateA = parseDate(a.dob);
  const dateB = parseDate(b.dob);
  return dateA - dateB;
});

// Print the sorted array
console.log("Sorted Students:", students);

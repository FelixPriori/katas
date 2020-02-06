const addInstructor = function(listName, courseName, instructor) {
  if (listName[courseName] === undefined) {
    listName[courseName] = [];
  }
  return listName[courseName].push(instructor);
};

const organizeInstructors = function(instructors) {
  const instructorsByCourse = {};
  for (let i = 0; i < instructors.length; i++) {
    addInstructor(instructorsByCourse, instructors[i].course, instructors[i].name);
  }
  return instructorsByCourse;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
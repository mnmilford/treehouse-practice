const students = [
  {
    name: "Michael Milford",
    track: "Front End Development",
    achievements: 50,
    points: 4220
  },
  {
    name: "Richard Richardson",
    track: "Android Development",
    achievements: 22,
    points: 2000
  },
  {
    name: "Mark Jackson",
    track: "iOS Development",
    achievements: 45,
    points: 3800
  },
  {
    name: "Gary Johnson",
    track: "Web Design",
    achievements: 30,
    points: 3000
  },
  {
    name: "Mary Matthews",
    track: "Ruby",
    achievements: 64,
    points: 6407
  }
];

function buildStudentString(student) {
  let str = "<div><strong>Student: " + student.name + "</strong>";
  for (let prop in student) {
    str += "<p>" + prop[0].toUpperCase() + prop.slice(1) + ": " + student[prop] + "</p>";
  }
  str += "</div>";
  return str;
}

function buildMainString() {
  let str = "";
  for (let student of students) {
    str += buildStudentString(student);
  }
  return str;
}

// Add the output from buildMainString() to the <main> section of the html document
document.getElementsByTagName('main')[0].innerHTML += buildMainString();
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
  let keys = Object.keys(student);
  let str = "<div><strong>Student: " + student.name + "</strong>";
  for (let i = 1; i < Object.keys(student).length; i++) {
    str += "<p>" + keys[i][0].toUpperCase() + keys[i].slice(1) + ": " + student[keys[i]] + "</p>";
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
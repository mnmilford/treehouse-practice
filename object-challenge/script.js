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
  let str = "<div class='student'><strong>Student: " + student.name + "</strong>";
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

// Allow user to search for student records or display all records
document.getElementsByTagName('button')[0].addEventListener("click", function() {

  var search = prompt("Search student records: Type a student's last name or type 'all' to see all records");

  if (search === "all") {
    document.getElementsByTagName('main')[0].innerHTML = buildMainString();
  }

  for (let student of students) {
    if (search === student.name.split(' ')[1]) {
      document.getElementsByTagName('main')[0].innerHTML = buildStudentString(student);
    }
  }

});
interface Student {
  name: string;
  rollNo: number;
  grade?: string;
}

function printStudentInfo(student: Student): void {
  if (student.grade) {
    console.log(
      `Name: ${student.name}, Roll No: ${student.rollNo} Grade: ${student.grade}`
    );
  } else {
    console.log(`Name: ${student.name}, Roll No: ${student.rollNo}`);
  }
}
const s1: Student = { name: "Rahul", rollNo: 101 };
const s2: Student = { name: "Priya", rollNo: 102, grade: "A" };
printStudentInfo(s1);
printStudentInfo(s2);

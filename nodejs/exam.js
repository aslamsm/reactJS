function StudentMarks(marks) {
  const passMarks = marks.filter((mark) => mark >= 40);
  const updatedMarks = passMarks.map((mark) => mark + 5);
  return updatedMarks;
}

const marks = [35, 42, 56, 39, 71, 90, 28];
const result = StudentMarks(marks);
console.log(result);

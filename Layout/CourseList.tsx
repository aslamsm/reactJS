function CourseList() {
  const courses = [
    {
      id: "C01",
      title: "Java with SpringBoot ",
      duration: "90 days",
      description:
        "Java with SpringBoot... Java with SpringBoot.. Java with SpringBoot",
    },
    {
      id: "C02",
      title: "Python with Django using AI and ML",
      duration: "30 days",
      description:
        "Python with Django... Python with Django.. Python with Django",
    },
    {
      id: "C03",
      title: "Frontend Development using React and TypeScript",
      duration: "60 days",
      description:
        "Frontend Development using React and TypeScript.. Frontend Development using React and TypeScriptFrontend Development using React and TypeScript",
    },

    {
      id: "C04",
      title: "ASP.Net Core with C#",
      duration: "60 days",
      description:
        "ASP.Net Core with C#... ASP.Net Core with C#.. ASP.Net Core with C#",
    },

    {
      id: "C05",
      title: "Oracle Database with PL/SQL / Networking",
      duration: "90 days",
      description:
        "Oracle Database with PL/SQL... Oracle Database with PL/SQL.. Oracle Database with PL/SQL",
    },
  ];

  return (
    <>
      <h2 className="text-primary">Course List</h2>
      <ul className="list-group">
        {courses.map((course) => (
          <li className="list-group-item" key={course.id}>
            {course.title} - {course.duration}
            <br />
            <span className="small text-danger">{course.description}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
export default CourseList;

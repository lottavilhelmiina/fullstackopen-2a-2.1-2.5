const MainHeader = () => {
  return <h1>Web Development Curriculum</h1>;
};

const CourseHeader = ({ item }) => {
  return <h2>{item.name}</h2>;
};

const Content = ({ parts }) => {
  return (
    <div id="parts">
      {parts.map((item, index) => (
        <Part key={item.id} item={item} />
      ))}
    </div>
  );
};

const Part = ({ item }) => {
  return (
    <p>
      Course name: {item.name}
      <br /> Number of exercises: {item.exercises}
    </p>
  );
};

const SumOfExercises = ({ parts }) => {
  const exerSum = parts
    .map((item) => item.exercises)
    .reduce((prev, curr) => prev + curr, 0);
  return (
    <>
      <h4>Total of exercises: {exerSum}</h4>
    </>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <MainHeader />
      <div id="course">
        {course.map((item) => (
          <>
            <CourseHeader key={item.id} item={item} />
            <Content key={item.id} parts={item.parts} />
            <SumOfExercises key={item.id} parts={item.parts} />
          </>
        ))}
      </div>
    </>
  );
};
export default Course;

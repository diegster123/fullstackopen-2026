const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Content = ({ course }) => {
  console.log(course);
  return course.parts.map((part) => (
    <Part name={part.name} exercises={part.exercises} key={part.name} />
  ));
};

const Total = ({ course }) => {
  console.log(course);
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return <p>Number of exercises is {total}</p>;
};

const Part = ({ name, exercises }) => {
  console.log(name, exercises);
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;

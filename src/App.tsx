import React, {useState} from "react";
import Container from "./components/Container";
import AddStudent from "./components/AddStudent";
import StudentAttendance from "./components/StudentAttendance";
import Student from "./models/Student";
import "./App.css";


function App() {
  const [students, setStudents] = useState<Array<Student>>([]);
  const addStudentHandler = (student: Student) => {
    setStudents(prevState => prevState.concat(student));
  }

  const toggleStudentAttendance = (studentInfo: string) => {

  }
  return (
    <Container className="App">
      <header className="header">
        <h3>Student Attendance Register</h3>
      </header>
      <main>
        <div className="grid">
          <div className="col-2">
          <AddStudent onAddStudent={addStudentHandler} />
          </div>
          <div className="col-2">
            <StudentAttendance onToggleAttendance={toggleStudentAttendance} />
          </div>
        </div>
        <div>
          {students.map(student => (<div key={student.id}>
            {student.name}
          </div>))}
        </div>
      </main>
    </Container>
  );
}

export default App;

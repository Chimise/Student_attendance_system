import React, {useState, useMemo} from "react";
import Container from "./components/Container";
import AddStudent from "./components/AddStudent";
import StudentAttendance from "./components/StudentAttendance";
import StudentList from "./components/StudentList";
import Student from "./models/Student";
import "./App.css";
import Button from "./components/Button/Button";

const MAX_ITEMS = 4;

function App() {
  const [students, setStudents] = useState<Array<Student>>([]);
  const [page, setPage] = useState(1);
  // Find the total number of pages possible or return 1 if none
 const totalPages = useMemo(() => {
  return Math.ceil(students.length / MAX_ITEMS) || 1;
 }, [students]);

 
// Return the paginated data containing a maximum of 4 students
 const paginatedStudents = useMemo(() => {
  return students.slice((page - 1) * MAX_ITEMS, page * MAX_ITEMS);
 }, [page, students])

 // Show new data when the next button is pressed
 const handleNextPage = () => {
  setPage(prevPage => prevPage + 1)
 }
// Show previous data when the previous button is pressed
 const handlePreviousPage = () => {
  setPage(prevPage => prevPage - 1);
 }


  const addStudentHandler = (student: Student) => {
    // Add the newly created student to a list of students and update the state
    setStudents(prevState => prevState.concat(student));
  }

  const toggleStudentAttendance = (studentInfo: string) => {
    // Check if the user info entered is a number (student roll number)
    const isRollNo = !isNaN(parseInt(studentInfo));
    const rollNoOrName = isRollNo ? parseInt(studentInfo) : studentInfo;

    const studentIndex = students.findIndex(student => {
      if(typeof rollNoOrName === 'number') {
        return student.id === rollNoOrName;
      }
      return student.name === rollNoOrName;
    })

    if(studentIndex === -1) {
      throw new Error('Student could not be found, check the student info and try again');
    }
    // Create a new copy of the students and avoid mutating the state
    const updatedStudents = [...students];
    // Toggle the student's attendance 
    updatedStudents[studentIndex].toggleAttendance();
    // set a new state
    setStudents(updatedStudents);
  }

  const removeStudentHandler = (id: number) => {
    setStudents((prevState) => prevState.filter(student => student.id !== id));
  }
  return (
    <Container className="App">
      <header className="header">
        <h3>Students Attendance System</h3>
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
        <StudentList students={students} paginatedData={paginatedStudents} onRemove={removeStudentHandler} />
      </main>
      <div className="actions">
        <Button onClick={handlePreviousPage} disabled={page === 1}>Previous</Button>
        <Button onClick={handleNextPage} disabled={page === totalPages}>Next</Button>
      </div>
    </Container>
  );
}

export default App;

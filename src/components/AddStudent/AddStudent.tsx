import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button/Button";
import Student from "../../models/Student";
import styles from "./AddStudent.module.css";

interface AddStudentProps {
  onAddStudent: (student: Student) => void;
}

const AddStudent = ({ onAddStudent }: AddStudentProps) => {
  const [name, setName] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [error, setError] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
    // Check that the value is not empty
    if (!value.trim()) {
      setError("Student name is required");
    } else {
      setError("");
    }
  };

  const handleBlur = () => {
    // Ensures that the error only displays when the input field is touched
    setIsTouched(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (error) {
      return;
    }
    onAddStudent(new Student(name));
    setName("");
  };

  return (
    <div className={styles.root}>
      <h6 className={styles.header}>Create New Student</h6>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          error={isTouched && error}
          value={name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter Student Name"
        />
        <div className={styles.actions}>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;

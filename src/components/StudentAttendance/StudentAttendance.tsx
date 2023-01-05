import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button/Button";
import styles from "./StudentAttendance.module.css";

interface StudentAttendanceProps {
  onToggleAttendance: (userInput: string) => void;
}

const StudentAttendance = ({ onToggleAttendance }: StudentAttendanceProps) => {
  const [userInput, setUserInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [error, setError] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setUserInput(value);
    // Check that the value is not empty
    if (!value.trim()) {
      setError("Please, enter a valid student name or roll no");
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
    // Do not submit if the input has an error
    if (error) {
      return;
    }
    try {
      onToggleAttendance(userInput);
      setUserInput("");
    } catch (error) {
      setError((error as Error).message);
    }
    
  };

  return (
    <div className={styles.root}>
      <h6 className={styles.header}>Toggle Student Attendance</h6>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          error={isTouched && error}
          value={userInput}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter Student Name or Roll No"
        />
        <div className={styles.actions}>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default StudentAttendance;

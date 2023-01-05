import React, {useMemo} from 'react';
import Student from '../../models/Student';
import StudentCard from '../StudentCard';
import styles from './StudentList.module.css';

interface StudentListProps {
    students: Array<Student>;
    paginatedData: Array<Student>;
    onRemove: (id: number) => void;
}

const StudentList = ({students, onRemove, paginatedData}: StudentListProps) => {
    const noPresent = useMemo(() => {
        // Filter the list of students present
        const studentPresent =  students.filter((student) => student?.isPresent);
        return studentPresent.length;
    }, [students])

    const noAbsent = useMemo(() => {
        // Filter the list of students absent
        const studentAbsent = students.filter((student) => student?.isPresent === false);
        return studentAbsent.length;
    }, [students])

    return (<section className={styles.root}>
        <header className={styles.header}>
            <p>
                All Students({students.length})
            </p>
            <div className={styles.stats}>
                <span>Present: {noPresent}</span>
                <span>Absent: {noAbsent}</span>
            </div>
        </header>
        <div>
          {paginatedData.map(student => (<StudentCard student={student} onRemove={() => onRemove(student.id)} />))}
        </div>
    </section>)
}

export default StudentList;
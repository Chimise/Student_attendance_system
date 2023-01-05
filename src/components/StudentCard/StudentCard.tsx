import React from 'react';
import Student from '../../models/Student';
import styles from './StudentCard.module.css';
import EnvelopeIcon from '../Icons/Envelope';
import LocationIcon from '../Icons/Location';
import {formateDate} from '../../utils';

interface StudentCardProps {
    student: Student;
    onRemove: () => void;
}

const StudentCard = ({student, onRemove}: StudentCardProps) => {
    return (<div className={styles.root}>
        <div className={styles.header}>
            <p className={styles.title}>{student.name}{` `}({student.id})</p>
            <button onClick={onRemove} className={styles.action}>Delete</button>
        </div>
        <div className={styles.content}>
            <div className={styles.date}>
                <div><EnvelopeIcon />{student.checkIn ? <span>Checked in on {formateDate(student.checkIn)}</span> : <span>Not yet checked in</span>}</div>
                <div><EnvelopeIcon />{student.checkOut ? <span>Checked out on {formateDate(student.checkOut)}</span> : <span>Not yet checked out</span>}</div>
            </div>
            <div className={styles.status}>
                <LocationIcon /><span>{student.isPresent ? 'Present' : 'Absent'}</span>
            </div>
        </div>
    </div>)
}

export default StudentCard;
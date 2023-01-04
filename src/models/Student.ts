class Student {
    id: number;
    name: string;
    checkIn: Date | null;
    checkOut: Date | null;
    isPresent: boolean;

    constructor(name: string) {

        this.id = Student.rollNumber++;
        this.name = name;
        this.checkIn = null;
        this.checkOut = null;
        this.isPresent = false;
    }

   // Toggle student attendance
    toggleAttendance() {
        if(!this.isPresent) {
            this.isPresent = true;
            this.checkIn = new Date();
            this.checkOut = null;
            return;
        }

        this.isPresent = false;
        this.checkOut = new Date();
    }



 static rollNumber = 1;

}


export default Student;
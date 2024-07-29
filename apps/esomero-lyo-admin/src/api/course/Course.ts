import { Attendance } from "../attendance/Attendance";
import { Student } from "../student/Student";
import { Subject } from "../subject/Subject";

export type Course = {
  attendances?: Array<Attendance>;
  createdAt: Date;
  description: string | null;
  id: string;
  students?: Array<Student>;
  subject?: Subject | null;
  title: string | null;
  updatedAt: Date;
};

import { Course } from "../course/Course";
import { Student } from "../student/Student";

export type Attendance = {
  course?: Course | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  status: string | null;
  student?: Student | null;
  updatedAt: Date;
};

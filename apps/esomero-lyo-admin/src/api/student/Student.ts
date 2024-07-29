import { Attendance } from "../attendance/Attendance";
import { Course } from "../course/Course";
import { Report } from "../report/Report";

export type Student = {
  address: string | null;
  attendances?: Array<Attendance>;
  course?: Course | null;
  createdAt: Date;
  dateOfBirth: Date | null;
  email: string | null;
  id: string;
  name: string | null;
  reports?: Array<Report>;
  updatedAt: Date;
};

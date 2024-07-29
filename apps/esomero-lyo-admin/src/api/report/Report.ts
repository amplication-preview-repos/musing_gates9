import { Student } from "../student/Student";
import { Teacher } from "../teacher/Teacher";

export type Report = {
  content: string | null;
  createdAt: Date;
  id: string;
  student?: Student | null;
  teacher?: Teacher | null;
  title: string | null;
  updatedAt: Date;
};

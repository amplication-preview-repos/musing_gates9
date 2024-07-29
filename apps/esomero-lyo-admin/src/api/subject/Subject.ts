import { Course } from "../course/Course";
import { Teacher } from "../teacher/Teacher";

export type Subject = {
  courses?: Array<Course>;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  teachers?: Array<Teacher>;
  updatedAt: Date;
};

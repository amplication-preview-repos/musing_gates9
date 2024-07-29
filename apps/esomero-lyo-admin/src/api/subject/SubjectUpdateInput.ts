import { CourseUpdateManyWithoutSubjectsInput } from "./CourseUpdateManyWithoutSubjectsInput";
import { TeacherUpdateManyWithoutSubjectsInput } from "./TeacherUpdateManyWithoutSubjectsInput";

export type SubjectUpdateInput = {
  courses?: CourseUpdateManyWithoutSubjectsInput;
  description?: string | null;
  name?: string | null;
  teachers?: TeacherUpdateManyWithoutSubjectsInput;
};

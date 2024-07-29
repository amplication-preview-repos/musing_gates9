import { CourseCreateNestedManyWithoutSubjectsInput } from "./CourseCreateNestedManyWithoutSubjectsInput";
import { TeacherCreateNestedManyWithoutSubjectsInput } from "./TeacherCreateNestedManyWithoutSubjectsInput";

export type SubjectCreateInput = {
  courses?: CourseCreateNestedManyWithoutSubjectsInput;
  description?: string | null;
  name?: string | null;
  teachers?: TeacherCreateNestedManyWithoutSubjectsInput;
};

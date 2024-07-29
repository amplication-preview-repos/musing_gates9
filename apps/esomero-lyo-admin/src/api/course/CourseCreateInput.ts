import { AttendanceCreateNestedManyWithoutCoursesInput } from "./AttendanceCreateNestedManyWithoutCoursesInput";
import { StudentCreateNestedManyWithoutCoursesInput } from "./StudentCreateNestedManyWithoutCoursesInput";
import { SubjectWhereUniqueInput } from "../subject/SubjectWhereUniqueInput";

export type CourseCreateInput = {
  attendances?: AttendanceCreateNestedManyWithoutCoursesInput;
  description?: string | null;
  students?: StudentCreateNestedManyWithoutCoursesInput;
  subject?: SubjectWhereUniqueInput | null;
  title?: string | null;
};

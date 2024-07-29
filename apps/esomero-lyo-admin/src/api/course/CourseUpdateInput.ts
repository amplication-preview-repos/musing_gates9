import { AttendanceUpdateManyWithoutCoursesInput } from "./AttendanceUpdateManyWithoutCoursesInput";
import { StudentUpdateManyWithoutCoursesInput } from "./StudentUpdateManyWithoutCoursesInput";
import { SubjectWhereUniqueInput } from "../subject/SubjectWhereUniqueInput";

export type CourseUpdateInput = {
  attendances?: AttendanceUpdateManyWithoutCoursesInput;
  description?: string | null;
  students?: StudentUpdateManyWithoutCoursesInput;
  subject?: SubjectWhereUniqueInput | null;
  title?: string | null;
};

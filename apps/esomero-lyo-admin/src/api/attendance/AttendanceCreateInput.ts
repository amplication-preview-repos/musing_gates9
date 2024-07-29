import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AttendanceCreateInput = {
  course?: CourseWhereUniqueInput | null;
  date?: Date | null;
  status?: string | null;
  student?: StudentWhereUniqueInput | null;
};

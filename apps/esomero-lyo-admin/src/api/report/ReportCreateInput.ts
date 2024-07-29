import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type ReportCreateInput = {
  content?: string | null;
  student?: StudentWhereUniqueInput | null;
  teacher?: TeacherWhereUniqueInput | null;
  title?: string | null;
};

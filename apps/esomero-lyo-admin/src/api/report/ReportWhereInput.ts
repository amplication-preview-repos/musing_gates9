import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type ReportWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  student?: StudentWhereUniqueInput;
  teacher?: TeacherWhereUniqueInput;
  title?: StringNullableFilter;
};

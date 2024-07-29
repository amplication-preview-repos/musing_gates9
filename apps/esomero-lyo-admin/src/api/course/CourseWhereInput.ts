import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentListRelationFilter } from "../student/StudentListRelationFilter";
import { SubjectWhereUniqueInput } from "../subject/SubjectWhereUniqueInput";

export type CourseWhereInput = {
  attendances?: AttendanceListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  students?: StudentListRelationFilter;
  subject?: SubjectWhereUniqueInput;
  title?: StringNullableFilter;
};

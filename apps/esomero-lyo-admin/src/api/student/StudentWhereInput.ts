import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";

export type StudentWhereInput = {
  address?: StringNullableFilter;
  attendances?: AttendanceListRelationFilter;
  course?: CourseWhereUniqueInput;
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  reports?: ReportListRelationFilter;
};

import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AttendanceWhereInput = {
  course?: CourseWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: StringNullableFilter;
  student?: StudentWhereUniqueInput;
};

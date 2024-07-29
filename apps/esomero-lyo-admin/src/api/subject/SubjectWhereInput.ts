import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TeacherListRelationFilter } from "../teacher/TeacherListRelationFilter";

export type SubjectWhereInput = {
  courses?: CourseListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  teachers?: TeacherListRelationFilter;
};

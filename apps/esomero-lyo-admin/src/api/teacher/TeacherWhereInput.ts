import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";
import { SubjectWhereUniqueInput } from "../subject/SubjectWhereUniqueInput";

export type TeacherWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  reports?: ReportListRelationFilter;
  subject?: SubjectWhereUniqueInput;
};

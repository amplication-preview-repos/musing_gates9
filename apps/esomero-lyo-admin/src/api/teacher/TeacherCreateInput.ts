import { ReportCreateNestedManyWithoutTeachersInput } from "./ReportCreateNestedManyWithoutTeachersInput";
import { SubjectWhereUniqueInput } from "../subject/SubjectWhereUniqueInput";

export type TeacherCreateInput = {
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  reports?: ReportCreateNestedManyWithoutTeachersInput;
  subject?: SubjectWhereUniqueInput | null;
};

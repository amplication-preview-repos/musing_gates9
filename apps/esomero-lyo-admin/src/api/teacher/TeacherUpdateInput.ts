import { ReportUpdateManyWithoutTeachersInput } from "./ReportUpdateManyWithoutTeachersInput";
import { SubjectWhereUniqueInput } from "../subject/SubjectWhereUniqueInput";

export type TeacherUpdateInput = {
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  reports?: ReportUpdateManyWithoutTeachersInput;
  subject?: SubjectWhereUniqueInput | null;
};

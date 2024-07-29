import { AttendanceCreateNestedManyWithoutStudentsInput } from "./AttendanceCreateNestedManyWithoutStudentsInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { ReportCreateNestedManyWithoutStudentsInput } from "./ReportCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  address?: string | null;
  attendances?: AttendanceCreateNestedManyWithoutStudentsInput;
  course?: CourseWhereUniqueInput | null;
  dateOfBirth?: Date | null;
  email?: string | null;
  name?: string | null;
  reports?: ReportCreateNestedManyWithoutStudentsInput;
};

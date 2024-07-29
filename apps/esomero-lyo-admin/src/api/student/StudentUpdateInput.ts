import { AttendanceUpdateManyWithoutStudentsInput } from "./AttendanceUpdateManyWithoutStudentsInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { ReportUpdateManyWithoutStudentsInput } from "./ReportUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  address?: string | null;
  attendances?: AttendanceUpdateManyWithoutStudentsInput;
  course?: CourseWhereUniqueInput | null;
  dateOfBirth?: Date | null;
  email?: string | null;
  name?: string | null;
  reports?: ReportUpdateManyWithoutStudentsInput;
};

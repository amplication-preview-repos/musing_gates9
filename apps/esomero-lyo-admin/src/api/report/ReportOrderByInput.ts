import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  studentId?: SortOrder;
  teacherId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};

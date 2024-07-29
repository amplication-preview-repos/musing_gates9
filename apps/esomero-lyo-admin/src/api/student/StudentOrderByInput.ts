import { SortOrder } from "../../util/SortOrder";

export type StudentOrderByInput = {
  address?: SortOrder;
  courseId?: SortOrder;
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};

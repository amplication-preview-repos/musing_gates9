import { Report } from "../report/Report";
import { Subject } from "../subject/Subject";

export type Teacher = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  reports?: Array<Report>;
  subject?: Subject | null;
  updatedAt: Date;
};

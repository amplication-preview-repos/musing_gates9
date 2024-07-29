import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { AttendanceTitle } from "../attendance/AttendanceTitle";
import { CourseTitle } from "../course/CourseTitle";
import { ReportTitle } from "../report/ReportTitle";

export const StudentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <ReferenceArrayInput
          source="attendances"
          reference="Attendance"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttendanceTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="course.id" reference="Course" label="Course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
        <DateTimeInput label="dateOfBirth" source="dateOfBirth" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="reports"
          reference="Report"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReportTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COURSE_TITLE_FIELD } from "../course/CourseTitle";
import { STUDENT_TITLE_FIELD } from "./StudentTitle";
import { TEACHER_TITLE_FIELD } from "../teacher/TeacherTitle";

export const StudentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <ReferenceField label="Course" source="course.id" reference="Course">
          <TextField source={COURSE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateOfBirth" source="dateOfBirth" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Attendance"
          target="studentId"
          label="Attendances"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Course"
              source="course.id"
              reference="Course"
            >
              <TextField source={COURSE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <TextField label="status" source="status" />
            <ReferenceField
              label="Student"
              source="student.id"
              reference="Student"
            >
              <TextField source={STUDENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Report"
          target="studentId"
          label="Reports"
        >
          <Datagrid rowClick="show">
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Student"
              source="student.id"
              reference="Student"
            >
              <TextField source={STUDENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Teacher"
              source="teacher.id"
              reference="Teacher"
            >
              <TextField source={TEACHER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

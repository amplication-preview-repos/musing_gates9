/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AttendanceUpdateManyWithoutCoursesInput } from "./AttendanceUpdateManyWithoutCoursesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { StudentUpdateManyWithoutCoursesInput } from "./StudentUpdateManyWithoutCoursesInput";
import { SubjectWhereUniqueInput } from "../../subject/base/SubjectWhereUniqueInput";

@InputType()
class CourseUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AttendanceUpdateManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => AttendanceUpdateManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => AttendanceUpdateManyWithoutCoursesInput, {
    nullable: true,
  })
  attendances?: AttendanceUpdateManyWithoutCoursesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => StudentUpdateManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => StudentUpdateManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => StudentUpdateManyWithoutCoursesInput, {
    nullable: true,
  })
  students?: StudentUpdateManyWithoutCoursesInput;

  @ApiProperty({
    required: false,
    type: () => SubjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SubjectWhereUniqueInput)
  @IsOptional()
  @Field(() => SubjectWhereUniqueInput, {
    nullable: true,
  })
  subject?: SubjectWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { CourseUpdateInput as CourseUpdateInput };

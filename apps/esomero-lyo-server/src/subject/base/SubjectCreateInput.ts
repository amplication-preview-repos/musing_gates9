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
import { CourseCreateNestedManyWithoutSubjectsInput } from "./CourseCreateNestedManyWithoutSubjectsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { TeacherCreateNestedManyWithoutSubjectsInput } from "./TeacherCreateNestedManyWithoutSubjectsInput";

@InputType()
class SubjectCreateInput {
  @ApiProperty({
    required: false,
    type: () => CourseCreateNestedManyWithoutSubjectsInput,
  })
  @ValidateNested()
  @Type(() => CourseCreateNestedManyWithoutSubjectsInput)
  @IsOptional()
  @Field(() => CourseCreateNestedManyWithoutSubjectsInput, {
    nullable: true,
  })
  courses?: CourseCreateNestedManyWithoutSubjectsInput;

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
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => TeacherCreateNestedManyWithoutSubjectsInput,
  })
  @ValidateNested()
  @Type(() => TeacherCreateNestedManyWithoutSubjectsInput)
  @IsOptional()
  @Field(() => TeacherCreateNestedManyWithoutSubjectsInput, {
    nullable: true,
  })
  teachers?: TeacherCreateNestedManyWithoutSubjectsInput;
}

export { SubjectCreateInput as SubjectCreateInput };

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()

export class Profile {
  
    @Prop()
    age: number;

    @Prop()
    qualifications: string;

}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
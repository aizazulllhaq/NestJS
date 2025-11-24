import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Address } from "./address.schema";

@Schema()

export class Employee {

    @Prop()
    name: string;

    @Prop({ type: Address })
    address: Address;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
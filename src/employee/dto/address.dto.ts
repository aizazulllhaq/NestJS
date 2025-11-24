import {  IsString } from "class-validator";

export class AddressDTO {

    @IsString()
    street: string;

    @IsString()
    city: string;

}
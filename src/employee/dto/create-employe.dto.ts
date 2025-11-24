import { IsDefined, IsString, ValidateNested } from "class-validator";
import { AddressDTO } from "./address.dto";
import { Type } from "class-transformer";

export class CreateEmployeeDto {


    @IsString()
    name: string;

    @IsDefined()
    @ValidateNested()
    @Type(() => AddressDTO)
    address: AddressDTO;
}
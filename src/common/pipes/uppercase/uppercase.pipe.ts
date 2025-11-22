import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UppercasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {

    console.log("under pipe, value : ",value);

    if(typeof(value) === "string"){
        return value.toUpperCase();
    }

    return value;
  }
}

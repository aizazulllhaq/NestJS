import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";


@Schema()
export class Library {

    @Prop()
    name: string;

    @Prop({
        type: [Types.ObjectId],
        ref: 'Book'
    })
    book: Types.ObjectId[];

}    

export const LibrarySchema = SchemaFactory.createForClass(Library);
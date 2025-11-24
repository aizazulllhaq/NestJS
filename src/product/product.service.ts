import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {

    constructor(
        @InjectModel(Product.name) private productModel: Model<Product>
    ) { };

    async createProduct(): Promise<Product> {

        const newProduct = await new this.productModel<Product>({
            title: "Sample Product",
            tag: [
                {
                    name: "Sample Tag"
                },
                {
                    name: "Another Tag",
                },
                {
                    name: "Third Tag"
                }
            ]
        })

        return newProduct.save();
    }

    async getProducts(): Promise<Product[]>{

        return this.productModel.find().exec();

    }
}
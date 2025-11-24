import { Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService){};

    @Post()
    async createProduct(): Promise<Product>{
        return this.productService.createProduct();
    }

    @Get()
    async getAllProducts(): Promise<Product[]>{
        return this.productService.getProducts();
    }

}

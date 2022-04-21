import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(): string {
    return `Products`;
  }
  @Post()
  createProduct(@Body() product): string {
    console.log(product);
    return `Creating a product`;
  }
  @Put()
  updateProduct(): string {
    return `Updating a product`;
  }
  @Delete()
  deleteProduct(): string {
    return `deleting a product`;
  }
}

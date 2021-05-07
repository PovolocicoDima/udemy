import { Module } from '@nestjs/common';import {UserModel} from '../auth/user.model';

import { ProductController } from './product.controller';
import {TypegooseModule} from 'nestjs-typegoose';
import {ProductModel} from './product.model';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  imports: [
	TypegooseModule.forFeature([
		{
		typegooseClass: ProductModel,
		schemaOptions: {
			collection: 'Product'
		}
		}
	])
  ],
  providers: [ProductService]
})
export class ProductModule {}

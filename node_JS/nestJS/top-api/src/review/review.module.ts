import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import {TypegooseModule} from 'nestjs-typegoose';
import { ReviewModel } from './review.model';
import { ReviewService } from './review.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getJWTConfig } from '../configs/jwt.config';

@Module({
  controllers: [ReviewController],
  imports: [
		TypegooseModule.forFeature([
		{
			typegooseClass: ReviewModel,
			schemaOptions: {
			collection: 'Review'
			}
		}
		])
  ],
  providers: [ReviewService]
})
export class ReviewModule {}

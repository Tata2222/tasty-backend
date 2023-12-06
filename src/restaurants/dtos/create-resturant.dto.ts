import { InputType, OmitType } from '@nestjs/graphql';
import { Restaurant } from '../entities/restautant.entity';

@InputType()
export class CreateRestaurantDto extends OmitType(Restaurant, ['id']) {}

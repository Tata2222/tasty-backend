import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { Restaurant } from './entities/restautant.entity';
import { CreateRestaurantDto } from './dtos/create-resturant.dto';

@Resolver(() => Restaurant)
export class RestaurantsResolver {
  @Query(() => [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    return [];
  }

  @Mutation(() => Boolean)
  createRestaurant(@Args() createRestaurantInput: CreateRestaurantDto) {
    console.log(
      '🚀 ~ file: restaurants.resolver.ts:16 ~ RestaurantsResolver ~ createRestaurantInput:',
      createRestaurantInput,
    );
    return true;
  }
}

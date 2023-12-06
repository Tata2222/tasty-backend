import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { Restaurant } from './entities/restautant.entity';
import { CreateRestaurantDto } from './dtos/create-resturant.dto';
import { RestaurantsService } from './restaurants.service';
import { UpdateRestaurantDto } from './dtos/update-restaurant.dto';

@Resolver(() => Restaurant)
export class RestaurantsResolver {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Query(() => [Restaurant])
  restaurants(): Promise<Restaurant[]> {
    return this.restaurantsService.getAll();
  }

  @Mutation(() => Boolean)
  async createRestaurant(
    @Args('input') createRestaurantDto: CreateRestaurantDto,
  ): Promise<boolean> {
    try {
      await this.restaurantsService.createRestaurant(createRestaurantDto);
      return true;
    } catch (e) {
      console.log(
        '🚀 ~ file: restaurants.resolver.ts:20 ~ RestaurantsResolver ~ createRestaurant ~ e:',
        e,
      );
      return false;
    }
  }

  @Mutation(() => Boolean)
  async updateRestaurant(
    @Args('input') updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<boolean> {
    try {
      await this.restaurantsService.updateRestaurant(updateRestaurantDto);
      return true;
    } catch (e) {
      return false;
    }
  }
}

import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { dishReducer } from './reducers/dish.reducer';
import { DishEffects } from './effects/dish.effects';
import { userReducer } from './reducers/user.reducer';
import { UserEffects } from './effects/user.effects';
import { cartReducer } from './reducers/cart.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({
      dishes: dishReducer,
      user: userReducer,
      cart: cartReducer,
    }),

    EffectsModule.forRoot([DishEffects, UserEffects]),
  ],
})
export class AppStoreModule {}

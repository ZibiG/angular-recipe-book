import { EventEmitter, Injectable } from '@angular/core';

import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipies: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://p0.pikist.com/photos/490/813/burger-cheese-burger-burgers-hamburger-big-burger-beef-burger-best-burger-ever-cheeseburger-huge-burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipies.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}

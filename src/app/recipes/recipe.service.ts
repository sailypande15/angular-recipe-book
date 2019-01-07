import { Recipe } from './recipe.model';
import { EventEmitter, Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
  constructor(shoppingListService:ShoppingListService){}
  private  recipes:Recipe[] = [
        new Recipe(
          'Pav Bhaji',
          'Mumbai Special Pav Bhaji.Healthy and testy',
          'https://upload.wikimedia.org/wikipedia/commons/6/63/Pav_Bhaji.jpg',
           [new Ingredient('Tomatoes',5),new Ingredient('Onions',5),new Ingredient('Capsicum',2),new Ingredient('Cauliflower',1)]
          ),
        new Recipe(
          'Misal Pav',
          'Sprout gravy Served with shev and onion on top of it',
          'https://upload.wikimedia.org/wikipedia/commons/9/94/Misal_Pav_from_Maharashtra.JPG',
          [new Ingredient('Srpouts',5),new Ingredient('Onions',2),new Ingredient('Tomatoes',2),new Ingredient('Potatoes',2)]),

        new Recipe(
          'Veg Biryani',
          'Mouth Watering Shahi biryani',
          'https://upload.wikimedia.org/wikipedia/commons/f/fa/Veg_Biryani.jpg',
          [new Ingredient('Rice',1),new Ingredient('Mix Veggies',1),new Ingredient('Garlic',1),new Ingredient('Ginger',1)]),
      ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipes(){
        return this.recipes.slice()
    }
    addIngredientsToShoppingList(ingredients:Ingredient[]){
      
    }
    
}
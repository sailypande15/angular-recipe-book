import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{

   ingredientChanged = new EventEmitter<Ingredient[]>();

   private ingredients:Ingredient[] =[
        new Ingredient('tomatoes',10),
        new Ingredient('potatos',20)
    
      ];
    getIngredients(){
        return this.ingredients.slice()
    }
    addIngredients(ingradient:Ingredient){
        this.ingredients.push(ingradient)
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}
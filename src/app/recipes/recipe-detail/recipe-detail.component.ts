import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeItem:Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    
  }

  onAddToShoppingList(){
    console.log('addToShopping list button selected');
    this.recipeService.addIngredientsToShoppingList(this.recipeItem.ingredient);
  }

}

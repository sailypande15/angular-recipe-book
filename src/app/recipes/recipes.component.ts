import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  recipeItemSelected:Recipe
  recipes =[];
  
  
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes()
    this.recipeService.recipeSelected.subscribe(
      (recipeItem:Recipe) =>{
        this.recipeItemSelected=recipeItem;
      }
    )


  }

}

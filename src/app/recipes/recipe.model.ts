import { Ingredient } from '../shared/ingredient.model';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

export class Recipe{

    public name:String;
    public description:String;
    public imagePath:String;
    public ingredient:Ingredient[]

    constructor(name:String,description:String,imagePath:String,ingredients:Ingredient[]){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredient = ingredients;

    }
}
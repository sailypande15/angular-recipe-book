import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputtext') inputtext:ElementRef;
  @ViewChild('inputAmount') inputAmount:ElementRef;
 

  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
  }
  onAddItem(){
    let ingName = this.inputtext.nativeElement.value;
    let ingAmount = this.inputAmount.nativeElement.value;
    let ingedient = new Ingredient(ingName,ingAmount);
    this.shoppingService.addIngredients(ingedient);
    
  }

}

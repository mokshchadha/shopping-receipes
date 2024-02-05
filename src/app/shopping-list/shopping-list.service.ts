import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredintsChanged = new EventEmitter<Ingredient[]>();
  private ingredients = [
    new Ingredient('Apple ', '2'),
    new Ingredient('Cucumber ', '2'),
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredient(i: Ingredient) {
    this.ingredients.push(i);
    this.ingredintsChanged.emit(this.ingredients);
  }
}

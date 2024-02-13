import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredintsChanged = new EventEmitter<Ingredient[]>();
  private ingredients = [
    new Ingredient('Apple ', '2'),
    new Ingredient('Cucumber ', '2'),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(i: Ingredient) {
    this.ingredients.push(i);
    this.ingredintsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients = [...this.ingredients, ...ingredients];
    this.ingredintsChanged.emit(this.ingredients.slice());
  }
}

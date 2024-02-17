import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredintsChanged = new Subject<Ingredient[]>();
  private ingredients = [
    new Ingredient('Apple ', '2'),
    new Ingredient('Cucumber ', '2'),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(i: Ingredient) {
    this.ingredients.push(i);
    this.ingredintsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients = [...this.ingredients, ...ingredients];
    this.ingredintsChanged.next(this.ingredients.slice());
  }
}

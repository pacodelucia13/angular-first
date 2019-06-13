import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService) { }

    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://ng-recipe-book-5f784.firebaseio.com/recipes.json?auth=' + token,
            this.recipeService.getRecipes()).subscribe(
                response => {
                    console.log(response);
                }
            );
    }

    fetchRecipes() {
        const token = this.authService.getToken();
        this.http.get<Recipe[]>('https://ng-recipe-book-5f784.firebaseio.com/recipes.json?auth=' + token)
            .pipe(map((recipes: Recipe[]) => {
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        console.log(recipe);
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }))
            .subscribe((recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
            );
    }
}
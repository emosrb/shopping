import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {
      path: "recipes",
      loadChildren: () =>
        import("./recipes/recipe.module").then(m => m.RecipesModule)
    },
    {
      path: "shopping-list",
      loadChildren: () =>
        import("./shopping-list/shopping-list.module").then(
          m => m.ShoppingListModule
        )
    },
    {
      path: "auth",
      loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
    }
  ]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
export class AppRoutingModule {

}
# AngularTodo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


##AppComponent.ts
+---------------------+
| Component: AppComponent |
+---------------------+
        |
        | Import necessary modules and services
        V
+---------------------+
| Constructor          |
| - Sets up ItemService |
+---------------------+
        |
        | ngOnInit (when component loads)
        V
+---------------------+
| loadItemsFromApi()  |
| - Fetches data from |
|   ItemService        |
| - Handles successful |
|   and failed requests|
+---------------------+
        |
        | Data is handled and stored
        V
+---------------------+
| Properties          |
| - title: 'angular-todo' |
| - currentItem: ToDoItem |
| - allItems: ToDoItem[] |
| - doneItems: ToDoItem[] |
+---------------------+
        |
        | Methods to interact with items
        V
+---------------------+
| addItem(form: NgForm) |
| - Adds new item to  |
|   allItems           |
| - Resets currentItem |
+---------------------+
        |
        V
+---------------------+
| markDone(index, item)|
| - Moves item to done|
|   list from allItems|
+---------------------+
        |
        V
+---------------------+
| markUndone(index, item)|
| - Moves item back to |
|   allItems from done|
+---------------------+


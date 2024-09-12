import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemService } from './services/item.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(private itemService: ItemService){}

  ngOnInit(): void {
    this.loadItemsFromApi();
  }

  loadItemsFromApi(){
    this.itemService.getItems().subscribe(
      (data) => {
        this.allItems = data;
      },
      (error) => {
        console.log("Api call failed", error);
      }
    )
  }

  title = 'angular-todo';

  currentItem: ToDoItem = new ToDoItem();

  allItems: ToDoItem [] = [];

  doneItems: ToDoItem [] = [];

  addItem(form: NgForm) {
    this.allItems.push(this.currentItem);
    console.log(this.allItems);
    this.currentItem = new ToDoItem();
  }

  markDone(indexToDelete: number, item: ToDoItem){
    this.doneItems.push(item);
    this.allItems.splice(indexToDelete, 1);
  }

  markUndone(indexToDelete: number, item: ToDoItem){
    this.doneItems.splice(indexToDelete,1)
    this.allItems.push(item)
  }
}

export class ToDoItem {
  itemName: string = '';
  itemDesc: string = '';

}

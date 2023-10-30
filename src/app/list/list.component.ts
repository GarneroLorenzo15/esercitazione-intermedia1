import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface DrinksResponse {
  drinks: any[];
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  drinks: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchDrinks();
  }

  fetchDrinks(): void {
    this.http.get<DrinksResponse>('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      .subscribe(response => {
        this.drinks = response.drinks;
      });
  }
}

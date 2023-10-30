import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 

interface DrinkResponse {
  drinks: any[];
}


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})



export class DetailComponent implements OnInit {
  idDrink : number | undefined;
  drinks : any[] = [];
  drinkDetails: any;

  // 2. Inietta HttpClient nel costruttore
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.idDrink = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchDrinkDetails();
  }
  
  fetchDrinkDetails(): void {
    this.http.get<DrinkResponse>(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.idDrink}`)
      .subscribe(response => {
        // 3. Assicurati che drinkDetails non sia un array, ma un singolo oggettox  
        this.drinkDetails = response['drinks'][0];
      });
  }

  getIngredients(): string[] {
    let ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = this.drinkDetails[`strIngredient${i}`];
      const measure = this.drinkDetails[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${measure ? measure + ' of ' : ''}${ingredient}`);
      }
    }
    return ingredients;
  }
}

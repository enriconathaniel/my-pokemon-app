import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { DetailComponent } from '../detail/detail.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  onDestroy$ = new Subject<void>();
  pokemons: any;
  pokemonFilter: any;
  type: any;
  constructor(private dialog: MatDialog, private http: HttpClient) { }

  ngOnInit() {
    this.pokemons = this.http.get('https://pokeapi.co/api/v2/pokemon').
    subscribe(
      (data: any) => {
        this.pokemons = data;
        this.type = this.http.get('https://pokeapi.co/api/v2/type').
        subscribe(
          (dataType: any) => {
            this.type = dataType;
        });
    });
  }

  filterType(typeName: any) {
    if (typeName === '0') {
      this.pokemonFilter = null;
      this.pokemons = this.http.get('https://pokeapi.co/api/v2/pokemon').
      subscribe(
        (data: any) => {
          this.pokemons = data;
      });
    } else {
      this.pokemons = null;
      this.pokemonFilter = this.http.get('https://pokeapi.co/api/v2/type/' + typeName).
      subscribe(
        (data: any) => {
          this.pokemonFilter = data.pokemon;
      });
    }
  }

  clickPokemon(href: string) {
    this.dialog.open(DetailComponent, {
      disableClose: false,
      width: '400px',
      data: href
    });
  }

  onClickPrev(href: string) {
    this.pokemons = this.http.get(href).
    subscribe(
      (data: any) => {
      this.pokemons = data;
    });
  }

  onClickNext(href: string) {
    this.pokemons = this.http.get(href).
    subscribe(
      (data: any) => {
      this.pokemons = data;
    });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}

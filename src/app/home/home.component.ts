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
  constructor(private dialog: MatDialog, private http: HttpClient) { }

  ngOnInit() {
    this.pokemons = this.http.get('https://pokeapi.co/api/v2/pokemon').
    subscribe(
      (data: any) => {
      this.pokemons = data;
      console.log(this.pokemons);
    });
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
      console.log(this.pokemons);
    });
  }

  onClickNext(href: string) {
    this.pokemons = this.http.get(href).
    subscribe(
      (data: any) => {
      this.pokemons = data;
      console.log(this.pokemons);
    });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}

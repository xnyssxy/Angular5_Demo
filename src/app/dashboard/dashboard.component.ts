import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes : Hero[] = [];
  constructor(private heroService: HeroService,
  private router: Router) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() : void {
    this.heroService.getHeroes()
    .subscribe( heroes => this.heroes = heroes.slice(1,5));
  }

  toDetail(id,name){
    this.router.navigate(['detail'], {
        queryParams: {
            id: id,
            name: name
        }
    });
  }

}

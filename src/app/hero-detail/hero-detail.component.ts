import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero; //让 hero 属性可以在外部的 HeroesComponent 中绑定。

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {

    console.log(this.route);
    // this.route.params
    //   .subscribe((params: Params) => {
    //     this.id = params['id'];
    //     console.log(this.id);
    //     console.log('传值');
    //     console.log(params)
    //   })

    //   this.route.queryParams.subscribe(queryParams => {
    //     console.log(queryParams);
    //     this.id = queryParams.id;
    //     this.name = queryParams.name;
    //     this.getHero(this.id);
    // });
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id'); // + 是把字符串转化为数字类型
  //  console.log(this.route.snapshot.paramMap.get('id'));
    // if(!id){
    //   id = this.id;
    // }
    // console.log(id);
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }

  save(): void{
    this.heroService.updateHero(this.hero)
      .subscribe( () => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}

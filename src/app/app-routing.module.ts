import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


const routes: Routes = [
  // 设置默认跳转路由， full表示与path为空的路由完全匹配
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent } // 路由传参
];

@NgModule({
  imports: [
  //   CommonModule
    RouterModule.forRoot(routes)
  ],
  //declarations: [] //你通常不会在路由模块中声明组件，所以可以删除 @NgModule.declarations,并删除对 CommonModule 的引用。
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

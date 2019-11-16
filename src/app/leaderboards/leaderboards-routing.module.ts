import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppModule } from '../app.module';

import { LeaderboardsPage } from './leaderboards.page';

const routes: Routes = [
{
	path: 'leaderboards',
	component: LeaderboardsPage,
	children: [
	{
		path: 'tab1',
		children: [
		{
			path: '',
			loadChildren: '../tab1/tab1.module#Tab1PageModule'
		}
		]
	},
	{
		path: 'tab2',
		children: [
		{
			path: '',
			loadChildren: '../tab2/tab2.module#Tab2PageModule'
		}
		]
	}
	]
},
{
	path: '',
	redirectTo: '/leaderboards/leaderboards',
	pathMatch: 'full'
}

]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LeaderboardsPageRoutingModule {}

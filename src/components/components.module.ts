import { NgModule } from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu';
import { SettingComponent } from './setting/setting';
import { AboutComponent } from './about/about';
import { FavoriteComponent } from './favorite/favorite';
import { MainMenuComponent } from './main-menu/main-menu';
import { QuestionListComponent } from './question-list/question-list';
@NgModule({
	declarations: [SideMenuComponent,
    SettingComponent,
    AboutComponent,
    FavoriteComponent,
    MainMenuComponent,
    QuestionListComponent],
	imports: [],
	exports: [SideMenuComponent,
    SettingComponent,
    AboutComponent,
    FavoriteComponent,
    MainMenuComponent,
    QuestionListComponent]
})
export class ComponentsModule {}

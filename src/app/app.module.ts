import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { CommandersComponent } from './commanders/commanders.component';
import { LordOfLordsComponent } from './events/lord-of-lords/lord-of-lords.component';
import { AllianceMobilizationComponent } from './events/alliance-mobilization/alliance-mobilization.component';
import { WeirwoodMemoriesComponent } from './events/weirwood-memories/weirwood-memories.component';
import { TreasureSeekerComponent } from './events/treasure-seeker/treasure-seeker.component';
import { BattleOfTheLongNightComponent } from './events/battle-of-the-long-night/battle-of-the-long-night.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RaisingAnArmyComponent } from './benefits/raising-an-army/raising-an-army.component';
import { BattlefieldComponent } from './benefits/battlefield/battlefield.component';
import { DragonCarnivalComponent } from './benefits/dragon-carnival/dragon-carnival.component';
import { AttackARebelGroupComponent } from './benefits/attack-a-rebel-group/attack-a-rebel-group.component';
import { IncreasePowerComponent } from './benefits/increase-power/increase-power.component';
import { EternalGloryComponent } from './benefits/eternal-glory/eternal-glory.component';
import { BestEffortComponent } from './benefits/best-effort/best-effort.component';
import { WarOfTheKingdomsComponent } from './pvp/war-of-the-kingdoms/war-of-the-kingdoms.component';
import { AllianceConquestComponent } from './pvp/alliance-conquest/alliance-conquest.component';
import { SiegeOfWinterfellComponent } from './pvp/siege-of-winterfell/siege-of-winterfell.component';
import { ChampionCitySiegeComponent } from './pvp/champion-city-siege/champion-city-siege.component';
import { ArmyOfTheDeadComponent } from './pvp/army-of-the-dead/army-of-the-dead.component';
import { EliteTrialsComponent } from './events/elite-trials/elite-trials.component';
import { AllianceBossComponent } from './events/alliance-boss/alliance-boss.component';
import { GreatCitiesComponent } from './great-cities/great-cities.component';
import { TogetherInWinterComponent } from './events/together-in-winter/together-in-winter.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CommandersComponent,
    LordOfLordsComponent,
    AllianceMobilizationComponent,
    WeirwoodMemoriesComponent,
    TreasureSeekerComponent,
    BattleOfTheLongNightComponent,
    CalendarComponent,
    RaisingAnArmyComponent,
    BattlefieldComponent,
    DragonCarnivalComponent,
    AttackARebelGroupComponent,
    IncreasePowerComponent,
    EternalGloryComponent,
    BestEffortComponent,
    WarOfTheKingdomsComponent,
    AllianceConquestComponent,
    SiegeOfWinterfellComponent,
    ChampionCitySiegeComponent,
    ArmyOfTheDeadComponent,
    EliteTrialsComponent,
    AllianceBossComponent,
    GreatCitiesComponent,
    TogetherInWinterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

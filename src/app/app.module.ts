import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { basicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { BetterBetterHighlightDirective } from './better-better-highlight/better-better-highlight.directive';
import { BetterBetterBetterHighlightDirective } from './better-better-better-highlight/better-better-better-highlight.directive';
import { BestHighlightDirective } from './best-highlight/best-highlight.directive';
import { UnlessDirective } from './unless/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    basicHighlightDirective,
    BetterHighlightDirective,
    BetterBetterHighlightDirective,
    BetterBetterBetterHighlightDirective,
    BestHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

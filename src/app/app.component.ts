import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    translate: TranslateService
  ) {

  // Languages array
  translate.addLangs(['es', 'en']);

  // Default lang (if don't found any other)
  translate.setDefaultLang('es');

  // Lang based on browser
  const browserLang = translate.getBrowserLang();
  translate.use(
    translate.langs.includes(browserLang)
      ? browserLang
      : translate.defaultLang
  );
  }
}

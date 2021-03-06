import { Component } from '@angular/core';

import { MorsePage } from '../morse/morse';
import { BrailPage } from '../brail/brail';
import { BinaryPage } from '../binary/binary';
import { FlagPage } from '../flag/flag';
import { AbcPage } from '../abc/abc';
import { CalcPage } from '../calc/calc';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MorsePage;
  tab2Root = BrailPage;
  tab3Root = BinaryPage;
  tab4Root = FlagPage;
  tab5Root = AbcPage;
  tab6Root = CalcPage;

  constructor() {

  }
}

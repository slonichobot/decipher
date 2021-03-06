import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-flag',
  templateUrl: 'flag.html'
})
export class FlagPage {

    flagAbc = [
    "_ABCDEFG",
    "A_HIKLMN",
    "BH_OPQRS",
    "CIO_TUY_",
    "DKPT__JV",
    "ELQU__WX",
    "FMRYJW_Z",
    "GNS_VXZ_"];
    // dirs:
    // down, left-down, left, left-up,
    // up, right-up, right, right-down

    positions = [];
    selected : Array<number> = [];
    current = '_';
    flag = "";
    items = [];
    saved = [];

    constructor(public navCtrl: NavController,
        private storage: Storage) {
        var angle = Math.PI / 2;
        for (var i = 0; i < 8; ++i) {
            this.positions.push({ 
                x1: 0,
                y1: 0,
                x2: Math.cos(angle),
                y2: Math.sin(angle),
                id: i
            });
            angle += 2 * Math.PI / 8;
        }
        storage.get('flagSaved').then((val) => {
          if (val && val.length) {
              this.saved = val.split(',');
          }
        });
    }

    select(id) {
        let pos = this.selected.indexOf(id);
        if(pos == -1) {
            this.selected.push(id);
            if (this.selected.length > 2) {
                this.selected = this.selected.slice(-2);
            }
            console.log(id, this.selected);
        } else {
            this.selected.splice(pos,1);
        }
        this.evaluate();
    }

    isSelected(id) {
        return this.selected.indexOf(id) != -1;
    }

    evaluate() {
        if (this.selected.length != 2) {
            this.current = '_';
            return;
        }
        let x = this.selected[0], y = this.selected[1];
        this.current = this.flagAbc[x][y];
    }

    add() {
      this.flag += this.current;
    }

    back() {
      this.flag = this.flag.substring(0, this.flag.length-1);
    }

    save() {
      this.saved = [this.flag].concat(this.saved);
      this.storage.set('flagSaved', this.saved.join());
    }

    clear() {
      this.saved = [];
      this.storage.set('flagSaved', this.saved.join());
    }

}

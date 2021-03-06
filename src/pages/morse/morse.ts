import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-morse',
  templateUrl: 'morse.html'
})

export class MorsePage {

  morse: string = "";
  items = [];
  saved = [];

  constructor(public navCtrl: NavController,
  			  private storage: Storage
  		) {
  	storage.get('morseSaved').then((val) => {
  		if (val && val.length) {
  			this.saved = val.split(',');
  		}
  	});
  }

  clicked(c: string) {
  	this.morse += c;
  	this.calcItems();
  }

  back() {
  	this.morse = this.morse.substring(0, this.morse.length-1);
  	this.calcItems();
  }

  save(item) {
  	this.saved = [item].concat(this.saved);
  	this.storage.set('morseSaved', this.saved.join());
  }

  clear() {
  	this.saved = [];
  	this.storage.set('morseSaved', this.saved.join());
  }

  reset() {
  	this.morse = "";
  	this.calcItems();
  }

  set(event) {
  	this.morse = event.target.value;
  	this.calcItems();
  }

  calcItems() {
  	this.items = [
  		this.morseDecode(this.morse, 0),
  		this.morseDecode(this.morse, 1)
  	];
  }


MORSE = "  ETIANMSURWDKGOHVF L PJBXCYZQ";
morseDecode(str, inv) {
    var cur = 1;
    if(inv == undefined) inv = 0;
    var ret = "";
    for(var i = 0; i < str.length; ++i) {
        if(str[i] == '.') cur = 2*cur + inv;
        else if(str[i] == '-') cur = 2*cur + (inv==1?0:1);
        else if(str[i] == '/') {
            if(cur > 1 && cur < this.MORSE.length)
            	ret += this.MORSE[cur];
            else ret += "_";
            cur=1;
        } else console.warn("invalid char " + str[i] + " at pos " + i + " of " + str);
    }
    if(cur > 1) {
    	if(cur < this.MORSE.length) ret += this.MORSE[cur];
    	else ret += " ";
    }
    return ret;
}

}

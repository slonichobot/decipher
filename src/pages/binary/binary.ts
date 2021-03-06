import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-binary',
  templateUrl: 'binary.html'
})

export class BinaryPage {

  binary: string = "";
  items = [];
  saved = [];

  constructor(public navCtrl: NavController,
  			  private storage: Storage
  		) {
  	storage.get('binarySaved').then((val) => {
  		if (val && val.length) {
  			this.saved = val.split(',');
  		}
  	});
  }

  clicked(c: string) {
  	this.binary += c;
  	this.calcItems();
  }

  back() {
  	this.binary = this.binary.substring(0, this.binary.length-1);
  	this.calcItems();
  }

  save(item) {
    if(!item.length) return;
    this.saved = [item].concat(this.saved);
  	this.storage.set('binarySaved', this.saved.join());
  }

  clear() {
  	this.saved = [];
  	this.storage.set('binarySaved', this.saved.join());
  }

  reset() {
  	this.binary = "";
  	this.calcItems();
  }

  set(event) {
  	this.binary = event.target.value;
  	this.calcItems();
  }

  calcItems() {
  	this.items = [
      this.binaryDecode(this.binary, 0),
      this.binaryDecode(this.binary, 1),
      this.binaryDecode(this.binary.split('').reverse().join(''), 0).split('').reverse().join(''),
      this.binaryDecode(this.binary.split('').reverse().join(''), 1).split('').reverse().join(''),
  	];
  }


binaryDecode(str, inv) {
    var cur = 0;
    if(inv == undefined) inv = 0;
    var ret = "";
    for(var i = 0; i < str.length; ++i) {
        if(str[i] == '0') cur = 2*cur + inv;
        else if(str[i] == '1') cur = 2*cur + (inv==1?0:1);
        else if(str[i] == '/') {
            if(cur >= 1 && cur <= 26)
            	ret += String.fromCharCode("a".charCodeAt(0) + cur - 1);
            else ret += "_";
            cur = 0;
        } else console.warn("invalid char " + str[i] + " at pos " + i + " of " + str);
    }
    if(cur >= 1) {
    	if(cur <= 26) 
    		ret += String.fromCharCode("a".charCodeAt(0) + cur - 1);
    	else ret += " ";
    }
    return ret;
}

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-abc',
  templateUrl: 'abc.html'
})
export class AbcPage {

  constructor(public navCtrl: NavController,
  			  private storage: Storage
  		) {
  	storage.get('abcSaved').then((val) => {
  		if (val && val.length) {
  			this.saved = val.split(',');
  		}
  	});
  }

  saved = [];
  translation = ["","","","",""];

  charA = "A".charCodeAt(0);
  charZ = "Z".charCodeAt(0);

  set(type, event) {
  	var nums = this.toNums(type, event.target.value);

  	let translation = ["","","","",""];
  	
    translation[0]=nums.join(',');
  	for(var i of nums) {
  		if(isNaN(i) || i<1 || i>26) {
  			translation[1] += "_";
  			translation[2] += "_";
  		} else {
  			translation[1] += String
  				.fromCharCode("A".charCodeAt(0) + i - 1);
  			translation[2] += String
  				.fromCharCode("Z".charCodeAt(0) - i + 1);
  		}
  		if(isNaN(i) || i<0 || i>=26) {
  			translation[3] += "_";
  			translation[4] += "_";
  		} else {
  			translation[3] += String
  				.fromCharCode(this.charA + i);
  			translation[4] += String
  				.fromCharCode(this.charZ - i);
  		}
  	}
    this.translation = translation;
  }

  toNums(type, val) {
    var ret = [];
    switch (type) {
      case 0:
        if(val[val.length-1]==',') val=val.substr(0,val.length-1);
        ret = val.split(',').map(Number);
        break;
      case 1:
        val = val.toUpperCase();
        ret = val.split('').map(c=>Number(c.charCodeAt(0)-this.charA+1));
        break;
      case 2:
        val = val.toUpperCase();
        ret = val.split('').map(c=>Number(this.charZ-c.charCodeAt(0)+1));
        break;
      case 3:
        val = val.toUpperCase();
        ret = val.split('').map(c=>Number(c.charCodeAt(0)-this.charA));
        break;
      case 4:
        val = val.toUpperCase();
        ret = val.split('').map(c=>Number(-c.charCodeAt(0)+this.charZ));
        break;
    }
    return ret;
  }

  save(item) {
    if(!item.length) return;
    this.saved = [item].concat(this.saved);
  	this.storage.set('abcSaved', this.saved.join());
  }

  clear() {
  	this.saved = [];
  	this.storage.set('abcSaved', this.saved.join());
  }

}

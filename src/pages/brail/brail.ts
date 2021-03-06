import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-brail',
  templateUrl: 'brail.html'
})
export class BrailPage {

  brail = [[false,false],[false,false],[false,false]];
  currentA: string;
  currentB: string;
  m = {};
  items = [];
  saved = [];

  constructor(public navCtrl: NavController,
  			  private storage: Storage) {
  	this.m["1"] = 'A';
	this.m["12"] = 'B';
	this.m["14"] = 'C';
	this.m["145"] = 'D';
	this.m["15"] = 'E';
	this.m["124"] = 'F';
	this.m["1245"] = 'G';
	this.m["125"] = 'H';
	this.m["24"] = 'I';
	this.m["245"] = 'J';
	this.m["13"] = 'K';
	this.m["123"] = 'L';
	this.m["134"] = 'M';
	this.m["1345"] = 'N';
	this.m["135"] = 'O';
	this.m["1234"] = 'P';
	this.m["12345"] = 'Q';
	this.m["1235"] = 'R';
	this.m["234"] = 'S';
	this.m["2345"] = 'T';
	this.m["136"] = 'U';
	this.m["1236"] = 'V';
	this.m["2456"] = 'W';
	this.m["1346"] = 'X';
	this.m["13456"] = 'Y';
	this.m["1356"] = 'Z';
	this.evaluate();
  	storage.get('brailSaved').then((val) => {
  		if (val && val.length) {
  			this.saved = val.split(',');
  		}
  	});
  }

  add(char) {
  	if(this.items.length == 0)
  		this.items = ["",""];
  	this.items[0] += this.currentA;
  	this.items[1] += this.currentB;
  	this.resetBrail();
  }

  clear() {
  	this.items = [];
  	this.resetBrail();
  }

  resetBrail() {
  	this.brail = [[false,false],[false,false],[false,false]];
  	this.evaluate();
  }

  evaluate() {
  	var num = 1;
  	var curA = "";
  	var curB = "";
  	for (var j = 0; j < 2; ++j) {
  		for (var i = 0; i < 3; ++i) {
  			if(this.brail[i][j]) {
  				curA += num;
  			} else {
  				curB += num;
  			}
  			num++;
  		}
  	}
  	this.currentA = '_';
  	this.currentB = '_';
  	if(this.m[curA] != undefined) this.currentA = this.m[curA];
  	if(this.m[curB] != undefined) this.currentB = this.m[curB];
  }

  save(item) {
    if(!item.length) return;
  	this.saved = [item].concat(this.saved);
  	this.storage.set('brailSaved', this.saved.join());
  }

  clicked(x,y) {
  	this.brail[x][y] = !this.brail[x][y];
  	this.evaluate();
  }

  clearSaved() {
  	this.saved = [];
  	this.storage.set('brailSaved', this.saved.join());
  }

}

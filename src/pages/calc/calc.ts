import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-calc',
  templateUrl: 'calc.html'
})
export class CalcPage {

  constructor(public navCtrl: NavController,
  			  private storage: Storage
  		) {
  	storage.get('calcSaved').then((val) => {
  		if (val && val.length) {
  			this.saved = val.split(',');
  		}
  	});
  }

  saved = [];
  result = [];
 
  inBasis = 10;
  outBasis = 10;

  abcTransl = 0;
  digitOrder = 0;

  val = "";

  setBasis(type, event) {
    let val = event.target.value;
    if(val!='A' && val!='A0') {
      val = Number(val);
      if(isNaN(val) || val<2) return false;
    }
    if(type===0) this.inBasis = val;
    else this.outBasis = val;
    this.calc({target:{value:this.val}});
  }

  divisors = [';',',']
  operators = ['+','-','*','/','%','^','&','|'];
  calc(event) {
    this.val = event.target.value.toLowerCase();
    for(let i=1; i<= this.divisors.length; i++) {
      this.val = this.val.split(this.divisors[i]).join(this.divisors[0]);
    }
    let val_arr = this.val.split(this.divisors[0])
    this.result = [[]]
    try {
      for (let val of val_arr) {
        let curNum = [];
        let expr = "";
        for(let c of val) {
          if(('0'<=c && c<='9')) {
            curNum.push(c.charCodeAt(0)-'0'.charCodeAt(0));
          } else if (this.operators.indexOf(c)!==-1) {
            expr += this.getNum(curNum);
            curNum = [];
            expr += c;
          } else if('a'<=c && c<='z') {
            let abcshift = String(this.inBasis)=='A' ? 1 :
                           String(this.inBasis)=='A0' ? 0 : 10;
            let cur = c.charCodeAt(0)-('a'.charCodeAt(0)) + abcshift;
            curNum.push(cur);
          }
        }
        expr += this.getNum(curNum);
        let ret = eval(expr);
        this.result[0].push(this.getRet(ret));
      }
      this.result[0] = this.result[0].join(', ')
    } catch(e) {
      this.result = ["ERROR: " + e.message];
    }
  }

  getNum(numArr) {
    if(this.digitOrder) numArr.reverse();
    let ret = 0;
    let inBasis = typeof(this.inBasis)==='string' ? 26 : this.inBasis;
    for(let i of numArr) {
      ret = ret * inBasis + i;
    }
    return ret;
  }

  getRet(num) {
    let ret = [];
    let minus = num<0?'-':'';
    num = Math.abs(num);
    let outBasis = String(this.outBasis)==='A0' ? 26 : 
                   String(this.outBasis)==='A' ? 27 : this.outBasis;
    while(num>0) {
      ret.push(num % outBasis);
      num = Math.floor(num / outBasis);
    }
    ret.reverse();
    if(String(this.outBasis)[0] == 'A') {
      ret = ret.map(x=> {
          if(String(this.outBasis)=='A') x -= (x-1)%26;
          return String.fromCharCode(x+"A".charCodeAt(0));});
      return minus+ret.join('');
    } else if(outBasis <= 10) {
      return minus+ret.join('');
    } else if(outBasis <= 35) {
      ret = ret.map(x=> 
          (x>10 ? String.fromCharCode(x-10+"A".charCodeAt(0))
                : String(x))
        );
      return minus+ret.join('');
    }
    return minus+'('+ret.join(',')+')'; // outBasis>35
  }

  save(item) {
    this.saved = [item].concat(this.saved);
  	this.storage.set('calcSaved', this.saved.join());
  }

  clear() {
  	this.saved = [];
  	this.storage.set('calcSaved', this.saved.join());
  }

}

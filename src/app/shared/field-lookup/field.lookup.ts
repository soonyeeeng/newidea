import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'select-list',
  templateUrl: 'field.lookup.html'
})
export class FieldLookup implements OnInit {

  private _optionCode: string = '';
  private _displayOptionCode: string= '';


  @Input('OptionList') optionList = [];
  @Input('Label') fieldlabel = 'Select';
  @Input()
  get optionCode() {
    return this._optionCode;
  }
  set optionCode(val) {
    this._optionCode = val;
    this.optionCodeChange.emit(this._optionCode);
  }
  @Output() optionCodeChange = new EventEmitter();

  constructor() { }
  
  ngOnInit(){

//     for (var prop in object) {
//     // object[prop]
//     break;
// }


// for(var a in this.optionList){
//   console.log(a);
// }

    if(typeof this.optionList !== 'undefined'){
      // for(let i = 0; i<= this.optionList.length-1;i++){
      for(var a in this.optionList){
      // console.log(this.optionList[a]);
        
      }
    }


  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-field',
  templateUrl: 'input.field.html',
  styles:['.currency {text-align: right;}']

})
export class InputField {

  private _inputField: string = '';
  @Input('Label') fieldlabel = 'No.';
  @Input('Type') fieldtype = 'text';
  @Input('Placeholder') placeholder = this.fieldtype;
  @Input()
  get inputfield() {
    return this._inputField;
  }
  set inputfield(val) {
    this._inputField = val;
    this.inputfieldChange.emit(this._inputField);
  }
  @Output() inputfieldChange = new EventEmitter();

  constructor() { }



}

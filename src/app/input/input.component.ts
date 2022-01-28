import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Output() outEnterName = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  enterName(nameInput: HTMLInputElement) {
    this.outEnterName.emit(nameInput.value);
    nameInput.value = '';
  }
}

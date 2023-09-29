import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  //public onDeleteCharacter: EventEmitter<number> = new EventEmitter();
  public onDeleteCharacter = new EventEmitter<string>();

  @Input()
  public characterList: Character[] = [
    {
      id: 'afaf',
      name: 'Trunks',
      power: 10,
    },
  ];

  onDeleteCharacterId(id: string): void {
    this.onDeleteCharacter.emit(id);
  }
}

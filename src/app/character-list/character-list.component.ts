import { Component, OnInit } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [
    { characterId: 1, name: 'Harvey Specter', show: 'Suits'},
    { characterId: 2, name: 'Matt Murdock', show: 'Daredevil'},
    { characterId: 3, name: 'Joey Tribbiani', show: 'Friends'},
    { characterId: 4, name: 'Ganesh Gaitonde', show: 'Sacred Games'},
    { characterId: 5, name: 'Steve Rogers', show: 'Captain America'}
  ];
  _filterText = '';
  filteredCharacters: Character[] = [];

  constructor() {
    this._filterText = '';
    this.filterCharacaters();
    console.log('constructor called');
  }

  ngOnInit() {
  }

  set filterText(value) {
    this._filterText = value;
    this.filterCharacaters();
  }

  get filterText(): string {
    return this._filterText;
  }

  filterCharacaters() {
    this.filteredCharacters = this.characters.filter((character) => {
      const name = character.name.toLowerCase();
      const show = character.show.toLowerCase();
      const filterText = this._filterText.toLowerCase();
      return ( name.indexOf(filterText) !== -1 || show.indexOf(filterText) !== -1 );
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  characters: Character[] = [
    { characterId: 1, name: 'Harvey Specter', show: 'Suits'},
    { characterId: 2, name: 'Matt Murdock', show: 'Daredevil'},
    { characterId: 3, name: 'Joey Tribbiani', show: 'Friends'},
    { characterId: 4, name: 'Ganesh Gaitonde', show: 'Sacred Games'},
    { characterId: 5, name: 'Steve Rogers', show: 'Captain America'}
  ];

  character: Character | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getCharacter(id);
    }
  }

  getCharacter(id) {
    this.character = this.characters.filter((character) => character.characterId === id)[0];
  }

}

import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';



@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgFor, NgStyle, NgIf],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit{
  pickCardAnimation= false;
  currentCard: string = '';
  game!: Game;

constructor(){}

  ngOnInit(): void {
    this.newGame();
  }

newGame(){
  this.game = new Game();
  console.log(this.game);
  
}

  takeCard(){
    this.currentCard = this.game.stack.pop();
this.pickCardAnimation= true;
  }

}

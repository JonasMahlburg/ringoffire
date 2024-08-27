import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';




@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgFor, NgStyle, NgIf, PlayerComponent, MatButtonModule, MatIconModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit{
  pickCardAnimation= false;
  currentCard: string = '';
  game!: Game;

constructor(public dialog: MatDialog){}

  ngOnInit(): void {
    this.newGame();
  }

newGame(){
  this.game = new Game();
  console.log(this.game);
  
}

  takeCard(){    
    if(!this.pickCardAnimation){
      this.currentCard = this.game.stack.pop()!;
      console.log(this.currentCard);      
      this.pickCardAnimation= true;
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation= false;
      }, 1000);
    } 

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      this.game.players.push(name);
     
    });
  }
}


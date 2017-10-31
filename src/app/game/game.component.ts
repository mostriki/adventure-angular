import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { Game } from '../game.model';
import { UserService } from '../user.service';
import { GameService } from '../game.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [UserService,
              GameService]
})

export class GameComponent implements OnInit {
  userId: string;
  gameId: string;
  userToDisplay;
  gameToDisplay;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private userService: UserService, private gameService: GameService) { }

  ngOnInit() {
   this.userId = '0';
   this.userToDisplay = this.userService.getUserById(this.userId);

   this.route.params.forEach((urlParameters) => {
   this.gameId = urlParameters['id'];
   });
   this.gameToDisplay = this.gameService.getGameById(this.gameId);
  }

  goToNext(here) {
    this.router.navigate(['games/here']);
  }
}

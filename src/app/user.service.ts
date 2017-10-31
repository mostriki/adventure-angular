import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }

  getUsers(){
    return this.users;
  }

  addAlbum(newUser: User) {
    this.users.push(newUser);
  }

  getUserById(userId: string){
    return this.database.object('users/' + userId);
  }

}

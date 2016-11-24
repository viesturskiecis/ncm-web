import { Component, OnInit } from '@angular/core';
 
import { User } from '../_models/';
import { UserService } from '../_services/index';
import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { GreenCasesComponent } from '../components/index';

 
@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
 
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    
    /*public tabs:Array<any> = [
    {title: 'Green cases', content: 'Green cases', disabled: false, removable: false},
    {title: 'Monitoring', content: 'Monitoring', disabled: false, removable: false},
    {title: 'Statistics', content: 'Statistics', disabled: false, removable: false},
  ];*/
  
 
    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
 
    ngOnInit() {
        this.loadAllUsers();
    }
 
    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }
 
    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

  };

}
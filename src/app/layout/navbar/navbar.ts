import { Component } from '@angular/core';
import { AddUserModal } from '../../modals/add-user-modal/add-user-modal';
import {MatDialog} from '@angular/material/dialog'
@Component({
  selector: 'app-navbar',
  imports: [AddUserModal],
  templateUrl: './navbar.html',
  styleUrl: 'navbar.scss'
})


export class Navbar {

constructor(private dialog: MatDialog) {}


  testFunction () {
    this.dialog.open(AddUserModal, {
       
    })
  }
}


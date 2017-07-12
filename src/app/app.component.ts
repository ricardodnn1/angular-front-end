import { Component, ElementRef, Renderer2 } from '@angular/core';
import {MdButton, MdCheckbox, MdCard, MdMenu, MdToolbar, MdIcon, MdGridList, MdDialog, MdDialogRef} from '@angular/material';
import {PostComponent} from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: any;
  selectedOption: string;

  constructor(private _element: ElementRef, private _renderer2: Renderer2, public dialog: MdDialog){
    this.title = 'Teste Front-end';
  }

  openDialog() {
    const dialogRef = this.dialog.open(PostComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }
}

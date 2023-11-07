import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import{Router } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {
  constructor(public dialogRef: DialogRef, @Inject(DIALOG_DATA) public data: any, private router:Router, private redirectMenu: RedirectMenuService) {

  }

  onCancel(){
    this.dialogRef.close();
    this.redirect('work-space');
    
  }
  onOk(){
    ///this.dialogRef.close();
    
    this.redirect('work-space');
  }
  redirect(path : string){

    this.redirectMenu.redirectWithdata(path,this.data.data);

  }
}

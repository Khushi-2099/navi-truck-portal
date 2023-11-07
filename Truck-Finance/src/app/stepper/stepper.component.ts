import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit{
  @Input() progressColor:any='green'
  @Input() activeColor:any='green'

  @Input() first:any='black';
  @Input() second:any='black';
  @Input() third:any='black';

  @Input() firstBg:any='rgb(0,0,0,0)';
  @Input() secondBg:any='rgb(0,0,0,0)';
  @Input() thirdBg:any='rgb(0,0,0,0)';
  @Input() ani:any='none';

  

  @Input() date1:any = '';
  @Input() date2:any = '';
  @Input() date3:any = '';

  firstwidth='30vw';
  secondwidth='30vw';
  thirdwidth='100%';
  tick=false;

  
ngOnInit(): void {
  if (this.secondBg =='#B0D7E9'){
    this.firstwidth='33vw';
    this.tick=true
  } else if (this.thirdBg =='#B0D7E9'){
    this.secondwidth='33vw';
  }
}
  

  

}

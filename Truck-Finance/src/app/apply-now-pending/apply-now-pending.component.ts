import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { NavigationEnd, Router } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-apply-now-pending',
  templateUrl: './apply-now-pending.component.html',
  styleUrls: ['./apply-now-pending.component.scss'],
  providers: [MessageService]
})
export class ApplyNowPendingComponent implements OnInit{
  uploadedFiles: any[] = [];
  // isCarCardVisible1:boolean=false;
  ORC: number = 8173.90;
  myObserver;
  currentUrl: any;
  techDetailsParameter: any;
  showCredit: boolean = true;
  package:string='Standard'

  constructor(private messageService: MessageService, private router: Router, private redirectMenu: RedirectMenuService) {
    this.myObserver = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        const navigation = this.router.getCurrentNavigation();
        if (navigation?.extras.state) {
          this.techDetailsParameter = navigation.extras.state;
          console.log("apply now pending ", this.techDetailsParameter.tableData)

        }
      }
    });
  }
  isCarCardVisible: boolean[] = [];

  toggleCarCardVisibility(index: number) {
    this.isCarCardVisible[index] = !this.isCarCardVisible[index];
  }

  numberWithCommas(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // isCarCardVisible:boolean = false;

  ngOnInit(): void {
    console.log(this.techDetailsParameter);
    console.log("asldasldlsadl "+ this.techDetailsParameter.pramData.option);
    
    if (this.techDetailsParameter.pramData.option == 0) {
      this.package = "Standard"
    }
    else {
      this.package = "Advanced"
    }
  }

  redirect(path: string) {
    this.redirectMenu.redirectTo(path);
  }

  onSubmit() {
    this.showCredit = false;
    setTimeout(() => {
      this.onOk();
    }, 2000);
    // this.redirectMenu.redirectWithdata('work-space',this.techDetailsParameter);
  }

  selectedApproval="bankStatement"
  banknote="";
  cardnote="";
  regisnote="";

  changeApproval(param:any){
    this.selectedApproval = param
  }

  onAddNote(noteVal:string){
    if (this.selectedApproval=="bankStatement"){
      this.banknote=noteVal
    } 
    if (this.selectedApproval=="creditCard"){
      this.cardnote=noteVal
    } 
    if (this.selectedApproval=="regisCopy"){
      this.regisnote=noteVal
    } 
    
  }

  onOk() {
    // this.techDetailsParameter.comp = 'credit';
    this.showCredit = true;
    this.techDetailsParameter.comp = "apply";
    
    
    this.techDetailsParameter.status = "Approved";
    console.log("Ok clicked", this.techDetailsParameter);
    this.redirectMenu.redirectWithdata('work-space', this.techDetailsParameter);
  }
  
  
   formatDate = (date: Date): string =>date instanceof Date && !isNaN(date.getTime())
    ? date.toLocaleDateString('en-GB').replace(/\//g, '-')
    : 'Invalid input. Please provide a valid Date object';
  currentDate = this.formatDate(new Date(new Date().getTime() + 4 * 24 * 60 * 60 * 1000));

  onCancel() {
    // this.techDetailsParameter.comp = 'credit';
    this.showCredit = true;
    this.redirectMenu.redirectWithdata('work-space', this.techDetailsParameter);
  }

  bankStatus = "Pending"
  cardStatus = "Pending"
  regisStatus = "Pending"
  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file)
    }
    if (this.selectedApproval=="bankStatement"){
      this.bankStatus = "Completed"
    } 
    if (this.selectedApproval=="creditCard"){
      this.cardStatus = "Completed"
    } 
    if (this.selectedApproval=="regisCopy"){
      this.regisStatus = "Completed"
    } 
    
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'File Uploaded successfully' });
  }

  carDetails = [
    {
      name: "Audi A8 L 2022",
      price: 8200,
      imgUrl: "../../assets/Cars/toyota.png"
    }
  ]

}

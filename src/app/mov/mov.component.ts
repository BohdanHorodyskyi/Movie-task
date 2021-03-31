import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { IMov } from './mov.interface';
import { Mov } from './mov.model';


@Component({
  selector: 'app-mov',
  templateUrl: './mov.component.html',
  styleUrls: ['./mov.component.css']
})
export class MovComponent implements OnInit {
  movies: Array<IMov> = [];
  title: string;
  des: string;
  image: string;
  imageStatus: boolean;
  uploadProgress: Observable<number>;
  modalRef: BsModalRef;
  editStatus = false;
  selecetdFile : File;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }
  private resetForm(): void{
    this.title = '';
    this.des = '';
    this.image = '';
  }
  addMov(): void{
    const newMov: IMov = new Mov(this.title, this.image, this.des);
    this.movies.push(newMov);
    this.resetForm();
    }
 

onSelectFile(event) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); 

    reader.onload = (event) => { // called once readAsDataURL is completed
      this.image = event.target.result as string;
    }
  }
}
}


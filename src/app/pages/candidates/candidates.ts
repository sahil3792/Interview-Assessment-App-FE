import { Component, inject } from '@angular/core';
import { CandidateModal } from '../candidate.modal/candidate.modal';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-candidates',
  imports: [],
  standalone: true,
  templateUrl: './candidates.html',
  styleUrl: './candidates.css',
})
export class Candidates {
  dialog = inject(MatDialog);

  openModal(){
    this.dialog.open(CandidateModal,{
      width: '800px',
      height: 'auto',
      disableClose: true
    });
  }
}

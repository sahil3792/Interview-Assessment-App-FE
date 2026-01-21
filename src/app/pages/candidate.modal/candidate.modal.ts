import { Component } from '@angular/core';
import { MatDialog, MatDialogClose, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-candidate.modal',
  imports: [MatDialogClose],
  standalone: true,
  templateUrl: './candidate.modal.html',
  styleUrl: './candidate.modal.css',
})
export class CandidateModal {
  constructor(private dialogRef: MatDialogRef<CandidateModal>) {}
  close() {
      this.dialogRef.close();
    }
}

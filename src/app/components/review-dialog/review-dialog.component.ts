import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-review-dialog',
  templateUrl: './review-dialog.component.html',
  styleUrls: ['./review-dialog.component.scss']
})
export class ReviewDialogComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<ReviewDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public review: Review) { }

    ngOnInit(): void {
    }

    onCancel(): void {
        this.dialogRef.close();
    }
}

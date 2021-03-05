import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  @Input() id: number;
  @Input() disabled = false;
  @Input() rating: number;
  @Output() ratingChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
}

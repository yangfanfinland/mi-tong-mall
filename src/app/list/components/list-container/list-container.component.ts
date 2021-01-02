import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListContainerComponent implements OnInit {
  ngOnInit(): void {}
}

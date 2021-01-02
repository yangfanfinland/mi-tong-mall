import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContainerComponent implements OnInit {
  ngOnInit(): void {}
}

import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutcontainer',
  templateUrl: './about-container.component.html',
  styleUrls: ['./about-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutContainerComponent implements OnInit {
  links = [
    { name: "About", href: "" }
  ]

  constructor(
  ) {}

  ngOnInit(): void {

  }
}

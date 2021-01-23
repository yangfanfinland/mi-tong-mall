import { ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContainerComponent implements OnInit {
  @Input() sliderHeight = '370px';
  imageSliders = [
    {
      id: 1,
      imgUrl: '/assets/image/banner/banner1.jpg',
      link: '/product?categoryId=100021',
      caption: '',
    },
    {
      id: 2,
      imgUrl: '/assets/image/banner/banner2.jpg',
      link: '/product?categoryId=100030',
      caption: '',
    },
    {
      id: 3,
      imgUrl: '/assets/image/banner/banner3.jpg',
      link: '/product?categoryId=100016',
      caption: '',
    },
    {
      id: 4,
      imgUrl: '/assets/image/banner/banner4.jpg',
      link: '/product?categoryId=100001',
      caption: '',
    },
    {
      id: 5,
      imgUrl: '/assets/image/banner/banner5.jpg',
      link: '/product?categoryId=100021',
      caption: '',
    },
  ];

  constructor() {
  }

  ngOnInit(): void {

  }
}

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

  floors = [
    {
      title: 'F1 Household appliances',
      categories: [
        {
          id: '100006',
          text: 'Fridge',
          image: '/assets/image/floor/floor1-1.jpg',
        },
        {
          id: '100007',
          text: 'TV',
          image: '/assets/image/floor/floor1-2.jpg',
        },
        {
          id: '100008',
          text: 'Washing machine',
          image: '/assets/image/floor/floor1-3.jpg',
        },
        {
          id: '100009',
          text: 'Air conditioning',
          image: '/assets/image/floor/floor1-4.jpg',
        },
        {
          id: '100010',
          text: 'Water heater',
          image: '/assets/image/floor/floor1-5.jpg',
        },
      ],
    },
    {
      title: 'F2 Digital 3C',
      categories: [
        {
          id: '100011',
          text: 'Laptop',
          image: '/assets/image/floor/floor2-1.jpg',
        },
        {
          id: '100012',
          text: 'Cell phone',
          image: '/assets/image/floor/floor2-2.jpg',
        },
        {
          id: '100013',
          text: 'Tablet',
          image: '/assets/image/floor/floor2-3.jpg',
        },
        {
          id: '100014',
          text: 'Digital camera',
          image: '/assets/image/floor/floor2-4.jpg',
        },
        {
          id: '100015',
          text: '3C accessories',
          image: '/assets/image/floor/floor2-5.jpg',
        },
      ],
    },
    {
      title: 'F3 Clothing luggage',
      categories: [
        {
          id: '100016',
          text: "Women's clothing",
          image: '/assets/image/floor/floor3-1.jpg',
        },
        {
          id: '100017',
          text: 'Hat area',
          image: '/assets/image/floor/floor3-2.jpg',
        },
        {
          id: '100018',
          text: 'Suitcase',
          image: '/assets/image/floor/floor3-3.jpg',
        },
        {
          id: '100019',
          text: 'handbag',
          image: '/assets/image/floor/floor3-4.jpg',
        },
        {
          id: '100020',
          text: 'Thermal underwear',
          image: '/assets/image/floor/floor3-5.jpg',
        },
      ],
    },
    {
      title: 'F4 Fresh food',
      categories: [
        {
          id: '100021',
          text: 'Favorite snack',
          image: '/assets/image/floor/floor4-1.jpg',
        },
        {
          id: '100022',
          text: 'Fresh food',
          image: '/assets/image/floor/floor4-2.jpg',
        },
        {
          id: '100023',
          text: 'Semi-finished dishes',
          image: '/assets/image/floor/floor4-3.jpg',
        },
        {
          id: '100024',
          text: 'Frozen zone',
          image: '/assets/image/floor/floor4-4.jpg',
        },
        {
          id: '100025',
          text: 'Imported milk',
          image: '/assets/image/floor/floor4-5.jpg',
        },
      ],
    },
    {
      title: 'F5 Drinks',
      categories: [
        {
          id: '100026',
          text: 'White spirit',
          image: '/assets/image/floor/floor5-1.jpg',
        },
        {
          id: '100027',
          text: 'Red wine',
          image: '/assets/image/floor/floor5-2.jpg',
        },
        {
          id: '100028',
          text: 'Drinks',
          image: '/assets/image/floor/floor5-3.jpg',
        },
        {
          id: '100029',
          text: 'Cocktail',
          image: '/assets/image/floor/floor5-4.jpg',
        },
        {
          id: '100030',
          text: 'Imported wine',
          image: '/assets/image/floor/floor5-5.jpg',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

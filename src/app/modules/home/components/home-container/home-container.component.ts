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
      title: 'F1 家用电器',
      categories: [
        {
          id: '100006',
          text: '双开门冰箱',
          image: '/assets/image/floor/floor1-1.jpg',
        },
        {
          id: '100007',
          text: '电视',
          image: '/assets/image/floor/floor1-2.jpg',
        },
        {
          id: '100008',
          text: '洗衣机',
          image: '/assets/image/floor/floor1-3.jpg',
        },
        {
          id: '100009',
          text: '空调',
          image: '/assets/image/floor/floor1-4.jpg',
        },
        {
          id: '100010',
          text: '热水器',
          image: '/assets/image/floor/floor1-5.jpg',
        },
      ],
    },
    {
      title: 'F2 数码3C',
      categories: [
        {
          id: '100011',
          text: '笔记本电脑',
          image: '/assets/image/floor/floor2-1.jpg',
        },
        {
          id: '100012',
          text: '手机',
          image: '/assets/image/floor/floor2-2.jpg',
        },
        {
          id: '100013',
          text: '平板电脑',
          image: '/assets/image/floor/floor2-3.jpg',
        },
        {
          id: '100014',
          text: '数码相机',
          image: '/assets/image/floor/floor2-4.jpg',
        },
        {
          id: '100015',
          text: '3C配件',
          image: '/assets/image/floor/floor2-5.jpg',
        },
      ],
    },
    {
      title: 'F3 服装箱包',
      categories: [
        {
          id: '100016',
          text: '女装',
          image: '/assets/image/floor/floor3-1.jpg',
        },
        {
          id: '100017',
          text: '帽子专区',
          image: '/assets/image/floor/floor3-2.jpg',
        },
        {
          id: '100018',
          text: '旅行箱',
          image: '/assets/image/floor/floor3-3.jpg',
        },
        {
          id: '100019',
          text: '手提包',
          image: '/assets/image/floor/floor3-4.jpg',
        },
        {
          id: '100020',
          text: '保暖内衣',
          image: '/assets/image/floor/floor3-5.jpg',
        },
      ],
    },
    {
      title: 'F4 食品生鲜',
      categories: [
        {
          id: '100021',
          text: '最爱零食',
          image: '/assets/image/floor/floor4-1.jpg',
        },
        {
          id: '100022',
          text: '生鲜',
          image: '/assets/image/floor/floor4-2.jpg',
        },
        {
          id: '100023',
          text: '半成品菜',
          image: '/assets/image/floor/floor4-3.jpg',
        },
        {
          id: '100024',
          text: '速冻专区',
          image: '/assets/image/floor/floor4-4.jpg',
        },
        {
          id: '100025',
          text: '进口牛奶',
          image: '/assets/image/floor/floor4-5.jpg',
        },
      ],
    },
    {
      title: 'F5 酒水饮料',
      categories: [
        {
          id: '100026',
          text: '白酒',
          image: '/assets/image/floor/floor5-1.jpg',
        },
        {
          id: '100027',
          text: '红酒',
          image: '/assets/image/floor/floor5-2.jpg',
        },
        {
          id: '100028',
          text: '饮料',
          image: '/assets/image/floor/floor5-3.jpg',
        },
        {
          id: '100029',
          text: '调制鸡尾酒',
          image: '/assets/image/floor/floor5-4.jpg',
        },
        {
          id: '100030',
          text: '进口洋酒',
          image: '/assets/image/floor/floor5-5.jpg',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

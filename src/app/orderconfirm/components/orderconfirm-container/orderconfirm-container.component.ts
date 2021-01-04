import { ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService, OrderService } from '../../services';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ModalComponent } from '../../../material/components';

@Component({
  selector: 'app-orderconfirm-container',
  templateUrl: './orderconfirm-container.component.html',
  styleUrls: ['./orderconfirm-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderConfirmContainerComponent implements OnInit {
  order$: Observable<any>;
  addressList$: Observable<any>;
  orderItem$: Observable<any>;
  data = { selectedAddressId: "" };
  selectedAddressId = ""

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: OrderService,
    private addressService: AddressService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadAddressList();
    this.loadProductList();
  }

  loadAddressList(){
    this.addressList$ = this.addressService.getAddressList().pipe(map(this.addressFilter));
  }

  addressFilter = (data: any) => {
    return data.data.list;
  };

  loadProductList = () => {
    this.orderItem$ = this.service.getProductList().pipe(map(res => res.data));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addressService.save(result).subscribe(response => {
          this.loadAddressList();
          this.cdr.detectChanges();
        })
      }
    });
  }

  async editAddress(addressId: string) {
    const addressResource = await this.addressService.getAddress(addressId).toPromise();
    const address = this.filterAddress(addressResource.data);
    console.log(addressResource)
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      data: address
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addressService.update(result).subscribe(response => {
          this.loadAddressList();
          this.cdr.detectChanges();
        })
      }
    });
  }
  filterAddress(data: any) {
    return {
      id: data.id,
      receiverAddress: data.receiverAddress,
      receiverCity: data.receiverCity,
      receiverDistrict: data.receiverDistrict,
      receiverMobile: data.receiverMobile,
      receiverName: data.receiverName,
      receiverPhone: data.receiverPhone,
      receiverProvince: data.receiverProvince,
      receiverZip: data.receiverZip
    }
  }
  addressDelete(addressId: string) {
    if(window.confirm('确认要删除该地址？')){
      this.addressService.deleteAddress(addressId).subscribe(response => {
        this.selectedAddressId = "";
        this.loadAddressList();
        this.cdr.detectChanges();
      })
    }
  }
  addressItem(addressId: string) {
    this.selectedAddressId = addressId
  }
  orderSubmit() {
    if (!this.selectedAddressId) {
      alert('Choose address for delivery first!');
      return;
    }
    this.service.createOrder(this.selectedAddressId).subscribe(response => console.log(response))
    this.router.navigate(['/payment']);
  }
}

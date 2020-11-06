import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../product/store/product.model';

@Component({
  selector: 'app-indiviual-product',
  templateUrl: './indiviual-product.component.html',
  styleUrls: ['./indiviual-product.component.scss']
})
export class IndiviualProductComponent implements OnInit {

  productId: any;
  productData: Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private commonService: CommonService
  ) {
    const prodid = 'id';
    this. productId = this.activatedRoute.snapshot.params[prodid];
  }

  ngOnInit(): void {
    this.getData();
  }
  getData(): any {
    this.commonService.getProductData(this.productId).subscribe((data) => {
      this.productData = data;
    });
  }
}

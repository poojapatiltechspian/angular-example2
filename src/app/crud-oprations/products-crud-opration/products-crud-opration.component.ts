import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-crud-opration',
  templateUrl: './products-crud-opration.component.html',
  styleUrls: ['./products-crud-opration.component.scss']
})
export class ProductsCrudOprationComponent implements OnInit {

  products: any;
  selectedProduct: any;
  productForm: FormGroup;
  isEdit: boolean;
  userStatus: any;
  buttonLable: any;
  buttonEdit = 'Edit';
  buttonDelete = 'delete';
  sub: Subscription;
  isDelete: boolean;
  isSubmit: boolean;
  constructor(
    private commonService: CommonService,
    private fb: FormBuilder,
    ) {}

  ngOnInit(): void{
    this.createForm();
    this.getLinks();
  }
  createForm(): void{
    this.buttonLable = 'save';
    this.productForm = this.fb.group({
      id:  [''],
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      img_path: ['assets/img/box.jpg']
    });
  }
  patchForm(data?: any): void{
    this.productForm = this.fb.group({
      id:  ['' || data.id],
      name: ['' || data.name, Validators.required],
      description: ['' || data.description, [Validators.required]],
      price: ['' || data.price, [Validators.required]],
      quantity: ['' || data.quantity, [Validators.required]],
      img_path: ['assets/img/box.jpg']
    });
  }
  delete(id): void {
    this.commonService.deleteProduct(id).subscribe((data) => {
      this.isDelete = true;
      this.getLinks();
    });
  }
  getLinks(): void {
    this.sub = this.commonService.getProducts().subscribe(
      (data) => { this.products = data; },
      // (error) =>  { const errmsg = 'HTTP Error ' + error; alert(errmsg); }
    );
  }
  onSubmit(data): void{
    this.commonService.createProduct(data.value).subscribe(() => {
      this.getLinks();
      this.productForm.reset();
      this.isSubmit = true;
    });
  }
  edit(id): void {
    this.buttonLable =  'Edit';
    this.commonService.getProductData(id).subscribe((data) => {
      this.patchForm(data);
      this.isEdit = true;
    });
  }
  editData(): void{
    this.commonService.updateProduct(this.productForm.value.id, this.productForm.value).subscribe((data) => {
      this.getLinks();
      this.productForm.reset();
      this.isEdit = false;
      this.buttonLable =  'SAVE';
    });
  }

}

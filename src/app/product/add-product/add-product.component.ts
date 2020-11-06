import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductState } from '../store/product.reducer';
import { select, Store } from '@ngrx/store';
import { addProduct, loadProduct, loadProducts, updateProduct } from '../store/product.actions';
import { selectProduct, selectedProduct } from '../store/product.selecters';
import { Observable } from 'rxjs';
import { Product } from '../store/product.model';
import { Update } from '@ngrx/entity';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  products$: Observable<Product[]>;
  selectedProduct: any;
  productForm: FormGroup;
  isEdit: boolean;
  userStatus: any;
  productId: any;
  constructor(
    private fb: FormBuilder,
    private store: Store<ProductState>,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
    }

  ngOnInit(): void{
    const prodid = 'id';
    this. productId = this.activatedRoute.snapshot.params[prodid];
    if (this.activatedRoute.snapshot.url[0].path === 'edit-product') {
      this.edit();
    }
    this.createForm();
  }
  createForm(): void{
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

  onSubmit(data): void{
    this.store.dispatch(addProduct({product: data}));
    this.productForm.reset();
    this.router.navigate(['./ngrx-crud-opration/product-list']);
  }
  edit(): void {
    this.isEdit = true;
    const id = this.productId;
    this.store.dispatch(loadProduct({id}));
    this.store.pipe(select(selectedProduct)).subscribe((product) => {
      this.selectedProduct = Object.assign(new Product(), product);
      this.patchForm(this.selectedProduct);
    });
  }
  editData(): void{
    this.productForm.value.id = this.productId;
    const uppdate: Update<Product> = {
      id: this.productForm.value.id,
      changes: this.productForm.value
    };
    this.store.dispatch(updateProduct({product: uppdate}));
    this.productForm.reset();
    this.isEdit = false;
    this.router.navigate(['./ngrx-crud-opration/product-list']);
  }

}

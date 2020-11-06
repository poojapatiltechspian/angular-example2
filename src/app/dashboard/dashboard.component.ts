import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  productData: any;
  constructor(
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBooksData();
  }
  getBooksData(): void {
    this.commonService.getProducts().subscribe((data) => {
      this.productData = data;
    });
  }
  navigationRouteString(id): any {
    this.router.navigate(['/product/', id]);
  }
}

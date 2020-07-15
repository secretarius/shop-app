import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.servise';



@Component({
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  pageTitle: string = 'Product List';
  products: IProduct[] = [];

  constructor(private _productServise: ProductService) { }

  ngOnInit(): void {
    this._productServise.getProducts()
            .subscribe(products => {
              this.products = products
            });
  }

}

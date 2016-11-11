import {Component, OnInit} from'@angular/core';
import {IProduct} from './product';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({    
    moduleId: module.id,
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit{
    pageTitle:string = 'Product Detail'
    product: IProduct;

    constructor(private _route: ActivatedRoute, private _router: Router, private _productService: ProductService){        
    }

    ngOnInit(): void{
        let id = +this._route.snapshot.params["id"];
       this._productService.getProducts()
           .subscribe(
               (products: IProduct[]) => {
                   products.map(p => {
                       if(p.productId === id){
                           this.product = p;
                       }
                   })
               }
           );          
    }

    onBack() :void{
        this._router.navigate(['/products']);
    }

    onRatingClicked(val:any): void{
        this.pageTitle = 'Product Detail: ' + val;
    }
}
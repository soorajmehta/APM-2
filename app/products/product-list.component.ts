import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import { ProductService } from './Product.service';
import {Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    templateUrl:'product-list.component.html',
    styleUrls: ['product-list.component.css'],
    providers:[ProductService]
})
export class ProductListComponent implements OnInit {
    pageTitle : string = 'Product List'
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage:boolean = false;
    listFilter: string;
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService){
    }
   
    ngOnInit(){
        this._productService.getProducts()
                            .subscribe(
                                (products: IProduct[]) => this.products = products,
                                err => this.errorMessage = <any>err
                            );                                
    }   

    toggleShowImage(): void{
        this.showImage = !this.showImage;
    }

    onStarClicked(val:string): void{
        console.log(val);
    }

}
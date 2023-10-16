import {Component} from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    selector: "store",
    templateUrl: "./store.component.html"
    })
export class StoreComponent {

    public selectedCategory:string|null= '';
    public productsPerPage = 4;
    public selectedPage = 1;

    constructor(private repository: ProductRepository){
        this.changeCategory();
    }

    get products(): Product[]{
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.repository.getProducts(this.selectedCategory)
                .slice(pageIndex, pageIndex + this.productsPerPage);

    }

    get categories(): string[]{
        return this.repository.getCategories();
    }

    changeCategory(newCategory:string|null=null){
        this.selectedCategory = newCategory;
    }

    changePage(newPage:number){
        this.selectedPage = newPage;
    }

    changePageSize(value: any){
        this.productsPerPage = Number(value.target.value);
        this.changePage(1);
    }
    get pageNumbers(): number[] {
        return Array(Math.ceil(this.repository
        .getProducts(this.selectedCategory).length / this.productsPerPage))
        .fill(0).map((x, i) => i + 1);
    }
}
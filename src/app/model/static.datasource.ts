import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";
@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, 'Flyraom Lace up shoe', 'Category 1', 'Sneaker Shoe (Category 1)', 100),
        new Product(2, 'T-Shirt', 'Category 1', 'Sports T-shirt High Quality (Category 1)', 90),
        new Product(3, 'TR Trail Shoe', 'Category 1', 'Running Shoe (Category 1)', 99),
        new Product(4, 'Cooler', 'Category 1', 'High Quality Cooler (Category 1)', 50),
        new Product(5, 'Graphic T-Shirt Grey L', 'Category 1', 'Cotton T-shirt (Category 1)', 60),
        new Product(6, 'Euphoria EDP 100 ml', 'Category 2', 'Liquid Amber, Black Violet, Cream, Mahogany Wood (Category 2)', 150),
        new Product(7, 'Eternity Moment EDP 100 ml', 'Category 2', 'Brazillian Rose Wood, Cashmere Wood, Musk (Category 2)', 80),
        new Product(8, 'In Red EDT 100 ml', 'Category 2', 'Lily, Jasmine, Violet Leaf, Rose, Blackcurrant (Category 2)', 90),
        new Product(9, 'Flower Pink EDT 100 ml', 'Category 2', 'Othmani Roses', 99),
        new Product(10, 'Musk EDC 59 ml', 'Category 2', 'Musk EDC 59 ml', 88),
        new Product(11, 'Shampo', 'Category 3', 'Favourite Shampoo', 188),
        new Product(12, 'Biscuit', 'Category 4', 'Crunchy Biscuit', 88),
        new Product(13, 'Chips', 'Category 5', 'Salted & crunchy tasty Chips', 150)
    ];
    getProducts(): Observable<Product[]>{
        return from([this.products]);
    }
}

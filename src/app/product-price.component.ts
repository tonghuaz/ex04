import { Component, Input } from "@angular/core";
import { Product } from './product';

@Component({
selector: 'product-price',
template: `
\${{price}}
`
})
export class ProductPriceComponent {
@Input() price: number;
constructor() {
}
}

import { Component } from '@angular/core';

export interface Product {
    title: string;
    category: string;
	description: string;
    price: string;
    strikePrice: string;
    image: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	product: Product = {
		title: 'Gabrielle Essence Eau De Parfum',
		category: 'Perfume',
		description: 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
		price: '$149.99',
		strikePrice: '$169.99',
		image: '/assets/image-product-mobile.jpg'
	}
}

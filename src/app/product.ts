
export class Product {
    id: number;
    name: string;
    price: number;
    qty: number;
    

constructor() {
    this.id=Math.floor(Math.random() * 1000);
}
}


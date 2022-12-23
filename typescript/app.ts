

class Cart1 {
  productList: Product[]; 
  // delivery: //;

  addProductsToCart(p: Product): void;
  addProductsToCart(p: Product[]): void;
  addProductsToCart(p: Product | Product[]) {
    this.productList.push(...p);
  }

  deleteProductFromCart(id: number) {
    return this.productList.filter( product => product.id !== id);
  }

  countProductsPriceInCart() {
    return this.productList.map( product => product.price).reduce((a, b) => a + b);
  }

  addDelivery() {

  }

  checkout() {
    if (this.productList && this.de)
  }
}

class Product1 {
  id: number;
  name: string;
  price: number;
}


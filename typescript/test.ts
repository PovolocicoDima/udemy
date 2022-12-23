class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
  ) {}
}

class Delivery {
  constructor(
    public date: Date,
  ) {}
}

class HomeDelivery extends Delivery {
  constructor(date: Date, public adress: string) {
    super(date);
  }
}

class ShopDelivery extends Delivery {
  constructor(public shopId: number) {
    super(new Date());
  }
}

type DeliveryOptions = HomeDelivery | ShopDelivery;

class Cart {
  private products: Product[] = [];
  private delivery: HomeDelivery | ShopDelivery;

  public addProduct(product: Product): void {
    this.products.push(product);
  }

  public deleteProduct(productId: number): void {
    this.products = this.products.filter( (product: Product) => product.id !== productId);
  }

  public getSum(): number {
    return this.products.map( (product: Product) => product.price).reduce( (p1: number, p2: number) => p1 + p2);
  }

  public setDelivery( delivery: DeliveryOptions ): void {
    this.delivery = delivery;
  }

  public checkout() {
    if (!this.products) {
      throw new Error('no products');
    }

    if (!this.delivery) {
      throw new Error('no delivery');
    }

    return { success: true }
  }
}

const cart = new Cart();
cart.addProduct(new Product(1, 'cookie', 10))
cart.addProduct(new Product(2, 'choko', 20))
cart.addProduct(new Product(3, 'coffee', 30))
cart.deleteProduct(2);
// cart.setDelivery(new HomeDelivery(new Date(), 'new adress'));
console.log(cart.getSum());
console.log(cart.checkout());
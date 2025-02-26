export interface Price {
  currencyCode: string;
  amount: number;
}

export interface ProductPrice {
  cashPrice: Price;
  pointsPrice: {
    amount: number;
  };
}

export interface Product {
  name: string;
  description: string;
  image?: string;
  imageSrc?: string;
  tag?: string | null;
  wasPrice?: ProductPrice;
  currentPrice: ProductPrice;
}

export interface fetchWineListResponse {
  data: {
    search: {
      total: number;
      products: Product[];
    };
  };
}

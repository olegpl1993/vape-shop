export interface CartElem {
  id: string;
  number: number;
}

export interface Product {
  _id: string,
  category: string,
  title: string,
  brand: string,
  flavor: string,
  price: number,
  stock: number,
  description: string,
  images: string,
  __v: number
}

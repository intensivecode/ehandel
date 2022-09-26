export interface IProduct {
  _id: string;
  name: string;
  category: ICategory;
  numberInStock: number;
  price: number;
  imgUrl: string;
}

interface ICategory {
  _id: string;
  name: string;
}

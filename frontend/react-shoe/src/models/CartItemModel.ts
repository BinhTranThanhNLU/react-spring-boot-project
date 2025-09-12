export interface CartItemModel {
  idVariant: number;
  idProduct: number
  title: string;
  color: string;
  size: string;
  price: number;     
  quantity: number;
  total: number; 
  image: string;
  onCartChange: () => void;
}
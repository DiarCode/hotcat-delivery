import { IMenu } from "./menu.type";

export interface IRestaurant {
  id: number;
  name: string;
  hasDelivery: boolean;
  deliveryTime: string;
  address: string;
  openHours: string;
  shortFoodDescription: string;
  description: string;
  image: string;
  rating: string;
  menu: IMenu;
}

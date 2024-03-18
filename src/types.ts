//we are gonna define properties
//and property types based on what
//we get back onm the response

export type User = {
  _id: string;
  email: string;
  name: string;
  addressLine1: string;
  city: string;
  country: string;
};

//type that describes the restaurant that's going to come back in response whenever we create a response

export type MenuItem = {
  _id: string;
  name: string;
  price: number;
};
export type Restaurant = {
  _id: string;
  user: string;
  restaurantName: string;
  city: string;
  country: string;
  deliveryPrice: number;
  estimatedDeliveryTime: number;
  cuisines: string[];
  menuItems: MenuItem[];
  imageUrl: string;
  lastUpdated: string;
};

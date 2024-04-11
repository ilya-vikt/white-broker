export type PriceFilterType = {
  name: 'price';
  minVal: number;
  maxVal: number;
  algorithm: 'total' | 'perSquareMeter';
};

export type AreaFilterType = {
  name: 'area';
  houseAreaMin: number;
  houseAreaMax: number;
  landAreaMin: number;
  landAreaMax: number;
};

export type RoomCountFilterType = {
  name: 'roomCount';
};

export type AddressFilterType = {
  name: 'address';
  placeholder: string;
};

export type RealtyFilters =
  | AddressFilterType
  | AreaFilterType
  | RoomCountFilterType
  | PriceFilterType;

// Model Values
export type ModelValuePriceFilter = {
  priceMin: number;
  priceMax: number;
  algorithm: string;
};

export type ModelValueAreaFilter = {
  houseAreaMin: number;
  houseAreaMax: number;
  landAreaMin: number;
  landAreaMax: number;
};

export type ModelValueAddressFilter = {
  isMetro: boolean;
  address: string;
  metro: number[];
};

export type ModelValueFilters =
  | ModelValueAddressFilter
  | ModelValueAreaFilter
  | ModelValuePriceFilter
  | number
  | number[];

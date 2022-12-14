import { CartItemDTO } from "common/dto/CartItemDTO";
import { CartItemState, CartState } from "store/slices/cartSlice";

const getCartFromLocalStorage = () => {
  const itemsList: CartState =
    (JSON.parse(
      localStorage.getItem("ordersList") || JSON.stringify("")
    ) as CartState) || ({ menuId: null, cartItemsArr: [] } as CartState);

  return itemsList;
};

export const fetchCart = () => {
  const itemsList: CartState = getCartFromLocalStorage();
  return itemsList;
};

export const fetchPostNewCartItem = (cartItem: CartItemState) => {
  const itemsList: CartState = getCartFromLocalStorage();

  const menuFoodId = cartItem.cartItem.food.id;
  const menuId = cartItem.menuId;

  const cartItemIndex = itemsList.cartItemsArr.findIndex(
    item => item.food.id === menuFoodId
  );

  if (itemsList.cartItemsArr.length > 0 && menuId !== itemsList.menuId) {
    return;
  }

  if (cartItemIndex === -1) {
    itemsList.menuId = menuId;
    itemsList.cartItemsArr.push(cartItem.cartItem);
  } else {
    itemsList.cartItemsArr = itemsList.cartItemsArr.filter(
      item => item.food.id !== menuFoodId
    );
  }

  localStorage.setItem("ordersList", JSON.stringify(itemsList));

  return itemsList;
};

export const clearCartInLocalStorage = () => {
  localStorage.removeItem("ordersList");
};

export const fetchUpdateCartItemTotalPrice = (cartItem: CartItemDTO) => {
  const itemsList: CartState = getCartFromLocalStorage();

  const menuFoodId = cartItem.food.id;

  const cartItemIndex = itemsList.cartItemsArr.findIndex(
    item => item.food.id === menuFoodId
  );

  if (cartItemIndex !== -1) {
    itemsList.cartItemsArr[cartItemIndex].totalPrice =
      itemsList.cartItemsArr[cartItemIndex].count *
      itemsList.cartItemsArr[cartItemIndex].food.price;
  }

  localStorage.setItem("ordersList", JSON.stringify(itemsList));

  return itemsList;
};

export const fetchRemoveCartItem = (cartItem: CartItemDTO) => {
  const itemsList: CartState = getCartFromLocalStorage();

  const menuFoodId = cartItem.food.id;
  itemsList.cartItemsArr = itemsList.cartItemsArr.filter(
    item => item.food.id !== menuFoodId
  );

  if (itemsList.cartItemsArr.length === 0) {
    return localStorage.removeItem("ordersList");
  }

  localStorage.setItem("ordersList", JSON.stringify(itemsList));

  return itemsList;
};

export const fetchAddCountToCartItem = (cartItem: CartItemDTO) => {
  const itemsList: CartState = getCartFromLocalStorage();

  const menuFoodId = cartItem.food.id;

  const cartItemIndex = itemsList.cartItemsArr.findIndex(
    item => item.food.id === menuFoodId
  );

  if (cartItemIndex !== -1) itemsList.cartItemsArr[cartItemIndex].count += 1;

  localStorage.setItem("ordersList", JSON.stringify(itemsList));

  return itemsList;
};

export const fetchSubstractCountOfCartItem = (cartItem: CartItemDTO) => {
  let itemsList: CartState =
    JSON.parse(localStorage.getItem("ordersList") || "[]") ||
    ([] as CartItemDTO[]);

  const menuFoodId = cartItem.food.id;

  const cartItemIndex = itemsList.cartItemsArr.findIndex(
    item => item.food.id === menuFoodId
  );

  if (cartItemIndex !== -1) itemsList.cartItemsArr[cartItemIndex].count -= 1;

  localStorage.setItem("ordersList", JSON.stringify(itemsList));

  return itemsList;
};

export const changeStateOfOrderInLocalStorage = (state: boolean) => {
  localStorage.setItem("isOrderActive", JSON.stringify(state));
};

export const getStateOfOrderInLocalStorage = () => {
  if (typeof window !== "undefined") {
    const isOrderActive: boolean = JSON.parse(
      localStorage.getItem("isOrderActive") || JSON.stringify(false)
    );

    return isOrderActive;
  }
};

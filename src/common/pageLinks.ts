export const NAVBAR_PAGES_LINKS = {
  HOME: { name: "Home", path: "/" },
  MENU: { name: "Menu", path: "/menu" },
  SEARCH: { name: "Search", path: "/search" },
  ABOUT: { name: "About", path: "/about" },
};

export const AUTH_PAGES_LINKS = {
  LOGIN: { name: "Login", path: "/login" },
  SIGNUP: { name: "Sign up", path: "/signup" },
};

export const PROFILE_PAGES_LINKS = {
  ORDERS: { name: "Orders", path: "/profile/orders" },
};

export const ADMIN_PAGES_LINKS = {
  DASHBOARD: { name: "Dashboard", path: "/admin" },
  ORDERS: { name: "Orders", path: "/admin/orders" },
  CREATE: { name: "Create", path: "/admin/create" },
};

export const PAGES_LINKS = {
  ...NAVBAR_PAGES_LINKS,
  ...AUTH_PAGES_LINKS,
  ...PROFILE_PAGES_LINKS,
  ...ADMIN_PAGES_LINKS,
  CART: { name: "Cart", path: "/cart" },
};

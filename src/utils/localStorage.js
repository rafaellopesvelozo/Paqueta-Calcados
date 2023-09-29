import { formatCurrency } from "./format";

export const localStorageAddUser = (shoesItem) => {
  let listUser = JSON.parse(localStorage.getItem("listUser") || "[]");
  listUser.push({
    nameCad: shoesItem.name,
    idCad: shoesItem.id,
    priceCad: formatCurrency(shoesItem.price.value),
  });

  localStorage.setItem("listUser", JSON.stringify(listUser));
};

export const localStorageRemoveUser = () => {
  localStorage.removeItem("listUser", listUser);
};

import { string } from "prop-types";

// Functional Cashier

interface Item {
  name : string
  price : number
  qty: number
};

interface CartAPI {
  length : number
  total : number
  addItem(item: Item) : CartAPI;
  add(name: string, price: number, qty: number) : CartAPI
};


export function cashier() : CartAPI {
  let items : Item[] = [];
  return {
    get length() {
      return items.reduce(( acc, item) => {
        return acc + item.qty;
      }, 0);
    },
    get total() {
      return items.reduce(( acc, item) => {
        return acc + (item.qty * item.price);
      }, 0);
    },
    addItem(item) : CartAPI {
      items.push(item);
      return this;
    },
    add(name, price, qty=1) : CartAPI {
      items.push({ name, price, qty });
      return this;
    }
  };
}


let cart = cashier();

cart.add('Zucchero', 0.50, 3);
cart.add('Zucchero', 0.20, 1);

console.log(cart.total)
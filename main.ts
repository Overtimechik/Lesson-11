import { Order } from "./src/models/Order";
const user = "Виктор Марш";
const address = "г.Павлодар, ул.Ломова, дом 21";
const sum = 30000;
const order = new Order({ user, address, sum });
console.log(order.getInfoOrder());

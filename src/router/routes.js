import { Shop, Basket } from "../pages";

export const routes = [
    { path: '/', component: < Shop />, exact: true },
    { path: "/basket", component: < Basket />, exact: true }
];
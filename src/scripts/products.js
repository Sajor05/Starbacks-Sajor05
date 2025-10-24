import { Product } from "./models/productModel.js";

/* C A R A M E L  M A C C H I A T O */
let title0 = "Caramel Macchiato";
let price0 = 4200;
let img0 = "/src/assets/img/menu/caramel-macchiato.jpg";
const caramelMacchiato = new Product(title0, img0, price0);

/* C A P P U C H I N O */
let title1 = "Cappuchino";
let price1 = 3500;
let img1 = "/src/assets/img/menu/cappuccino.jpg";
const cappuchino = new Product(title1, img1, price1);

/* L A T T E  V A I N I L L A */
let title2 = "Latte vainilla";
let price2 = 3800;
let img2 = "/src/assets/img/menu/latte-vainilla.jpg";
const latteVainilla = new Product(title2, img2, price2);

/* M O C H A */
let title3 = "Mocha";
let price3 = 4000;
let img3 = "/src/assets/img/menu/mocha.jpg";
const mocha = new Product(title3, img3, price3);

/* F L A T  W H I T E */
let title4 = "Flat white";
let price4 = 3900;
let img4 = "/src/assets/img/menu/flat-white.jpg";
const flatWhite = new Product(title4, img4, price4);

/* E S P R E S S O  D O B L E */
let title5 = "Espresso doble";
let price5 = 2800;
let img5 = "/src/assets/img/menu/espresso-doble.jpg";
const espressoDoble = new Product(title5, img5, price5);

/* A F F O G A T O */
let title6 = "Affogato";
let price6 = 4500;
let img6 = "/src/assets/img/menu/Affogato.jpg";
const affogato = new Product(title6, img6, price6);

/* C O L D  B R E W */
let title7 = "Cold brew";
let price7 = 4200;
let img7 = "/src/assets/img/menu/cold-brew.jpg";
const coldBrew = new Product(title7, img7, price7);

export const products = [
  caramelMacchiato,
  cappuchino,
  latteVainilla,
  mocha,
  flatWhite,
  espressoDoble,
  affogato,
  coldBrew,
];

export type BillingInterval = "1" | "3" | "6";

export interface PriceConfig {
  priceId: string;
  mode: "subscription" | "payment";
  totalPrice: number;
  monthlyPrice: number;
  discount: number; // percentage
}

export const stripePrices: Record<string, Record<BillingInterval, PriceConfig>> = {
  basis: {
    "1": {
      priceId: "price_1T6SgDFRqS45qgwEWT55DI3q",
      mode: "subscription",
      totalPrice: 99,
      monthlyPrice: 99,
      discount: 0,
    },
    "3": {
      priceId: "price_1T6SgEFRqS45qgwEL899NPkJ",
      mode: "payment",
      totalPrice: 267.30,
      monthlyPrice: 89.10,
      discount: 10,
    },
    "6": {
      priceId: "price_1T6SgFFRqS45qgwEyFFgudbs",
      mode: "payment",
      totalPrice: 504.90,
      monthlyPrice: 84.15,
      discount: 15,
    },
  },
  pro: {
    "1": {
      priceId: "price_1T6SgGFRqS45qgwET9hyvSlr",
      mode: "subscription",
      totalPrice: 149,
      monthlyPrice: 149,
      discount: 0,
    },
    "3": {
      priceId: "price_1T6SgHFRqS45qgwEN1ZajVXn",
      mode: "payment",
      totalPrice: 402.30,
      monthlyPrice: 134.10,
      discount: 10,
    },
    "6": {
      priceId: "price_1T6SgIFRqS45qgwEXAch9jPf",
      mode: "payment",
      totalPrice: 759.90,
      monthlyPrice: 126.65,
      discount: 15,
    },
  },
  proplus: {
    "1": {
      priceId: "price_1T6SgJFRqS45qgwE9oMpBpig",
      mode: "subscription",
      totalPrice: 249,
      monthlyPrice: 249,
      discount: 0,
    },
    "3": {
      priceId: "price_1T6SgKFRqS45qgwEb7QyARZo",
      mode: "payment",
      totalPrice: 672.30,
      monthlyPrice: 224.10,
      discount: 10,
    },
    "6": {
      priceId: "price_1T6SgLFRqS45qgwEuf22v1UC",
      mode: "payment",
      totalPrice: 1269.90,
      monthlyPrice: 211.65,
      discount: 15,
    },
  },
};

export const intervalLabels: Record<BillingInterval, string> = {
  "1": "Maandelijks",
  "3": "3 maanden",
  "6": "6 maanden",
};

export const SETUP_FEE_PRICE_ID = "price_1T6SgNFRqS45qgwE1S37iWJ9";
export const SETUP_FEE_AMOUNT = 300;

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
      priceId: "price_1T7cFrFRqS45qgwE4Hkq5sAI",
      mode: "subscription",
      totalPrice: 267.30,
      monthlyPrice: 89.10,
      discount: 10,
    },
    "6": {
      priceId: "price_1T7cFsFRqS45qgwEbVBUlGo6",
      mode: "subscription",
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
      priceId: "price_1T7cFtFRqS45qgwEpORqWV5A",
      mode: "subscription",
      totalPrice: 402.30,
      monthlyPrice: 134.10,
      discount: 10,
    },
    "6": {
      priceId: "price_1T7cFuFRqS45qgwEK8tSwarL",
      mode: "subscription",
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
      priceId: "price_1T7cFvFRqS45qgwE8NA6TDIC",
      mode: "subscription",
      totalPrice: 672.30,
      monthlyPrice: 224.10,
      discount: 10,
    },
    "6": {
      priceId: "price_1T7cFvFRqS45qgwEr6GwqDWX",
      mode: "subscription",
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

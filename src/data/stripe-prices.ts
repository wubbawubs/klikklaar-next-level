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
      priceId: "price_1T3w0tFFsGuvFW1gkDS6DsTF",
      mode: "subscription",
      totalPrice: 99,
      monthlyPrice: 99,
      discount: 0,
    },
    "3": {
      priceId: "price_1T3w4lFFsGuvFW1ge50o7tmF",
      mode: "payment",
      totalPrice: 267.30,
      monthlyPrice: 89.10,
      discount: 10,
    },
    "6": {
      priceId: "price_1T3w6kFFsGuvFW1gzrBm2blH",
      mode: "payment",
      totalPrice: 504.90,
      monthlyPrice: 84.15,
      discount: 15,
    },
  },
  pro: {
    "1": {
      priceId: "price_1T3wDWFFsGuvFW1ggtTGFzPM",
      mode: "subscription",
      totalPrice: 149,
      monthlyPrice: 149,
      discount: 0,
    },
    "3": {
      priceId: "price_1T3wDqFFsGuvFW1gYNRmdNTa",
      mode: "payment",
      totalPrice: 402.30,
      monthlyPrice: 134.10,
      discount: 10,
    },
    "6": {
      priceId: "price_1T3wEBFFsGuvFW1gX1oRFhzl",
      mode: "payment",
      totalPrice: 759.90,
      monthlyPrice: 126.65,
      discount: 15,
    },
  },
  proplus: {
    "1": {
      priceId: "price_1T3wEdFFsGuvFW1g88rWd78i",
      mode: "subscription",
      totalPrice: 249,
      monthlyPrice: 249,
      discount: 0,
    },
    "3": {
      priceId: "price_1T3wFKFFsGuvFW1ggjQOrUIL",
      mode: "payment",
      totalPrice: 672.30,
      monthlyPrice: 224.10,
      discount: 10,
    },
    "6": {
      priceId: "price_1T3wFZFFsGuvFW1gJIJZ8UvV",
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

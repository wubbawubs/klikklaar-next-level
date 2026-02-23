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
      priceId: "price_1T3xMBFFsGuvFW1gkJW0j4pq",
      mode: "subscription",
      totalPrice: 99,
      monthlyPrice: 99,
      discount: 0,
    },
    "3": {
      priceId: "price_1T3xMHFFsGuvFW1gTcA5tx5e",
      mode: "payment",
      totalPrice: 267.30,
      monthlyPrice: 89.10,
      discount: 10,
    },
    "6": {
      priceId: "price_1T3xMIFFsGuvFW1g6ui1Fno3",
      mode: "payment",
      totalPrice: 504.90,
      monthlyPrice: 84.15,
      discount: 15,
    },
  },
  pro: {
    "1": {
      priceId: "price_1T3xMJFFsGuvFW1g7r2RZ6Ue",
      mode: "subscription",
      totalPrice: 149,
      monthlyPrice: 149,
      discount: 0,
    },
    "3": {
      priceId: "price_1T3xMKFFsGuvFW1gzzHCjKLw",
      mode: "payment",
      totalPrice: 402.30,
      monthlyPrice: 134.10,
      discount: 10,
    },
    "6": {
      priceId: "price_1T3xMLFFsGuvFW1gimgmsRXE",
      mode: "payment",
      totalPrice: 759.90,
      monthlyPrice: 126.65,
      discount: 15,
    },
  },
  proplus: {
    "1": {
      priceId: "price_1T3xMMFFsGuvFW1gqKh7wrPo",
      mode: "subscription",
      totalPrice: 249,
      monthlyPrice: 249,
      discount: 0,
    },
    "3": {
      priceId: "price_1T3xMNFFsGuvFW1gSnBiucRs",
      mode: "payment",
      totalPrice: 672.30,
      monthlyPrice: 224.10,
      discount: 10,
    },
    "6": {
      priceId: "price_1T3xMOFFsGuvFW1gSzMazMy9",
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

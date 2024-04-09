import type { PageInfo } from '@/share/types';
import type { ComputedRef } from 'vue';

export type BuyPageInfo = PageInfo & {
  creditCalc: {
    cost: {
      minVal: number;
      maxVal: number;
      default: number;
    };
    term: {
      minVal: number;
      maxVal: number;
      default: number;
    };
    interest: {
      minVal: number;
      maxVal: number;
      default: number;
    };
    initialFee: {
      maxVal: number;
    };
    disclaimer: string;
  };
  promo: {
    id: number;
    title: string;
    expire: string;
    rate: number;
    limit: string;
    href: string;
    decorUrl: string;
  }[];
};

export type BuyPageInfoRef = ComputedRef<BuyPageInfo | null>;

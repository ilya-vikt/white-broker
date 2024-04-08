import type { PageInfo } from '@/share/types';
import type { ComputedRef } from 'vue';

export type BuyPageInfo = PageInfo & {
  creditCalc: {
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

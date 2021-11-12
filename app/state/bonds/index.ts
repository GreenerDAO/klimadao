import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Bond } from "@klimadao/lib/constants";

type BondState = {
  [bond in Bond]?: {
    bond: Bond;
    allowance?: string;
    balance?: string;
    interestDue?: string;
    bondMaturationBlock?: number;
    pendingPayout?: string;
    bondDiscount?: number;
    debtRatio?: number;
    bondQuote?: string;
    vestingTerm?: number;
    maxBondPrice?: number;
    bondPrice?: number;
    marketPrice?: number;
  };
};

const initialState: BondState = {
  bct: undefined,
  klima_bct_lp: undefined,
  bct_usdc_lp: undefined,
};

/** Helper type to reduce boilerplate */
type BondPayload = Partial<BondState[Bond]> & { bond: Bond };

export const bondsSlice = createSlice({
  name: "bonds",
  initialState,
  reducers: {
    setBond: (s, a: PayloadAction<BondPayload>) => {
      s[a.payload.bond] = { ...s[a.payload.bond], ...a.payload };
    },
  },
});

export const { setBond } = bondsSlice.actions;

export default bondsSlice.reducer;

import { PublicKey } from "@solana/web3.js";

const addressLen = '11111111111111111111111111111111111111111111'.length
export function isValidPubkey(pubkey: string) {
  const lenOk = pubkey.length === addressLen;
  if (lenOk) {
    try {
      return toPublicKey(pubkey) instanceof PublicKey;
    } catch (e) {
      return false;
    }
  }
}

const PubKeysInternedMap = new Map<string, PublicKey>();

export const toPublicKey = (key: string | PublicKey) => {
  if (typeof key !== 'string') {
    return key;
  }

  let result = PubKeysInternedMap.get(key);
  if (!result) {
    result = new PublicKey(key);
    PubKeysInternedMap.set(key, result);
  }

  return result;
};

export const pubkeyToString = (key: PublicKey | null | string = '') => {
  return typeof key === 'string' ? key : key?.toBase58() || '';
};

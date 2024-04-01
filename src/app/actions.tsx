import { cookies } from "next/headers";

export const getCookies = async (key: string) => {
  const cookiesStore = cookies();
  const cookie = cookiesStore.get(key);

  return cookie?.value;
};

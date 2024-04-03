"use server";
import { fetchInterface } from "@/lib/interfaces/interfaces";
import { cookies } from "next/headers";

export const getCookies = async (key: string) => {
  const cookiesStore = cookies();
  const cookie = cookiesStore.get(key);

  return cookie?.value;
};

export async function setCookieAction(name: string, value: string) {
  cookies().set(name, value);
}

export const httpRequest = async ({
  path,
  method,
  data,
  headersArg,
  cacheConfig,
  configs,
}: fetchInterface) => {
  try {
    const accessToken: any = await getCookies("accessToken");
    const url = `${process.env.BASE_URL}${path}`;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-type": "application/json",
      ...headersArg,
    };

    const res = await fetch(url, {
      headers,
      method,
      body: data ? JSON.stringify(data) : null,
      cache: cacheConfig ? cacheConfig : "force-cache",
      ...configs,
    });

    return res.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

import { getCookies } from "@/app/actions";

export enum requestMethods {
  get = "GET",
  post = "POST",
  put = "PUT",
  delete = "DELETE",
}

interface fetchInterface {
  path: string;
  method: requestMethods;
  data?: any;
  headersArg?: any;
  cacheConfig?: any;
  configs?: any;
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
    console.log(error);
  }
};

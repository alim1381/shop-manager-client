export enum requestMethods {
  get = "GET",
  post = "POST",
  put = "PUT",
  delete = "DELETE",
}

export interface fetchInterface {
  path: string;
  method: requestMethods;
  data?: any;
  headersArg?: any;
  cacheConfig?: any;
  configs?: any;
}

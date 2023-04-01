import type {Method} from 'axios';
import axios, {AxiosResponse} from 'axios';
import {Either, left, right} from '../utils/either';
import {BusinessError} from './errors/BusinessError';

interface FetchBuilderV2Props {
  url: string;
  method: Method;
  data?: Object | null;
  signal?: AbortSignal;
  headers?: any;
  blob?: boolean;
}
export const requestBuilder = async <returnType>({
  url,
  method,
  data,
  signal,
  headers
}: FetchBuilderV2Props): Promise<Either<Error | BusinessError, AxiosResponse<returnType>>> => {
  try {
    const reqResult = axios({
      method,
      url,
      data,
      headers: {'Content-Type': 'application/json', ...headers},
      signal
    });
    const response = await reqResult;
    if (response.status >= 200 && response.status < 300) return right(response);
    return left(BusinessError.create({content: response}));
  } catch (err) {
    return left(err as Error);
  }
  //  = await fetch(URL, {
  //   signal,
  //   headers: {'Content-Type': 'application/json', ...headers},
  //   body: transformedBody
  // });
  // const textResult = await reqResult.text();
  // let result: any;
  // try {
  //   result = textResult === '' ? {} : JSON.parse(textResult);
  // } catch (error) {
  //   return left(error as SyntaxError);
  // }
  // if (fetchResult.ok) return right(result as returnType);
  // return left(new Error(result));
};

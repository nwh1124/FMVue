import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import {ICondolence} from '../types'

// API 원형
abstract class HttpClient {
    protected readonly instance: AxiosInstance;
  
    public constructor(instance: AxiosInstance) {
      this.instance = instance;
  
      this._initializeRequestInterceptor();
      this._initializeResponseInterceptor();
    }
  
    private _initializeRequestInterceptor() {
      this.instance.interceptors.request.use(
        this._handleRequest,
        this._handleError,
      );
    };
  
    private _initializeResponseInterceptor() {
      this.instance.interceptors.response.use(
        this._handleResponse,
        this._handleError,
      );
    };
  
    protected _handleRequest(config:AxiosRequestConfig) : AxiosRequestConfig {
      return config;
    }
  
    protected _handleResponse(axiosResponse:AxiosResponse) : AxiosResponse {
      return axiosResponse;
    }
  
    protected _handleError(error: AxiosError) {
      if (error.response) {
        // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
        alert('요청을 처리하는 중에 오류가 발생하였습니다.');
      }
      else if (error.request) {
        // 요청이 이루어 졌으나 응답을 받지 못했습니다.
        // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
        // Node.js의 http.ClientRequest 인스턴스입니다.
        alert('서버 또는 네트워크의 상태가 좋지 않습니다.');
      }
      else {
        // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
        console.log('Error', error.message);
      }
  
      return Promise.reject(error);
    };
  
    public postByForm<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
      const params = new URLSearchParams();
  
      for ( let key in data ) {
        params.append(key, data[key]);
      }
  
      config =  {} as AxiosRequestConfig;
  
      config.headers = {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': '*/*'
      };
  
      return this.instance.post(url, params, config);
    }
  
    public post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
      return this.instance.post(url, data, config);
    }
}

// 응답 타입
interface Base__IResponseBodyType1{
    resultCode:string;
    msg:string;
    fail:boolean;
    success:boolean;
}

// /usr/condolence/list 의 응답 타입
export interface MainApi__condolence_list__IResponseBody extends Base__IResponseBodyType1 {
  body:{
    condolences: ICondolence[]
  };
}
export interface MainApi__condolence_doWrite__IResponseBody extends Base__IResponseBodyType1 {

}


// http://localhost:8021/ 와의 통신장치
export class MainApi extends HttpClient {
  public constructor() {
    super(
      axios.create({
        baseURL:'http://localhost:8021/',
      })
    );
  }

  // http://localhost:8021/usr/condolence/list?boardId=? 를 요청하고 응답을 받아오는 함수
  public condolence_list(boardId: number) {
    return this.instance.get<MainApi__condolence_list__IResponseBody>(`/usr/condolence/list?boardId=${boardId}`);
  }

  // http://localhost:8021/usr/condolence/doAdd?writer=?&password=?&body=? 를 요청하고 응답을 받아오는 함수
  public condolence_doWrite(writer:string, password:string, body:string) {
    return this.instance.post<MainApi__condolence_doWrite__IResponseBody>(`/usr/condolence/doAdd?writer=${writer}&password=${password}&body=${body}`);
  }

} 
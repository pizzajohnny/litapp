// tslint:disable: prefer-template
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, ToastController, Loading } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { ENV } from '../../app/env';

const handleAPIError = (error: Error, url: string, data: any, method: string) => {
  console.info({
    url,
    method,
    data,
    type: 'API_Error',
    name: error.name,
    message: error.message,
    stack: error.stack,
  });
  throw error;
};

@Injectable()
export class Api {
  // apikeys and appid are always the same
  public apikey: string = '70b3a71911b398a98d3dac695f34cf279c270ea0';
  public appid: string = '24b7c3f9d904ebd679299b1ce5506bc305a5ab40';
  public corsProxy: string = ENV.CORS_PROXY || '';
  public urls = this.getUrls();

  translations;
  loader: Loading;

  constructor(
    public http: HttpClient,
    public translate: TranslateService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
  ) {
    try {
      const search = location.search.substring(1);
      const queryParams = JSON.parse(
        '{"' +
          decodeURI(search)
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"') +
          '"}',
      );
      if (queryParams.proxy) {
        this.corsProxy = queryParams.proxy;
        this.urls = this.getUrls();
      }
    } catch (e) {}
  }

  getUrls() {
    return [
      this.corsProxy + 'https://literotica.com/api',
      this.corsProxy + 'https://search.literotica.com/api',
      this.corsProxy + 'https://www.literotica.com',
      this.corsProxy + 'https://raw.githubusercontent.com/theilluminatus/litapp/master',
      this.corsProxy + 'https://literotica.com',
    ];
  }

  get(endpoint: string, params?: any, reqOpts?: any, urlIndex?: number, timeout?: number) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams({ encoder: new WebHttpUrlEncodingCodec() }),
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams({ encoder: new WebHttpUrlEncodingCodec() });
      for (const k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    reqOpts.withCredentials = true;
    reqOpts.params = reqOpts.params.set('apikey', this.apikey);
    reqOpts.params = reqOpts.params.set('appid', this.appid);
    const url = this.urls[urlIndex ? urlIndex : 0] + '/' + endpoint;
    const req = this.http.get(url, reqOpts).catch(err => handleAPIError(err, url, reqOpts.params, 'GET'));
    if (timeout) return req.timeout(timeout);
    return req;
  }

  post(endpoint: string, body: any, reqOpts?: any, addIDs?: boolean, urlIndex?: number) {
    if (addIDs) {
      if (endpoint.indexOf('?') > -1) {
        endpoint += '&apikey=' + this.apikey + '&appid=' + this.appid;
      } else {
        endpoint += '?apikey=' + this.apikey + '&appid=' + this.appid;
      }
    }

    const url = this.urls[urlIndex ? urlIndex : 0] + '/' + endpoint;
    return this.http.post(url, body, reqOpts).catch(err => handleAPIError(err, url, body, 'POST'));
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    const url = this.urls[0] + '/' + endpoint;
    return this.http.put(url, body, reqOpts).catch(err => handleAPIError(err, url, body, 'PUT'));
  }

  delete(endpoint: string, reqOpts?: any, urlIndex?: number) {
    const url = this.urls[urlIndex ? urlIndex : 0] + '/' + endpoint;
    return this.http.delete(url, reqOpts).catch(err => handleAPIError(err, url, {}, 'DELETE'));
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    const url = this.urls[0] + '/' + endpoint;
    return this.http.patch(url, body, reqOpts).catch(err => handleAPIError(err, url, body, 'PATCH'));
  }

  showLoader() {
    if (this.loader) return this.loader;
    this.loader = this.loadingCtrl.create({ spinner: 'crescent' });
    this.loader.present();
    this.loader.onDidDismiss(() => {
      this.loader = undefined;
    });
    return this.loader;
  }

  updateLoader(content: string) {
    if (!this.loader) return;
    this.loader.setContent(content);
  }

  hideLoader() {
    if (this.loader) this.loader.dismiss().catch(() => {});
  }

  showToast(text?: string, timeout?: number, button?: string) {
    return new Promise(resolve => {
      this.translate.get(['LOAD_ERROR', 'CLOSE_BUTTON']).subscribe(values => {
        this.translations = values;
        const toast = this.toastCtrl.create({
          message: text ? text : this.translations.LOAD_ERROR,
          showCloseButton: true,
          closeButtonText: button ? button : this.translations.CLOSE_BUTTON,
          duration: timeout ? timeout : 3000,
        });
        toast.present();
        toast.onDidDismiss(data => {
          resolve(toast);
        });
      });
    });
  }
}

// Source: https://github.com/angular/angular/issues/11058#issuecomment-351864976
// tslint:disable-next-line: no-duplicate-imports
import { HttpParameterCodec } from '@angular/common/http';
export class WebHttpUrlEncodingCodec implements HttpParameterCodec {
  encodeKey(k: string): string {
    return encodeURIComponent(k);
  }
  encodeValue(v: string): string {
    return encodeURIComponent(v);
  }
  decodeKey(k: string): string {
    return decodeURIComponent(k);
  }
  decodeValue(v: string) {
    return decodeURIComponent(v);
  }
}

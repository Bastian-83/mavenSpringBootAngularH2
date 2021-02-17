/**
 * Swagger Pizzastore
 * This is a sample server Pizzastore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Pizza } from '../model/pizza';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {

    protected basePath = 'http://localhost:8080/api';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Add a new pizza to the store
     *
     * @param body Pizza object that needs to be added to the store
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addPizza(body: Pizza, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addPizza(body: Pizza, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addPizza(body: Pizza, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addPizza(body: Pizza, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addPizza.');
        }

        let headers = this.defaultHeaders;

        // authentication (pizzastore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/pizza`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes a pizza
     *
     * @param pizzaId Pizza id to delete
     * @param apiKey
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deletePizza(pizzaId: number, apiKey?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deletePizza(pizzaId: number, apiKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deletePizza(pizzaId: number, apiKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deletePizza(pizzaId: number, apiKey?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (pizzaId === null || pizzaId === undefined) {
            throw new Error('Required parameter pizzaId was null or undefined when calling deletePizza.');
        }


        let headers = this.defaultHeaders;
        if (apiKey !== undefined && apiKey !== null) {
            headers = headers.set('api_key', String(apiKey));
        }

        // authentication (pizzastore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/pizza/${encodeURIComponent(String(pizzaId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Find pizza by ID
     * Returns a single pizza
     * @param pizzaId ID of pizza to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPizzaById(pizzaId: number, observe?: 'body', reportProgress?: boolean): Observable<Pizza>;
    public getPizzaById(pizzaId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Pizza>>;
    public getPizzaById(pizzaId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Pizza>>;
    public getPizzaById(pizzaId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (pizzaId === null || pizzaId === undefined) {
            throw new Error('Required parameter pizzaId was null or undefined when calling getPizzaById.');
        }

        let headers = this.defaultHeaders;

        // authentication (api_key) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["api_key"]) {
            headers = headers.set('api_key', this.configuration.apiKeys["api_key"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Pizza>(`${this.basePath}/pizza/${encodeURIComponent(String(pizzaId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Find all pizzas
     * For valid response try integer IDs with value &gt;&#x3D; 1 and &lt;&#x3D; 10.         Other values will generated exceptions
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPizzas(observe?: 'body', reportProgress?: boolean): Observable<Pizza>;
    public getPizzas(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Pizza>>;
    public getPizzas(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Pizza>>;
    public getPizzas(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Pizza>(`${this.basePath}/pizzas`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update an existing pizza
     *
     * @param body Pizza object that needs to be added to the store
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updatePizza(body: Pizza, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updatePizza(body: Pizza, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updatePizza(body: Pizza, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updatePizza(body: Pizza, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updatePizza.');
        }

        let headers = this.defaultHeaders;

        // authentication (pizzastore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.basePath}/pizza`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates a pizza in the store with form data
     *
     * @param pizzaId ID of pizza that needs to be updated
     * @param name Updated name of the pizza
     * @param status Updated status of the pizza
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updatePizzaWithForm(pizzaId: number, name?: string, status?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updatePizzaWithForm(pizzaId: number, name?: string, status?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updatePizzaWithForm(pizzaId: number, name?: string, status?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updatePizzaWithForm(pizzaId: number, name?: string, status?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (pizzaId === null || pizzaId === undefined) {
            throw new Error('Required parameter pizzaId was null or undefined when calling updatePizzaWithForm.');
        }



        let headers = this.defaultHeaders;

        // authentication (pizzastore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/x-www-form-urlencoded'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void | HttpParams; };
        let useForm = false;
        let convertFormParamsToString = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (name !== undefined) {
            formParams = formParams.append('name', <any>name) || formParams;
        }
        if (status !== undefined) {
            formParams = formParams.append('status', <any>status) || formParams;
        }

        return this.httpClient.post<any>(`${this.basePath}/pizza/${encodeURIComponent(String(pizzaId))}`,
            convertFormParamsToString ? formParams.toString() : formParams,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}

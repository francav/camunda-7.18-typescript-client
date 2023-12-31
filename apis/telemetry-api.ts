/* tslint:disable */
/* eslint-disable */
/**
 * Camunda Platform REST API
 * OpenApi Spec for Camunda Platform REST API.
 *
 * OpenAPI spec version: 7.18.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { ExceptionDto } from '../models';
import { TelemetryConfigurationDto } from '../models';
import { TelemetryDataDto } from '../models';
/**
 * TelemetryApi - axios parameter creator
 * @export
 */
export const TelemetryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Configures whether Camunda receives data collection of the process engine setup and usage.
         * @summary Configure Telemetry
         * @param {TelemetryConfigurationDto} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        configureTelemetry: async (body?: TelemetryConfigurationDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/telemetry/configuration`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetches Telemetry Configuration.
         * @summary Fetch Telemetry Configuration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTelemetryConfiguration: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/telemetry/configuration`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetches Telemetry Data.
         * @summary Fetch Telemetry Data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTelemetryData: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/telemetry/data`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TelemetryApi - functional programming interface
 * @export
 */
export const TelemetryApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Configures whether Camunda receives data collection of the process engine setup and usage.
         * @summary Configure Telemetry
         * @param {TelemetryConfigurationDto} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async configureTelemetry(body?: TelemetryConfigurationDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await TelemetryApiAxiosParamCreator(configuration).configureTelemetry(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Fetches Telemetry Configuration.
         * @summary Fetch Telemetry Configuration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTelemetryConfiguration(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<TelemetryConfigurationDto>>> {
            const localVarAxiosArgs = await TelemetryApiAxiosParamCreator(configuration).getTelemetryConfiguration(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Fetches Telemetry Data.
         * @summary Fetch Telemetry Data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTelemetryData(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<TelemetryDataDto>>> {
            const localVarAxiosArgs = await TelemetryApiAxiosParamCreator(configuration).getTelemetryData(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TelemetryApi - factory interface
 * @export
 */
export const TelemetryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Configures whether Camunda receives data collection of the process engine setup and usage.
         * @summary Configure Telemetry
         * @param {TelemetryConfigurationDto} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async configureTelemetry(body?: TelemetryConfigurationDto, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return TelemetryApiFp(configuration).configureTelemetry(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches Telemetry Configuration.
         * @summary Fetch Telemetry Configuration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTelemetryConfiguration(options?: AxiosRequestConfig): Promise<AxiosResponse<TelemetryConfigurationDto>> {
            return TelemetryApiFp(configuration).getTelemetryConfiguration(options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches Telemetry Data.
         * @summary Fetch Telemetry Data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTelemetryData(options?: AxiosRequestConfig): Promise<AxiosResponse<TelemetryDataDto>> {
            return TelemetryApiFp(configuration).getTelemetryData(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TelemetryApi - object-oriented interface
 * @export
 * @class TelemetryApi
 * @extends {BaseAPI}
 */
export class TelemetryApi extends BaseAPI {
    /**
     * Configures whether Camunda receives data collection of the process engine setup and usage.
     * @summary Configure Telemetry
     * @param {TelemetryConfigurationDto} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TelemetryApi
     */
    public async configureTelemetry(body?: TelemetryConfigurationDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return TelemetryApiFp(this.configuration).configureTelemetry(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Fetches Telemetry Configuration.
     * @summary Fetch Telemetry Configuration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TelemetryApi
     */
    public async getTelemetryConfiguration(options?: AxiosRequestConfig) : Promise<AxiosResponse<TelemetryConfigurationDto>> {
        return TelemetryApiFp(this.configuration).getTelemetryConfiguration(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Fetches Telemetry Data.
     * @summary Fetch Telemetry Data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TelemetryApi
     */
    public async getTelemetryData(options?: AxiosRequestConfig) : Promise<AxiosResponse<TelemetryDataDto>> {
        return TelemetryApiFp(this.configuration).getTelemetryData(options).then((request) => request(this.axios, this.basePath));
    }
}

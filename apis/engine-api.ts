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
import { ProcessEngineDto } from '../models';
/**
 * EngineApi - axios parameter creator
 * @export
 */
export const EngineApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves the names of all process engines available on your platform. **Note**: You cannot prepend `/engine/{name}` to this method.
         * @summary Get List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProcessEngineNames: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/engine`;
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
 * EngineApi - functional programming interface
 * @export
 */
export const EngineApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieves the names of all process engines available on your platform. **Note**: You cannot prepend `/engine/{name}` to this method.
         * @summary Get List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProcessEngineNames(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<ProcessEngineDto>>>> {
            const localVarAxiosArgs = await EngineApiAxiosParamCreator(configuration).getProcessEngineNames(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * EngineApi - factory interface
 * @export
 */
export const EngineApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieves the names of all process engines available on your platform. **Note**: You cannot prepend `/engine/{name}` to this method.
         * @summary Get List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProcessEngineNames(options?: AxiosRequestConfig): Promise<AxiosResponse<Array<ProcessEngineDto>>> {
            return EngineApiFp(configuration).getProcessEngineNames(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EngineApi - object-oriented interface
 * @export
 * @class EngineApi
 * @extends {BaseAPI}
 */
export class EngineApi extends BaseAPI {
    /**
     * Retrieves the names of all process engines available on your platform. **Note**: You cannot prepend `/engine/{name}` to this method.
     * @summary Get List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EngineApi
     */
    public async getProcessEngineNames(options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<ProcessEngineDto>>> {
        return EngineApiFp(this.configuration).getProcessEngineNames(options).then((request) => request(this.axios, this.basePath));
    }
}

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
import { SchemaLogEntryDto } from '../models';
import { SchemaLogQueryDto } from '../models';
/**
 * SchemaLogApi - axios parameter creator
 * @export
 */
export const SchemaLogApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Queries for schema log entries that fulfill given parameters.
         * @summary Get List
         * @param {string} [version] Only return schema log entries with a specific version.
         * @param {string} [sortBy] Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
         * @param {string} [sortOrder] Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
         * @param {number} [firstResult] Pagination of results. Specifies the index of the first result to return.
         * @param {number} [maxResults] Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSchemaLog: async (version?: string, sortBy?: string, sortOrder?: string, firstResult?: number, maxResults?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/schema/log`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (version !== undefined) {
                localVarQueryParameter['version'] = version;
            }

            if (sortBy !== undefined) {
                localVarQueryParameter['sortBy'] = sortBy;
            }

            if (sortOrder !== undefined) {
                localVarQueryParameter['sortOrder'] = sortOrder;
            }

            if (firstResult !== undefined) {
                localVarQueryParameter['firstResult'] = firstResult;
            }

            if (maxResults !== undefined) {
                localVarQueryParameter['maxResults'] = maxResults;
            }

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
         * Queries for schema log entries that fulfill given parameters.
         * @summary Get List (POST)
         * @param {SchemaLogQueryDto} [body] 
         * @param {number} [firstResult] Pagination of results. Specifies the index of the first result to return.
         * @param {number} [maxResults] Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        querySchemaLog: async (body?: SchemaLogQueryDto, firstResult?: number, maxResults?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/schema/log`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (firstResult !== undefined) {
                localVarQueryParameter['firstResult'] = firstResult;
            }

            if (maxResults !== undefined) {
                localVarQueryParameter['maxResults'] = maxResults;
            }

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
    }
};

/**
 * SchemaLogApi - functional programming interface
 * @export
 */
export const SchemaLogApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Queries for schema log entries that fulfill given parameters.
         * @summary Get List
         * @param {string} [version] Only return schema log entries with a specific version.
         * @param {string} [sortBy] Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
         * @param {string} [sortOrder] Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
         * @param {number} [firstResult] Pagination of results. Specifies the index of the first result to return.
         * @param {number} [maxResults] Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSchemaLog(version?: string, sortBy?: string, sortOrder?: string, firstResult?: number, maxResults?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<SchemaLogEntryDto>>>> {
            const localVarAxiosArgs = await SchemaLogApiAxiosParamCreator(configuration).getSchemaLog(version, sortBy, sortOrder, firstResult, maxResults, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Queries for schema log entries that fulfill given parameters.
         * @summary Get List (POST)
         * @param {SchemaLogQueryDto} [body] 
         * @param {number} [firstResult] Pagination of results. Specifies the index of the first result to return.
         * @param {number} [maxResults] Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async querySchemaLog(body?: SchemaLogQueryDto, firstResult?: number, maxResults?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<SchemaLogEntryDto>>>> {
            const localVarAxiosArgs = await SchemaLogApiAxiosParamCreator(configuration).querySchemaLog(body, firstResult, maxResults, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SchemaLogApi - factory interface
 * @export
 */
export const SchemaLogApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Queries for schema log entries that fulfill given parameters.
         * @summary Get List
         * @param {string} [version] Only return schema log entries with a specific version.
         * @param {string} [sortBy] Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
         * @param {string} [sortOrder] Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
         * @param {number} [firstResult] Pagination of results. Specifies the index of the first result to return.
         * @param {number} [maxResults] Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSchemaLog(version?: string, sortBy?: string, sortOrder?: string, firstResult?: number, maxResults?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<SchemaLogEntryDto>>> {
            return SchemaLogApiFp(configuration).getSchemaLog(version, sortBy, sortOrder, firstResult, maxResults, options).then((request) => request(axios, basePath));
        },
        /**
         * Queries for schema log entries that fulfill given parameters.
         * @summary Get List (POST)
         * @param {SchemaLogQueryDto} [body] 
         * @param {number} [firstResult] Pagination of results. Specifies the index of the first result to return.
         * @param {number} [maxResults] Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async querySchemaLog(body?: SchemaLogQueryDto, firstResult?: number, maxResults?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<SchemaLogEntryDto>>> {
            return SchemaLogApiFp(configuration).querySchemaLog(body, firstResult, maxResults, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SchemaLogApi - object-oriented interface
 * @export
 * @class SchemaLogApi
 * @extends {BaseAPI}
 */
export class SchemaLogApi extends BaseAPI {
    /**
     * Queries for schema log entries that fulfill given parameters.
     * @summary Get List
     * @param {string} [version] Only return schema log entries with a specific version.
     * @param {string} [sortBy] Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
     * @param {string} [sortOrder] Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
     * @param {number} [firstResult] Pagination of results. Specifies the index of the first result to return.
     * @param {number} [maxResults] Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchemaLogApi
     */
    public async getSchemaLog(version?: string, sortBy?: string, sortOrder?: string, firstResult?: number, maxResults?: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<SchemaLogEntryDto>>> {
        return SchemaLogApiFp(this.configuration).getSchemaLog(version, sortBy, sortOrder, firstResult, maxResults, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Queries for schema log entries that fulfill given parameters.
     * @summary Get List (POST)
     * @param {SchemaLogQueryDto} [body] 
     * @param {number} [firstResult] Pagination of results. Specifies the index of the first result to return.
     * @param {number} [maxResults] Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchemaLogApi
     */
    public async querySchemaLog(body?: SchemaLogQueryDto, firstResult?: number, maxResults?: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<SchemaLogEntryDto>>> {
        return SchemaLogApiFp(this.configuration).querySchemaLog(body, firstResult, maxResults, options).then((request) => request(this.axios, this.basePath));
    }
}
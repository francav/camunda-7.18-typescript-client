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
import { CountResultDto } from '../models';
import { ExceptionDto } from '../models';
import { HistoricIdentityLinkLogDto } from '../models';
/**
 * HistoricIdentityLinkLogApi - axios parameter creator
 * @export
 */
export const HistoricIdentityLinkLogApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Queries for historic identity link logs that fulfill given parameters. The size of the result set can be retrieved by using the [Get Identity-Link-Log Count](https://docs.camunda.org/manual/7.18/reference/rest/history/identity-links/get-identity-link-query-count/) method.
         * @summary Get Identity Link Logs
         * @param {string} [type] Restricts to identity links that have the given type (candidate/assignee/owner).
         * @param {string} [userId] Restricts to identity links that have the given user id.
         * @param {string} [groupId] Restricts to identity links that have the given group id.
         * @param {Date} [dateBefore] Restricts to identity links that have the time before the given time.
         * @param {Date} [dateAfter] Restricts to identity links that have the time after the given time.
         * @param {string} [taskId] Restricts to identity links that have the given task id.
         * @param {string} [processDefinitionId] Restricts to identity links that have the given process definition id.
         * @param {string} [processDefinitionKey] Restricts to identity links that have the given process definition key.
         * @param {string} [operationType] Restricts to identity links that have the given operationType (add/delete).
         * @param {string} [assignerId] Restricts to identity links that have the given assigner id.
         * @param {string} [tenantIdIn] Filter by a comma-separated list of tenant ids.
         * @param {boolean} [withoutTenantId] Only include historic identity links that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
         * @param {string} [sortBy] Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
         * @param {string} [sortOrder] Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
         * @param {number} [firstResult] Pagination of results. Specifies the index of the first result to return.
         * @param {number} [maxResults] Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHistoricIdentityLinks: async (type?: string, userId?: string, groupId?: string, dateBefore?: Date, dateAfter?: Date, taskId?: string, processDefinitionId?: string, processDefinitionKey?: string, operationType?: string, assignerId?: string, tenantIdIn?: string, withoutTenantId?: boolean, sortBy?: string, sortOrder?: string, firstResult?: number, maxResults?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/history/identity-link-log`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (groupId !== undefined) {
                localVarQueryParameter['groupId'] = groupId;
            }

            if (dateBefore !== undefined) {
                localVarQueryParameter['dateBefore'] = (dateBefore as any instanceof Date) ?
                    (dateBefore as any).toISOString() :
                    dateBefore;
            }

            if (dateAfter !== undefined) {
                localVarQueryParameter['dateAfter'] = (dateAfter as any instanceof Date) ?
                    (dateAfter as any).toISOString() :
                    dateAfter;
            }

            if (taskId !== undefined) {
                localVarQueryParameter['taskId'] = taskId;
            }

            if (processDefinitionId !== undefined) {
                localVarQueryParameter['processDefinitionId'] = processDefinitionId;
            }

            if (processDefinitionKey !== undefined) {
                localVarQueryParameter['processDefinitionKey'] = processDefinitionKey;
            }

            if (operationType !== undefined) {
                localVarQueryParameter['operationType'] = operationType;
            }

            if (assignerId !== undefined) {
                localVarQueryParameter['assignerId'] = assignerId;
            }

            if (tenantIdIn !== undefined) {
                localVarQueryParameter['tenantIdIn'] = tenantIdIn;
            }

            if (withoutTenantId !== undefined) {
                localVarQueryParameter['withoutTenantId'] = withoutTenantId;
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
         * Queries for the number of historic identity link logs that fulfill the given parameters. Takes the same parameters as the [Get Identity-Link-Logs](https://docs.camunda.org/manual/7.18/reference/rest/history/identity-links/get-identity-link-query/) method.
         * @summary Get Identity Link Log Count
         * @param {string} [type] Restricts to identity links that have the given type (candidate/assignee/owner).
         * @param {string} [userId] Restricts to identity links that have the given user id.
         * @param {string} [groupId] Restricts to identity links that have the given group id.
         * @param {Date} [dateBefore] Restricts to identity links that have the time before the given time.
         * @param {Date} [dateAfter] Restricts to identity links that have the time after the given time.
         * @param {string} [taskId] Restricts to identity links that have the given task id.
         * @param {string} [processDefinitionId] Restricts to identity links that have the given process definition id.
         * @param {string} [processDefinitionKey] Restricts to identity links that have the given process definition key.
         * @param {string} [operationType] Restricts to identity links that have the given operationType (add/delete).
         * @param {string} [assignerId] Restricts to identity links that have the given assigner id.
         * @param {string} [tenantIdIn] Filter by a comma-separated list of tenant ids.
         * @param {boolean} [withoutTenantId] Only include historic identity links that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHistoricIdentityLinksCount: async (type?: string, userId?: string, groupId?: string, dateBefore?: Date, dateAfter?: Date, taskId?: string, processDefinitionId?: string, processDefinitionKey?: string, operationType?: string, assignerId?: string, tenantIdIn?: string, withoutTenantId?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/history/identity-link-log/count`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (groupId !== undefined) {
                localVarQueryParameter['groupId'] = groupId;
            }

            if (dateBefore !== undefined) {
                localVarQueryParameter['dateBefore'] = (dateBefore as any instanceof Date) ?
                    (dateBefore as any).toISOString() :
                    dateBefore;
            }

            if (dateAfter !== undefined) {
                localVarQueryParameter['dateAfter'] = (dateAfter as any instanceof Date) ?
                    (dateAfter as any).toISOString() :
                    dateAfter;
            }

            if (taskId !== undefined) {
                localVarQueryParameter['taskId'] = taskId;
            }

            if (processDefinitionId !== undefined) {
                localVarQueryParameter['processDefinitionId'] = processDefinitionId;
            }

            if (processDefinitionKey !== undefined) {
                localVarQueryParameter['processDefinitionKey'] = processDefinitionKey;
            }

            if (operationType !== undefined) {
                localVarQueryParameter['operationType'] = operationType;
            }

            if (assignerId !== undefined) {
                localVarQueryParameter['assignerId'] = assignerId;
            }

            if (tenantIdIn !== undefined) {
                localVarQueryParameter['tenantIdIn'] = tenantIdIn;
            }

            if (withoutTenantId !== undefined) {
                localVarQueryParameter['withoutTenantId'] = withoutTenantId;
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
    }
};

/**
 * HistoricIdentityLinkLogApi - functional programming interface
 * @export
 */
export const HistoricIdentityLinkLogApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Queries for historic identity link logs that fulfill given parameters. The size of the result set can be retrieved by using the [Get Identity-Link-Log Count](https://docs.camunda.org/manual/7.18/reference/rest/history/identity-links/get-identity-link-query-count/) method.
         * @summary Get Identity Link Logs
         * @param {string} [type] Restricts to identity links that have the given type (candidate/assignee/owner).
         * @param {string} [userId] Restricts to identity links that have the given user id.
         * @param {string} [groupId] Restricts to identity links that have the given group id.
         * @param {Date} [dateBefore] Restricts to identity links that have the time before the given time.
         * @param {Date} [dateAfter] Restricts to identity links that have the time after the given time.
         * @param {string} [taskId] Restricts to identity links that have the given task id.
         * @param {string} [processDefinitionId] Restricts to identity links that have the given process definition id.
         * @param {string} [processDefinitionKey] Restricts to identity links that have the given process definition key.
         * @param {string} [operationType] Restricts to identity links that have the given operationType (add/delete).
         * @param {string} [assignerId] Restricts to identity links that have the given assigner id.
         * @param {string} [tenantIdIn] Filter by a comma-separated list of tenant ids.
         * @param {boolean} [withoutTenantId] Only include historic identity links that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
         * @param {string} [sortBy] Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
         * @param {string} [sortOrder] Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
         * @param {number} [firstResult] Pagination of results. Specifies the index of the first result to return.
         * @param {number} [maxResults] Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHistoricIdentityLinks(type?: string, userId?: string, groupId?: string, dateBefore?: Date, dateAfter?: Date, taskId?: string, processDefinitionId?: string, processDefinitionKey?: string, operationType?: string, assignerId?: string, tenantIdIn?: string, withoutTenantId?: boolean, sortBy?: string, sortOrder?: string, firstResult?: number, maxResults?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<HistoricIdentityLinkLogDto>>>> {
            const localVarAxiosArgs = await HistoricIdentityLinkLogApiAxiosParamCreator(configuration).getHistoricIdentityLinks(type, userId, groupId, dateBefore, dateAfter, taskId, processDefinitionId, processDefinitionKey, operationType, assignerId, tenantIdIn, withoutTenantId, sortBy, sortOrder, firstResult, maxResults, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Queries for the number of historic identity link logs that fulfill the given parameters. Takes the same parameters as the [Get Identity-Link-Logs](https://docs.camunda.org/manual/7.18/reference/rest/history/identity-links/get-identity-link-query/) method.
         * @summary Get Identity Link Log Count
         * @param {string} [type] Restricts to identity links that have the given type (candidate/assignee/owner).
         * @param {string} [userId] Restricts to identity links that have the given user id.
         * @param {string} [groupId] Restricts to identity links that have the given group id.
         * @param {Date} [dateBefore] Restricts to identity links that have the time before the given time.
         * @param {Date} [dateAfter] Restricts to identity links that have the time after the given time.
         * @param {string} [taskId] Restricts to identity links that have the given task id.
         * @param {string} [processDefinitionId] Restricts to identity links that have the given process definition id.
         * @param {string} [processDefinitionKey] Restricts to identity links that have the given process definition key.
         * @param {string} [operationType] Restricts to identity links that have the given operationType (add/delete).
         * @param {string} [assignerId] Restricts to identity links that have the given assigner id.
         * @param {string} [tenantIdIn] Filter by a comma-separated list of tenant ids.
         * @param {boolean} [withoutTenantId] Only include historic identity links that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHistoricIdentityLinksCount(type?: string, userId?: string, groupId?: string, dateBefore?: Date, dateAfter?: Date, taskId?: string, processDefinitionId?: string, processDefinitionKey?: string, operationType?: string, assignerId?: string, tenantIdIn?: string, withoutTenantId?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CountResultDto>>> {
            const localVarAxiosArgs = await HistoricIdentityLinkLogApiAxiosParamCreator(configuration).getHistoricIdentityLinksCount(type, userId, groupId, dateBefore, dateAfter, taskId, processDefinitionId, processDefinitionKey, operationType, assignerId, tenantIdIn, withoutTenantId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * HistoricIdentityLinkLogApi - factory interface
 * @export
 */
export const HistoricIdentityLinkLogApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Queries for historic identity link logs that fulfill given parameters. The size of the result set can be retrieved by using the [Get Identity-Link-Log Count](https://docs.camunda.org/manual/7.18/reference/rest/history/identity-links/get-identity-link-query-count/) method.
         * @summary Get Identity Link Logs
         * @param {string} [type] Restricts to identity links that have the given type (candidate/assignee/owner).
         * @param {string} [userId] Restricts to identity links that have the given user id.
         * @param {string} [groupId] Restricts to identity links that have the given group id.
         * @param {Date} [dateBefore] Restricts to identity links that have the time before the given time.
         * @param {Date} [dateAfter] Restricts to identity links that have the time after the given time.
         * @param {string} [taskId] Restricts to identity links that have the given task id.
         * @param {string} [processDefinitionId] Restricts to identity links that have the given process definition id.
         * @param {string} [processDefinitionKey] Restricts to identity links that have the given process definition key.
         * @param {string} [operationType] Restricts to identity links that have the given operationType (add/delete).
         * @param {string} [assignerId] Restricts to identity links that have the given assigner id.
         * @param {string} [tenantIdIn] Filter by a comma-separated list of tenant ids.
         * @param {boolean} [withoutTenantId] Only include historic identity links that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
         * @param {string} [sortBy] Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
         * @param {string} [sortOrder] Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
         * @param {number} [firstResult] Pagination of results. Specifies the index of the first result to return.
         * @param {number} [maxResults] Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHistoricIdentityLinks(type?: string, userId?: string, groupId?: string, dateBefore?: Date, dateAfter?: Date, taskId?: string, processDefinitionId?: string, processDefinitionKey?: string, operationType?: string, assignerId?: string, tenantIdIn?: string, withoutTenantId?: boolean, sortBy?: string, sortOrder?: string, firstResult?: number, maxResults?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<HistoricIdentityLinkLogDto>>> {
            return HistoricIdentityLinkLogApiFp(configuration).getHistoricIdentityLinks(type, userId, groupId, dateBefore, dateAfter, taskId, processDefinitionId, processDefinitionKey, operationType, assignerId, tenantIdIn, withoutTenantId, sortBy, sortOrder, firstResult, maxResults, options).then((request) => request(axios, basePath));
        },
        /**
         * Queries for the number of historic identity link logs that fulfill the given parameters. Takes the same parameters as the [Get Identity-Link-Logs](https://docs.camunda.org/manual/7.18/reference/rest/history/identity-links/get-identity-link-query/) method.
         * @summary Get Identity Link Log Count
         * @param {string} [type] Restricts to identity links that have the given type (candidate/assignee/owner).
         * @param {string} [userId] Restricts to identity links that have the given user id.
         * @param {string} [groupId] Restricts to identity links that have the given group id.
         * @param {Date} [dateBefore] Restricts to identity links that have the time before the given time.
         * @param {Date} [dateAfter] Restricts to identity links that have the time after the given time.
         * @param {string} [taskId] Restricts to identity links that have the given task id.
         * @param {string} [processDefinitionId] Restricts to identity links that have the given process definition id.
         * @param {string} [processDefinitionKey] Restricts to identity links that have the given process definition key.
         * @param {string} [operationType] Restricts to identity links that have the given operationType (add/delete).
         * @param {string} [assignerId] Restricts to identity links that have the given assigner id.
         * @param {string} [tenantIdIn] Filter by a comma-separated list of tenant ids.
         * @param {boolean} [withoutTenantId] Only include historic identity links that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHistoricIdentityLinksCount(type?: string, userId?: string, groupId?: string, dateBefore?: Date, dateAfter?: Date, taskId?: string, processDefinitionId?: string, processDefinitionKey?: string, operationType?: string, assignerId?: string, tenantIdIn?: string, withoutTenantId?: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<CountResultDto>> {
            return HistoricIdentityLinkLogApiFp(configuration).getHistoricIdentityLinksCount(type, userId, groupId, dateBefore, dateAfter, taskId, processDefinitionId, processDefinitionKey, operationType, assignerId, tenantIdIn, withoutTenantId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * HistoricIdentityLinkLogApi - object-oriented interface
 * @export
 * @class HistoricIdentityLinkLogApi
 * @extends {BaseAPI}
 */
export class HistoricIdentityLinkLogApi extends BaseAPI {
    /**
     * Queries for historic identity link logs that fulfill given parameters. The size of the result set can be retrieved by using the [Get Identity-Link-Log Count](https://docs.camunda.org/manual/7.18/reference/rest/history/identity-links/get-identity-link-query-count/) method.
     * @summary Get Identity Link Logs
     * @param {string} [type] Restricts to identity links that have the given type (candidate/assignee/owner).
     * @param {string} [userId] Restricts to identity links that have the given user id.
     * @param {string} [groupId] Restricts to identity links that have the given group id.
     * @param {Date} [dateBefore] Restricts to identity links that have the time before the given time.
     * @param {Date} [dateAfter] Restricts to identity links that have the time after the given time.
     * @param {string} [taskId] Restricts to identity links that have the given task id.
     * @param {string} [processDefinitionId] Restricts to identity links that have the given process definition id.
     * @param {string} [processDefinitionKey] Restricts to identity links that have the given process definition key.
     * @param {string} [operationType] Restricts to identity links that have the given operationType (add/delete).
     * @param {string} [assignerId] Restricts to identity links that have the given assigner id.
     * @param {string} [tenantIdIn] Filter by a comma-separated list of tenant ids.
     * @param {boolean} [withoutTenantId] Only include historic identity links that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {string} [sortBy] Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
     * @param {string} [sortOrder] Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
     * @param {number} [firstResult] Pagination of results. Specifies the index of the first result to return.
     * @param {number} [maxResults] Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HistoricIdentityLinkLogApi
     */
    public async getHistoricIdentityLinks(type?: string, userId?: string, groupId?: string, dateBefore?: Date, dateAfter?: Date, taskId?: string, processDefinitionId?: string, processDefinitionKey?: string, operationType?: string, assignerId?: string, tenantIdIn?: string, withoutTenantId?: boolean, sortBy?: string, sortOrder?: string, firstResult?: number, maxResults?: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<HistoricIdentityLinkLogDto>>> {
        return HistoricIdentityLinkLogApiFp(this.configuration).getHistoricIdentityLinks(type, userId, groupId, dateBefore, dateAfter, taskId, processDefinitionId, processDefinitionKey, operationType, assignerId, tenantIdIn, withoutTenantId, sortBy, sortOrder, firstResult, maxResults, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Queries for the number of historic identity link logs that fulfill the given parameters. Takes the same parameters as the [Get Identity-Link-Logs](https://docs.camunda.org/manual/7.18/reference/rest/history/identity-links/get-identity-link-query/) method.
     * @summary Get Identity Link Log Count
     * @param {string} [type] Restricts to identity links that have the given type (candidate/assignee/owner).
     * @param {string} [userId] Restricts to identity links that have the given user id.
     * @param {string} [groupId] Restricts to identity links that have the given group id.
     * @param {Date} [dateBefore] Restricts to identity links that have the time before the given time.
     * @param {Date} [dateAfter] Restricts to identity links that have the time after the given time.
     * @param {string} [taskId] Restricts to identity links that have the given task id.
     * @param {string} [processDefinitionId] Restricts to identity links that have the given process definition id.
     * @param {string} [processDefinitionKey] Restricts to identity links that have the given process definition key.
     * @param {string} [operationType] Restricts to identity links that have the given operationType (add/delete).
     * @param {string} [assignerId] Restricts to identity links that have the given assigner id.
     * @param {string} [tenantIdIn] Filter by a comma-separated list of tenant ids.
     * @param {boolean} [withoutTenantId] Only include historic identity links that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HistoricIdentityLinkLogApi
     */
    public async getHistoricIdentityLinksCount(type?: string, userId?: string, groupId?: string, dateBefore?: Date, dateAfter?: Date, taskId?: string, processDefinitionId?: string, processDefinitionKey?: string, operationType?: string, assignerId?: string, tenantIdIn?: string, withoutTenantId?: boolean, options?: AxiosRequestConfig) : Promise<AxiosResponse<CountResultDto>> {
        return HistoricIdentityLinkLogApiFp(this.configuration).getHistoricIdentityLinksCount(type, userId, groupId, dateBefore, dateAfter, taskId, processDefinitionId, processDefinitionKey, operationType, assignerId, tenantIdIn, withoutTenantId, options).then((request) => request(this.axios, this.basePath));
    }
}
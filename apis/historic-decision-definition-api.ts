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
import { CleanableHistoricDecisionInstanceReportResultDto } from '../models';
import { CountResultDto } from '../models';
import { ExceptionDto } from '../models';
/**
 * HistoricDecisionDefinitionApi - axios parameter creator
 * @export
 */
export const HistoricDecisionDefinitionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves a report about a decision definition and finished decision instances relevant to history cleanup (see [History cleanup](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#history-cleanup)),  so that you can tune the history time to live. These reports include the count of the finished historic decision instances, cleanable decision instances and basic decision definition data - id, key, name and version. The size of the result set can be retrieved by using the  [Get Cleanable Decision Instance Report Count](https://docs.camunda.org/manual/7.18/reference/rest/history/decision-definition/get-cleanable-decision-instance-report-count/) method.
         * @summary Get Cleanable Decision Instance Report
         * @param {string} [decisionDefinitionIdIn] Filter by decision definition ids. Must be a comma-separated list of decision definition ids.
         * @param {string} [decisionDefinitionKeyIn] Filter by decision definition keys. Must be a comma-separated list of decision definition keys.
         * @param {string} [tenantIdIn] Filter by a comma-separated list of tenant ids. A decision definition must have one of the given tenant  ids.
         * @param {boolean} [withoutTenantId] Only include decision definitions which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60;  is the default behavior.
         * @param {boolean} [compact] Only include decision instances which have more than zero finished instances. Value may only be &#x60;true&#x60;,  as &#x60;false&#x60; is the default behavior.
         * @param {string} [sortBy] Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
         * @param {string} [sortOrder] Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
         * @param {number} [firstResult] Pagination of results. Specifies the index of the first result to return.
         * @param {number} [maxResults] Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCleanableHistoricDecisionInstanceReport: async (decisionDefinitionIdIn?: string, decisionDefinitionKeyIn?: string, tenantIdIn?: string, withoutTenantId?: boolean, compact?: boolean, sortBy?: string, sortOrder?: string, firstResult?: number, maxResults?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/history/decision-definition/cleanable-decision-instance-report`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (decisionDefinitionIdIn !== undefined) {
                localVarQueryParameter['decisionDefinitionIdIn'] = decisionDefinitionIdIn;
            }

            if (decisionDefinitionKeyIn !== undefined) {
                localVarQueryParameter['decisionDefinitionKeyIn'] = decisionDefinitionKeyIn;
            }

            if (tenantIdIn !== undefined) {
                localVarQueryParameter['tenantIdIn'] = tenantIdIn;
            }

            if (withoutTenantId !== undefined) {
                localVarQueryParameter['withoutTenantId'] = withoutTenantId;
            }

            if (compact !== undefined) {
                localVarQueryParameter['compact'] = compact;
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
         * Queries for the number of report results about a decision definition and finished decision instances relevant to history cleanup (see [History cleanup](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#history-cleanup)). Takes the same parameters as the [Get Cleanable Decision Instance Report](https://docs.camunda.org/manual/7.18/reference/rest/history/decision-definition/get-cleanable-decision-instance-report/)  method.
         * @summary Get Cleanable Decision Instance Report Count
         * @param {string} [decisionDefinitionIdIn] Filter by decision definition ids. Must be a comma-separated list of decision definition ids.
         * @param {string} [decisionDefinitionKeyIn] Filter by decision definition keys. Must be a comma-separated list of decision definition keys.
         * @param {string} [tenantIdIn] Filter by a comma-separated list of tenant ids. A decision definition must have one of the given tenant  ids.
         * @param {boolean} [withoutTenantId] Only include decision definitions which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60;  is the default behavior.
         * @param {boolean} [compact] Only include decision instances which have more than zero finished instances. Value may only be &#x60;true&#x60;,  as &#x60;false&#x60; is the default behavior.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCleanableHistoricDecisionInstanceReportCount: async (decisionDefinitionIdIn?: string, decisionDefinitionKeyIn?: string, tenantIdIn?: string, withoutTenantId?: boolean, compact?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/history/decision-definition/cleanable-decision-instance-report/count`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (decisionDefinitionIdIn !== undefined) {
                localVarQueryParameter['decisionDefinitionIdIn'] = decisionDefinitionIdIn;
            }

            if (decisionDefinitionKeyIn !== undefined) {
                localVarQueryParameter['decisionDefinitionKeyIn'] = decisionDefinitionKeyIn;
            }

            if (tenantIdIn !== undefined) {
                localVarQueryParameter['tenantIdIn'] = tenantIdIn;
            }

            if (withoutTenantId !== undefined) {
                localVarQueryParameter['withoutTenantId'] = withoutTenantId;
            }

            if (compact !== undefined) {
                localVarQueryParameter['compact'] = compact;
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
 * HistoricDecisionDefinitionApi - functional programming interface
 * @export
 */
export const HistoricDecisionDefinitionApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieves a report about a decision definition and finished decision instances relevant to history cleanup (see [History cleanup](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#history-cleanup)),  so that you can tune the history time to live. These reports include the count of the finished historic decision instances, cleanable decision instances and basic decision definition data - id, key, name and version. The size of the result set can be retrieved by using the  [Get Cleanable Decision Instance Report Count](https://docs.camunda.org/manual/7.18/reference/rest/history/decision-definition/get-cleanable-decision-instance-report-count/) method.
         * @summary Get Cleanable Decision Instance Report
         * @param {string} [decisionDefinitionIdIn] Filter by decision definition ids. Must be a comma-separated list of decision definition ids.
         * @param {string} [decisionDefinitionKeyIn] Filter by decision definition keys. Must be a comma-separated list of decision definition keys.
         * @param {string} [tenantIdIn] Filter by a comma-separated list of tenant ids. A decision definition must have one of the given tenant  ids.
         * @param {boolean} [withoutTenantId] Only include decision definitions which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60;  is the default behavior.
         * @param {boolean} [compact] Only include decision instances which have more than zero finished instances. Value may only be &#x60;true&#x60;,  as &#x60;false&#x60; is the default behavior.
         * @param {string} [sortBy] Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
         * @param {string} [sortOrder] Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
         * @param {number} [firstResult] Pagination of results. Specifies the index of the first result to return.
         * @param {number} [maxResults] Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCleanableHistoricDecisionInstanceReport(decisionDefinitionIdIn?: string, decisionDefinitionKeyIn?: string, tenantIdIn?: string, withoutTenantId?: boolean, compact?: boolean, sortBy?: string, sortOrder?: string, firstResult?: number, maxResults?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<CleanableHistoricDecisionInstanceReportResultDto>>>> {
            const localVarAxiosArgs = await HistoricDecisionDefinitionApiAxiosParamCreator(configuration).getCleanableHistoricDecisionInstanceReport(decisionDefinitionIdIn, decisionDefinitionKeyIn, tenantIdIn, withoutTenantId, compact, sortBy, sortOrder, firstResult, maxResults, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Queries for the number of report results about a decision definition and finished decision instances relevant to history cleanup (see [History cleanup](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#history-cleanup)). Takes the same parameters as the [Get Cleanable Decision Instance Report](https://docs.camunda.org/manual/7.18/reference/rest/history/decision-definition/get-cleanable-decision-instance-report/)  method.
         * @summary Get Cleanable Decision Instance Report Count
         * @param {string} [decisionDefinitionIdIn] Filter by decision definition ids. Must be a comma-separated list of decision definition ids.
         * @param {string} [decisionDefinitionKeyIn] Filter by decision definition keys. Must be a comma-separated list of decision definition keys.
         * @param {string} [tenantIdIn] Filter by a comma-separated list of tenant ids. A decision definition must have one of the given tenant  ids.
         * @param {boolean} [withoutTenantId] Only include decision definitions which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60;  is the default behavior.
         * @param {boolean} [compact] Only include decision instances which have more than zero finished instances. Value may only be &#x60;true&#x60;,  as &#x60;false&#x60; is the default behavior.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCleanableHistoricDecisionInstanceReportCount(decisionDefinitionIdIn?: string, decisionDefinitionKeyIn?: string, tenantIdIn?: string, withoutTenantId?: boolean, compact?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CountResultDto>>> {
            const localVarAxiosArgs = await HistoricDecisionDefinitionApiAxiosParamCreator(configuration).getCleanableHistoricDecisionInstanceReportCount(decisionDefinitionIdIn, decisionDefinitionKeyIn, tenantIdIn, withoutTenantId, compact, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * HistoricDecisionDefinitionApi - factory interface
 * @export
 */
export const HistoricDecisionDefinitionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieves a report about a decision definition and finished decision instances relevant to history cleanup (see [History cleanup](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#history-cleanup)),  so that you can tune the history time to live. These reports include the count of the finished historic decision instances, cleanable decision instances and basic decision definition data - id, key, name and version. The size of the result set can be retrieved by using the  [Get Cleanable Decision Instance Report Count](https://docs.camunda.org/manual/7.18/reference/rest/history/decision-definition/get-cleanable-decision-instance-report-count/) method.
         * @summary Get Cleanable Decision Instance Report
         * @param {string} [decisionDefinitionIdIn] Filter by decision definition ids. Must be a comma-separated list of decision definition ids.
         * @param {string} [decisionDefinitionKeyIn] Filter by decision definition keys. Must be a comma-separated list of decision definition keys.
         * @param {string} [tenantIdIn] Filter by a comma-separated list of tenant ids. A decision definition must have one of the given tenant  ids.
         * @param {boolean} [withoutTenantId] Only include decision definitions which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60;  is the default behavior.
         * @param {boolean} [compact] Only include decision instances which have more than zero finished instances. Value may only be &#x60;true&#x60;,  as &#x60;false&#x60; is the default behavior.
         * @param {string} [sortBy] Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
         * @param {string} [sortOrder] Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
         * @param {number} [firstResult] Pagination of results. Specifies the index of the first result to return.
         * @param {number} [maxResults] Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCleanableHistoricDecisionInstanceReport(decisionDefinitionIdIn?: string, decisionDefinitionKeyIn?: string, tenantIdIn?: string, withoutTenantId?: boolean, compact?: boolean, sortBy?: string, sortOrder?: string, firstResult?: number, maxResults?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<CleanableHistoricDecisionInstanceReportResultDto>>> {
            return HistoricDecisionDefinitionApiFp(configuration).getCleanableHistoricDecisionInstanceReport(decisionDefinitionIdIn, decisionDefinitionKeyIn, tenantIdIn, withoutTenantId, compact, sortBy, sortOrder, firstResult, maxResults, options).then((request) => request(axios, basePath));
        },
        /**
         * Queries for the number of report results about a decision definition and finished decision instances relevant to history cleanup (see [History cleanup](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#history-cleanup)). Takes the same parameters as the [Get Cleanable Decision Instance Report](https://docs.camunda.org/manual/7.18/reference/rest/history/decision-definition/get-cleanable-decision-instance-report/)  method.
         * @summary Get Cleanable Decision Instance Report Count
         * @param {string} [decisionDefinitionIdIn] Filter by decision definition ids. Must be a comma-separated list of decision definition ids.
         * @param {string} [decisionDefinitionKeyIn] Filter by decision definition keys. Must be a comma-separated list of decision definition keys.
         * @param {string} [tenantIdIn] Filter by a comma-separated list of tenant ids. A decision definition must have one of the given tenant  ids.
         * @param {boolean} [withoutTenantId] Only include decision definitions which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60;  is the default behavior.
         * @param {boolean} [compact] Only include decision instances which have more than zero finished instances. Value may only be &#x60;true&#x60;,  as &#x60;false&#x60; is the default behavior.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCleanableHistoricDecisionInstanceReportCount(decisionDefinitionIdIn?: string, decisionDefinitionKeyIn?: string, tenantIdIn?: string, withoutTenantId?: boolean, compact?: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<CountResultDto>> {
            return HistoricDecisionDefinitionApiFp(configuration).getCleanableHistoricDecisionInstanceReportCount(decisionDefinitionIdIn, decisionDefinitionKeyIn, tenantIdIn, withoutTenantId, compact, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * HistoricDecisionDefinitionApi - object-oriented interface
 * @export
 * @class HistoricDecisionDefinitionApi
 * @extends {BaseAPI}
 */
export class HistoricDecisionDefinitionApi extends BaseAPI {
    /**
     * Retrieves a report about a decision definition and finished decision instances relevant to history cleanup (see [History cleanup](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#history-cleanup)),  so that you can tune the history time to live. These reports include the count of the finished historic decision instances, cleanable decision instances and basic decision definition data - id, key, name and version. The size of the result set can be retrieved by using the  [Get Cleanable Decision Instance Report Count](https://docs.camunda.org/manual/7.18/reference/rest/history/decision-definition/get-cleanable-decision-instance-report-count/) method.
     * @summary Get Cleanable Decision Instance Report
     * @param {string} [decisionDefinitionIdIn] Filter by decision definition ids. Must be a comma-separated list of decision definition ids.
     * @param {string} [decisionDefinitionKeyIn] Filter by decision definition keys. Must be a comma-separated list of decision definition keys.
     * @param {string} [tenantIdIn] Filter by a comma-separated list of tenant ids. A decision definition must have one of the given tenant  ids.
     * @param {boolean} [withoutTenantId] Only include decision definitions which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60;  is the default behavior.
     * @param {boolean} [compact] Only include decision instances which have more than zero finished instances. Value may only be &#x60;true&#x60;,  as &#x60;false&#x60; is the default behavior.
     * @param {string} [sortBy] Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
     * @param {string} [sortOrder] Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
     * @param {number} [firstResult] Pagination of results. Specifies the index of the first result to return.
     * @param {number} [maxResults] Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HistoricDecisionDefinitionApi
     */
    public async getCleanableHistoricDecisionInstanceReport(decisionDefinitionIdIn?: string, decisionDefinitionKeyIn?: string, tenantIdIn?: string, withoutTenantId?: boolean, compact?: boolean, sortBy?: string, sortOrder?: string, firstResult?: number, maxResults?: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<CleanableHistoricDecisionInstanceReportResultDto>>> {
        return HistoricDecisionDefinitionApiFp(this.configuration).getCleanableHistoricDecisionInstanceReport(decisionDefinitionIdIn, decisionDefinitionKeyIn, tenantIdIn, withoutTenantId, compact, sortBy, sortOrder, firstResult, maxResults, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Queries for the number of report results about a decision definition and finished decision instances relevant to history cleanup (see [History cleanup](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#history-cleanup)). Takes the same parameters as the [Get Cleanable Decision Instance Report](https://docs.camunda.org/manual/7.18/reference/rest/history/decision-definition/get-cleanable-decision-instance-report/)  method.
     * @summary Get Cleanable Decision Instance Report Count
     * @param {string} [decisionDefinitionIdIn] Filter by decision definition ids. Must be a comma-separated list of decision definition ids.
     * @param {string} [decisionDefinitionKeyIn] Filter by decision definition keys. Must be a comma-separated list of decision definition keys.
     * @param {string} [tenantIdIn] Filter by a comma-separated list of tenant ids. A decision definition must have one of the given tenant  ids.
     * @param {boolean} [withoutTenantId] Only include decision definitions which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60;  is the default behavior.
     * @param {boolean} [compact] Only include decision instances which have more than zero finished instances. Value may only be &#x60;true&#x60;,  as &#x60;false&#x60; is the default behavior.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HistoricDecisionDefinitionApi
     */
    public async getCleanableHistoricDecisionInstanceReportCount(decisionDefinitionIdIn?: string, decisionDefinitionKeyIn?: string, tenantIdIn?: string, withoutTenantId?: boolean, compact?: boolean, options?: AxiosRequestConfig) : Promise<AxiosResponse<CountResultDto>> {
        return HistoricDecisionDefinitionApiFp(this.configuration).getCleanableHistoricDecisionInstanceReportCount(decisionDefinitionIdIn, decisionDefinitionKeyIn, tenantIdIn, withoutTenantId, compact, options).then((request) => request(this.axios, this.basePath));
    }
}
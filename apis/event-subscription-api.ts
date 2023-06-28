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
import { EventSubscriptionDto } from '../models';
import { ExceptionDto } from '../models';
/**
 * EventSubscriptionApi - axios parameter creator
 * @export
 */
export const EventSubscriptionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Queries for event subscriptions that fulfill given parameters. The size of the result set can be retrieved by using the [Get Event Subscriptions count](https://docs.camunda.org/manual/7.18/reference/rest/event-subscription/get-query-count/) method.
         * @summary Get List
         * @param {string} [eventSubscriptionId] Only select subscription with the given id.
         * @param {string} [eventName] Only select subscriptions for events with the given name.
         * @param {string} [eventType] Only select subscriptions for events with the given type. Valid values: &#x60;message&#x60;, &#x60;signal&#x60;, &#x60;compensate&#x60; and &#x60;conditional&#x60;.
         * @param {string} [executionId] Only select subscriptions that belong to an execution with the given id.
         * @param {string} [processInstanceId] Only select subscriptions that belong to a process instance with the given id.
         * @param {string} [activityId] Only select subscriptions that belong to an activity with the given id.
         * @param {string} [tenantIdIn] Filter by a comma-separated list of tenant ids. Only select subscriptions that belong to one of the given tenant ids.
         * @param {boolean} [withoutTenantId] Only select subscriptions which have no tenant id. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
         * @param {boolean} [includeEventSubscriptionsWithoutTenantId] Select event subscriptions which have no tenant id. Can be used in combination with tenantIdIn parameter. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
         * @param {string} [sortBy] Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
         * @param {string} [sortOrder] Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
         * @param {number} [firstResult] Pagination of results. Specifies the index of the first result to return.
         * @param {number} [maxResults] Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEventSubscriptions: async (eventSubscriptionId?: string, eventName?: string, eventType?: string, executionId?: string, processInstanceId?: string, activityId?: string, tenantIdIn?: string, withoutTenantId?: boolean, includeEventSubscriptionsWithoutTenantId?: boolean, sortBy?: string, sortOrder?: string, firstResult?: number, maxResults?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/event-subscription`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (eventSubscriptionId !== undefined) {
                localVarQueryParameter['eventSubscriptionId'] = eventSubscriptionId;
            }

            if (eventName !== undefined) {
                localVarQueryParameter['eventName'] = eventName;
            }

            if (eventType !== undefined) {
                localVarQueryParameter['eventType'] = eventType;
            }

            if (executionId !== undefined) {
                localVarQueryParameter['executionId'] = executionId;
            }

            if (processInstanceId !== undefined) {
                localVarQueryParameter['processInstanceId'] = processInstanceId;
            }

            if (activityId !== undefined) {
                localVarQueryParameter['activityId'] = activityId;
            }

            if (tenantIdIn !== undefined) {
                localVarQueryParameter['tenantIdIn'] = tenantIdIn;
            }

            if (withoutTenantId !== undefined) {
                localVarQueryParameter['withoutTenantId'] = withoutTenantId;
            }

            if (includeEventSubscriptionsWithoutTenantId !== undefined) {
                localVarQueryParameter['includeEventSubscriptionsWithoutTenantId'] = includeEventSubscriptionsWithoutTenantId;
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
         * Queries for the number of event subscriptions that fulfill given parameters. Takes the same parameters as the [Get Event Subscriptions](https://docs.camunda.org/manual/7.18/reference/rest/event-subscription/get-query/) method.
         * @summary Get List Count
         * @param {string} [eventSubscriptionId] Only select subscription with the given id.
         * @param {string} [eventName] Only select subscriptions for events with the given name.
         * @param {string} [eventType] Only select subscriptions for events with the given type. Valid values: &#x60;message&#x60;, &#x60;signal&#x60;, &#x60;compensate&#x60; and &#x60;conditional&#x60;.
         * @param {string} [executionId] Only select subscriptions that belong to an execution with the given id.
         * @param {string} [processInstanceId] Only select subscriptions that belong to a process instance with the given id.
         * @param {string} [activityId] Only select subscriptions that belong to an activity with the given id.
         * @param {string} [tenantIdIn] Filter by a comma-separated list of tenant ids. Only select subscriptions that belong to one of the given tenant ids.
         * @param {boolean} [withoutTenantId] Only select subscriptions which have no tenant id. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
         * @param {boolean} [includeEventSubscriptionsWithoutTenantId] Select event subscriptions which have no tenant id. Can be used in combination with tenantIdIn parameter. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEventSubscriptionsCount: async (eventSubscriptionId?: string, eventName?: string, eventType?: string, executionId?: string, processInstanceId?: string, activityId?: string, tenantIdIn?: string, withoutTenantId?: boolean, includeEventSubscriptionsWithoutTenantId?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/event-subscription/count`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (eventSubscriptionId !== undefined) {
                localVarQueryParameter['eventSubscriptionId'] = eventSubscriptionId;
            }

            if (eventName !== undefined) {
                localVarQueryParameter['eventName'] = eventName;
            }

            if (eventType !== undefined) {
                localVarQueryParameter['eventType'] = eventType;
            }

            if (executionId !== undefined) {
                localVarQueryParameter['executionId'] = executionId;
            }

            if (processInstanceId !== undefined) {
                localVarQueryParameter['processInstanceId'] = processInstanceId;
            }

            if (activityId !== undefined) {
                localVarQueryParameter['activityId'] = activityId;
            }

            if (tenantIdIn !== undefined) {
                localVarQueryParameter['tenantIdIn'] = tenantIdIn;
            }

            if (withoutTenantId !== undefined) {
                localVarQueryParameter['withoutTenantId'] = withoutTenantId;
            }

            if (includeEventSubscriptionsWithoutTenantId !== undefined) {
                localVarQueryParameter['includeEventSubscriptionsWithoutTenantId'] = includeEventSubscriptionsWithoutTenantId;
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
 * EventSubscriptionApi - functional programming interface
 * @export
 */
export const EventSubscriptionApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Queries for event subscriptions that fulfill given parameters. The size of the result set can be retrieved by using the [Get Event Subscriptions count](https://docs.camunda.org/manual/7.18/reference/rest/event-subscription/get-query-count/) method.
         * @summary Get List
         * @param {string} [eventSubscriptionId] Only select subscription with the given id.
         * @param {string} [eventName] Only select subscriptions for events with the given name.
         * @param {string} [eventType] Only select subscriptions for events with the given type. Valid values: &#x60;message&#x60;, &#x60;signal&#x60;, &#x60;compensate&#x60; and &#x60;conditional&#x60;.
         * @param {string} [executionId] Only select subscriptions that belong to an execution with the given id.
         * @param {string} [processInstanceId] Only select subscriptions that belong to a process instance with the given id.
         * @param {string} [activityId] Only select subscriptions that belong to an activity with the given id.
         * @param {string} [tenantIdIn] Filter by a comma-separated list of tenant ids. Only select subscriptions that belong to one of the given tenant ids.
         * @param {boolean} [withoutTenantId] Only select subscriptions which have no tenant id. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
         * @param {boolean} [includeEventSubscriptionsWithoutTenantId] Select event subscriptions which have no tenant id. Can be used in combination with tenantIdIn parameter. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
         * @param {string} [sortBy] Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
         * @param {string} [sortOrder] Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
         * @param {number} [firstResult] Pagination of results. Specifies the index of the first result to return.
         * @param {number} [maxResults] Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEventSubscriptions(eventSubscriptionId?: string, eventName?: string, eventType?: string, executionId?: string, processInstanceId?: string, activityId?: string, tenantIdIn?: string, withoutTenantId?: boolean, includeEventSubscriptionsWithoutTenantId?: boolean, sortBy?: string, sortOrder?: string, firstResult?: number, maxResults?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<EventSubscriptionDto>>>> {
            const localVarAxiosArgs = await EventSubscriptionApiAxiosParamCreator(configuration).getEventSubscriptions(eventSubscriptionId, eventName, eventType, executionId, processInstanceId, activityId, tenantIdIn, withoutTenantId, includeEventSubscriptionsWithoutTenantId, sortBy, sortOrder, firstResult, maxResults, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Queries for the number of event subscriptions that fulfill given parameters. Takes the same parameters as the [Get Event Subscriptions](https://docs.camunda.org/manual/7.18/reference/rest/event-subscription/get-query/) method.
         * @summary Get List Count
         * @param {string} [eventSubscriptionId] Only select subscription with the given id.
         * @param {string} [eventName] Only select subscriptions for events with the given name.
         * @param {string} [eventType] Only select subscriptions for events with the given type. Valid values: &#x60;message&#x60;, &#x60;signal&#x60;, &#x60;compensate&#x60; and &#x60;conditional&#x60;.
         * @param {string} [executionId] Only select subscriptions that belong to an execution with the given id.
         * @param {string} [processInstanceId] Only select subscriptions that belong to a process instance with the given id.
         * @param {string} [activityId] Only select subscriptions that belong to an activity with the given id.
         * @param {string} [tenantIdIn] Filter by a comma-separated list of tenant ids. Only select subscriptions that belong to one of the given tenant ids.
         * @param {boolean} [withoutTenantId] Only select subscriptions which have no tenant id. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
         * @param {boolean} [includeEventSubscriptionsWithoutTenantId] Select event subscriptions which have no tenant id. Can be used in combination with tenantIdIn parameter. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEventSubscriptionsCount(eventSubscriptionId?: string, eventName?: string, eventType?: string, executionId?: string, processInstanceId?: string, activityId?: string, tenantIdIn?: string, withoutTenantId?: boolean, includeEventSubscriptionsWithoutTenantId?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CountResultDto>>> {
            const localVarAxiosArgs = await EventSubscriptionApiAxiosParamCreator(configuration).getEventSubscriptionsCount(eventSubscriptionId, eventName, eventType, executionId, processInstanceId, activityId, tenantIdIn, withoutTenantId, includeEventSubscriptionsWithoutTenantId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * EventSubscriptionApi - factory interface
 * @export
 */
export const EventSubscriptionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Queries for event subscriptions that fulfill given parameters. The size of the result set can be retrieved by using the [Get Event Subscriptions count](https://docs.camunda.org/manual/7.18/reference/rest/event-subscription/get-query-count/) method.
         * @summary Get List
         * @param {string} [eventSubscriptionId] Only select subscription with the given id.
         * @param {string} [eventName] Only select subscriptions for events with the given name.
         * @param {string} [eventType] Only select subscriptions for events with the given type. Valid values: &#x60;message&#x60;, &#x60;signal&#x60;, &#x60;compensate&#x60; and &#x60;conditional&#x60;.
         * @param {string} [executionId] Only select subscriptions that belong to an execution with the given id.
         * @param {string} [processInstanceId] Only select subscriptions that belong to a process instance with the given id.
         * @param {string} [activityId] Only select subscriptions that belong to an activity with the given id.
         * @param {string} [tenantIdIn] Filter by a comma-separated list of tenant ids. Only select subscriptions that belong to one of the given tenant ids.
         * @param {boolean} [withoutTenantId] Only select subscriptions which have no tenant id. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
         * @param {boolean} [includeEventSubscriptionsWithoutTenantId] Select event subscriptions which have no tenant id. Can be used in combination with tenantIdIn parameter. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
         * @param {string} [sortBy] Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
         * @param {string} [sortOrder] Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
         * @param {number} [firstResult] Pagination of results. Specifies the index of the first result to return.
         * @param {number} [maxResults] Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEventSubscriptions(eventSubscriptionId?: string, eventName?: string, eventType?: string, executionId?: string, processInstanceId?: string, activityId?: string, tenantIdIn?: string, withoutTenantId?: boolean, includeEventSubscriptionsWithoutTenantId?: boolean, sortBy?: string, sortOrder?: string, firstResult?: number, maxResults?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<EventSubscriptionDto>>> {
            return EventSubscriptionApiFp(configuration).getEventSubscriptions(eventSubscriptionId, eventName, eventType, executionId, processInstanceId, activityId, tenantIdIn, withoutTenantId, includeEventSubscriptionsWithoutTenantId, sortBy, sortOrder, firstResult, maxResults, options).then((request) => request(axios, basePath));
        },
        /**
         * Queries for the number of event subscriptions that fulfill given parameters. Takes the same parameters as the [Get Event Subscriptions](https://docs.camunda.org/manual/7.18/reference/rest/event-subscription/get-query/) method.
         * @summary Get List Count
         * @param {string} [eventSubscriptionId] Only select subscription with the given id.
         * @param {string} [eventName] Only select subscriptions for events with the given name.
         * @param {string} [eventType] Only select subscriptions for events with the given type. Valid values: &#x60;message&#x60;, &#x60;signal&#x60;, &#x60;compensate&#x60; and &#x60;conditional&#x60;.
         * @param {string} [executionId] Only select subscriptions that belong to an execution with the given id.
         * @param {string} [processInstanceId] Only select subscriptions that belong to a process instance with the given id.
         * @param {string} [activityId] Only select subscriptions that belong to an activity with the given id.
         * @param {string} [tenantIdIn] Filter by a comma-separated list of tenant ids. Only select subscriptions that belong to one of the given tenant ids.
         * @param {boolean} [withoutTenantId] Only select subscriptions which have no tenant id. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
         * @param {boolean} [includeEventSubscriptionsWithoutTenantId] Select event subscriptions which have no tenant id. Can be used in combination with tenantIdIn parameter. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEventSubscriptionsCount(eventSubscriptionId?: string, eventName?: string, eventType?: string, executionId?: string, processInstanceId?: string, activityId?: string, tenantIdIn?: string, withoutTenantId?: boolean, includeEventSubscriptionsWithoutTenantId?: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<CountResultDto>> {
            return EventSubscriptionApiFp(configuration).getEventSubscriptionsCount(eventSubscriptionId, eventName, eventType, executionId, processInstanceId, activityId, tenantIdIn, withoutTenantId, includeEventSubscriptionsWithoutTenantId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EventSubscriptionApi - object-oriented interface
 * @export
 * @class EventSubscriptionApi
 * @extends {BaseAPI}
 */
export class EventSubscriptionApi extends BaseAPI {
    /**
     * Queries for event subscriptions that fulfill given parameters. The size of the result set can be retrieved by using the [Get Event Subscriptions count](https://docs.camunda.org/manual/7.18/reference/rest/event-subscription/get-query-count/) method.
     * @summary Get List
     * @param {string} [eventSubscriptionId] Only select subscription with the given id.
     * @param {string} [eventName] Only select subscriptions for events with the given name.
     * @param {string} [eventType] Only select subscriptions for events with the given type. Valid values: &#x60;message&#x60;, &#x60;signal&#x60;, &#x60;compensate&#x60; and &#x60;conditional&#x60;.
     * @param {string} [executionId] Only select subscriptions that belong to an execution with the given id.
     * @param {string} [processInstanceId] Only select subscriptions that belong to a process instance with the given id.
     * @param {string} [activityId] Only select subscriptions that belong to an activity with the given id.
     * @param {string} [tenantIdIn] Filter by a comma-separated list of tenant ids. Only select subscriptions that belong to one of the given tenant ids.
     * @param {boolean} [withoutTenantId] Only select subscriptions which have no tenant id. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {boolean} [includeEventSubscriptionsWithoutTenantId] Select event subscriptions which have no tenant id. Can be used in combination with tenantIdIn parameter. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {string} [sortBy] Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
     * @param {string} [sortOrder] Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
     * @param {number} [firstResult] Pagination of results. Specifies the index of the first result to return.
     * @param {number} [maxResults] Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventSubscriptionApi
     */
    public async getEventSubscriptions(eventSubscriptionId?: string, eventName?: string, eventType?: string, executionId?: string, processInstanceId?: string, activityId?: string, tenantIdIn?: string, withoutTenantId?: boolean, includeEventSubscriptionsWithoutTenantId?: boolean, sortBy?: string, sortOrder?: string, firstResult?: number, maxResults?: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<EventSubscriptionDto>>> {
        return EventSubscriptionApiFp(this.configuration).getEventSubscriptions(eventSubscriptionId, eventName, eventType, executionId, processInstanceId, activityId, tenantIdIn, withoutTenantId, includeEventSubscriptionsWithoutTenantId, sortBy, sortOrder, firstResult, maxResults, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Queries for the number of event subscriptions that fulfill given parameters. Takes the same parameters as the [Get Event Subscriptions](https://docs.camunda.org/manual/7.18/reference/rest/event-subscription/get-query/) method.
     * @summary Get List Count
     * @param {string} [eventSubscriptionId] Only select subscription with the given id.
     * @param {string} [eventName] Only select subscriptions for events with the given name.
     * @param {string} [eventType] Only select subscriptions for events with the given type. Valid values: &#x60;message&#x60;, &#x60;signal&#x60;, &#x60;compensate&#x60; and &#x60;conditional&#x60;.
     * @param {string} [executionId] Only select subscriptions that belong to an execution with the given id.
     * @param {string} [processInstanceId] Only select subscriptions that belong to a process instance with the given id.
     * @param {string} [activityId] Only select subscriptions that belong to an activity with the given id.
     * @param {string} [tenantIdIn] Filter by a comma-separated list of tenant ids. Only select subscriptions that belong to one of the given tenant ids.
     * @param {boolean} [withoutTenantId] Only select subscriptions which have no tenant id. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {boolean} [includeEventSubscriptionsWithoutTenantId] Select event subscriptions which have no tenant id. Can be used in combination with tenantIdIn parameter. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventSubscriptionApi
     */
    public async getEventSubscriptionsCount(eventSubscriptionId?: string, eventName?: string, eventType?: string, executionId?: string, processInstanceId?: string, activityId?: string, tenantIdIn?: string, withoutTenantId?: boolean, includeEventSubscriptionsWithoutTenantId?: boolean, options?: AxiosRequestConfig) : Promise<AxiosResponse<CountResultDto>> {
        return EventSubscriptionApiFp(this.configuration).getEventSubscriptionsCount(eventSubscriptionId, eventName, eventType, executionId, processInstanceId, activityId, tenantIdIn, withoutTenantId, includeEventSubscriptionsWithoutTenantId, options).then((request) => request(this.axios, this.basePath));
    }
}
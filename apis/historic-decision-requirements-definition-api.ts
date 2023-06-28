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
import { HistoricDecisionInstanceStatisticsDto } from '../models';
/**
 * HistoricDecisionRequirementsDefinitionApi - axios parameter creator
 * @export
 */
export const HistoricDecisionRequirementsDefinitionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves evaluation statistics of a given decision requirements definition.
         * @summary Get DRD Statistics
         * @param {string} id The id of the decision requirements definition.
         * @param {string} [decisionInstanceId] Restrict query results to be based only on specific evaluation instance of a given decision requirements definition.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDecisionStatistics: async (id: string, decisionInstanceId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getDecisionStatistics.');
            }
            const localVarPath = `/history/decision-requirements-definition/{id}/statistics`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (decisionInstanceId !== undefined) {
                localVarQueryParameter['decisionInstanceId'] = decisionInstanceId;
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
 * HistoricDecisionRequirementsDefinitionApi - functional programming interface
 * @export
 */
export const HistoricDecisionRequirementsDefinitionApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieves evaluation statistics of a given decision requirements definition.
         * @summary Get DRD Statistics
         * @param {string} id The id of the decision requirements definition.
         * @param {string} [decisionInstanceId] Restrict query results to be based only on specific evaluation instance of a given decision requirements definition.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDecisionStatistics(id: string, decisionInstanceId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<HistoricDecisionInstanceStatisticsDto>>>> {
            const localVarAxiosArgs = await HistoricDecisionRequirementsDefinitionApiAxiosParamCreator(configuration).getDecisionStatistics(id, decisionInstanceId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * HistoricDecisionRequirementsDefinitionApi - factory interface
 * @export
 */
export const HistoricDecisionRequirementsDefinitionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieves evaluation statistics of a given decision requirements definition.
         * @summary Get DRD Statistics
         * @param {string} id The id of the decision requirements definition.
         * @param {string} [decisionInstanceId] Restrict query results to be based only on specific evaluation instance of a given decision requirements definition.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDecisionStatistics(id: string, decisionInstanceId?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<HistoricDecisionInstanceStatisticsDto>>> {
            return HistoricDecisionRequirementsDefinitionApiFp(configuration).getDecisionStatistics(id, decisionInstanceId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * HistoricDecisionRequirementsDefinitionApi - object-oriented interface
 * @export
 * @class HistoricDecisionRequirementsDefinitionApi
 * @extends {BaseAPI}
 */
export class HistoricDecisionRequirementsDefinitionApi extends BaseAPI {
    /**
     * Retrieves evaluation statistics of a given decision requirements definition.
     * @summary Get DRD Statistics
     * @param {string} id The id of the decision requirements definition.
     * @param {string} [decisionInstanceId] Restrict query results to be based only on specific evaluation instance of a given decision requirements definition.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HistoricDecisionRequirementsDefinitionApi
     */
    public async getDecisionStatistics(id: string, decisionInstanceId?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<HistoricDecisionInstanceStatisticsDto>>> {
        return HistoricDecisionRequirementsDefinitionApiFp(this.configuration).getDecisionStatistics(id, decisionInstanceId, options).then((request) => request(this.axios, this.basePath));
    }
}

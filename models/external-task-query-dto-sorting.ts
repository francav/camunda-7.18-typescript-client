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
/**
 * 
 * @export
 * @interface ExternalTaskQueryDtoSorting
 */
export interface ExternalTaskQueryDtoSorting {
    /**
     * Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
     * @type {string}
     * @memberof ExternalTaskQueryDtoSorting
     */
    sortBy?: ExternalTaskQueryDtoSortingSortByEnum;
    /**
     * Sort the results in a given order. Values may be `asc` for ascending order or `desc` for descending order. Must be used in conjunction with the sortBy parameter.
     * @type {string}
     * @memberof ExternalTaskQueryDtoSorting
     */
    sortOrder?: ExternalTaskQueryDtoSortingSortOrderEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum ExternalTaskQueryDtoSortingSortByEnum {
    Id = 'id',
    LockExpirationTime = 'lockExpirationTime',
    ProcessInstanceId = 'processInstanceId',
    ProcessDefinitionId = 'processDefinitionId',
    ProcessDefinitionKey = 'processDefinitionKey',
    TaskPriority = 'taskPriority',
    TenantId = 'tenantId'
}
/**
    * @export
    * @enum {string}
    */
export enum ExternalTaskQueryDtoSortingSortOrderEnum {
    Asc = 'asc',
    Desc = 'desc'
}


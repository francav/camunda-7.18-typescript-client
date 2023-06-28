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
import { SchemaLogQueryDtoSorting } from './schema-log-query-dto-sorting';
/**
 * 
 * @export
 * @interface SchemaLogQueryDto
 */
export interface SchemaLogQueryDto {
    /**
     * The version of the schema.
     * @type {string}
     * @memberof SchemaLogQueryDto
     */
    version?: string | null;
    /**
     * A JSON array of criteria to sort the result by. Each element of the array is                       a JSON object that specifies one ordering. The position in the array                       identifies the rank of an ordering, i.e., whether it is primary, secondary,                       etc. 
     * @type {Array<SchemaLogQueryDtoSorting>}
     * @memberof SchemaLogQueryDto
     */
    sorting?: Array<SchemaLogQueryDtoSorting> | null;
}

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
 * @interface JobConditionQueryParameterDto
 */
export interface JobConditionQueryParameterDto {
    /**
     * Comparison operator to be used.
     * @type {string}
     * @memberof JobConditionQueryParameterDto
     */
    operator?: JobConditionQueryParameterDtoOperatorEnum;
    /**
     * Date value to compare with.
     * @type {Date}
     * @memberof JobConditionQueryParameterDto
     */
    value?: Date | null;
}

/**
    * @export
    * @enum {string}
    */
export enum JobConditionQueryParameterDtoOperatorEnum {
    Gt = 'gt',
    Lt = 'lt'
}

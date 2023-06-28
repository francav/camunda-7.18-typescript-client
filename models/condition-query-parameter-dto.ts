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
import { AnyValue } from './any-value';
/**
 * 
 * @export
 * @interface ConditionQueryParameterDto
 */
export interface ConditionQueryParameterDto {
    /**
     * Comparison operator to be used. `notLike` is not supported by all endpoints.
     * @type {string}
     * @memberof ConditionQueryParameterDto
     */
    operator?: ConditionQueryParameterDtoOperatorEnum;
    /**
     * 
     * @type {AnyValue}
     * @memberof ConditionQueryParameterDto
     */
    value?: AnyValue;
}

/**
    * @export
    * @enum {string}
    */
export enum ConditionQueryParameterDtoOperatorEnum {
    Eq = 'eq',
    Neq = 'neq',
    Gt = 'gt',
    Gteq = 'gteq',
    Lt = 'lt',
    Lteq = 'lteq',
    Like = 'like',
    NotLike = 'notLike'
}


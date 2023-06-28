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
import { SuspensionStateDto } from './suspension-state-dto';
/**
 * 
 * @export
 * @interface ProcessInstanceSuspensionStateAsyncDto
 */
export interface ProcessInstanceSuspensionStateAsyncDto {
    /**
     * A Boolean value which indicates whether to activate or suspend a given instance  (e.g. process instance, job, job definition, or batch). When the value is set to true,  the given instance will be suspended and when the value is set to false,  the given instance will be activated.
     * @type {boolean}
     * @memberof ProcessInstanceSuspensionStateAsyncDto
     */
    suspended?: boolean | null;
}

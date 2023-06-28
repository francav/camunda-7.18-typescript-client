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
import { VariableValueDto } from './variable-value-dto';
/**
 * 
 * @export
 * @interface TaskBpmnErrorDto
 */
export interface TaskBpmnErrorDto {
    /**
     * An error code that indicates the predefined error. It is used to identify the BPMN error handler.
     * @type {string}
     * @memberof TaskBpmnErrorDto
     */
    errorCode?: string | null;
    /**
     * An error message that describes the error.
     * @type {string}
     * @memberof TaskBpmnErrorDto
     */
    errorMessage?: string | null;
    /**
     * A JSON object containing variable key-value pairs.
     * @type {{ [key: string]: VariableValueDto; }}
     * @memberof TaskBpmnErrorDto
     */
    variables?: { [key: string]: VariableValueDto; } | null;
}
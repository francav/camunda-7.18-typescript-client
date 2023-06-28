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
import { HandleExternalTaskDto } from './handle-external-task-dto';
/**
 * 
 * @export
 * @interface LockExternalTaskDto
 */
export interface LockExternalTaskDto {
    /**
     * **Mandatory.** The ID of the worker who is performing the operation on the external task. If the task is already locked, must match the id of the worker who has most recently locked the task.
     * @type {string}
     * @memberof LockExternalTaskDto
     */
    workerId?: string;
}

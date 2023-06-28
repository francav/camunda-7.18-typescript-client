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
 * @interface FormDto
 */
export interface FormDto {
    /**
     * The form key.
     * @type {string}
     * @memberof FormDto
     */
    key?: string | null;
    /**
     * The context path of the process application. If the task (or the process definition) does not belong to a process application deployment or a process definition at all, this property is not set.
     * @type {string}
     * @memberof FormDto
     */
    contextPath?: string | null;
}

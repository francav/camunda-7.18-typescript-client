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
 * @interface ProblemDto
 */
export interface ProblemDto {
    /**
     * The message of the problem.
     * @type {string}
     * @memberof ProblemDto
     */
    message?: string | null;
    /**
     * The line where the problem occurred.
     * @type {number}
     * @memberof ProblemDto
     */
    line?: number | null;
    /**
     * The column where the problem occurred.
     * @type {number}
     * @memberof ProblemDto
     */
    column?: number | null;
    /**
     * The main element id where the problem occurred.
     * @type {string}
     * @memberof ProblemDto
     */
    mainElementId?: string | null;
    /**
     * A list of element id affected by the problem.
     * @type {Array<string>}
     * @memberof ProblemDto
     */
    elementIds?: Array<string> | null;
}

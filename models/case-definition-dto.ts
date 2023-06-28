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
 * @interface CaseDefinitionDto
 */
export interface CaseDefinitionDto {
    /**
     * The id of the case definition
     * @type {string}
     * @memberof CaseDefinitionDto
     */
    id?: string | null;
    /**
     * The key of the case definition, i.e., the id of the CMMN 2.0 XML case definition.
     * @type {string}
     * @memberof CaseDefinitionDto
     */
    key?: string | null;
    /**
     * The category of the case definition.
     * @type {string}
     * @memberof CaseDefinitionDto
     */
    category?: string | null;
    /**
     * The name of the case definition.
     * @type {string}
     * @memberof CaseDefinitionDto
     */
    name?: string | null;
    /**
     * The version of the case definition that the engine assigned to it.
     * @type {number}
     * @memberof CaseDefinitionDto
     */
    version?: number | null;
    /**
     * The file name of the case definition.
     * @type {string}
     * @memberof CaseDefinitionDto
     */
    resource?: string | null;
    /**
     * The deployment id of the case definition.
     * @type {string}
     * @memberof CaseDefinitionDto
     */
    deploymentId?: string | null;
    /**
     * The tenant id of the case definition.
     * @type {string}
     * @memberof CaseDefinitionDto
     */
    tenantId?: string | null;
    /**
     * History time to live value of the case definition. Is used within [History cleanup](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#history-cleanup).
     * @type {number}
     * @memberof CaseDefinitionDto
     */
    historyTimeToLive?: number | null;
}
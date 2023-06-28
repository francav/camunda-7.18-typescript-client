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
 * @interface DecisionDefinitionDto
 */
export interface DecisionDefinitionDto {
    /**
     * The id of the decision definition
     * @type {string}
     * @memberof DecisionDefinitionDto
     */
    id?: string | null;
    /**
     * The key of the decision definition, i.e., the id of the DMN 1.0 XML decision definition.
     * @type {string}
     * @memberof DecisionDefinitionDto
     */
    key?: string | null;
    /**
     * The category of the decision definition.
     * @type {string}
     * @memberof DecisionDefinitionDto
     */
    category?: string | null;
    /**
     * The name of the decision definition.
     * @type {string}
     * @memberof DecisionDefinitionDto
     */
    name?: string | null;
    /**
     * The version of the decision definition that the engine assigned to it.
     * @type {number}
     * @memberof DecisionDefinitionDto
     */
    version?: number | null;
    /**
     * The file name of the decision definition.
     * @type {string}
     * @memberof DecisionDefinitionDto
     */
    resource?: string | null;
    /**
     * The deployment id of the decision definition.
     * @type {string}
     * @memberof DecisionDefinitionDto
     */
    deploymentId?: string | null;
    /**
     * The tenant id of the decision definition.
     * @type {string}
     * @memberof DecisionDefinitionDto
     */
    tenantId?: string | null;
    /**
     * The id of the decision requirements definition this decision definition belongs to.
     * @type {string}
     * @memberof DecisionDefinitionDto
     */
    decisionRequirementsDefinitionId?: string | null;
    /**
     * The key of the decision requirements definition this decision definition belongs to.
     * @type {string}
     * @memberof DecisionDefinitionDto
     */
    decisionRequirementsDefinitionKey?: string | null;
    /**
     * History time to live value of the decision definition. Is used within [History cleanup](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#history-cleanup).
     * @type {number}
     * @memberof DecisionDefinitionDto
     */
    historyTimeToLive?: number | null;
    /**
     * The version tag of the decision definition.
     * @type {string}
     * @memberof DecisionDefinitionDto
     */
    versionTag?: string | null;
}

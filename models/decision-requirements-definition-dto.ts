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
 * @interface DecisionRequirementsDefinitionDto
 */
export interface DecisionRequirementsDefinitionDto {
    /**
     * The id of the decision requirements definition
     * @type {string}
     * @memberof DecisionRequirementsDefinitionDto
     */
    id?: string | null;
    /**
     * The key of the decision requirements definition, i.e., the id of the DMN 1.0 XML decision definition.
     * @type {string}
     * @memberof DecisionRequirementsDefinitionDto
     */
    key?: string | null;
    /**
     * The name of the decision requirements definition.
     * @type {string}
     * @memberof DecisionRequirementsDefinitionDto
     */
    name?: string | null;
    /**
     * The category of the decision requirements definition.
     * @type {string}
     * @memberof DecisionRequirementsDefinitionDto
     */
    category?: string | null;
    /**
     * The version of the decision requirements definition that the engine assigned to it.
     * @type {number}
     * @memberof DecisionRequirementsDefinitionDto
     */
    version?: number | null;
    /**
     * The file name of the decision requirements definition.
     * @type {string}
     * @memberof DecisionRequirementsDefinitionDto
     */
    resource?: string | null;
    /**
     * The deployment id of the decision requirements definition.
     * @type {string}
     * @memberof DecisionRequirementsDefinitionDto
     */
    deploymentId?: string | null;
    /**
     * The tenant id of the decisionrequirements definition.
     * @type {string}
     * @memberof DecisionRequirementsDefinitionDto
     */
    tenantId?: string | null;
}

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
 * A historic decision instance query which defines a list of historic decision instances
 * @export
 * @interface HistoricDecisionInstanceQueryDto
 */
export interface HistoricDecisionInstanceQueryDto {
    /**
     * Filter by decision instance id.
     * @type {string}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    decisionInstanceId?: string | null;
    /**
     * Filter by decision instance ids. Must be a comma-separated list of decision instance ids.
     * @type {Array<string>}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    decisionInstanceIdIn?: Array<string> | null;
    /**
     * Filter by the decision definition the instances belongs to.
     * @type {string}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    decisionDefinitionId?: string | null;
    /**
     * Filter by the decision definitions the instances belongs to. Must be a comma-separated list of decision definition ids.
     * @type {Array<string>}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    decisionDefinitionIdIn?: Array<string> | null;
    /**
     * Filter by the key of the decision definition the instances belongs to.
     * @type {string}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    decisionDefinitionKey?: string | null;
    /**
     * Filter by the keys of the decision definition the instances belongs to. Must be a comma- separated list of decision definition keys.
     * @type {Array<string>}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    decisionDefinitionKeyIn?: Array<string> | null;
    /**
     * Filter by the name of the decision definition the instances belongs to.
     * @type {string}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    decisionDefinitionName?: string | null;
    /**
     * Filter by the name of the decision definition the instances belongs to, that the parameter is a substring of.
     * @type {string}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    decisionDefinitionNameLike?: string | null;
    /**
     * Filter by the process definition the instances belongs to.
     * @type {string}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    processDefinitionId?: string | null;
    /**
     * Filter by the key of the process definition the instances belongs to.
     * @type {string}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    processDefinitionKey?: string | null;
    /**
     * Filter by the process instance the instances belongs to.
     * @type {string}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    processInstanceId?: string | null;
    /**
     * Filter by the case definition the instances belongs to.
     * @type {string}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    caseDefinitionId?: string | null;
    /**
     * Filter by the key of the case definition the instances belongs to.
     * @type {string}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    caseDefinitionKey?: string | null;
    /**
     * Filter by the case instance the instances belongs to.
     * @type {string}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    caseInstanceId?: string | null;
    /**
     * Filter by the activity ids the instances belongs to. Must be a comma-separated list of acitvity ids.
     * @type {Array<string>}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    activityIdIn?: Array<string> | null;
    /**
     * Filter by the activity instance ids the instances belongs to. Must be a comma-separated list of acitvity instance ids.
     * @type {Array<string>}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    activityInstanceIdIn?: Array<string> | null;
    /**
     * Filter by a comma-separated list of tenant ids. A historic decision instance must have one of the given tenant ids.
     * @type {Array<string>}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    tenantIdIn?: Array<string> | null;
    /**
     * Only include historic decision instances that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    withoutTenantId?: boolean | null;
    /**
     * Restrict to instances that were evaluated before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM- dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @type {Date}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    evaluatedBefore?: Date | null;
    /**
     * Restrict to instances that were evaluated after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM- dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @type {Date}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    evaluatedAfter?: Date | null;
    /**
     * Restrict to instances that were evaluated by the given user.
     * @type {string}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    userId?: string | null;
    /**
     * Restrict to instances that have a given root decision instance id. This also includes the decision instance with the given id.
     * @type {string}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    rootDecisionInstanceId?: string | null;
    /**
     * Restrict to instances those are the root decision instance of an evaluation. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    rootDecisionInstancesOnly?: boolean | null;
    /**
     * Filter by the decision requirements definition the instances belongs to.
     * @type {string}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    decisionRequirementsDefinitionId?: string | null;
    /**
     * Filter by the key of the decision requirements definition the instances belongs to.
     * @type {string}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    decisionRequirementsDefinitionKey?: string | null;
    /**
     * Include input values in the result. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    includeInputs?: boolean | null;
    /**
     * Include output values in the result. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    includeOutputs?: boolean | null;
    /**
     * Disables fetching of byte array input and output values. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    disableBinaryFetching?: boolean | null;
    /**
     * Disables deserialization of input and output values that are custom objects. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof HistoricDecisionInstanceQueryDto
     */
    disableCustomObjectDeserialization?: boolean | null;
}

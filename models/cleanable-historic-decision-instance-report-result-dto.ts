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
 * @interface CleanableHistoricDecisionInstanceReportResultDto
 */
export interface CleanableHistoricDecisionInstanceReportResultDto {
    /**
     * The id of the decision definition.
     * @type {string}
     * @memberof CleanableHistoricDecisionInstanceReportResultDto
     */
    decisionDefinitionId?: string | null;
    /**
     * The key of the decision definition.
     * @type {string}
     * @memberof CleanableHistoricDecisionInstanceReportResultDto
     */
    decisionDefinitionKey?: string | null;
    /**
     * The name of the decision definition.
     * @type {string}
     * @memberof CleanableHistoricDecisionInstanceReportResultDto
     */
    decisionDefinitionName?: string | null;
    /**
     * The version of the decision definition.
     * @type {number}
     * @memberof CleanableHistoricDecisionInstanceReportResultDto
     */
    decisionDefinitionVersion?: number | null;
    /**
     * The history time to live of the decision definition.
     * @type {number}
     * @memberof CleanableHistoricDecisionInstanceReportResultDto
     */
    historyTimeToLive?: number | null;
    /**
     * The count of the finished historic decision instances.
     * @type {number}
     * @memberof CleanableHistoricDecisionInstanceReportResultDto
     */
    finishedDecisionInstanceCount?: number | null;
    /**
     * The count of the cleanable historic decision instances, referring to history time to live.
     * @type {number}
     * @memberof CleanableHistoricDecisionInstanceReportResultDto
     */
    cleanableDecisionInstanceCount?: number | null;
    /**
     * The tenant id of the decision definition.
     * @type {string}
     * @memberof CleanableHistoricDecisionInstanceReportResultDto
     */
    tenantId?: string | null;
}

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
 * @interface HistoricIdentityLinkLogDto
 */
export interface HistoricIdentityLinkLogDto {
    /**
     * Id of the Historic identity link entry.
     * @type {string}
     * @memberof HistoricIdentityLinkLogDto
     */
    id?: string | null;
    /**
     * The time when the identity link is logged.  [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     * @type {Date}
     * @memberof HistoricIdentityLinkLogDto
     */
    time?: Date | null;
    /**
     * The type of identity link (candidate/assignee/owner).
     * @type {string}
     * @memberof HistoricIdentityLinkLogDto
     */
    type?: string | null;
    /**
     * The id of the user/assignee.
     * @type {string}
     * @memberof HistoricIdentityLinkLogDto
     */
    userId?: string | null;
    /**
     * The id of the group.
     * @type {string}
     * @memberof HistoricIdentityLinkLogDto
     */
    groupId?: string | null;
    /**
     * The id of the task.
     * @type {string}
     * @memberof HistoricIdentityLinkLogDto
     */
    taskId?: string | null;
    /**
     * The id of the process definition.
     * @type {string}
     * @memberof HistoricIdentityLinkLogDto
     */
    processDefinitionId?: string | null;
    /**
     * The key of the process definition.
     * @type {string}
     * @memberof HistoricIdentityLinkLogDto
     */
    processDefinitionKey?: string | null;
    /**
     * Type of operation (add/delete).
     * @type {string}
     * @memberof HistoricIdentityLinkLogDto
     */
    operationType?: string | null;
    /**
     * The id of the assigner.
     * @type {string}
     * @memberof HistoricIdentityLinkLogDto
     */
    assignerId?: string | null;
    /**
     * The id of the tenant.
     * @type {string}
     * @memberof HistoricIdentityLinkLogDto
     */
    tenantId?: string | null;
    /**
     * The time after which the identity link should be removed by the History Cleanup job.  [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     * @type {Date}
     * @memberof HistoricIdentityLinkLogDto
     */
    removalTime?: Date | null;
    /**
     * The process instance id of the root process instance that initiated the process containing this identity link.
     * @type {string}
     * @memberof HistoricIdentityLinkLogDto
     */
    rootProcessInstanceId?: string | null;
}
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
 * @interface HistoricProcessInstanceDto
 */
export interface HistoricProcessInstanceDto {
    /**
     * The id of the process instance.
     * @type {string}
     * @memberof HistoricProcessInstanceDto
     */
    id?: string | null;
    /**
     * The process instance id of the root process instance that initiated the process.
     * @type {string}
     * @memberof HistoricProcessInstanceDto
     */
    rootProcessInstanceId?: string | null;
    /**
     * The id of the parent process instance, if it exists.
     * @type {string}
     * @memberof HistoricProcessInstanceDto
     */
    superProcessInstanceId?: string | null;
    /**
     * The id of the parent case instance, if it exists.
     * @type {string}
     * @memberof HistoricProcessInstanceDto
     */
    superCaseInstanceId?: string | null;
    /**
     * The id of the parent case instance, if it exists.
     * @type {string}
     * @memberof HistoricProcessInstanceDto
     */
    caseInstanceId?: string | null;
    /**
     * The name of the process definition that this process instance belongs to.
     * @type {string}
     * @memberof HistoricProcessInstanceDto
     */
    processDefinitionName?: string | null;
    /**
     * The key of the process definition that this process instance belongs to.
     * @type {string}
     * @memberof HistoricProcessInstanceDto
     */
    processDefinitionKey?: string | null;
    /**
     * The version of the process definition that this process instance belongs to.
     * @type {number}
     * @memberof HistoricProcessInstanceDto
     */
    processDefinitionVersion?: number | null;
    /**
     * The id of the process definition that this process instance belongs to.
     * @type {string}
     * @memberof HistoricProcessInstanceDto
     */
    processDefinitionId?: string | null;
    /**
     * The business key of the process instance.
     * @type {string}
     * @memberof HistoricProcessInstanceDto
     */
    businessKey?: string | null;
    /**
     * The time the instance was started. Default [format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     * @type {Date}
     * @memberof HistoricProcessInstanceDto
     */
    startTime?: Date | null;
    /**
     * The time the instance ended. Default [format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     * @type {Date}
     * @memberof HistoricProcessInstanceDto
     */
    endTime?: Date | null;
    /**
     * The time after which the instance should be removed by the History Cleanup job. Default [format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     * @type {Date}
     * @memberof HistoricProcessInstanceDto
     */
    removalTime?: Date | null;
    /**
     * The time the instance took to finish (in milliseconds).
     * @type {number}
     * @memberof HistoricProcessInstanceDto
     */
    durationInMillis?: number | null;
    /**
     * The id of the user who started the process instance.
     * @type {string}
     * @memberof HistoricProcessInstanceDto
     */
    startUserId?: string | null;
    /**
     * The id of the initial activity that was executed (e.g., a start event).
     * @type {string}
     * @memberof HistoricProcessInstanceDto
     */
    startActivityId?: string | null;
    /**
     * The provided delete reason in case the process instance was canceled during execution.
     * @type {string}
     * @memberof HistoricProcessInstanceDto
     */
    deleteReason?: string | null;
    /**
     * The tenant id of the process instance.
     * @type {string}
     * @memberof HistoricProcessInstanceDto
     */
    tenantId?: string | null;
    /**
     * Last state of the process instance, possible values are:  `ACTIVE` - running process instance  `SUSPENDED` - suspended process instances  `COMPLETED` - completed through normal end event  `EXTERNALLY_TERMINATED` - terminated externally, for instance through REST API  `INTERNALLY_TERMINATED` - terminated internally, for instance by terminating boundary event
     * @type {string}
     * @memberof HistoricProcessInstanceDto
     */
    state?: HistoricProcessInstanceDtoStateEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum HistoricProcessInstanceDtoStateEnum {
    ACTIVE = 'ACTIVE',
    SUSPENDED = 'SUSPENDED',
    COMPLETED = 'COMPLETED',
    EXTERNALLYTERMINATED = 'EXTERNALLY_TERMINATED',
    INTERNALLYTERMINATED = 'INTERNALLY_TERMINATED'
}


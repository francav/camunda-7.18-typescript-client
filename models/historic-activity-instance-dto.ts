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
 * @interface HistoricActivityInstanceDto
 */
export interface HistoricActivityInstanceDto {
    /**
     * The id of the activity instance.
     * @type {string}
     * @memberof HistoricActivityInstanceDto
     */
    id?: string | null;
    /**
     * The id of the parent activity instance, for example a sub process instance.
     * @type {string}
     * @memberof HistoricActivityInstanceDto
     */
    parentActivityInstanceId?: string | null;
    /**
     * The id of the activity that this object is an instance of.
     * @type {string}
     * @memberof HistoricActivityInstanceDto
     */
    activityId?: string | null;
    /**
     * The name of the activity that this object is an instance of.
     * @type {string}
     * @memberof HistoricActivityInstanceDto
     */
    activityName?: string | null;
    /**
     * The type of the activity that this object is an instance of.
     * @type {string}
     * @memberof HistoricActivityInstanceDto
     */
    activityType?: string | null;
    /**
     * The key of the process definition that this activity instance belongs to.
     * @type {string}
     * @memberof HistoricActivityInstanceDto
     */
    processDefinitionKey?: string | null;
    /**
     * The id of the process definition that this activity instance belongs to.
     * @type {string}
     * @memberof HistoricActivityInstanceDto
     */
    processDefinitionId?: string | null;
    /**
     * The id of the process instance that this activity instance belongs to.
     * @type {string}
     * @memberof HistoricActivityInstanceDto
     */
    processInstanceId?: string | null;
    /**
     * The id of the execution that executed this activity instance.
     * @type {string}
     * @memberof HistoricActivityInstanceDto
     */
    executionId?: string | null;
    /**
     * The id of the task that is associated to this activity instance. Is only set if the activity is a user task.
     * @type {string}
     * @memberof HistoricActivityInstanceDto
     */
    taskId?: string | null;
    /**
     * The assignee of the task that is associated to this activity instance. Is only set if the activity is a user task.
     * @type {string}
     * @memberof HistoricActivityInstanceDto
     */
    assignee?: string | null;
    /**
     * The id of the called process instance. Is only set if the activity is a call activity and the called instance a process instance.
     * @type {string}
     * @memberof HistoricActivityInstanceDto
     */
    calledProcessInstanceId?: string | null;
    /**
     * The id of the called case instance. Is only set if the activity is a call activity and the called instance a case instance.
     * @type {string}
     * @memberof HistoricActivityInstanceDto
     */
    calledCaseInstanceId?: string | null;
    /**
     * The time the instance was started. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @type {Date}
     * @memberof HistoricActivityInstanceDto
     */
    startTime?: Date | null;
    /**
     * The time the instance ended. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @type {Date}
     * @memberof HistoricActivityInstanceDto
     */
    endTime?: Date | null;
    /**
     * The time the instance took to finish (in milliseconds).
     * @type {number}
     * @memberof HistoricActivityInstanceDto
     */
    durationInMillis?: number | null;
    /**
     * If `true`, this activity instance is canceled.
     * @type {boolean}
     * @memberof HistoricActivityInstanceDto
     */
    canceled?: boolean | null;
    /**
     * If `true`, this activity instance did complete a BPMN 2.0 scope.
     * @type {boolean}
     * @memberof HistoricActivityInstanceDto
     */
    completeScope?: boolean | null;
    /**
     * The tenant id of the activity instance.
     * @type {string}
     * @memberof HistoricActivityInstanceDto
     */
    tenantId?: string | null;
    /**
     * The time after which the activity instance should be removed by the History Cleanup job. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @type {Date}
     * @memberof HistoricActivityInstanceDto
     */
    removalTime?: Date | null;
    /**
     * The process instance id of the root process instance that initiated the process containing this activity instance.
     * @type {string}
     * @memberof HistoricActivityInstanceDto
     */
    rootProcessInstanceId?: string | null;
}

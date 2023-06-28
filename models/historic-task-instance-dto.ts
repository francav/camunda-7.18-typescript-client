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
 * @interface HistoricTaskInstanceDto
 */
export interface HistoricTaskInstanceDto {
    /**
     * The task id.
     * @type {string}
     * @memberof HistoricTaskInstanceDto
     */
    id?: string | null;
    /**
     * The key of the process definition the task belongs to.
     * @type {string}
     * @memberof HistoricTaskInstanceDto
     */
    processDefinitionKey?: string | null;
    /**
     * The id of the process definition the task belongs to.
     * @type {string}
     * @memberof HistoricTaskInstanceDto
     */
    processDefinitionId?: string | null;
    /**
     * The id of the process instance the task belongs to.
     * @type {string}
     * @memberof HistoricTaskInstanceDto
     */
    processInstanceId?: string | null;
    /**
     * The id of the execution the task belongs to.
     * @type {string}
     * @memberof HistoricTaskInstanceDto
     */
    executionId?: string | null;
    /**
     * The key of the case definition the task belongs to.
     * @type {string}
     * @memberof HistoricTaskInstanceDto
     */
    caseDefinitionKey?: string | null;
    /**
     * The id of the case definition the task belongs to.
     * @type {string}
     * @memberof HistoricTaskInstanceDto
     */
    caseDefinitionId?: string | null;
    /**
     * The id of the case instance the task belongs to.
     * @type {string}
     * @memberof HistoricTaskInstanceDto
     */
    caseInstanceId?: string | null;
    /**
     * The id of the case execution the task belongs to.
     * @type {string}
     * @memberof HistoricTaskInstanceDto
     */
    caseExecutionId?: string | null;
    /**
     * The id of the activity that this object is an instance of.
     * @type {string}
     * @memberof HistoricTaskInstanceDto
     */
    activityInstanceId?: string | null;
    /**
     * The task name.
     * @type {string}
     * @memberof HistoricTaskInstanceDto
     */
    name?: string | null;
    /**
     * The task's description.
     * @type {string}
     * @memberof HistoricTaskInstanceDto
     */
    description?: string | null;
    /**
     * The task's delete reason.
     * @type {string}
     * @memberof HistoricTaskInstanceDto
     */
    deleteReason?: string | null;
    /**
     * The owner's id.
     * @type {string}
     * @memberof HistoricTaskInstanceDto
     */
    owner?: string | null;
    /**
     * The assignee's id.
     * @type {string}
     * @memberof HistoricTaskInstanceDto
     */
    assignee?: string | null;
    /**
     * The time the task was started. Default [format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     * @type {Date}
     * @memberof HistoricTaskInstanceDto
     */
    startTime?: Date | null;
    /**
     * The time the task ended. Default [format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     * @type {Date}
     * @memberof HistoricTaskInstanceDto
     */
    endTime?: Date | null;
    /**
     * The time the task took to finish (in milliseconds).
     * @type {number}
     * @memberof HistoricTaskInstanceDto
     */
    duration?: number | null;
    /**
     * The task's key.
     * @type {string}
     * @memberof HistoricTaskInstanceDto
     */
    taskDefinitionKey?: string | null;
    /**
     * The task's priority.
     * @type {number}
     * @memberof HistoricTaskInstanceDto
     */
    priority?: number | null;
    /**
     * The task's due date. Default [format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     * @type {Date}
     * @memberof HistoricTaskInstanceDto
     */
    due?: Date | null;
    /**
     * The id of the parent task, if this task is a subtask.
     * @type {string}
     * @memberof HistoricTaskInstanceDto
     */
    parentTaskId?: string | null;
    /**
     * The follow-up date for the task. Default [format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     * @type {Date}
     * @memberof HistoricTaskInstanceDto
     */
    followUp?: Date | null;
    /**
     * The tenant id of the task instance.
     * @type {string}
     * @memberof HistoricTaskInstanceDto
     */
    tenantId?: string | null;
    /**
     * The time after which the task should be removed by the History Cleanup job. Default [format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     * @type {Date}
     * @memberof HistoricTaskInstanceDto
     */
    removalTime?: Date | null;
    /**
     * The process instance id of the root process instance that initiated the process containing this task.
     * @type {string}
     * @memberof HistoricTaskInstanceDto
     */
    rootProcessInstanceId?: string | null;
}
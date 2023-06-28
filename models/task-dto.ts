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
import { CamundaFormRef } from './camunda-form-ref';
/**
 * 
 * @export
 * @interface TaskDto
 */
export interface TaskDto {
    /**
     * The task id.
     * @type {string}
     * @memberof TaskDto
     */
    id?: string | null;
    /**
     * The task name.
     * @type {string}
     * @memberof TaskDto
     */
    name?: string | null;
    /**
     * The assignee's id.
     * @type {string}
     * @memberof TaskDto
     */
    assignee?: string | null;
    /**
     * The owner's id.
     * @type {string}
     * @memberof TaskDto
     */
    owner?: string | null;
    /**
     * The date the task was created on. [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     * @type {Date}
     * @memberof TaskDto
     */
    created?: Date | null;
    /**
     * The date the task was last updated. Every action that fires a [task update event](https://docs.camunda.org/manual/7.18/user-guide/process-engine/delegation-code/#task-listener-event-lifecycle) will update this property. [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     * @type {Date}
     * @memberof TaskDto
     */
    lastUpdated?: Date | null;
    /**
     * The task's due date. [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     * @type {Date}
     * @memberof TaskDto
     */
    due?: Date | null;
    /**
     * The follow-up date for the task. [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     * @type {Date}
     * @memberof TaskDto
     */
    followUp?: Date | null;
    /**
     * The task's delegation state. Possible values are `PENDING` and `RESOLVED`.
     * @type {string}
     * @memberof TaskDto
     */
    delegationState?: TaskDtoDelegationStateEnum;
    /**
     * The task's description.
     * @type {string}
     * @memberof TaskDto
     */
    description?: string | null;
    /**
     * The id of the execution the task belongs to.
     * @type {string}
     * @memberof TaskDto
     */
    executionId?: string | null;
    /**
     * The id the parent task, if this task is a subtask.
     * @type {string}
     * @memberof TaskDto
     */
    parentTaskId?: string | null;
    /**
     * The task's priority.
     * @type {number}
     * @memberof TaskDto
     */
    priority?: number | null;
    /**
     * The id of the process definition the task belongs to.
     * @type {string}
     * @memberof TaskDto
     */
    processDefinitionId?: string | null;
    /**
     * The id of the process instance the task belongs to.
     * @type {string}
     * @memberof TaskDto
     */
    processInstanceId?: string | null;
    /**
     * The id of the case execution the task belongs to.
     * @type {string}
     * @memberof TaskDto
     */
    caseExecutionId?: string | null;
    /**
     * The id of the case definition the task belongs to.
     * @type {string}
     * @memberof TaskDto
     */
    caseDefinitionId?: string | null;
    /**
     * The id of the case instance the task belongs to.
     * @type {string}
     * @memberof TaskDto
     */
    caseInstanceId?: string | null;
    /**
     * The task's key.
     * @type {string}
     * @memberof TaskDto
     */
    taskDefinitionKey?: string | null;
    /**
     * Whether the task belongs to a process instance that is suspended.
     * @type {boolean}
     * @memberof TaskDto
     */
    suspended?: boolean | null;
    /**
     * If not `null`, the form key for the task.
     * @type {string}
     * @memberof TaskDto
     */
    formKey?: string | null;
    /**
     * A reference to a specific version of a Camunda Form.
     * @type {{ [key: string]: CamundaFormRef; }}
     * @memberof TaskDto
     */
    camundaFormRef?: { [key: string]: CamundaFormRef; } | null;
    /**
     * If not `null`, the tenant id of the task.
     * @type {string}
     * @memberof TaskDto
     */
    tenantId?: string | null;
}

/**
    * @export
    * @enum {string}
    */
export enum TaskDtoDelegationStateEnum {
    PENDING = 'PENDING',
    RESOLVED = 'RESOLVED'
}


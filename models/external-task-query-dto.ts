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
import { ExternalTaskQueryDtoSorting } from './external-task-query-dto-sorting';
/**
 * A JSON object with the following properties:
 * @export
 * @interface ExternalTaskQueryDto
 */
export interface ExternalTaskQueryDto {
    /**
     * Filter by an external task's id.
     * @type {string}
     * @memberof ExternalTaskQueryDto
     */
    externalTaskId?: string | null;
    /**
     * Filter by the comma-separated list of external task ids.
     * @type {Array<string>}
     * @memberof ExternalTaskQueryDto
     */
    externalTaskIdIn?: Array<string> | null;
    /**
     * Filter by an external task topic.
     * @type {string}
     * @memberof ExternalTaskQueryDto
     */
    topicName?: string | null;
    /**
     * Filter by the id of the worker that the task was most recently locked by.
     * @type {string}
     * @memberof ExternalTaskQueryDto
     */
    workerId?: string | null;
    /**
     * Only include external tasks that are currently locked (i.e., they have a lock time and it has not expired). Value may only be `true`, as `false` matches any external task.
     * @type {boolean}
     * @memberof ExternalTaskQueryDto
     */
    locked?: boolean | null;
    /**
     * Only include external tasks that are currently not locked (i.e., they have no lock or it has expired). Value may only be `true`, as `false` matches any external task.
     * @type {boolean}
     * @memberof ExternalTaskQueryDto
     */
    notLocked?: boolean | null;
    /**
     * Only include external tasks that have a positive (&gt; 0) number of retries (or `null`). Value may only be `true`, as `false` matches any external task.
     * @type {boolean}
     * @memberof ExternalTaskQueryDto
     */
    withRetriesLeft?: boolean | null;
    /**
     * Only include external tasks that have 0 retries. Value may only be `true`, as `false` matches any external task.
     * @type {boolean}
     * @memberof ExternalTaskQueryDto
     */
    noRetriesLeft?: boolean | null;
    /**
     * Restrict to external tasks that have a lock that expires after a given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @type {Date}
     * @memberof ExternalTaskQueryDto
     */
    lockExpirationAfter?: Date | null;
    /**
     * Restrict to external tasks that have a lock that expires before a given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @type {Date}
     * @memberof ExternalTaskQueryDto
     */
    lockExpirationBefore?: Date | null;
    /**
     * Filter by the id of the activity that an external task is created for.
     * @type {string}
     * @memberof ExternalTaskQueryDto
     */
    activityId?: string | null;
    /**
     * Filter by the comma-separated list of ids of the activities that an external task is created for.
     * @type {Array<string>}
     * @memberof ExternalTaskQueryDto
     */
    activityIdIn?: Array<string> | null;
    /**
     * Filter by the id of the execution that an external task belongs to.
     * @type {string}
     * @memberof ExternalTaskQueryDto
     */
    executionId?: string | null;
    /**
     * Filter by the id of the process instance that an external task belongs to.
     * @type {string}
     * @memberof ExternalTaskQueryDto
     */
    processInstanceId?: string | null;
    /**
     * Filter by a comma-separated list of process instance ids that an external task may belong to.
     * @type {Array<string>}
     * @memberof ExternalTaskQueryDto
     */
    processInstanceIdIn?: Array<string> | null;
    /**
     * Filter by the id of the process definition that an external task belongs to.
     * @type {string}
     * @memberof ExternalTaskQueryDto
     */
    processDefinitionId?: string | null;
    /**
     * Filter by a comma-separated list of tenant ids. An external task must have one of the given tenant ids.
     * @type {Array<string>}
     * @memberof ExternalTaskQueryDto
     */
    tenantIdIn?: Array<string> | null;
    /**
     * Only include active tasks. Value may only be `true`, as `false` matches any external task.
     * @type {boolean}
     * @memberof ExternalTaskQueryDto
     */
    active?: boolean | null;
    /**
     * Only include suspended tasks. Value may only be `true`, as `false` matches any external task.
     * @type {boolean}
     * @memberof ExternalTaskQueryDto
     */
    suspended?: boolean | null;
    /**
     * Only include jobs with a priority higher than or equal to the given value. Value must be a valid `long` value.
     * @type {number}
     * @memberof ExternalTaskQueryDto
     */
    priorityHigherThanOrEquals?: number | null;
    /**
     * Only include jobs with a priority lower than or equal to the given value. Value must be a valid `long` value.
     * @type {number}
     * @memberof ExternalTaskQueryDto
     */
    priorityLowerThanOrEquals?: number | null;
    /**
     * A JSON array of criteria to sort the result by. Each element of the array is a JSON object that                     specifies one ordering. The position in the array identifies the rank of an ordering, i.e., whether                     it is primary, secondary, etc. The ordering objects have the following properties:                      **Note:** The `sorting` properties will not be applied to the External Task count query.
     * @type {Array<ExternalTaskQueryDtoSorting>}
     * @memberof ExternalTaskQueryDto
     */
    sorting?: Array<ExternalTaskQueryDtoSorting> | null;
}
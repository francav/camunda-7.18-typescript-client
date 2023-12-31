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
import { JobConditionQueryParameterDto } from './job-condition-query-parameter-dto';
import { JobQueryDtoSorting } from './job-query-dto-sorting';
/**
 * A Job instance query which defines a list of Job instances
 * @export
 * @interface JobQueryDto
 */
export interface JobQueryDto {
    /**
     * Filter by job id.
     * @type {string}
     * @memberof JobQueryDto
     */
    jobId?: string | null;
    /**
     * Filter by a  list of job ids.
     * @type {Array<string>}
     * @memberof JobQueryDto
     */
    jobIds?: Array<string> | null;
    /**
     * Only select jobs which exist for the given job definition.
     * @type {string}
     * @memberof JobQueryDto
     */
    jobDefinitionId?: string | null;
    /**
     * Only select jobs which exist for the given process instance.
     * @type {string}
     * @memberof JobQueryDto
     */
    processInstanceId?: string | null;
    /**
     * Only select jobs which exist for the given  list of process instance ids.
     * @type {Array<string>}
     * @memberof JobQueryDto
     */
    processInstanceIds?: Array<string> | null;
    /**
     * Only select jobs which exist for the given execution.
     * @type {string}
     * @memberof JobQueryDto
     */
    executionId?: string | null;
    /**
     * Filter by the id of the process definition the jobs run on.
     * @type {string}
     * @memberof JobQueryDto
     */
    processDefinitionId?: string | null;
    /**
     * Filter by the key of the process definition the jobs run on.
     * @type {string}
     * @memberof JobQueryDto
     */
    processDefinitionKey?: string | null;
    /**
     * Only select jobs which exist for an activity with the given id.
     * @type {string}
     * @memberof JobQueryDto
     */
    activityId?: string | null;
    /**
     * Only select jobs which have retries left. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof JobQueryDto
     */
    withRetriesLeft?: boolean | null;
    /**
     * Only select jobs which are executable, i.e., retries > 0 and due date is `null` or due date is in the past. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof JobQueryDto
     */
    executable?: boolean | null;
    /**
     * Only select jobs that are timers. Cannot be used together with `messages`. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof JobQueryDto
     */
    timers?: boolean | null;
    /**
     * Only select jobs that are messages. Cannot be used together with `timers`. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof JobQueryDto
     */
    messages?: boolean | null;
    /**
     * Only select jobs where the due date is lower or higher than the given date. 
     * @type {Array<JobConditionQueryParameterDto>}
     * @memberof JobQueryDto
     */
    dueDates?: Array<JobConditionQueryParameterDto> | null;
    /**
     * Only select jobs created before or after the given date. 
     * @type {Array<JobConditionQueryParameterDto>}
     * @memberof JobQueryDto
     */
    createTimes?: Array<JobConditionQueryParameterDto> | null;
    /**
     * Only select jobs that failed due to an exception. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof JobQueryDto
     */
    withException?: boolean | null;
    /**
     * Only select jobs that failed due to an exception with the given message.
     * @type {string}
     * @memberof JobQueryDto
     */
    exceptionMessage?: string | null;
    /**
     * Only select jobs that failed due to an exception at an activity with the given id.
     * @type {string}
     * @memberof JobQueryDto
     */
    failedActivityId?: string | null;
    /**
     * Only select jobs which have no retries left. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof JobQueryDto
     */
    noRetriesLeft?: boolean | null;
    /**
     * Only include active jobs. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof JobQueryDto
     */
    active?: boolean | null;
    /**
     * Only include suspended jobs. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof JobQueryDto
     */
    suspended?: boolean | null;
    /**
     * Only include jobs with a priority lower than or equal to the given value. Value must be a valid `long` value.
     * @type {number}
     * @memberof JobQueryDto
     */
    priorityLowerThanOrEquals?: number | null;
    /**
     * Only include jobs with a priority higher than or equal to the given value. Value must be a valid `long` value.
     * @type {number}
     * @memberof JobQueryDto
     */
    priorityHigherThanOrEquals?: number | null;
    /**
     * Only include jobs which belong to one of the passed  tenant ids.
     * @type {Array<string>}
     * @memberof JobQueryDto
     */
    tenantIdIn?: Array<string> | null;
    /**
     * Only include jobs which belong to no tenant. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof JobQueryDto
     */
    withoutTenantId?: boolean | null;
    /**
     * Include jobs which belong to no tenant. Can be used in combination with `tenantIdIn`. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof JobQueryDto
     */
    includeJobsWithoutTenantId?: boolean | null;
    /**
     * An array of criteria to sort the result by. Each element of the array is                        an object that specifies one ordering. The position in the array                        identifies the rank of an ordering, i.e., whether it is primary, secondary,                        etc. Does not have an effect for the `count` endpoint.
     * @type {Array<JobQueryDtoSorting>}
     * @memberof JobQueryDto
     */
    sorting?: Array<JobQueryDtoSorting> | null;
}

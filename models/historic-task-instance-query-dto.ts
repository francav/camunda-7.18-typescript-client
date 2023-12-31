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
import { HistoricTaskInstanceQueryDtoSorting } from './historic-task-instance-query-dto-sorting';
import { VariableQueryParameterDto } from './variable-query-parameter-dto';
/**
 * A Historic Task instance query which defines a list of Historic Task instances
 * @export
 * @interface HistoricTaskInstanceQueryDto
 */
export interface HistoricTaskInstanceQueryDto {
    /**
     * Filter by task id.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskId?: string | null;
    /**
     * Filter by parent task id.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskParentTaskId?: string | null;
    /**
     * Filter by process instance id.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    processInstanceId?: string | null;
    /**
     * Filter by process instance business key.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    processInstanceBusinessKey?: string | null;
    /**
     * Filter by process instances with one of the give business keys. The keys need to be in a comma-separated list.
     * @type {Array<string>}
     * @memberof HistoricTaskInstanceQueryDto
     */
    processInstanceBusinessKeyIn?: Array<string> | null;
    /**
     * Filter by  process instance business key that has the parameter value as a substring.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    processInstanceBusinessKeyLike?: string | null;
    /**
     * Filter by the id of the execution that executed the task.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    executionId?: string | null;
    /**
     * Filter by process definition id.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    processDefinitionId?: string | null;
    /**
     * Restrict to tasks that belong to a process definition with the given key.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    processDefinitionKey?: string | null;
    /**
     * Restrict to tasks that belong to a process definition with the given name.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    processDefinitionName?: string | null;
    /**
     * Filter by case instance id.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    caseInstanceId?: string | null;
    /**
     * Filter by the id of the case execution that executed the task.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    caseExecutionId?: string | null;
    /**
     * Filter by case definition id.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    caseDefinitionId?: string | null;
    /**
     * Restrict to tasks that belong to a case definition with the given key.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    caseDefinitionKey?: string | null;
    /**
     * Restrict to tasks that belong to a case definition with the given name.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    caseDefinitionName?: string | null;
    /**
     * Only include tasks which belong to one of the passed  activity instance ids.
     * @type {Array<string>}
     * @memberof HistoricTaskInstanceQueryDto
     */
    activityInstanceIdIn?: Array<string> | null;
    /**
     * Restrict to tasks that have the given name.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskName?: string | null;
    /**
     * Restrict to tasks that have a name with the given parameter value as substring.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskNameLike?: string | null;
    /**
     * Restrict to tasks that have the given description.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskDescription?: string | null;
    /**
     * Restrict to tasks that have a description that has the parameter value as a substring.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskDescriptionLike?: string | null;
    /**
     * Restrict to tasks that have the given key.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskDefinitionKey?: string | null;
    /**
     * Restrict to tasks that have one of the passed  task definition keys.
     * @type {Array<string>}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskDefinitionKeyIn?: Array<string> | null;
    /**
     * Restrict to tasks that have the given delete reason.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskDeleteReason?: string | null;
    /**
     * Restrict to tasks that have a delete reason that has the parameter value as a substring.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskDeleteReasonLike?: string | null;
    /**
     * Restrict to tasks that the given user is assigned to.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskAssignee?: string | null;
    /**
     * Restrict to tasks that are assigned to users with the parameter value as a substring.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskAssigneeLike?: string | null;
    /**
     * Restrict to tasks that the given user owns.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskOwner?: string | null;
    /**
     * Restrict to tasks that are owned by users with the parameter value as a substring.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskOwnerLike?: string | null;
    /**
     * Restrict to tasks that have the given priority.
     * @type {number}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskPriority?: number | null;
    /**
     * If set to `true`, restricts the query to all tasks that are assigned.
     * @type {boolean}
     * @memberof HistoricTaskInstanceQueryDto
     */
    assigned?: boolean | null;
    /**
     * If set to `true`, restricts the query to all tasks that are unassigned.
     * @type {boolean}
     * @memberof HistoricTaskInstanceQueryDto
     */
    unassigned?: boolean | null;
    /**
     * Only include finished tasks. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof HistoricTaskInstanceQueryDto
     */
    finished?: boolean | null;
    /**
     * Only include unfinished tasks. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof HistoricTaskInstanceQueryDto
     */
    unfinished?: boolean | null;
    /**
     * Only include tasks of finished processes. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof HistoricTaskInstanceQueryDto
     */
    processFinished?: boolean | null;
    /**
     * Only include tasks of unfinished processes. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof HistoricTaskInstanceQueryDto
     */
    processUnfinished?: boolean | null;
    /**
     * Restrict to tasks that are due on the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @type {Date}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskDueDate?: Date | null;
    /**
     * Restrict to tasks that are due before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @type {Date}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskDueDateBefore?: Date | null;
    /**
     * Restrict to tasks that are due after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @type {Date}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskDueDateAfter?: Date | null;
    /**
     * Only include tasks which have no due date. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof HistoricTaskInstanceQueryDto
     */
    withoutTaskDueDate?: boolean | null;
    /**
     * Restrict to tasks that have a followUp date on the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @type {Date}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskFollowUpDate?: Date | null;
    /**
     * Restrict to tasks that have a followUp date before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @type {Date}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskFollowUpDateBefore?: Date | null;
    /**
     * Restrict to tasks that have a followUp date after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @type {Date}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskFollowUpDateAfter?: Date | null;
    /**
     * Restrict to tasks that were started before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @type {Date}
     * @memberof HistoricTaskInstanceQueryDto
     */
    startedBefore?: Date | null;
    /**
     * Restrict to tasks that were started after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @type {Date}
     * @memberof HistoricTaskInstanceQueryDto
     */
    startedAfter?: Date | null;
    /**
     * Restrict to tasks that were finished before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @type {Date}
     * @memberof HistoricTaskInstanceQueryDto
     */
    finishedBefore?: Date | null;
    /**
     * Restrict to tasks that were finished after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @type {Date}
     * @memberof HistoricTaskInstanceQueryDto
     */
    finishedAfter?: Date | null;
    /**
     * Filter by a  list of tenant ids. A task instance must have one of the given tenant ids.
     * @type {Array<string>}
     * @memberof HistoricTaskInstanceQueryDto
     */
    tenantIdIn?: Array<string> | null;
    /**
     * Only include historic task instances that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof HistoricTaskInstanceQueryDto
     */
    withoutTenantId?: boolean | null;
    /**
     * Only include tasks that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value. **Note:** Values are always treated as `String` objects on server side.   Valid operator values are: * `eq` - equal to; * `neq` - not equal to; * `gt` - greater than; * `gteq` - greater than or equal to; * `lt` - lower than; * `lteq` - lower than or equal to; * `like`.  `key` and `value` may not contain underscore or comma characters.
     * @type {Array<VariableQueryParameterDto>}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskVariables?: Array<VariableQueryParameterDto> | null;
    /**
     * Only include tasks that belong to process instances that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value. **Note:** Values are always treated as `String` objects on server side.   Valid operator values are: * `eq` - equal to; * `neq` - not equal to; * `gt` - greater than; * `gteq` - greater than or equal to; * `lt` - lower than; * `lteq` - lower than or equal to; * `like`; * `notLike`.  `key` and `value` may not contain underscore or comma characters.
     * @type {Array<VariableQueryParameterDto>}
     * @memberof HistoricTaskInstanceQueryDto
     */
    processVariables?: Array<VariableQueryParameterDto> | null;
    /**
     * Match the variable name provided in `taskVariables` and `processVariables` case- insensitively. If set to `true` **variableName** and **variablename** are treated as equal.
     * @type {boolean}
     * @memberof HistoricTaskInstanceQueryDto
     */
    variableNamesIgnoreCase?: boolean | null;
    /**
     * Match the variable value provided in `taskVariables` and `processVariables` case- insensitively. If set to `true` **variableValue** and **variablevalue** are treated as equal.
     * @type {boolean}
     * @memberof HistoricTaskInstanceQueryDto
     */
    variableValuesIgnoreCase?: boolean | null;
    /**
     * Restrict to tasks with a historic identity link to the given user.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskInvolvedUser?: string | null;
    /**
     * Restrict to tasks with a historic identity link to the given group.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskInvolvedGroup?: string | null;
    /**
     * Restrict to tasks with a historic identity link to the given candidate user.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskHadCandidateUser?: string | null;
    /**
     * Restrict to tasks with a historic identity link to the given candidate group.
     * @type {string}
     * @memberof HistoricTaskInstanceQueryDto
     */
    taskHadCandidateGroup?: string | null;
    /**
     * Only include tasks which have a candidate group. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof HistoricTaskInstanceQueryDto
     */
    withCandidateGroups?: boolean | null;
    /**
     * Only include tasks which have no candidate group. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof HistoricTaskInstanceQueryDto
     */
    withoutCandidateGroups?: boolean | null;
    /**
     * A JSON array of nested historic task instance queries with OR semantics.  A task instance matches a nested query if it fulfills at least one of the query's predicates.  With multiple nested queries, a task instance must fulfill at least one predicate of each query ([Conjunctive Normal Form](https://en.wikipedia.org/wiki/Conjunctive_normal_form)).  All task instance query properties can be used except for: `sorting`, `withCandidateGroups`, ` withoutCandidateGroups`.  See the [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/process-engine-api/#or-queries) for more information about OR queries.
     * @type {Array<HistoricTaskInstanceQueryDto>}
     * @memberof HistoricTaskInstanceQueryDto
     */
    orQueries?: Array<HistoricTaskInstanceQueryDto> | null;
    /**
     * An array of criteria to sort the result by. Each element of the array is                     an object that specifies one ordering. The position in the array                     identifies the rank of an ordering, i.e., whether it is primary, secondary,                     etc. Sorting has no effect for `count` endpoints
     * @type {Array<HistoricTaskInstanceQueryDtoSorting>}
     * @memberof HistoricTaskInstanceQueryDto
     */
    sorting?: Array<HistoricTaskInstanceQueryDtoSorting> | null;
}

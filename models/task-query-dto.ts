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
import { TaskQueryDtoSorting } from './task-query-dto-sorting';
import { VariableQueryParameterDto } from './variable-query-parameter-dto';
/**
 * A Task query which defines a group of Tasks.
 * @export
 * @interface TaskQueryDto
 */
export interface TaskQueryDto {
    /**
     * Restrict to task with the given id.
     * @type {string}
     * @memberof TaskQueryDto
     */
    taskId?: string | null;
    /**
     * Restrict to tasks with any of the given ids.
     * @type {Array<string>}
     * @memberof TaskQueryDto
     */
    taskIdIn?: Array<string> | null;
    /**
     * Restrict to tasks that belong to process instances with the given id.
     * @type {string}
     * @memberof TaskQueryDto
     */
    processInstanceId?: string | null;
    /**
     * Restrict to tasks that belong to process instances with the given ids.
     * @type {Array<string>}
     * @memberof TaskQueryDto
     */
    processInstanceIdIn?: Array<string> | null;
    /**
     * Restrict to tasks that belong to process instances with the given business key.
     * @type {string}
     * @memberof TaskQueryDto
     */
    processInstanceBusinessKey?: string | null;
    /**
     * Restrict to tasks that belong to process instances with the given business key which  is described by an expression. See the  [user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions.
     * @type {string}
     * @memberof TaskQueryDto
     */
    processInstanceBusinessKeyExpression?: string | null;
    /**
     * Restrict to tasks that belong to process instances with one of the give business keys.  The keys need to be in a comma-separated list.
     * @type {Array<string>}
     * @memberof TaskQueryDto
     */
    processInstanceBusinessKeyIn?: Array<string> | null;
    /**
     * Restrict to tasks that have a process instance business key that has the parameter  value as a substring.
     * @type {string}
     * @memberof TaskQueryDto
     */
    processInstanceBusinessKeyLike?: string | null;
    /**
     * Restrict to tasks that have a process instance business key that has the parameter  value as a substring and is described by an expression. See the [user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions.
     * @type {string}
     * @memberof TaskQueryDto
     */
    processInstanceBusinessKeyLikeExpression?: string | null;
    /**
     * Restrict to tasks that belong to a process definition with the given id.
     * @type {string}
     * @memberof TaskQueryDto
     */
    processDefinitionId?: string | null;
    /**
     * Restrict to tasks that belong to a process definition with the given key.
     * @type {string}
     * @memberof TaskQueryDto
     */
    processDefinitionKey?: string | null;
    /**
     * Restrict to tasks that belong to a process definition with one of the given keys. The  keys need to be in a comma-separated list.
     * @type {Array<string>}
     * @memberof TaskQueryDto
     */
    processDefinitionKeyIn?: Array<string> | null;
    /**
     * Restrict to tasks that belong to a process definition with the given name.
     * @type {string}
     * @memberof TaskQueryDto
     */
    processDefinitionName?: string | null;
    /**
     * Restrict to tasks that have a process definition name that has the parameter value as  a substring.
     * @type {string}
     * @memberof TaskQueryDto
     */
    processDefinitionNameLike?: string | null;
    /**
     * Restrict to tasks that belong to an execution with the given id.
     * @type {string}
     * @memberof TaskQueryDto
     */
    executionId?: string | null;
    /**
     * Restrict to tasks that belong to case instances with the given id.
     * @type {string}
     * @memberof TaskQueryDto
     */
    caseInstanceId?: string | null;
    /**
     * Restrict to tasks that belong to case instances with the given business key.
     * @type {string}
     * @memberof TaskQueryDto
     */
    caseInstanceBusinessKey?: string | null;
    /**
     * Restrict to tasks that have a case instance business key that has the parameter value  as a substring.
     * @type {string}
     * @memberof TaskQueryDto
     */
    caseInstanceBusinessKeyLike?: string | null;
    /**
     * Restrict to tasks that belong to a case definition with the given id.
     * @type {string}
     * @memberof TaskQueryDto
     */
    caseDefinitionId?: string | null;
    /**
     * Restrict to tasks that belong to a case definition with the given key.
     * @type {string}
     * @memberof TaskQueryDto
     */
    caseDefinitionKey?: string | null;
    /**
     * Restrict to tasks that belong to a case definition with the given name.
     * @type {string}
     * @memberof TaskQueryDto
     */
    caseDefinitionName?: string | null;
    /**
     * Restrict to tasks that have a case definition name that has the parameter value as a  substring.
     * @type {string}
     * @memberof TaskQueryDto
     */
    caseDefinitionNameLike?: string | null;
    /**
     * Restrict to tasks that belong to a case execution with the given id.
     * @type {string}
     * @memberof TaskQueryDto
     */
    caseExecutionId?: string | null;
    /**
     * Only include tasks which belong to one of the passed and comma-separated activity  instance ids.
     * @type {Array<string>}
     * @memberof TaskQueryDto
     */
    activityInstanceIdIn?: Array<string> | null;
    /**
     * Only include tasks which belong to one of the passed and comma-separated  tenant ids.
     * @type {Array<string>}
     * @memberof TaskQueryDto
     */
    tenantIdIn?: Array<string> | null;
    /**
     * Only include tasks which belong to no tenant. Value may only be `true`,  as `false` is the default behavior.
     * @type {boolean}
     * @memberof TaskQueryDto
     */
    withoutTenantId?: boolean | null;
    /**
     * Restrict to tasks that the given user is assigned to.
     * @type {string}
     * @memberof TaskQueryDto
     */
    assignee?: string | null;
    /**
     * Restrict to tasks that the user described by the given expression is assigned to. See the [user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions.
     * @type {string}
     * @memberof TaskQueryDto
     */
    assigneeExpression?: string | null;
    /**
     * Restrict to tasks that have an assignee that has the parameter  value as a substring.
     * @type {string}
     * @memberof TaskQueryDto
     */
    assigneeLike?: string | null;
    /**
     * Restrict to tasks that have an assignee that has the parameter value described by the  given expression as a substring. See the  [user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions.
     * @type {string}
     * @memberof TaskQueryDto
     */
    assigneeLikeExpression?: string | null;
    /**
     * Only include tasks which are assigned to one of the passed and comma-separated user ids.
     * @type {Array<string>}
     * @memberof TaskQueryDto
     */
    assigneeIn?: Array<string> | null;
    /**
     * Only include tasks which are not assigned to one of the passed and comma-separated user ids.
     * @type {Array<string>}
     * @memberof TaskQueryDto
     */
    assigneeNotIn?: Array<string> | null;
    /**
     * Restrict to tasks that the given user owns.
     * @type {string}
     * @memberof TaskQueryDto
     */
    owner?: string | null;
    /**
     * Restrict to tasks that the user described by the given expression owns. See the  [user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions.
     * @type {string}
     * @memberof TaskQueryDto
     */
    ownerExpression?: string | null;
    /**
     * Only include tasks that are offered to the given group.
     * @type {string}
     * @memberof TaskQueryDto
     */
    candidateGroup?: string | null;
    /**
     * Only include tasks that are offered to the group described by the given expression.  See the  [user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions.
     * @type {string}
     * @memberof TaskQueryDto
     */
    candidateGroupExpression?: string | null;
    /**
     * Only include tasks that are offered to the given user or to one of his groups.
     * @type {string}
     * @memberof TaskQueryDto
     */
    candidateUser?: string | null;
    /**
     * Only include tasks that are offered to the user described by the given expression.  See the  [user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/expression-language/#internal-context-functions)  for more information on available functions.
     * @type {string}
     * @memberof TaskQueryDto
     */
    candidateUserExpression?: string | null;
    /**
     * Also include tasks that are assigned to users in candidate queries. Default is to only  include tasks that are not assigned to any user if you query by candidate user or group(s).
     * @type {boolean}
     * @memberof TaskQueryDto
     */
    includeAssignedTasks?: boolean | null;
    /**
     * Only include tasks that the given user is involved in. A user is involved in a task if  an identity link exists between task and user (e.g., the user is the assignee).
     * @type {string}
     * @memberof TaskQueryDto
     */
    involvedUser?: string | null;
    /**
     * Only include tasks that the user described by the given expression is involved in. A user is involved in a task if an identity link exists between task and user (e.g., the user is the assignee). See the [user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions.
     * @type {string}
     * @memberof TaskQueryDto
     */
    involvedUserExpression?: string | null;
    /**
     * If set to `true`, restricts the query to all tasks that are assigned.
     * @type {boolean}
     * @memberof TaskQueryDto
     */
    assigned?: boolean | null;
    /**
     * If set to `true`, restricts the query to all tasks that are unassigned.
     * @type {boolean}
     * @memberof TaskQueryDto
     */
    unassigned?: boolean | null;
    /**
     * Restrict to tasks that have the given key.
     * @type {string}
     * @memberof TaskQueryDto
     */
    taskDefinitionKey?: string | null;
    /**
     * Restrict to tasks that have one of the given keys. The keys need to be in a comma-separated list.
     * @type {Array<string>}
     * @memberof TaskQueryDto
     */
    taskDefinitionKeyIn?: Array<string> | null;
    /**
     * Restrict to tasks that have a key that has the parameter value as a substring.
     * @type {string}
     * @memberof TaskQueryDto
     */
    taskDefinitionKeyLike?: string | null;
    /**
     * Restrict to tasks that have the given name.
     * @type {string}
     * @memberof TaskQueryDto
     */
    name?: string | null;
    /**
     * Restrict to tasks that do not have the given name.
     * @type {string}
     * @memberof TaskQueryDto
     */
    nameNotEqual?: string | null;
    /**
     * Restrict to tasks that have a name with the given parameter value as substring.
     * @type {string}
     * @memberof TaskQueryDto
     */
    nameLike?: string | null;
    /**
     * Restrict to tasks that do not have a name with the given parameter value as substring.
     * @type {string}
     * @memberof TaskQueryDto
     */
    nameNotLike?: string | null;
    /**
     * Restrict to tasks that have the given description.
     * @type {string}
     * @memberof TaskQueryDto
     */
    description?: string | null;
    /**
     * Restrict to tasks that have a description that has the parameter value as a substring.
     * @type {string}
     * @memberof TaskQueryDto
     */
    descriptionLike?: string | null;
    /**
     * Restrict to tasks that have the given priority.
     * @type {number}
     * @memberof TaskQueryDto
     */
    priority?: number | null;
    /**
     * Restrict to tasks that have a lower or equal priority.
     * @type {number}
     * @memberof TaskQueryDto
     */
    maxPriority?: number | null;
    /**
     * Restrict to tasks that have a higher or equal priority.
     * @type {number}
     * @memberof TaskQueryDto
     */
    minPriority?: number | null;
    /**
     * Restrict to tasks that are due on the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.546+0200`.
     * @type {Date}
     * @memberof TaskQueryDto
     */
    dueDate?: Date | null;
    /**
     * Restrict to tasks that are due on the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
     * @type {string}
     * @memberof TaskQueryDto
     */
    dueDateExpression?: string | null;
    /**
     * Restrict to tasks that are due after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.435+0200`.
     * @type {Date}
     * @memberof TaskQueryDto
     */
    dueAfter?: Date | null;
    /**
     * Restrict to tasks that are due after the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
     * @type {string}
     * @memberof TaskQueryDto
     */
    dueAfterExpression?: string | null;
    /**
     * Restrict to tasks that are due before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.243+0200`.
     * @type {Date}
     * @memberof TaskQueryDto
     */
    dueBefore?: Date | null;
    /**
     * Restrict to tasks that are due before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
     * @type {string}
     * @memberof TaskQueryDto
     */
    dueBeforeExpression?: string | null;
    /**
     * Only include tasks which have no due date. Value may only be `true`,  as `false` is the default behavior.
     * @type {boolean}
     * @memberof TaskQueryDto
     */
    withoutDueDate?: boolean | null;
    /**
     * Restrict to tasks that have a followUp date on the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.342+0200`.
     * @type {Date}
     * @memberof TaskQueryDto
     */
    followUpDate?: Date | null;
    /**
     * Restrict to tasks that have a followUp date on the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
     * @type {string}
     * @memberof TaskQueryDto
     */
    followUpDateExpression?: string | null;
    /**
     * Restrict to tasks that have a followUp date after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.542+0200`.
     * @type {Date}
     * @memberof TaskQueryDto
     */
    followUpAfter?: Date | null;
    /**
     * Restrict to tasks that have a followUp date after the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
     * @type {string}
     * @memberof TaskQueryDto
     */
    followUpAfterExpression?: string | null;
    /**
     * Restrict to tasks that have a followUp date before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.234+0200`.
     * @type {string}
     * @memberof TaskQueryDto
     */
    followUpBefore?: string | null;
    /**
     * Restrict to tasks that have a followUp date before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
     * @type {string}
     * @memberof TaskQueryDto
     */
    followUpBeforeExpression?: string | null;
    /**
     * Restrict to tasks that have no followUp date or a followUp date before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.432+0200`. The typical use case is to query all `active` tasks for a user for a given date.
     * @type {Date}
     * @memberof TaskQueryDto
     */
    followUpBeforeOrNotExistent?: Date | null;
    /**
     * Restrict to tasks that have no followUp date or a followUp date before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
     * @type {string}
     * @memberof TaskQueryDto
     */
    followUpBeforeOrNotExistentExpression?: string | null;
    /**
     * Restrict to tasks that were created on the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.324+0200`.
     * @type {Date}
     * @memberof TaskQueryDto
     */
    createdOn?: Date | null;
    /**
     * Restrict to tasks that were created on the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
     * @type {string}
     * @memberof TaskQueryDto
     */
    createdOnExpression?: string | null;
    /**
     * Restrict to tasks that were created after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.342+0200`.
     * @type {Date}
     * @memberof TaskQueryDto
     */
    createdAfter?: Date | null;
    /**
     * Restrict to tasks that were created after the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
     * @type {string}
     * @memberof TaskQueryDto
     */
    createdAfterExpression?: string | null;
    /**
     * Restrict to tasks that were created before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.332+0200`.
     * @type {Date}
     * @memberof TaskQueryDto
     */
    createdBefore?: Date | null;
    /**
     * Restrict to tasks that were created before the date described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
     * @type {string}
     * @memberof TaskQueryDto
     */
    createdBeforeExpression?: string | null;
    /**
     * Restrict to tasks that were updated after the given date. Every action that fires  a [task update event](https://docs.camunda.org/manual/7.18/user-guide/process-engine/delegation-code/#task-listener-event-lifecycle) is considered as updating the task. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.332+0200`.
     * @type {Date}
     * @memberof TaskQueryDto
     */
    updatedAfter?: Date | null;
    /**
     * Restrict to tasks that were updated after the date described by the given expression. Every action that fires  a [task update event](https://docs.camunda.org/manual/7.18/user-guide/process-engine/delegation-code/#task-listener-event-lifecycle) is considered as updating the task. See the [user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to a `java.util.Date` or `org.joda.time.DateTime` object.
     * @type {string}
     * @memberof TaskQueryDto
     */
    updatedAfterExpression?: string | null;
    /**
     * Restrict to tasks that are in the given delegation state. Valid values are `PENDING` and `RESOLVED`.
     * @type {string}
     * @memberof TaskQueryDto
     */
    delegationState?: TaskQueryDtoDelegationStateEnum;
    /**
     * Restrict to tasks that are offered to any of the given candidate groups. Takes a comma-separated list of group names, so for example `developers,support,sales`.
     * @type {Array<string>}
     * @memberof TaskQueryDto
     */
    candidateGroups?: Array<string> | null;
    /**
     * Restrict to tasks that are offered to any of the candidate groups described by the given expression. See the [user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/expression-language/#internal-context-functions) for more information on available functions. The expression must evaluate to `java.util.List` of Strings.
     * @type {string}
     * @memberof TaskQueryDto
     */
    candidateGroupsExpression?: string | null;
    /**
     * Only include tasks which have a candidate group. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof TaskQueryDto
     */
    withCandidateGroups?: boolean | null;
    /**
     * Only include tasks which have no candidate group. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof TaskQueryDto
     */
    withoutCandidateGroups?: boolean | null;
    /**
     * Only include tasks which have a candidate user. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof TaskQueryDto
     */
    withCandidateUsers?: boolean | null;
    /**
     * Only include tasks which have no candidate users. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof TaskQueryDto
     */
    withoutCandidateUsers?: boolean | null;
    /**
     * Only include active tasks. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof TaskQueryDto
     */
    active?: boolean | null;
    /**
     * Only include suspended tasks. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof TaskQueryDto
     */
    suspended?: boolean | null;
    /**
     * A JSON array to only include tasks that have variables with certain values. The array consists of JSON objects with three properties `name`, `operator` and `value`. `name` is the variable name, `operator` is the comparison operator to be used and `value` the variable value. `value` may be of type `String`, `Number` or `Boolean`.  Valid `operator` values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`. `key` and `value` may not contain underscore or comma characters.
     * @type {Array<VariableQueryParameterDto>}
     * @memberof TaskQueryDto
     */
    taskVariables?: Array<VariableQueryParameterDto> | null;
    /**
     * A JSON array to only include tasks that belong to a process instance with variables with certain values. The array consists of JSON objects with three properties `name`, `operator` and `value`. `name` is the variable name, `operator` is the comparison operator to be used and `value` the variable value. `value` may be of type `String`, `Number` or `Boolean`.  Valid `operator` values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`; `notLike`. `key` and `value` may not contain underscore or comma characters.
     * @type {Array<VariableQueryParameterDto>}
     * @memberof TaskQueryDto
     */
    processVariables?: Array<VariableQueryParameterDto> | null;
    /**
     * A JSON array to only include tasks that belong to a case instance with variables with certain values. The array consists of JSON objects with three properties `name`, `operator` and `value`. `name` is the variable name, `operator` is the comparison operator to be used and `value` the variable value. `value` may be of type `String`, `Number` or `Boolean`.  Valid `operator` values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`. `key` and `value` may not contain underscore or comma characters.
     * @type {Array<VariableQueryParameterDto>}
     * @memberof TaskQueryDto
     */
    caseInstanceVariables?: Array<VariableQueryParameterDto> | null;
    /**
     * Match all variable names in this query case-insensitively. If set `variableName` and `variablename` are treated as equal.
     * @type {boolean}
     * @memberof TaskQueryDto
     */
    variableNamesIgnoreCase?: boolean | null;
    /**
     * Match all variable values in this query case-insensitively. If set `variableValue` and `variablevalue` are treated as equal.
     * @type {boolean}
     * @memberof TaskQueryDto
     */
    variableValuesIgnoreCase?: boolean | null;
    /**
     * Restrict query to all tasks that are sub tasks of the given task. Takes a task id.
     * @type {string}
     * @memberof TaskQueryDto
     */
    parentTaskId?: string | null;
    /**
     * A JSON array of nested task queries with OR semantics. A task matches a nested query if it fulfills *at least one* of the query's predicates. With multiple nested queries, a task must fulfill at least one predicate of *each* query ([Conjunctive Normal Form](https://en.wikipedia.org/wiki/Conjunctive_normal_form)).  All task query properties can be used except for: `sorting`, `withCandidateGroups`, `withoutCandidateGroups`, `withCandidateUsers`, `withoutCandidateUsers`  See the [User guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/process-engine-api/#or-queries) for more information about OR queries.
     * @type {Array<TaskQueryDto>}
     * @memberof TaskQueryDto
     */
    orQueries?: Array<TaskQueryDto> | null;
    /**
     * Apply sorting of the result
     * @type {Array<TaskQueryDtoSorting>}
     * @memberof TaskQueryDto
     */
    sorting?: Array<TaskQueryDtoSorting> | null;
}

/**
    * @export
    * @enum {string}
    */
export enum TaskQueryDtoDelegationStateEnum {
    PENDING = 'PENDING',
    RESOLVED = 'RESOLVED'
}


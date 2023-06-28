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
import { ExecutionQueryDtoSorting } from './execution-query-dto-sorting';
import { VariableQueryParameterDto } from './variable-query-parameter-dto';
/**
 * A Execution instance query which defines a list of Execution instances
 * @export
 * @interface ExecutionQueryDto
 */
export interface ExecutionQueryDto {
    /**
     * Filter by the business key of the process instances the executions belong to.
     * @type {string}
     * @memberof ExecutionQueryDto
     */
    businessKey?: string | null;
    /**
     * Filter by the process definition the executions run on.
     * @type {string}
     * @memberof ExecutionQueryDto
     */
    processDefinitionId?: string | null;
    /**
     * Filter by the key of the process definition the executions run on.
     * @type {string}
     * @memberof ExecutionQueryDto
     */
    processDefinitionKey?: string | null;
    /**
     * Filter by the id of the process instance the execution belongs to.
     * @type {string}
     * @memberof ExecutionQueryDto
     */
    processInstanceId?: string | null;
    /**
     * Filter by the id of the activity the execution currently executes.
     * @type {string}
     * @memberof ExecutionQueryDto
     */
    activityId?: string | null;
    /**
     * Select only those executions that expect a signal of the given name.
     * @type {string}
     * @memberof ExecutionQueryDto
     */
    signalEventSubscriptionName?: string | null;
    /**
     * Select only those executions that expect a message of the given name.
     * @type {string}
     * @memberof ExecutionQueryDto
     */
    messageEventSubscriptionName?: string | null;
    /**
     * Only include active executions. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof ExecutionQueryDto
     */
    active?: boolean | null;
    /**
     * Only include suspended executions. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof ExecutionQueryDto
     */
    suspended?: boolean | null;
    /**
     * Filter by the incident id.
     * @type {string}
     * @memberof ExecutionQueryDto
     */
    incidentId?: string | null;
    /**
     * Filter by the incident type. See the [User Guide](/manual/develop/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
     * @type {string}
     * @memberof ExecutionQueryDto
     */
    incidentType?: string | null;
    /**
     * Filter by the incident message. Exact match.
     * @type {string}
     * @memberof ExecutionQueryDto
     */
    incidentMessage?: string | null;
    /**
     * Filter by the incident message that the parameter is a substring of.
     * @type {string}
     * @memberof ExecutionQueryDto
     */
    incidentMessageLike?: string | null;
    /**
     * Filter by a  list of tenant ids. An execution must have one of the given tenant ids.
     * @type {Array<string>}
     * @memberof ExecutionQueryDto
     */
    tenantIdIn?: Array<string> | null;
    /**
     * An array to only include executions that have variables with certain values.  The array consists of objects with the three properties `name`, `operator` and `value`. `name (String)` is the variable name, `operator (String)` is the comparison operator to be used and `value` the variable value. `value` may be `String`, `Number` or `Boolean`.  Valid operator values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`.
     * @type {Array<VariableQueryParameterDto>}
     * @memberof ExecutionQueryDto
     */
    variables?: Array<VariableQueryParameterDto> | null;
    /**
     * An array to only include executions that belong to a process instance with variables with certain values.  The array consists of objects with the three properties `name`, `operator` and `value`. `name (String)` is the variable name, `operator (String)` is the comparison operator to be used and `value` the variable value. `value` may be `String`, `Number` or `Boolean`.  Valid operator values are: `eq` - equal to; `neq` - not equal to.
     * @type {Array<VariableQueryParameterDto>}
     * @memberof ExecutionQueryDto
     */
    processVariables?: Array<VariableQueryParameterDto> | null;
    /**
     * Match all variable names provided in `variables` and `processVariables` case- insensitively. If set to `true` **variableName** and **variablename** are treated as equal.
     * @type {boolean}
     * @memberof ExecutionQueryDto
     */
    variableNamesIgnoreCase?: boolean | null;
    /**
     * Match all variable values provided in `variables` and `processVariables` case- insensitively. If set to `true` **variableValue** and **variablevalue** are treated as equal.
     * @type {boolean}
     * @memberof ExecutionQueryDto
     */
    variableValuesIgnoreCase?: boolean | null;
    /**
     * An array of criteria to sort the result by. Each element of the array is                        an object that specifies one ordering. The position in the array                        identifies the rank of an ordering, i.e., whether it is primary, secondary,                        etc. Has no effect for the `/count` endpoint
     * @type {Array<ExecutionQueryDtoSorting>}
     * @memberof ExecutionQueryDto
     */
    sorting?: Array<ExecutionQueryDtoSorting> | null;
}
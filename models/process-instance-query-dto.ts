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
import { ProcessInstanceQueryDtoSorting } from './process-instance-query-dto-sorting';
import { VariableQueryParameterDto } from './variable-query-parameter-dto';
/**
 * A process instance query which defines a group of process instances
 * @export
 * @interface ProcessInstanceQueryDto
 */
export interface ProcessInstanceQueryDto {
    /**
     * Filter by the deployment the id belongs to.
     * @type {string}
     * @memberof ProcessInstanceQueryDto
     */
    deploymentId?: string | null;
    /**
     * Filter by the process definition the instances run on.
     * @type {string}
     * @memberof ProcessInstanceQueryDto
     */
    processDefinitionId?: string | null;
    /**
     * Filter by the key of the process definition the instances run on.
     * @type {string}
     * @memberof ProcessInstanceQueryDto
     */
    processDefinitionKey?: string | null;
    /**
     * Filter by a list of process definition keys. A process instance must have one of the given process definition keys. Must be a JSON array of Strings.
     * @type {Array<string>}
     * @memberof ProcessInstanceQueryDto
     */
    processDefinitionKeyIn?: Array<string> | null;
    /**
     * Exclude instances by a list of process definition keys. A process instance must not have one of the given process definition keys. Must be a JSON array of Strings.
     * @type {Array<string>}
     * @memberof ProcessInstanceQueryDto
     */
    processDefinitionKeyNotIn?: Array<string> | null;
    /**
     * Filter by process instance business key.
     * @type {string}
     * @memberof ProcessInstanceQueryDto
     */
    businessKey?: string | null;
    /**
     * Filter by process instance business key that the parameter is a substring of.
     * @type {string}
     * @memberof ProcessInstanceQueryDto
     */
    businessKeyLike?: string | null;
    /**
     * Filter by case instance id.
     * @type {string}
     * @memberof ProcessInstanceQueryDto
     */
    caseInstanceId?: string | null;
    /**
     * Restrict query to all process instances that are sub process instances of the given process instance. Takes a process instance id.
     * @type {string}
     * @memberof ProcessInstanceQueryDto
     */
    superProcessInstance?: string | null;
    /**
     * Restrict query to all process instances that have the given process instance as a sub process instance. Takes a process instance id.
     * @type {string}
     * @memberof ProcessInstanceQueryDto
     */
    subProcessInstance?: string | null;
    /**
     * Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id.
     * @type {string}
     * @memberof ProcessInstanceQueryDto
     */
    superCaseInstance?: string | null;
    /**
     * Restrict query to all process instances that have the given case instance as a sub case instance. Takes a case instance id.
     * @type {string}
     * @memberof ProcessInstanceQueryDto
     */
    subCaseInstance?: string | null;
    /**
     * Only include active process instances. Value may only be true, as false is the default behavior.
     * @type {boolean}
     * @memberof ProcessInstanceQueryDto
     */
    active?: boolean | null;
    /**
     * Only include suspended process instances. Value may only be true, as false is the default behavior.
     * @type {boolean}
     * @memberof ProcessInstanceQueryDto
     */
    suspended?: boolean | null;
    /**
     * Filter by a list of process instance ids. Must be a JSON array of Strings.
     * @type {Array<string>}
     * @memberof ProcessInstanceQueryDto
     */
    processInstanceIds?: Array<string> | null;
    /**
     * Filter by presence of incidents. Selects only process instances that have an incident.
     * @type {boolean}
     * @memberof ProcessInstanceQueryDto
     */
    withIncident?: boolean | null;
    /**
     * Filter by the incident id.
     * @type {string}
     * @memberof ProcessInstanceQueryDto
     */
    incidentId?: string | null;
    /**
     * Filter by the incident type. See the User Guide for a list of incident types.
     * @type {string}
     * @memberof ProcessInstanceQueryDto
     */
    incidentType?: string | null;
    /**
     * Filter by the incident message. Exact match.
     * @type {string}
     * @memberof ProcessInstanceQueryDto
     */
    incidentMessage?: string | null;
    /**
     * Filter by the incident message that the parameter is a substring of.
     * @type {string}
     * @memberof ProcessInstanceQueryDto
     */
    incidentMessageLike?: string | null;
    /**
     * Filter by a list of tenant ids. A process instance must have one of the given tenant ids. Must be a JSON array of Strings.
     * @type {Array<string>}
     * @memberof ProcessInstanceQueryDto
     */
    tenantIdIn?: Array<string> | null;
    /**
     * Only include process instances which belong to no tenant. Value may only be true, as false is the default behavior.
     * @type {boolean}
     * @memberof ProcessInstanceQueryDto
     */
    withoutTenantId?: boolean | null;
    /**
     * Only include process instances which process definition has no tenant id.
     * @type {boolean}
     * @memberof ProcessInstanceQueryDto
     */
    processDefinitionWithoutTenantId?: boolean | null;
    /**
     * Filter by a list of activity ids. A process instance must currently wait in a leaf activity with one of the given activity ids.
     * @type {Array<string>}
     * @memberof ProcessInstanceQueryDto
     */
    activityIdIn?: Array<string> | null;
    /**
     * Restrict the query to all process instances that are top level process instances.
     * @type {boolean}
     * @memberof ProcessInstanceQueryDto
     */
    rootProcessInstances?: boolean | null;
    /**
     * Restrict the query to all process instances that are leaf instances. (i.e. don't have any sub instances)
     * @type {boolean}
     * @memberof ProcessInstanceQueryDto
     */
    leafProcessInstances?: boolean | null;
    /**
     * A JSON array to only include process instances that have variables with certain values. The array consists of objects with the three properties `name`, `operator` and `value`. `name` (String) is the variable name, `operator` (String) is the comparison operator to be used and `value` the variable value. The `value` may be String, Number or Boolean.  Valid operator values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`.
     * @type {Array<VariableQueryParameterDto>}
     * @memberof ProcessInstanceQueryDto
     */
    variables?: Array<VariableQueryParameterDto> | null;
    /**
     * Match all variable names in this query case-insensitively. If set to true variableName and variablename are treated as equal.
     * @type {boolean}
     * @memberof ProcessInstanceQueryDto
     */
    variableNamesIgnoreCase?: boolean | null;
    /**
     * Match all variable values in this query case-insensitively. If set to true variableValue and variablevalue are treated as equal.
     * @type {boolean}
     * @memberof ProcessInstanceQueryDto
     */
    variableValuesIgnoreCase?: boolean | null;
    /**
     * A JSON array of nested process instance queries with OR semantics. A process instance matches a nested query if it fulfills at least one of the query's predicates. With multiple nested queries, a process instance must fulfill at least one predicate of each query (Conjunctive Normal Form). All process instance query properties can be used except for: `sorting` See the [User guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/process-engine-api/#or-queries) for more information about OR queries.
     * @type {Array<ProcessInstanceQueryDto>}
     * @memberof ProcessInstanceQueryDto
     */
    orQueries?: Array<ProcessInstanceQueryDto> | null;
    /**
     * Apply sorting of the result
     * @type {Array<ProcessInstanceQueryDtoSorting>}
     * @memberof ProcessInstanceQueryDto
     */
    sorting?: Array<ProcessInstanceQueryDtoSorting> | null;
}

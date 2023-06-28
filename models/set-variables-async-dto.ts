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
import { HistoricProcessInstanceQueryDto } from './historic-process-instance-query-dto';
import { ProcessInstanceQueryDto } from './process-instance-query-dto';
import { VariableValueDto } from './variable-value-dto';
/**
 * 
 * @export
 * @interface SetVariablesAsyncDto
 */
export interface SetVariablesAsyncDto {
    /**
     * A list of process instance ids that define a group of process instances to which the operation will set variables.  Please note that if `processInstanceIds`, `processInstanceQuery` and `historicProcessInstanceQuery` are defined, the resulting operation will be performed on the union of these sets.
     * @type {Array<string>}
     * @memberof SetVariablesAsyncDto
     */
    processInstanceIds?: Array<string> | null;
    /**
     * 
     * @type {ProcessInstanceQueryDto}
     * @memberof SetVariablesAsyncDto
     */
    processInstanceQuery?: ProcessInstanceQueryDto;
    /**
     * 
     * @type {HistoricProcessInstanceQueryDto}
     * @memberof SetVariablesAsyncDto
     */
    historicProcessInstanceQuery?: HistoricProcessInstanceQueryDto;
    /**
     * A variables the operation will set in the root scope of the process instances.
     * @type {{ [key: string]: VariableValueDto; }}
     * @memberof SetVariablesAsyncDto
     */
    variables?: { [key: string]: VariableValueDto; } | null;
}

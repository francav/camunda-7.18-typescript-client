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
import { ExternalTaskQueryDto } from './external-task-query-dto';
import { HistoricProcessInstanceQueryDto } from './historic-process-instance-query-dto';
import { ProcessInstanceQueryDto } from './process-instance-query-dto';
/**
 * 
 * @export
 * @interface SetRetriesForExternalTasksDto
 */
export interface SetRetriesForExternalTasksDto {
    /**
     * The number of retries to set for the external task.  Must be >= 0. If this is 0, an incident is created and the task cannot be fetched anymore unless the retries are increased again. Can not be null.
     * @type {number}
     * @memberof SetRetriesForExternalTasksDto
     */
    retries?: number | null;
    /**
     * The ids of the external tasks to set the number of retries for.
     * @type {Array<string>}
     * @memberof SetRetriesForExternalTasksDto
     */
    externalTaskIds?: Array<string> | null;
    /**
     * The ids of process instances containing the tasks to set the number of retries for.
     * @type {Array<string>}
     * @memberof SetRetriesForExternalTasksDto
     */
    processInstanceIds?: Array<string> | null;
    /**
     * 
     * @type {ExternalTaskQueryDto}
     * @memberof SetRetriesForExternalTasksDto
     */
    externalTaskQuery?: ExternalTaskQueryDto;
    /**
     * 
     * @type {ProcessInstanceQueryDto}
     * @memberof SetRetriesForExternalTasksDto
     */
    processInstanceQuery?: ProcessInstanceQueryDto;
    /**
     * 
     * @type {HistoricProcessInstanceQueryDto}
     * @memberof SetRetriesForExternalTasksDto
     */
    historicProcessInstanceQuery?: HistoricProcessInstanceQueryDto;
}

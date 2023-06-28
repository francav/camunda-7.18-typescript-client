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
/**
 * 
 * @export
 * @interface DeleteHistoricProcessInstancesDto
 */
export interface DeleteHistoricProcessInstancesDto {
    /**
     * A list historic process instance ids to delete.
     * @type {Array<string>}
     * @memberof DeleteHistoricProcessInstancesDto
     */
    historicProcessInstanceIds?: Array<string> | null;
    /**
     * 
     * @type {HistoricProcessInstanceQueryDto}
     * @memberof DeleteHistoricProcessInstancesDto
     */
    historicProcessInstanceQuery?: HistoricProcessInstanceQueryDto;
    /**
     * A string with delete reason.
     * @type {string}
     * @memberof DeleteHistoricProcessInstancesDto
     */
    deleteReason?: string | null;
    /**
     * If set to `false`, the request will still be successful if one ore more of the process ids are not found.
     * @type {boolean}
     * @memberof DeleteHistoricProcessInstancesDto
     */
    failIfNotExists?: boolean | null;
}
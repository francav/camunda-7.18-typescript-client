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
import { HistoricDecisionInstanceQueryDto } from './historic-decision-instance-query-dto';
/**
 * 
 * @export
 * @interface DeleteHistoricDecisionInstancesDto
 */
export interface DeleteHistoricDecisionInstancesDto {
    /**
     * A list of historic decision instance ids to delete.
     * @type {Array<string>}
     * @memberof DeleteHistoricDecisionInstancesDto
     */
    historicDecisionInstanceIds?: Array<string> | null;
    /**
     * 
     * @type {HistoricDecisionInstanceQueryDto}
     * @memberof DeleteHistoricDecisionInstancesDto
     */
    historicDecisionInstanceQuery?: HistoricDecisionInstanceQueryDto;
    /**
     * A string with delete reason.
     * @type {string}
     * @memberof DeleteHistoricDecisionInstancesDto
     */
    deleteReason?: string | null;
}

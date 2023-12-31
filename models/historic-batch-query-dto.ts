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
import { HistoricBatchQueryDtoSorting } from './historic-batch-query-dto-sorting';
/**
 * Query for the historic batches to set the removal time for.
 * @export
 * @interface HistoricBatchQueryDto
 */
export interface HistoricBatchQueryDto {
    /**
     * Filter by batch id.
     * @type {string}
     * @memberof HistoricBatchQueryDto
     */
    batchId?: string | null;
    /**
     * Filter by batch type. See the [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/batch/#creating-a-batch) for more information about batch types.
     * @type {string}
     * @memberof HistoricBatchQueryDto
     */
    type?: string | null;
    /**
     *  Filter completed or not completed batches. If the value is `true`, only completed batches, i.e., end time is set, are returned. Otherwise, if the value is `false`, only running batches, i.e., end time is null, are returned.
     * @type {boolean}
     * @memberof HistoricBatchQueryDto
     */
    completed?: boolean | null;
    /**
     * Filter by a comma-separated list of tenant ids. A batch matches if it has one of the given tenant ids.
     * @type {Array<string>}
     * @memberof HistoricBatchQueryDto
     */
    tenantIdIn?: Array<string> | null;
    /**
     * Only include batches which belong to no tenant. Value can effectively only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof HistoricBatchQueryDto
     */
    withoutTenantId?: boolean | null;
    /**
     * An array of criteria to sort the result by. Each element of the array is                        an object that specifies one ordering. The position in the array                        identifies the rank of an ordering, i.e., whether it is primary, secondary,                        etc. Has no effect for the `/count` endpoint
     * @type {Array<HistoricBatchQueryDtoSorting>}
     * @memberof HistoricBatchQueryDto
     */
    sorting?: Array<HistoricBatchQueryDtoSorting> | null;
}

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
import { HistoricJobLogQueryDtoSorting } from './historic-job-log-query-dto-sorting';
/**
 * A Historic Job Log instance query which defines a list of Historic Job Log instances
 * @export
 * @interface HistoricJobLogQueryDto
 */
export interface HistoricJobLogQueryDto {
    /**
     * Filter by historic job log id.
     * @type {string}
     * @memberof HistoricJobLogQueryDto
     */
    logId?: string | null;
    /**
     * Filter by job id.
     * @type {string}
     * @memberof HistoricJobLogQueryDto
     */
    jobId?: string | null;
    /**
     * Filter by job exception message.
     * @type {string}
     * @memberof HistoricJobLogQueryDto
     */
    jobExceptionMessage?: string | null;
    /**
     * Filter by job definition id.
     * @type {string}
     * @memberof HistoricJobLogQueryDto
     */
    jobDefinitionId?: string | null;
    /**
     * Filter by job definition type. See the [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/the-job-executor/#job-creation) for more information about job definition types.
     * @type {string}
     * @memberof HistoricJobLogQueryDto
     */
    jobDefinitionType?: string | null;
    /**
     * Filter by job definition configuration.
     * @type {string}
     * @memberof HistoricJobLogQueryDto
     */
    jobDefinitionConfiguration?: string | null;
    /**
     * Only include historic job logs which belong to one of the passed activity ids.
     * @type {Array<string>}
     * @memberof HistoricJobLogQueryDto
     */
    activityIdIn?: Array<string> | null;
    /**
     * Only include historic job logs which belong to failures of one of the passed activity ids.
     * @type {Array<string>}
     * @memberof HistoricJobLogQueryDto
     */
    failedActivityIdIn?: Array<string> | null;
    /**
     * Only include historic job logs which belong to one of the passed execution ids.
     * @type {Array<string>}
     * @memberof HistoricJobLogQueryDto
     */
    executionIdIn?: Array<string> | null;
    /**
     * Filter by process instance id.
     * @type {string}
     * @memberof HistoricJobLogQueryDto
     */
    processInstanceId?: string | null;
    /**
     * Filter by process definition id.
     * @type {string}
     * @memberof HistoricJobLogQueryDto
     */
    processDefinitionId?: string | null;
    /**
     * Filter by process definition key.
     * @type {string}
     * @memberof HistoricJobLogQueryDto
     */
    processDefinitionKey?: string | null;
    /**
     * Filter by deployment id.
     * @type {string}
     * @memberof HistoricJobLogQueryDto
     */
    deploymentId?: string | null;
    /**
     * Only include historic job log entries which belong to one of the passed and comma- separated tenant ids.
     * @type {Array<string>}
     * @memberof HistoricJobLogQueryDto
     */
    tenantIdIn?: Array<string> | null;
    /**
     * Only include historic job log entries that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof HistoricJobLogQueryDto
     */
    withoutTenantId?: boolean | null;
    /**
     * Filter by hostname.
     * @type {string}
     * @memberof HistoricJobLogQueryDto
     */
    hostname?: string | null;
    /**
     * Only include logs for which the associated job had a priority lower than or equal to the given value. Value must be a valid `long` value.
     * @type {number}
     * @memberof HistoricJobLogQueryDto
     */
    jobPriorityLowerThanOrEquals?: number | null;
    /**
     * Only include logs for which the associated job had a priority higher than or equal to the given value. Value must be a valid `long` value.
     * @type {number}
     * @memberof HistoricJobLogQueryDto
     */
    jobPriorityHigherThanOrEquals?: number | null;
    /**
     * Only include creation logs. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof HistoricJobLogQueryDto
     */
    creationLog?: boolean | null;
    /**
     * Only include failure logs. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof HistoricJobLogQueryDto
     */
    failureLog?: boolean | null;
    /**
     * Only include success logs. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof HistoricJobLogQueryDto
     */
    successLog?: boolean | null;
    /**
     * Only include deletion logs. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof HistoricJobLogQueryDto
     */
    deletionLog?: boolean | null;
    /**
     * An array of criteria to sort the result by. Each element of the array is                        an object that specifies one ordering. The position in the array                        identifies the rank of an ordering, i.e., whether it is primary, secondary,                        etc. Sorting has no effect for `count` endpoints
     * @type {Array<HistoricJobLogQueryDtoSorting>}
     * @memberof HistoricJobLogQueryDto
     */
    sorting?: Array<HistoricJobLogQueryDtoSorting> | null;
}

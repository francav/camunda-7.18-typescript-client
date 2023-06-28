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
import { BatchDto } from './batch-dto';
/**
 * 
 * @export
 * @interface BatchStatisticsDto
 */
export interface BatchStatisticsDto {
    /**
     * The id of the batch.
     * @type {string}
     * @memberof BatchStatisticsDto
     */
    id?: string | null;
    /**
     * The type of the batch. See the [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/batch/#creating-a-batch) for more information about batch types.
     * @type {string}
     * @memberof BatchStatisticsDto
     */
    type?: string | null;
    /**
     * The total jobs of a batch is the number of batch execution jobs required to complete the batch.
     * @type {number}
     * @memberof BatchStatisticsDto
     */
    totalJobs?: number | null;
    /**
     * The number of batch execution jobs already created by the seed job.
     * @type {number}
     * @memberof BatchStatisticsDto
     */
    jobsCreated?: number | null;
    /**
     * The number of batch execution jobs created per seed job invocation. The batch seed job is invoked until it has created all batch execution jobs required by the batch (see `totalJobs` property).
     * @type {number}
     * @memberof BatchStatisticsDto
     */
    batchJobsPerSeed?: number | null;
    /**
     * Every batch execution job invokes the command executed by the batch `invocationsPerBatchJob` times. E.g., for a process instance migration batch this specifies the number of process instances which are migrated per batch execution job.
     * @type {number}
     * @memberof BatchStatisticsDto
     */
    invocationsPerBatchJob?: number | null;
    /**
     * The job definition id for the seed jobs of this batch.
     * @type {string}
     * @memberof BatchStatisticsDto
     */
    seedJobDefinitionId?: string | null;
    /**
     * The job definition id for the monitor jobs of this batch.
     * @type {string}
     * @memberof BatchStatisticsDto
     */
    monitorJobDefinitionId?: string | null;
    /**
     * The job definition id for the batch execution jobs of this batch.
     * @type {string}
     * @memberof BatchStatisticsDto
     */
    batchJobDefinitionId?: string | null;
    /**
     * Indicates whether this batch is suspended or not.
     * @type {boolean}
     * @memberof BatchStatisticsDto
     */
    suspended?: boolean | null;
    /**
     * The tenant id of the batch.
     * @type {string}
     * @memberof BatchStatisticsDto
     */
    tenantId?: string | null;
    /**
     * The id of the user that created the batch.
     * @type {string}
     * @memberof BatchStatisticsDto
     */
    createUserId?: string | null;
    /**
     * The time the batch was started. Default format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`. For further information, please see the [documentation] (https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     * @type {Date}
     * @memberof BatchStatisticsDto
     */
    startTime?: Date | null;
    /**
     * The time the batch execution was started, i.e., at least one batch job has been executed. Default format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`. For further information, please see the [documentation] (https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     * @type {Date}
     * @memberof BatchStatisticsDto
     */
    executionStartTime?: Date | null;
}
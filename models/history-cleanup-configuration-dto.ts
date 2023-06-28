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
/**
 * 
 * @export
 * @interface HistoryCleanupConfigurationDto
 */
export interface HistoryCleanupConfigurationDto {
    /**
     * Start time of the current or next batch window. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @type {Date}
     * @memberof HistoryCleanupConfigurationDto
     */
    batchWindowStartTime?: Date | null;
    /**
     * End time of the current or next batch window. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @type {Date}
     * @memberof HistoryCleanupConfigurationDto
     */
    batchWindowEndTime?: Date | null;
    /**
     * Indicates whether the engine node participates in history cleanup or not. The default is `true`. Participation can be disabled via [Process Engine Configuration](https://docs.camunda.org/manual/7.18/reference/deployment-descriptors/tags/process-engine/#history-cleanup-enabled).  For more details, see [Cleanup Execution Participation per Node](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#cleanup-execution-participation-per-node).
     * @type {boolean}
     * @memberof HistoryCleanupConfigurationDto
     */
    enabled?: boolean | null;
}

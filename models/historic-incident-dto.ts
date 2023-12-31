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
 * @interface HistoricIncidentDto
 */
export interface HistoricIncidentDto {
    /**
     * The id of the incident.
     * @type {string}
     * @memberof HistoricIncidentDto
     */
    id?: string | null;
    /**
     * The key of the process definition this incident is associated with.
     * @type {string}
     * @memberof HistoricIncidentDto
     */
    processDefinitionKey?: string | null;
    /**
     * The id of the process definition this incident is associated with.
     * @type {string}
     * @memberof HistoricIncidentDto
     */
    processDefinitionId?: string | null;
    /**
     * The key of the process definition this incident is associated with.
     * @type {string}
     * @memberof HistoricIncidentDto
     */
    processInstanceId?: string | null;
    /**
     * The id of the execution this incident is associated with.
     * @type {string}
     * @memberof HistoricIncidentDto
     */
    executionId?: string | null;
    /**
     * The process instance id of the root process instance that initiated the process containing this incident.
     * @type {string}
     * @memberof HistoricIncidentDto
     */
    rootProcessInstanceId?: string | null;
    /**
     * The time this incident happened.  [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     * @type {Date}
     * @memberof HistoricIncidentDto
     */
    createTime?: Date | null;
    /**
     * The time this incident has been deleted or resolved.  [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     * @type {Date}
     * @memberof HistoricIncidentDto
     */
    endTime?: Date | null;
    /**
     * The time after which the incident should be removed by the History Cleanup job. [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     * @type {Date}
     * @memberof HistoricIncidentDto
     */
    removalTime?: Date | null;
    /**
     * The type of incident, for example: `failedJobs` will be returned in case of an incident which identified a failed job during the execution of a process instance. See the [User Guide](/manual/develop/user- guide/process-engine/incidents/#incident-types) for a list of incident types.
     * @type {string}
     * @memberof HistoricIncidentDto
     */
    incidentType?: string | null;
    /**
     * The id of the activity this incident is associated with.
     * @type {string}
     * @memberof HistoricIncidentDto
     */
    activityId?: string | null;
    /**
     * The id of the activity on which the last exception occurred.
     * @type {string}
     * @memberof HistoricIncidentDto
     */
    failedActivityId?: string | null;
    /**
     * The id of the associated cause incident which has been triggered.
     * @type {string}
     * @memberof HistoricIncidentDto
     */
    causeIncidentId?: string | null;
    /**
     * The id of the associated root cause incident which has been triggered.
     * @type {string}
     * @memberof HistoricIncidentDto
     */
    rootCauseIncidentId?: string | null;
    /**
     * The payload of this incident.
     * @type {string}
     * @memberof HistoricIncidentDto
     */
    configuration?: string | null;
    /**
     * The payload of this incident at the time when it occurred.
     * @type {string}
     * @memberof HistoricIncidentDto
     */
    historyConfiguration?: string | null;
    /**
     * The message of this incident.
     * @type {string}
     * @memberof HistoricIncidentDto
     */
    incidentMessage?: string | null;
    /**
     * The id of the tenant this incident is associated with.
     * @type {string}
     * @memberof HistoricIncidentDto
     */
    tenantId?: string | null;
    /**
     * The job definition id the incident is associated with.
     * @type {string}
     * @memberof HistoricIncidentDto
     */
    jobDefinitionId?: string | null;
    /**
     * If true, this incident is open.
     * @type {boolean}
     * @memberof HistoricIncidentDto
     */
    open?: boolean | null;
    /**
     * If true, this incident has been deleted.
     * @type {boolean}
     * @memberof HistoricIncidentDto
     */
    deleted?: boolean | null;
    /**
     * If true, this incident has been resolved.
     * @type {boolean}
     * @memberof HistoricIncidentDto
     */
    resolved?: boolean | null;
    /**
     * The annotation set to the incident.
     * @type {string}
     * @memberof HistoricIncidentDto
     */
    annotation?: string | null;
}

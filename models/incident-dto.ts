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
 * @interface IncidentDto
 */
export interface IncidentDto {
    /**
     * The id of the incident.
     * @type {string}
     * @memberof IncidentDto
     */
    id?: string | null;
    /**
     * The id of the process definition this incident is associated with.
     * @type {string}
     * @memberof IncidentDto
     */
    processDefinitionId?: string | null;
    /**
     * The id of the process instance this incident is associated with.
     * @type {string}
     * @memberof IncidentDto
     */
    processInstanceId?: string | null;
    /**
     * The id of the execution this incident is associated with.
     * @type {string}
     * @memberof IncidentDto
     */
    executionId?: string | null;
    /**
     * The time this incident happened. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @type {Date}
     * @memberof IncidentDto
     */
    incidentTimestamp?: Date | null;
    /**
     * The type of incident, for example: `failedJobs` will be returned in case of an incident which identified a failed job during the execution of a process instance. See the [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
     * @type {string}
     * @memberof IncidentDto
     */
    incidentType?: string | null;
    /**
     * The id of the activity this incident is associated with.
     * @type {string}
     * @memberof IncidentDto
     */
    activityId?: string | null;
    /**
     * The id of the activity on which the last exception occurred.
     * @type {string}
     * @memberof IncidentDto
     */
    failedActivityId?: string | null;
    /**
     * The id of the associated cause incident which has been triggered.
     * @type {string}
     * @memberof IncidentDto
     */
    causeIncidentId?: string | null;
    /**
     * The id of the associated root cause incident which has been triggered.
     * @type {string}
     * @memberof IncidentDto
     */
    rootCauseIncidentId?: string | null;
    /**
     * The payload of this incident.
     * @type {string}
     * @memberof IncidentDto
     */
    configuration?: string | null;
    /**
     * The id of the tenant this incident is associated with.
     * @type {string}
     * @memberof IncidentDto
     */
    tenantId?: string | null;
    /**
     * The message of this incident.
     * @type {string}
     * @memberof IncidentDto
     */
    incidentMessage?: string | null;
    /**
     * The job definition id the incident is associated with.
     * @type {string}
     * @memberof IncidentDto
     */
    jobDefinitionId?: string | null;
    /**
     * The annotation set to the incident.
     * @type {string}
     * @memberof IncidentDto
     */
    annotation?: string | null;
}

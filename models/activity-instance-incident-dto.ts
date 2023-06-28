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
 * An activity instance, incident pair.
 * @export
 * @interface ActivityInstanceIncidentDto
 */
export interface ActivityInstanceIncidentDto {
    /**
     * The id of the incident.
     * @type {string}
     * @memberof ActivityInstanceIncidentDto
     */
    id?: string | null;
    /**
     * The activity id in which the incident happened.
     * @type {string}
     * @memberof ActivityInstanceIncidentDto
     */
    activityId?: string | null;
}

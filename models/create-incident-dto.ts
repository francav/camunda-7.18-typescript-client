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
 * @interface CreateIncidentDto
 */
export interface CreateIncidentDto {
    /**
     * A type of the new incident.
     * @type {string}
     * @memberof CreateIncidentDto
     */
    incidentType?: string | null;
    /**
     * A configuration for the new incident.
     * @type {string}
     * @memberof CreateIncidentDto
     */
    configuration?: string | null;
    /**
     * A message for the new incident.
     * @type {string}
     * @memberof CreateIncidentDto
     */
    message?: string | null;
}
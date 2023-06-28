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
 * @interface DurationReportResultDto
 */
export interface DurationReportResultDto {
    /**
     * Specifies a timespan within a year. **Note:** The period must be interpreted in conjunction with the returned `periodUnit`.
     * @type {number}
     * @memberof DurationReportResultDto
     */
    period?: number | null;
    /**
     * The unit of the given period. Possible values are `MONTH` and `QUARTER`.
     * @type {string}
     * @memberof DurationReportResultDto
     */
    periodUnit?: DurationReportResultDtoPeriodUnitEnum;
    /**
     * The smallest duration in milliseconds of all completed process instances which were started in the given period.
     * @type {number}
     * @memberof DurationReportResultDto
     */
    minimum?: number | null;
    /**
     * The greatest duration in milliseconds of all completed process instances which were started in the given period.
     * @type {number}
     * @memberof DurationReportResultDto
     */
    maximum?: number | null;
    /**
     * The average duration in milliseconds of all completed process instances which were started in the given period.
     * @type {number}
     * @memberof DurationReportResultDto
     */
    average?: number | null;
}

/**
    * @export
    * @enum {string}
    */
export enum DurationReportResultDtoPeriodUnitEnum {
    MONTH = 'MONTH',
    QUARTER = 'QUARTER'
}

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
 * @interface HistoricDecisionOutputInstanceDto
 */
export interface HistoricDecisionOutputInstanceDto {
    /**
     * The id of the decision output value.
     * @type {string}
     * @memberof HistoricDecisionOutputInstanceDto
     */
    id?: string | null;
    /**
     * The id of the decision instance the output value belongs to.
     * @type {string}
     * @memberof HistoricDecisionOutputInstanceDto
     */
    decisionInstanceId?: string | null;
    /**
     * The id of the clause the output value belongs to.
     * @type {string}
     * @memberof HistoricDecisionOutputInstanceDto
     */
    clauseId?: string | null;
    /**
     * The name of the clause the output value belongs to.
     * @type {string}
     * @memberof HistoricDecisionOutputInstanceDto
     */
    clauseName?: string | null;
    /**
     * The id of the rule the output value belongs to.
     * @type {string}
     * @memberof HistoricDecisionOutputInstanceDto
     */
    ruleId?: string | null;
    /**
     * The order of the rule the output value belongs to.
     * @type {number}
     * @memberof HistoricDecisionOutputInstanceDto
     */
    ruleOrder?: number | null;
    /**
     * An error message in case a Java Serialized Object could not be de-serialized.
     * @type {string}
     * @memberof HistoricDecisionOutputInstanceDto
     */
    errorMessage?: string | null;
    /**
     * The name of the output variable.
     * @type {string}
     * @memberof HistoricDecisionOutputInstanceDto
     */
    variableName?: string | null;
    /**
     * The value type of the variable.
     * @type {string}
     * @memberof HistoricDecisionOutputInstanceDto
     */
    type?: string | null;
    /**
     * The time the variable was inserted.  [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     * @type {Date}
     * @memberof HistoricDecisionOutputInstanceDto
     */
    createTime?: Date | null;
    /**
     * The time after which the entry should be removed by the History Cleanup job. [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     * @type {Date}
     * @memberof HistoricDecisionOutputInstanceDto
     */
    removalTime?: Date | null;
    /**
     * The process instance id of the root process instance that initiated the process containing this entry.
     * @type {string}
     * @memberof HistoricDecisionOutputInstanceDto
     */
    rootProcessInstanceId?: string | null;
    /**
     * The variable's value. Value differs depending on the variable's type and on the `disableCustomObjectDeserialization` parameter.
     * @type {any}
     * @memberof HistoricDecisionOutputInstanceDto
     */
    value?: any;
    /**
     * A JSON object containing additional, value-type-dependent properties.  For variables of type `Object`, the following properties are returned:  * `objectTypeName`: A string representation of the object's type name.  * `serializationDataFormat`: The serialization format used to store the variable.
     * @type {{ [key: string]: any; }}
     * @memberof HistoricDecisionOutputInstanceDto
     */
    valueInfo?: { [key: string]: any; };
}
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
 * @interface HistoricDetailDto
 */
export interface HistoricDetailDto {
    /**
     * The id of the historic detail.
     * @type {string}
     * @memberof HistoricDetailDto
     */
    id?: string | null;
    /**
     * The type of the historic detail. Either `formField` for a submitted form field value or `variableUpdate` for variable updates.
     * @type {string}
     * @memberof HistoricDetailDto
     */
    type?: string | null;
    /**
     * The key of the process definition that this historic detail belongs to.
     * @type {string}
     * @memberof HistoricDetailDto
     */
    processDefinitionKey?: string | null;
    /**
     * The id of the process definition that this historic detail belongs to.
     * @type {string}
     * @memberof HistoricDetailDto
     */
    processDefinitionId?: string | null;
    /**
     * The id of the process instance the historic detail belongs to.
     * @type {string}
     * @memberof HistoricDetailDto
     */
    processInstanceId?: string | null;
    /**
     * The id of the activity instance the historic detail belongs to.
     * @type {string}
     * @memberof HistoricDetailDto
     */
    activityInstanceId?: string | null;
    /**
     * The id of the execution the historic detail belongs to.
     * @type {string}
     * @memberof HistoricDetailDto
     */
    executionId?: string | null;
    /**
     * The key of the case definition that this historic detail belongs to.
     * @type {string}
     * @memberof HistoricDetailDto
     */
    caseDefinitionKey?: string | null;
    /**
     * The id of the case definition that this historic detail belongs to.
     * @type {string}
     * @memberof HistoricDetailDto
     */
    caseDefinitionId?: string | null;
    /**
     * The id of the case instance the historic detail belongs to.
     * @type {string}
     * @memberof HistoricDetailDto
     */
    caseInstanceId?: string | null;
    /**
     * The id of the case execution the historic detail belongs to.
     * @type {string}
     * @memberof HistoricDetailDto
     */
    caseExecutionId?: string | null;
    /**
     * The id of the task the historic detail belongs to.
     * @type {string}
     * @memberof HistoricDetailDto
     */
    taskId?: string | null;
    /**
     * The id of the tenant that this historic detail belongs to.
     * @type {string}
     * @memberof HistoricDetailDto
     */
    tenantId?: string | null;
    /**
     * The id of user operation which links historic detail with [user operation log](https://docs.camunda.org/manual/7.18/reference/rest/history/user-operation-log/) entries.
     * @type {string}
     * @memberof HistoricDetailDto
     */
    userOperationId?: string | null;
    /**
     * The time when this historic detail occurred. Default [format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     * @type {Date}
     * @memberof HistoricDetailDto
     */
    time?: Date | null;
    /**
     * The time after which the historic detail should be removed by the History Cleanup job. Default [format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     * @type {Date}
     * @memberof HistoricDetailDto
     */
    removalTime?: Date | null;
    /**
     * The process instance id of the root process instance that initiated the process containing this historic detail.
     * @type {string}
     * @memberof HistoricDetailDto
     */
    rootProcessInstanceId?: string | null;
    /**
     * The id of the form field.  **Note:** This property is only set for a `HistoricVariableUpdate` historic details. In these cases, the value of the `type` property is `formField`.
     * @type {string}
     * @memberof HistoricDetailDto
     */
    fieldId?: string | null;
    /**
     * The submitted form field value. The value differs depending on the form field's type and on the `deserializeValue` parameter.  **Note:** This property is only set for a `HistoricVariableUpdate` historic details. In these cases, the value of the `type` property is `formField`.
     * @type {any}
     * @memberof HistoricDetailDto
     */
    fieldValue?: any;
    /**
     * The name of the variable which has been updated.  **Note:** This property is only set for a `HistoricVariableUpdate` historic details. In these cases, the value of the `type` property is `variableUpdate`.
     * @type {string}
     * @memberof HistoricDetailDto
     */
    variableName?: string | null;
    /**
     * The id of the associated variable instance.  **Note:** This property is only set for a `HistoricVariableUpdate` historic details. In these cases, the value of the `type` property is `variableUpdate`.
     * @type {string}
     * @memberof HistoricDetailDto
     */
    variableInstanceId?: string | null;
    /**
     * The value type of the variable.  **Note:** This property is only set for a `HistoricVariableUpdate` historic details. In these cases, the value of the `type` property is `variableUpdate`.
     * @type {string}
     * @memberof HistoricDetailDto
     */
    variableType?: string | null;
    /**
     * The variable's value. Value differs depending on the variable's type and on the deserializeValues parameter.  **Note:** This property is only set for a `HistoricVariableUpdate` historic details. In these cases, the value of the `type` property is `variableUpdate`.
     * @type {any}
     * @memberof HistoricDetailDto
     */
    value?: any;
    /**
     * A JSON object containing additional, value-type-dependent properties. For variables of type `Object`, the following properties are returned:  * `objectTypeName`: A string representation of the object's type name. * `serializationDataFormat`: The serialization format used to store the variable.  **Note:** This property is only set for a `HistoricVariableUpdate` historic details. In these cases, the value of the `type` property is `variableUpdate`.
     * @type {{ [key: string]: any; }}
     * @memberof HistoricDetailDto
     */
    valueInfo?: { [key: string]: any; };
    /**
     * Returns `true` for variable updates that contains the initial values of the variables.  **Note:** This property is only set for a `HistoricVariableUpdate` historic details. In these cases, the value of the `type` property is `variableUpdate`.
     * @type {boolean}
     * @memberof HistoricDetailDto
     */
    initial?: boolean | null;
    /**
     * The revision of the historic variable update.  **Note:** This property is only set for a `HistoricVariableUpdate` historic details. In these cases, the value of the `type` property is `variableUpdate`.
     * @type {number}
     * @memberof HistoricDetailDto
     */
    revision?: number | null;
    /**
     * An error message in case a Java Serialized Object could not be de-serialized.  **Note:** This property is only set for a `HistoricVariableUpdate` historic details. In these cases, the value of the `type` property is `variableUpdate`.
     * @type {string}
     * @memberof HistoricDetailDto
     */
    errorMessage?: string | null;
}
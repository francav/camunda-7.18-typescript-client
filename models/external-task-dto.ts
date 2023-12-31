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
 * An External Task object with the following properties
 * @export
 * @interface ExternalTaskDto
 */
export interface ExternalTaskDto {
    /**
     * The id of the activity that this external task belongs to.
     * @type {string}
     * @memberof ExternalTaskDto
     */
    activityId?: string | null;
    /**
     * The id of the activity instance that the external task belongs to.
     * @type {string}
     * @memberof ExternalTaskDto
     */
    activityInstanceId?: string | null;
    /**
     * The full error message submitted with the latest reported failure executing this task; `null` if no failure was reported previously or if no error message was submitted
     * @type {string}
     * @memberof ExternalTaskDto
     */
    errorMessage?: string | null;
    /**
     * The id of the execution that the external task belongs to.
     * @type {string}
     * @memberof ExternalTaskDto
     */
    executionId?: string | null;
    /**
     * The id of the external task.
     * @type {string}
     * @memberof ExternalTaskDto
     */
    id?: string | null;
    /**
     * The date that the task's most recent lock expires or has expired.
     * @type {Date}
     * @memberof ExternalTaskDto
     */
    lockExpirationTime?: Date | null;
    /**
     * The id of the process definition the external task is defined in.
     * @type {string}
     * @memberof ExternalTaskDto
     */
    processDefinitionId?: string | null;
    /**
     * The key of the process definition the external task is defined in.
     * @type {string}
     * @memberof ExternalTaskDto
     */
    processDefinitionKey?: string | null;
    /**
     * The version tag of the process definition the external task is defined in.
     * @type {string}
     * @memberof ExternalTaskDto
     */
    processDefinitionVersionTag?: string | null;
    /**
     * The id of the process instance the external task belongs to.
     * @type {string}
     * @memberof ExternalTaskDto
     */
    processInstanceId?: string | null;
    /**
     * The id of the tenant the external task belongs to.
     * @type {string}
     * @memberof ExternalTaskDto
     */
    tenantId?: string | null;
    /**
     * The number of retries the task currently has left.
     * @type {number}
     * @memberof ExternalTaskDto
     */
    retries?: number | null;
    /**
     * A flag indicating whether the external task is suspended or not.
     * @type {boolean}
     * @memberof ExternalTaskDto
     */
    suspended?: boolean | null;
    /**
     * The id of the worker that posesses or posessed the most recent lock.
     * @type {string}
     * @memberof ExternalTaskDto
     */
    workerId?: string | null;
    /**
     * The topic name of the external task.
     * @type {string}
     * @memberof ExternalTaskDto
     */
    topicName?: string | null;
    /**
     * The priority of the external task.
     * @type {number}
     * @memberof ExternalTaskDto
     */
    priority?: number | null;
    /**
     * The business key of the process instance the external task belongs to.
     * @type {string}
     * @memberof ExternalTaskDto
     */
    businessKey?: string | null;
}

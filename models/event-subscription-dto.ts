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
 * @interface EventSubscriptionDto
 */
export interface EventSubscriptionDto {
    /**
     * The id of the event subscription.
     * @type {string}
     * @memberof EventSubscriptionDto
     */
    id?: string | null;
    /**
     * The type of the event subscription.
     * @type {string}
     * @memberof EventSubscriptionDto
     */
    eventType?: string | null;
    /**
     * The name of the event this subscription belongs to as defined in the process model.
     * @type {string}
     * @memberof EventSubscriptionDto
     */
    eventName?: string | null;
    /**
     * The execution that is subscribed on the referenced event.
     * @type {string}
     * @memberof EventSubscriptionDto
     */
    executionId?: string | null;
    /**
     * The process instance this subscription belongs to.
     * @type {string}
     * @memberof EventSubscriptionDto
     */
    processInstanceId?: string | null;
    /**
     * The identifier of the activity that this event subscription belongs to. This could for example be the id of a receive task.
     * @type {string}
     * @memberof EventSubscriptionDto
     */
    activityId?: string | null;
    /**
     * The time this event subscription was created.
     * @type {Date}
     * @memberof EventSubscriptionDto
     */
    createdDate?: Date | null;
    /**
     * The id of the tenant this event subscription belongs to. Can be `null` if the subscription belongs to no single tenant.
     * @type {string}
     * @memberof EventSubscriptionDto
     */
    tenantId?: string | null;
}

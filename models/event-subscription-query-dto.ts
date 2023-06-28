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
import { EventSubscriptionQueryDtoSorting } from './event-subscription-query-dto-sorting';
/**
 * A event subscription query which retrieves a list of event subscriptions
 * @export
 * @interface EventSubscriptionQueryDto
 */
export interface EventSubscriptionQueryDto {
    /**
     * The id of the event subscription.
     * @type {string}
     * @memberof EventSubscriptionQueryDto
     */
    eventSubscriptionId?: string | null;
    /**
     * The name of the event this subscription belongs to as defined in the process model.
     * @type {string}
     * @memberof EventSubscriptionQueryDto
     */
    eventName?: string | null;
    /**
     * The type of the event subscription.
     * @type {string}
     * @memberof EventSubscriptionQueryDto
     */
    eventType?: EventSubscriptionQueryDtoEventTypeEnum;
    /**
     * The execution that is subscribed on the referenced event.
     * @type {string}
     * @memberof EventSubscriptionQueryDto
     */
    executionId?: string | null;
    /**
     * The process instance this subscription belongs to.
     * @type {string}
     * @memberof EventSubscriptionQueryDto
     */
    processInstanceId?: string | null;
    /**
     * The identifier of the activity that this event subscription belongs to. This could for example be the id of a receive task.
     * @type {string}
     * @memberof EventSubscriptionQueryDto
     */
    activityId?: string | null;
    /**
     * Filter by a comma-separated list of tenant ids. Only select subscriptions that belong to one of the given tenant ids.
     * @type {Array<string>}
     * @memberof EventSubscriptionQueryDto
     */
    tenantIdIn?: Array<string> | null;
    /**
     * Only select subscriptions which have no tenant id. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof EventSubscriptionQueryDto
     */
    withoutTenantId?: boolean | null;
    /**
     * Select event subscriptions which have no tenant id. Can be used in combination with tenantIdIn parameter. Value may only be `true`, as `false` is the default behavior.
     * @type {boolean}
     * @memberof EventSubscriptionQueryDto
     */
    includeEventSubscriptionsWithoutTenantId?: boolean | null;
    /**
     * Apply sorting of the result
     * @type {Array<EventSubscriptionQueryDtoSorting>}
     * @memberof EventSubscriptionQueryDto
     */
    sorting?: Array<EventSubscriptionQueryDtoSorting> | null;
}

/**
    * @export
    * @enum {string}
    */
export enum EventSubscriptionQueryDtoEventTypeEnum {
    Message = 'message',
    Signal = 'signal',
    Compensate = 'compensate',
    Conditional = 'conditional'
}


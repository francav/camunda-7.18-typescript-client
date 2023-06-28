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
import { GroupQueryDtoSorting } from './group-query-dto-sorting';
/**
 * A group instance query which defines a list of group instances
 * @export
 * @interface GroupQueryDto
 */
export interface GroupQueryDto {
    /**
     * Filter by the id of the group.
     * @type {string}
     * @memberof GroupQueryDto
     */
    id?: string | null;
    /**
     * Filter by a JSON string array of group ids.
     * @type {Array<string>}
     * @memberof GroupQueryDto
     */
    idIn?: Array<string> | null;
    /**
     * Filter by the name of the group.
     * @type {string}
     * @memberof GroupQueryDto
     */
    name?: string | null;
    /**
     * Filter by the name that the parameter is a substring of.
     * @type {string}
     * @memberof GroupQueryDto
     */
    nameLike?: string | null;
    /**
     * Filter by the type of the group.
     * @type {string}
     * @memberof GroupQueryDto
     */
    type?: string | null;
    /**
     * Only retrieve groups where the given user id is a member of.
     * @type {string}
     * @memberof GroupQueryDto
     */
    member?: string | null;
    /**
     * Only retrieve groups which are members of the given tenant.
     * @type {string}
     * @memberof GroupQueryDto
     */
    memberOfTenant?: string | null;
    /**
     * Apply sorting of the result
     * @type {Array<GroupQueryDtoSorting>}
     * @memberof GroupQueryDto
     */
    sorting?: Array<GroupQueryDtoSorting> | null;
}

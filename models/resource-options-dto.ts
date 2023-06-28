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
import { AtomLink } from './atom-link';
import { LinkableDto } from './linkable-dto';
/**
 * 
 * @export
 * @interface ResourceOptionsDto
 */
export interface ResourceOptionsDto {
    /**
     * The links associated to this resource, with `method`, `href` and `rel`.
     * @type {Array<AtomLink>}
     * @memberof ResourceOptionsDto
     */
    links?: Array<AtomLink> | null;
}

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
/**
 * 
 * @export
 * @interface LinkableDto
 */
export interface LinkableDto {
    /**
     * The links associated to this resource, with `method`, `href` and `rel`.
     * @type {Array<AtomLink>}
     * @memberof LinkableDto
     */
    links?: Array<AtomLink> | null;
}

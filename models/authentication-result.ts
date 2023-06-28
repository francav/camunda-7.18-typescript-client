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
 * @interface AuthenticationResult
 */
export interface AuthenticationResult {
    /**
     * An id of authenticated user.
     * @type {string}
     * @memberof AuthenticationResult
     */
    authenticatedUser?: string | null;
    /**
     * A flag indicating if user is authenticated.
     * @type {boolean}
     * @memberof AuthenticationResult
     */
    isAuthenticated?: boolean | null;
    /**
     * Will be null.
     * @type {Array<string>}
     * @memberof AuthenticationResult
     */
    tenants?: Array<string> | null;
    /**
     * Will be null.
     * @type {Array<string>}
     * @memberof AuthenticationResult
     */
    groups?: Array<string> | null;
}

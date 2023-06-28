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
 * @interface UserCredentialsDto
 */
export interface UserCredentialsDto {
    /**
     * The users new password.
     * @type {string}
     * @memberof UserCredentialsDto
     */
    password?: string | null;
    /**
     * The password of the authenticated user who changes the password of the user (i.e., the user with passed id as path parameter).
     * @type {string}
     * @memberof UserCredentialsDto
     */
    authenticatedUserPassword?: string | null;
}
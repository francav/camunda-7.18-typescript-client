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
import { PasswordPolicyRuleDto } from './password-policy-rule-dto';
/**
 * 
 * @export
 * @interface PasswordPolicyDto
 */
export interface PasswordPolicyDto {
    /**
     * An array of password policy rules. Each element of the array is representing one rule of the policy.
     * @type {Array<PasswordPolicyRuleDto>}
     * @memberof PasswordPolicyDto
     */
    rules?: Array<PasswordPolicyRuleDto> | null;
}

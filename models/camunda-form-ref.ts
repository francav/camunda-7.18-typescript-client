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
 * @interface CamundaFormRef
 */
export interface CamundaFormRef {
    /**
     * The key of the Camunda Form.
     * @type {string}
     * @memberof CamundaFormRef
     */
    key?: string | null;
    /**
     * The binding of the Camunda Form. Can be `latest`, `deployment` or `version`.
     * @type {string}
     * @memberof CamundaFormRef
     */
    binding?: string | null;
    /**
     * The specific version of a Camunda Form. This property is only set if `binding` is `version`.
     * @type {number}
     * @memberof CamundaFormRef
     */
    version?: number | null;
}

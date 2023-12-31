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
import { VariableValueDto } from './variable-value-dto';
/**
 * 
 * @export
 * @interface SignalDto
 */
export interface SignalDto {
    /**
     * The name of the signal to deliver.  **Note**: This property is mandatory.
     * @type {string}
     * @memberof SignalDto
     */
    name?: string;
    /**
     * Optionally specifies a single execution which is notified by the signal.  **Note**: If no execution id is defined the signal is broadcasted to all subscribed handlers. 
     * @type {string}
     * @memberof SignalDto
     */
    executionId?: string | null;
    /**
     * A JSON object containing variable key-value pairs. Each key is a variable name and each value a JSON variable value object.
     * @type {{ [key: string]: VariableValueDto; }}
     * @memberof SignalDto
     */
    variables?: { [key: string]: VariableValueDto; } | null;
    /**
     * Specifies a tenant to deliver the signal. The signal can only be received on executions or process definitions which belongs to the given tenant.  **Note**: Cannot be used in combination with executionId.
     * @type {string}
     * @memberof SignalDto
     */
    tenantId?: string | null;
    /**
     * If true the signal can only be received on executions or process definitions which belongs to no tenant. Value may not be false as this is the default behavior.  **Note**: Cannot be used in combination with `executionId`.
     * @type {boolean}
     * @memberof SignalDto
     */
    withoutTenantId?: boolean | null;
}

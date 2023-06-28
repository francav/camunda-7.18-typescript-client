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
import { ProcessInstanceModificationInstructionDto } from './process-instance-modification-instruction-dto';
import { VariableValueDto } from './variable-value-dto';
/**
 * 
 * @export
 * @interface StartProcessInstanceDto
 */
export interface StartProcessInstanceDto {
    /**
     * The business key of the process instance.
     * @type {string}
     * @memberof StartProcessInstanceDto
     */
    businessKey?: string | null;
    /**
     * 
     * @type {{ [key: string]: VariableValueDto; }}
     * @memberof StartProcessInstanceDto
     */
    variables?: { [key: string]: VariableValueDto; } | null;
    /**
     * The case instance id the process instance is to be initialized with.
     * @type {string}
     * @memberof StartProcessInstanceDto
     */
    caseInstanceId?: string | null;
    /**
     * **Optional**. A JSON array of instructions that specify which activities to start the process instance at. If this property is omitted, the process instance starts at its default blank start event.
     * @type {Array<ProcessInstanceModificationInstructionDto>}
     * @memberof StartProcessInstanceDto
     */
    startInstructions?: Array<ProcessInstanceModificationInstructionDto> | null;
    /**
     * Skip execution listener invocation for activities that are started or ended as part of this request. **Note**: This option is currently only respected when start instructions are submitted via the `startInstructions` property.
     * @type {boolean}
     * @memberof StartProcessInstanceDto
     */
    skipCustomListeners?: boolean | null;
    /**
     * Skip execution of [input/output variable mappings](https://docs.camunda.org/manual/7.18/user-guide/process-engine/variables/#input-output-variable-mapping) for activities that are started or ended as part of this request. **Note**: This option is currently only respected when start instructions are submitted via the `startInstructions` property.
     * @type {boolean}
     * @memberof StartProcessInstanceDto
     */
    skipIoMappings?: boolean | null;
    /**
     * Indicates if the variables, which was used by the process instance during execution, should be returned. Default value: `false`
     * @type {boolean}
     * @memberof StartProcessInstanceDto
     */
    withVariablesInReturn?: boolean | null;
}

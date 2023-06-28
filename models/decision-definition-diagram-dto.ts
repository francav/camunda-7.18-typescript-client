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
 * @interface DecisionDefinitionDiagramDto
 */
export interface DecisionDefinitionDiagramDto {
    /**
     * The id of the decision definition.
     * @type {string}
     * @memberof DecisionDefinitionDiagramDto
     */
    id?: string | null;
    /**
     * An escaped XML string containing the XML that this decision definition was deployed with. Carriage returns, line feeds and quotation marks are escaped.
     * @type {string}
     * @memberof DecisionDefinitionDiagramDto
     */
    dmnXml?: string | null;
}
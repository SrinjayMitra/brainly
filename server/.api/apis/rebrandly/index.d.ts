import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * Create a new link
     *
     * @summary /v1/links
     * @throws FetchError<403, types.CreateLinkResponse403> 403
     * @throws FetchError<404, types.CreateLinkResponse404> 404
     */
    createLink(body: types.CreateLinkBodyParam, metadata?: types.CreateLinkMetadataParam): Promise<FetchResponse<200, types.CreateLinkResponse200>>;
    /**
     * Get a list of links
     *
     * @summary /v1/links
     * @throws FetchError<404, types.GetLinksResponse404> 404
     */
    getLinks(metadata?: types.GetLinksMetadataParam): Promise<FetchResponse<200, types.GetLinksResponse200>>;
    /**
     * Delete multiple links in bulk
     *
     * @summary /v1/links
     */
    deleteLinks(body: types.DeleteLinksBodyParam, metadata?: types.DeleteLinksMetadataParam): Promise<FetchResponse<200, types.DeleteLinksResponse200>>;
    /**
     * Get the list of domains shared in the current workspace.
     *
     * @summary /v1/domains
     */
    getSharedDomains(metadata: types.GetSharedDomainsMetadataParam): Promise<FetchResponse<200, types.GetSharedDomainsResponse200>>;
    /**
     * Get details about a specific link (don't know the ID? Fetch it using GET /v1/links)
     *
     * @summary /v1/links/:id
     * @throws FetchError<404, types.GetLinkResponse404> 404
     */
    getLink(metadata: types.GetLinkMetadataParam): Promise<FetchResponse<200, types.GetLinkResponse200>>;
    /**
     * Update a specific link (don't know the ID? Fetch it using GET /v1/links).
     * Mind that in a Link entity you cannot change the domain and/or the slashtag after
     * creation time. You will need to create another Link.
     *
     * @summary /v1/links/:id
     * @throws FetchError<404, types.UpdateLinkEndpointResponse404> 404
     */
    updateLinkEndpoint(body: types.UpdateLinkEndpointBodyParam, metadata: types.UpdateLinkEndpointMetadataParam): Promise<FetchResponse<200, types.UpdateLinkEndpointResponse200>>;
    updateLinkEndpoint(metadata: types.UpdateLinkEndpointMetadataParam): Promise<FetchResponse<200, types.UpdateLinkEndpointResponse200>>;
    /**
     * Delete a specific link (don't know the ID? Fetch it using GET /v1/links)
     *
     * @summary /v1/links/:id
     * @throws FetchError<404, types.DeleteLinkEndpointResponse404> 404
     */
    deleteLinkEndpoint(metadata: types.DeleteLinkEndpointMetadataParam): Promise<FetchResponse<200, types.DeleteLinkEndpointResponse200>>;
    /**
     * Get details about a specific domain shared in the workspace
     *
     * @summary /v1/domains/:id
     * @throws FetchError<404, types.GetSharedDomainResponse404> 404
     */
    getSharedDomain(metadata: types.GetSharedDomainMetadataParam): Promise<FetchResponse<200, types.GetSharedDomainResponse200>>;
    /**
     * Get how many links with given filtering conditions
     *
     * @summary /v1/links/count
     */
    countLinks(metadata?: types.CountLinksMetadataParam): Promise<FetchResponse<200, types.CountLinksResponse200>>;
    /**
     * Delete a specific tag
     *
     * @summary /v1/tags/:id
     * @throws FetchError<404, types.DeleteTagResponse404> 404
     */
    deleteTag(metadata: types.DeleteTagMetadataParam): Promise<FetchResponse<200, types.DeleteTagResponse200>>;
    /**
     * Get details about a specific tag
     *
     * @summary /v1/tags/:id
     * @throws FetchError<404, types.TagDetailsEndpointResponse404> 404
     */
    tagDetailsEndpoint(metadata: types.TagDetailsEndpointMetadataParam): Promise<FetchResponse<200, types.TagDetailsEndpointResponse200>>;
    /**
     * Update a tag
     *
     * @summary /v1/tags/:id
     */
    updateTagEndpoint(body: types.UpdateTagEndpointBodyParam, metadata: types.UpdateTagEndpointMetadataParam): Promise<FetchResponse<200, types.UpdateTagEndpointResponse200>>;
    /**
     * Get how many domains with given filtering conditions
     *
     * @summary /v1/domains/count
     */
    countSharedDomains(metadata?: types.CountSharedDomainsMetadataParam): Promise<FetchResponse<200, types.CountSharedDomainsResponse200>>;
    /**
     * Get account details
     *
     * @summary /v1/account
     */
    getAccount(): Promise<FetchResponse<200, types.GetAccountResponse200>>;
    /**
     * Create a new link
     *
     * @summary /v1/links/new
     * @throws FetchError<403, types.CreateExpressLinkResponse403> 403
     * @throws FetchError<404, types.CreateExpressLinkResponse404> 404
     */
    createExpressLink(metadata: types.CreateExpressLinkMetadataParam): Promise<FetchResponse<200, types.CreateExpressLinkResponse200>>;
    /**
     * Get all workspaces you either own or partecipate into as a member
     *
     * @summary /v1/workspaces
     * @throws FetchError<404, types.GetSharedWorkspacesResponse404> 404
     */
    getSharedWorkspaces(metadata?: types.GetSharedWorkspacesMetadataParam): Promise<FetchResponse<200, types.GetSharedWorkspacesResponse200>>;
    /**
     * Get a list of tags
     *
     * @summary /v1/tags
     * @throws FetchError<404, types.GetTagsResponse404> 404
     */
    getTags(metadata?: types.GetTagsMetadataParam): Promise<FetchResponse<200, types.GetTagsResponse200>>;
    /**
     * Create a new tag
     *
     * @summary /v1/tags
     */
    createTagEndpoint(body: types.CreateTagEndpointBodyParam, metadata?: types.CreateTagEndpointMetadataParam): Promise<FetchResponse<200, types.CreateTagEndpointResponse200>>;
    /**
     * Get how many tags with given filtering conditions
     *
     * @summary /v1/tags/count
     */
    countTags(metadata?: types.CountTagsMetadataParam): Promise<FetchResponse<200, types.CountTagsResponse200>>;
    /**
     * Get all tags attached to a specific link
     *
     * @summary /v1/links/:id/tags
     * @throws FetchError<404, types.GetLinkTagsResponse404> 404
     */
    getLinkTags(metadata: types.GetLinkTagsMetadataParam): Promise<FetchResponse<200, types.GetLinkTagsResponse200>>;
    /**
     * Attach a tag to a link
     *
     * @summary /v1/links/:id/tags/:tag
     * @throws FetchError<404, types.AttachTagResponse404> 404
     */
    attachTag(metadata: types.AttachTagMetadataParam): Promise<FetchResponse<200, types.AttachTagResponse200>>;
    /**
     * Detach a tag from a link
     *
     * @summary /v1/links/:id/tags/:tag
     * @throws FetchError<404, types.DetachTagResponse404> 404
     */
    detachTag(metadata: types.DetachTagMetadataParam): Promise<FetchResponse<200, types.DetachTagResponse200>>;
    /**
     * Get all scripts attached to a specific link
     *
     * @summary /v1/links/:id/scripts
     * @throws FetchError<404, types.GetLinkScriptsResponse404> 404
     */
    getLinkScripts(metadata: types.GetLinkScriptsMetadataParam): Promise<FetchResponse<200, types.GetLinkScriptsResponse200>>;
    /**
     * Attach a retargeting script to a link
     *
     * @summary /v1/links/:id/scripts/:script
     * @throws FetchError<404, types.AttachScriptResponse404> 404
     */
    attachScript(metadata: types.AttachScriptMetadataParam): Promise<FetchResponse<200, types.AttachScriptResponse200>>;
    /**
     * Detach a script from a link
     *
     * @summary /v1/links/:id/scripts/:script
     * @throws FetchError<404, types.DetachScriptResponse404> 404
     */
    detachScript(metadata: types.DetachScriptMetadataParam): Promise<FetchResponse<200, types.DetachScriptResponse200>>;
    /**
     * Get a list of scripts
     *
     * @summary /v1/scripts
     * @throws FetchError<404, types.GetScriptsResponse404> 404
     */
    getScripts(metadata?: types.GetScriptsMetadataParam): Promise<FetchResponse<200, types.GetScriptsResponse200>>;
    /**
     * Create a new script
     *
     * @summary /v1/scripts
     */
    createScriptEndpoint(body: types.CreateScriptEndpointBodyParam, metadata?: types.CreateScriptEndpointMetadataParam): Promise<FetchResponse<200, types.CreateScriptEndpointResponse200>>;
    /**
     * Get details about a specific script
     *
     * @summary /v1/scripts/:id
     * @throws FetchError<404, types.GetScriptResponse404> 404
     */
    getScript(metadata: types.GetScriptMetadataParam): Promise<FetchResponse<200, types.GetScriptResponse200>>;
    /**
     * Delete a specific script
     *
     * @summary /v1/scripts/:id
     * @throws FetchError<404, types.DeleteScriptEndpointResponse404> 404
     */
    deleteScriptEndpoint(metadata: types.DeleteScriptEndpointMetadataParam): Promise<FetchResponse<200, types.DeleteScriptEndpointResponse200>>;
    /**
     * Update a script
     *
     * @summary /v1/scripts/:id
     */
    updateScriptEndpoint(body: types.UpdateScriptEndpointBodyParam, metadata: types.UpdateScriptEndpointMetadataParam): Promise<FetchResponse<200, types.UpdateScriptEndpointResponse200>>;
    /**
     * Get how many scripts with given filtering conditions
     *
     * @summary /v1/scripts/count
     */
    countScripts(metadata?: types.CountScriptsMetadataParam): Promise<FetchResponse<200, types.CountScriptsResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;

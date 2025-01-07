"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'rebrandly/2021-12-01 (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
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
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
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
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Create a new link
     *
     * @summary /v1/links
     * @throws FetchError<403, types.CreateLinkResponse403> 403
     * @throws FetchError<404, types.CreateLinkResponse404> 404
     */
    SDK.prototype.createLink = function (body, metadata) {
        return this.core.fetch('/v1/links', 'post', body, metadata);
    };
    /**
     * Get a list of links
     *
     * @summary /v1/links
     * @throws FetchError<404, types.GetLinksResponse404> 404
     */
    SDK.prototype.getLinks = function (metadata) {
        return this.core.fetch('/v1/links', 'get', metadata);
    };
    /**
     * Delete multiple links in bulk
     *
     * @summary /v1/links
     */
    SDK.prototype.deleteLinks = function (body, metadata) {
        return this.core.fetch('/v1/links', 'delete', body, metadata);
    };
    /**
     * Get the list of domains shared in the current workspace.
     *
     * @summary /v1/domains
     */
    SDK.prototype.getSharedDomains = function (metadata) {
        return this.core.fetch('/v1/domains', 'get', metadata);
    };
    /**
     * Get details about a specific link (don't know the ID? Fetch it using GET /v1/links)
     *
     * @summary /v1/links/:id
     * @throws FetchError<404, types.GetLinkResponse404> 404
     */
    SDK.prototype.getLink = function (metadata) {
        return this.core.fetch('/v1/links/{id}', 'get', metadata);
    };
    SDK.prototype.updateLinkEndpoint = function (body, metadata) {
        return this.core.fetch('/v1/links/{id}', 'post', body, metadata);
    };
    /**
     * Delete a specific link (don't know the ID? Fetch it using GET /v1/links)
     *
     * @summary /v1/links/:id
     * @throws FetchError<404, types.DeleteLinkEndpointResponse404> 404
     */
    SDK.prototype.deleteLinkEndpoint = function (metadata) {
        return this.core.fetch('/v1/links/{id}', 'delete', metadata);
    };
    /**
     * Get details about a specific domain shared in the workspace
     *
     * @summary /v1/domains/:id
     * @throws FetchError<404, types.GetSharedDomainResponse404> 404
     */
    SDK.prototype.getSharedDomain = function (metadata) {
        return this.core.fetch('/v1/domains/{id}', 'get', metadata);
    };
    /**
     * Get how many links with given filtering conditions
     *
     * @summary /v1/links/count
     */
    SDK.prototype.countLinks = function (metadata) {
        return this.core.fetch('/v1/links/count', 'get', metadata);
    };
    /**
     * Delete a specific tag
     *
     * @summary /v1/tags/:id
     * @throws FetchError<404, types.DeleteTagResponse404> 404
     */
    SDK.prototype.deleteTag = function (metadata) {
        return this.core.fetch('/v1/tags/{id}', 'delete', metadata);
    };
    /**
     * Get details about a specific tag
     *
     * @summary /v1/tags/:id
     * @throws FetchError<404, types.TagDetailsEndpointResponse404> 404
     */
    SDK.prototype.tagDetailsEndpoint = function (metadata) {
        return this.core.fetch('/v1/tags/{id}', 'get', metadata);
    };
    /**
     * Update a tag
     *
     * @summary /v1/tags/:id
     */
    SDK.prototype.updateTagEndpoint = function (body, metadata) {
        return this.core.fetch('/v1/tags/{id}', 'post', body, metadata);
    };
    /**
     * Get how many domains with given filtering conditions
     *
     * @summary /v1/domains/count
     */
    SDK.prototype.countSharedDomains = function (metadata) {
        return this.core.fetch('/v1/domains/count', 'get', metadata);
    };
    /**
     * Get account details
     *
     * @summary /v1/account
     */
    SDK.prototype.getAccount = function () {
        return this.core.fetch('/v1/account', 'get');
    };
    /**
     * Create a new link
     *
     * @summary /v1/links/new
     * @throws FetchError<403, types.CreateExpressLinkResponse403> 403
     * @throws FetchError<404, types.CreateExpressLinkResponse404> 404
     */
    SDK.prototype.createExpressLink = function (metadata) {
        return this.core.fetch('/v1/links/new', 'get', metadata);
    };
    /**
     * Get all workspaces you either own or partecipate into as a member
     *
     * @summary /v1/workspaces
     * @throws FetchError<404, types.GetSharedWorkspacesResponse404> 404
     */
    SDK.prototype.getSharedWorkspaces = function (metadata) {
        return this.core.fetch('/v1/workspaces', 'get', metadata);
    };
    /**
     * Get a list of tags
     *
     * @summary /v1/tags
     * @throws FetchError<404, types.GetTagsResponse404> 404
     */
    SDK.prototype.getTags = function (metadata) {
        return this.core.fetch('/v1/tags', 'get', metadata);
    };
    /**
     * Create a new tag
     *
     * @summary /v1/tags
     */
    SDK.prototype.createTagEndpoint = function (body, metadata) {
        return this.core.fetch('/v1/tags', 'post', body, metadata);
    };
    /**
     * Get how many tags with given filtering conditions
     *
     * @summary /v1/tags/count
     */
    SDK.prototype.countTags = function (metadata) {
        return this.core.fetch('/v1/tags/count', 'get', metadata);
    };
    /**
     * Get all tags attached to a specific link
     *
     * @summary /v1/links/:id/tags
     * @throws FetchError<404, types.GetLinkTagsResponse404> 404
     */
    SDK.prototype.getLinkTags = function (metadata) {
        return this.core.fetch('/v1/links/{id}/tags', 'get', metadata);
    };
    /**
     * Attach a tag to a link
     *
     * @summary /v1/links/:id/tags/:tag
     * @throws FetchError<404, types.AttachTagResponse404> 404
     */
    SDK.prototype.attachTag = function (metadata) {
        return this.core.fetch('/v1/links/{id}/tags/{tag}', 'post', metadata);
    };
    /**
     * Detach a tag from a link
     *
     * @summary /v1/links/:id/tags/:tag
     * @throws FetchError<404, types.DetachTagResponse404> 404
     */
    SDK.prototype.detachTag = function (metadata) {
        return this.core.fetch('/v1/links/{id}/tags/{tag}', 'delete', metadata);
    };
    /**
     * Get all scripts attached to a specific link
     *
     * @summary /v1/links/:id/scripts
     * @throws FetchError<404, types.GetLinkScriptsResponse404> 404
     */
    SDK.prototype.getLinkScripts = function (metadata) {
        return this.core.fetch('/v1/links/{id}/scripts', 'get', metadata);
    };
    /**
     * Attach a retargeting script to a link
     *
     * @summary /v1/links/:id/scripts/:script
     * @throws FetchError<404, types.AttachScriptResponse404> 404
     */
    SDK.prototype.attachScript = function (metadata) {
        return this.core.fetch('/v1/links/{id}/scripts/{script}', 'post', metadata);
    };
    /**
     * Detach a script from a link
     *
     * @summary /v1/links/:id/scripts/:script
     * @throws FetchError<404, types.DetachScriptResponse404> 404
     */
    SDK.prototype.detachScript = function (metadata) {
        return this.core.fetch('/v1/links/{id}/scripts/{script}', 'delete', metadata);
    };
    /**
     * Get a list of scripts
     *
     * @summary /v1/scripts
     * @throws FetchError<404, types.GetScriptsResponse404> 404
     */
    SDK.prototype.getScripts = function (metadata) {
        return this.core.fetch('/v1/scripts', 'get', metadata);
    };
    /**
     * Create a new script
     *
     * @summary /v1/scripts
     */
    SDK.prototype.createScriptEndpoint = function (body, metadata) {
        return this.core.fetch('/v1/scripts', 'post', body, metadata);
    };
    /**
     * Get details about a specific script
     *
     * @summary /v1/scripts/:id
     * @throws FetchError<404, types.GetScriptResponse404> 404
     */
    SDK.prototype.getScript = function (metadata) {
        return this.core.fetch('/v1/scripts/{id}', 'get', metadata);
    };
    /**
     * Delete a specific script
     *
     * @summary /v1/scripts/:id
     * @throws FetchError<404, types.DeleteScriptEndpointResponse404> 404
     */
    SDK.prototype.deleteScriptEndpoint = function (metadata) {
        return this.core.fetch('/v1/scripts/{id}', 'delete', metadata);
    };
    /**
     * Update a script
     *
     * @summary /v1/scripts/:id
     */
    SDK.prototype.updateScriptEndpoint = function (body, metadata) {
        return this.core.fetch('/v1/scripts/{id}', 'post', body, metadata);
    };
    /**
     * Get how many scripts with given filtering conditions
     *
     * @summary /v1/scripts/count
     */
    SDK.prototype.countScripts = function (metadata) {
        return this.core.fetch('/v1/scripts/count', 'get', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;

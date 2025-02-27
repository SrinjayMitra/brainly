import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';
export type AttachScriptMetadataParam = FromSchema<typeof schemas.AttachScript.metadata>;
export type AttachScriptResponse200 = FromSchema<typeof schemas.AttachScript.response['200']>;
export type AttachScriptResponse404 = FromSchema<typeof schemas.AttachScript.response['404']>;
export type AttachTagMetadataParam = FromSchema<typeof schemas.AttachTag.metadata>;
export type AttachTagResponse200 = FromSchema<typeof schemas.AttachTag.response['200']>;
export type AttachTagResponse404 = FromSchema<typeof schemas.AttachTag.response['404']>;
export type CountLinksMetadataParam = FromSchema<typeof schemas.CountLinks.metadata>;
export type CountLinksResponse200 = FromSchema<typeof schemas.CountLinks.response['200']>;
export type CountScriptsMetadataParam = FromSchema<typeof schemas.CountScripts.metadata>;
export type CountScriptsResponse200 = FromSchema<typeof schemas.CountScripts.response['200']>;
export type CountSharedDomainsMetadataParam = FromSchema<typeof schemas.CountSharedDomains.metadata>;
export type CountSharedDomainsResponse200 = FromSchema<typeof schemas.CountSharedDomains.response['200']>;
export type CountTagsMetadataParam = FromSchema<typeof schemas.CountTags.metadata>;
export type CountTagsResponse200 = FromSchema<typeof schemas.CountTags.response['200']>;
export type CreateExpressLinkMetadataParam = FromSchema<typeof schemas.CreateExpressLink.metadata>;
export type CreateExpressLinkResponse200 = FromSchema<typeof schemas.CreateExpressLink.response['200']>;
export type CreateExpressLinkResponse403 = FromSchema<typeof schemas.CreateExpressLink.response['403']>;
export type CreateExpressLinkResponse404 = FromSchema<typeof schemas.CreateExpressLink.response['404']>;
export type CreateLinkBodyParam = FromSchema<typeof schemas.CreateLink.body>;
export type CreateLinkMetadataParam = FromSchema<typeof schemas.CreateLink.metadata>;
export type CreateLinkResponse200 = FromSchema<typeof schemas.CreateLink.response['200']>;
export type CreateLinkResponse403 = FromSchema<typeof schemas.CreateLink.response['403']>;
export type CreateLinkResponse404 = FromSchema<typeof schemas.CreateLink.response['404']>;
export type CreateScriptEndpointBodyParam = FromSchema<typeof schemas.CreateScriptEndpoint.body>;
export type CreateScriptEndpointMetadataParam = FromSchema<typeof schemas.CreateScriptEndpoint.metadata>;
export type CreateScriptEndpointResponse200 = FromSchema<typeof schemas.CreateScriptEndpoint.response['200']>;
export type CreateTagEndpointBodyParam = FromSchema<typeof schemas.CreateTagEndpoint.body>;
export type CreateTagEndpointMetadataParam = FromSchema<typeof schemas.CreateTagEndpoint.metadata>;
export type CreateTagEndpointResponse200 = FromSchema<typeof schemas.CreateTagEndpoint.response['200']>;
export type DeleteLinkEndpointMetadataParam = FromSchema<typeof schemas.DeleteLinkEndpoint.metadata>;
export type DeleteLinkEndpointResponse200 = FromSchema<typeof schemas.DeleteLinkEndpoint.response['200']>;
export type DeleteLinkEndpointResponse404 = FromSchema<typeof schemas.DeleteLinkEndpoint.response['404']>;
export type DeleteLinksBodyParam = FromSchema<typeof schemas.DeleteLinks.body>;
export type DeleteLinksMetadataParam = FromSchema<typeof schemas.DeleteLinks.metadata>;
export type DeleteLinksResponse200 = FromSchema<typeof schemas.DeleteLinks.response['200']>;
export type DeleteScriptEndpointMetadataParam = FromSchema<typeof schemas.DeleteScriptEndpoint.metadata>;
export type DeleteScriptEndpointResponse200 = FromSchema<typeof schemas.DeleteScriptEndpoint.response['200']>;
export type DeleteScriptEndpointResponse404 = FromSchema<typeof schemas.DeleteScriptEndpoint.response['404']>;
export type DeleteTagMetadataParam = FromSchema<typeof schemas.DeleteTag.metadata>;
export type DeleteTagResponse200 = FromSchema<typeof schemas.DeleteTag.response['200']>;
export type DeleteTagResponse404 = FromSchema<typeof schemas.DeleteTag.response['404']>;
export type DetachScriptMetadataParam = FromSchema<typeof schemas.DetachScript.metadata>;
export type DetachScriptResponse200 = FromSchema<typeof schemas.DetachScript.response['200']>;
export type DetachScriptResponse404 = FromSchema<typeof schemas.DetachScript.response['404']>;
export type DetachTagMetadataParam = FromSchema<typeof schemas.DetachTag.metadata>;
export type DetachTagResponse200 = FromSchema<typeof schemas.DetachTag.response['200']>;
export type DetachTagResponse404 = FromSchema<typeof schemas.DetachTag.response['404']>;
export type GetAccountResponse200 = FromSchema<typeof schemas.GetAccount.response['200']>;
export type GetLinkMetadataParam = FromSchema<typeof schemas.GetLink.metadata>;
export type GetLinkResponse200 = FromSchema<typeof schemas.GetLink.response['200']>;
export type GetLinkResponse404 = FromSchema<typeof schemas.GetLink.response['404']>;
export type GetLinkScriptsMetadataParam = FromSchema<typeof schemas.GetLinkScripts.metadata>;
export type GetLinkScriptsResponse200 = FromSchema<typeof schemas.GetLinkScripts.response['200']>;
export type GetLinkScriptsResponse404 = FromSchema<typeof schemas.GetLinkScripts.response['404']>;
export type GetLinkTagsMetadataParam = FromSchema<typeof schemas.GetLinkTags.metadata>;
export type GetLinkTagsResponse200 = FromSchema<typeof schemas.GetLinkTags.response['200']>;
export type GetLinkTagsResponse404 = FromSchema<typeof schemas.GetLinkTags.response['404']>;
export type GetLinksMetadataParam = FromSchema<typeof schemas.GetLinks.metadata>;
export type GetLinksResponse200 = FromSchema<typeof schemas.GetLinks.response['200']>;
export type GetLinksResponse404 = FromSchema<typeof schemas.GetLinks.response['404']>;
export type GetScriptMetadataParam = FromSchema<typeof schemas.GetScript.metadata>;
export type GetScriptResponse200 = FromSchema<typeof schemas.GetScript.response['200']>;
export type GetScriptResponse404 = FromSchema<typeof schemas.GetScript.response['404']>;
export type GetScriptsMetadataParam = FromSchema<typeof schemas.GetScripts.metadata>;
export type GetScriptsResponse200 = FromSchema<typeof schemas.GetScripts.response['200']>;
export type GetScriptsResponse404 = FromSchema<typeof schemas.GetScripts.response['404']>;
export type GetSharedDomainMetadataParam = FromSchema<typeof schemas.GetSharedDomain.metadata>;
export type GetSharedDomainResponse200 = FromSchema<typeof schemas.GetSharedDomain.response['200']>;
export type GetSharedDomainResponse404 = FromSchema<typeof schemas.GetSharedDomain.response['404']>;
export type GetSharedDomainsMetadataParam = FromSchema<typeof schemas.GetSharedDomains.metadata>;
export type GetSharedDomainsResponse200 = FromSchema<typeof schemas.GetSharedDomains.response['200']>;
export type GetSharedWorkspacesMetadataParam = FromSchema<typeof schemas.GetSharedWorkspaces.metadata>;
export type GetSharedWorkspacesResponse200 = FromSchema<typeof schemas.GetSharedWorkspaces.response['200']>;
export type GetSharedWorkspacesResponse404 = FromSchema<typeof schemas.GetSharedWorkspaces.response['404']>;
export type GetTagsMetadataParam = FromSchema<typeof schemas.GetTags.metadata>;
export type GetTagsResponse200 = FromSchema<typeof schemas.GetTags.response['200']>;
export type GetTagsResponse404 = FromSchema<typeof schemas.GetTags.response['404']>;
export type TagDetailsEndpointMetadataParam = FromSchema<typeof schemas.TagDetailsEndpoint.metadata>;
export type TagDetailsEndpointResponse200 = FromSchema<typeof schemas.TagDetailsEndpoint.response['200']>;
export type TagDetailsEndpointResponse404 = FromSchema<typeof schemas.TagDetailsEndpoint.response['404']>;
export type UpdateLinkEndpointBodyParam = FromSchema<typeof schemas.UpdateLinkEndpoint.body>;
export type UpdateLinkEndpointMetadataParam = FromSchema<typeof schemas.UpdateLinkEndpoint.metadata>;
export type UpdateLinkEndpointResponse200 = FromSchema<typeof schemas.UpdateLinkEndpoint.response['200']>;
export type UpdateLinkEndpointResponse404 = FromSchema<typeof schemas.UpdateLinkEndpoint.response['404']>;
export type UpdateScriptEndpointBodyParam = FromSchema<typeof schemas.UpdateScriptEndpoint.body>;
export type UpdateScriptEndpointMetadataParam = FromSchema<typeof schemas.UpdateScriptEndpoint.metadata>;
export type UpdateScriptEndpointResponse200 = FromSchema<typeof schemas.UpdateScriptEndpoint.response['200']>;
export type UpdateTagEndpointBodyParam = FromSchema<typeof schemas.UpdateTagEndpoint.body>;
export type UpdateTagEndpointMetadataParam = FromSchema<typeof schemas.UpdateTagEndpoint.metadata>;
export type UpdateTagEndpointResponse200 = FromSchema<typeof schemas.UpdateTagEndpoint.response['200']>;

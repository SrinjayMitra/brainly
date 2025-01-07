declare const AttachScript: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique identifier of the Link resource";
                };
                readonly script: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique identifier of the Script resource";
                };
            };
            readonly required: readonly ["id", "script"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which workspace id the link and tag belong to. No workspace specified will select main workspace.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly property: {
                    readonly type: "string";
                    readonly examples: readonly ["domain.id"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not found"];
                };
                readonly code: {
                    readonly type: "string";
                    readonly examples: readonly ["NotFound"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AttachTag: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique identifier of the Link resource";
                };
                readonly tag: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique identifier of the Tag resource";
                };
            };
            readonly required: readonly ["id", "tag"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which workspace id the link and tag belong to. No workspace specified will select main workspace.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly property: {
                    readonly type: "string";
                    readonly examples: readonly ["domain.id"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not found"];
                };
                readonly code: {
                    readonly type: "string";
                    readonly examples: readonly ["NotFound"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CountLinks: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly favourite: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter branded short links depnding on the favourite (loved) property";
                };
                readonly "domain.id": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter branded short links which refer to a specific branded domain id";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which workspace id to filter links by. No workspace specified will select default workspace.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly count: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [42];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CountScripts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which workspace id to filter scripts by. No workspace specified will select main workspace.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly count: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [42];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CountSharedDomains: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly active: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter branded domains depending on whether they can be used to branded short links or not";
                };
                readonly type: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter branded domains depending on their type (own by `user` or `service` domains like rebrand.ly)";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which workspace id to filter domains by. No workspace specified will select main workspace.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly count: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [42];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CountTags: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which workspace id to filter tags by. No workspace specified will select main workspace.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly count: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [42];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateExpressLink: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly destination: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The destination URL you want your branded short link to point to";
                };
                readonly slashtag: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The keyword portion of your branded short link";
                };
                readonly title: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A title you assign to the branded short link in order to remember what's behind it";
                };
                readonly "domain[id]": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The unique id of the branded domain. If not specified, rebrand.ly is used";
                };
                readonly "domain[fullName]": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The unique name of the branded domain, to be used in place of domain[id] in special cases. Precedence will be given to domain[id] value.";
                };
            };
            readonly required: readonly ["destination"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which workspace id to be used to create new links. No workspace specified will select default workspace.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["fffa4cc5b6ee45d6g7897b06ac2d16af"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["What is Rebrandly"];
                };
                readonly slashtag: {
                    readonly type: "string";
                    readonly examples: readonly ["video"];
                };
                readonly destination: {
                    readonly type: "string";
                    readonly examples: readonly ["https://www.youtube.com/watch?v=3VmtibKpmXI"];
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly examples: readonly ["2016-07-13T10:54:12.000Z"];
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly examples: readonly ["2016-07-13T10:54:12.000Z"];
                };
                readonly shortUrl: {
                    readonly type: "string";
                    readonly examples: readonly ["rebrand.ly/video"];
                };
                readonly domain: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly examples: readonly ["8f104cc5b6ee4a4ba7897b06ac2ddcfb"];
                        };
                        readonly fullName: {
                            readonly type: "string";
                            readonly examples: readonly ["rebrand.ly"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly property: {
                    readonly type: "string";
                    readonly examples: readonly ["slashtag"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Already exists"];
                };
                readonly code: {
                    readonly type: "string";
                    readonly examples: readonly ["AlreadyExists"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly property: {
                    readonly type: "string";
                    readonly examples: readonly ["domain.id"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not found"];
                };
                readonly code: {
                    readonly type: "string";
                    readonly examples: readonly ["NotFound"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateLink: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["destination"];
        readonly properties: {
            readonly destination: {
                readonly type: "string";
                readonly description: "The destination URL you want your branded short link to point to. Example: https://google.com";
            };
            readonly slashtag: {
                readonly type: "string";
                readonly description: "The keyword portion of your branded short link. A random one (as short as possible according to the branded domain you use) will be auto-generated if you do not specify one.";
            };
            readonly domain: {
                readonly type: "object";
                readonly description: "A reference to the Branded Domain resource for this branded short link. Specify either domain id or domain fullName or both. Make sure the domain is already active/verified and shared in this workspace.";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "Branded domain's unique identifier";
                    };
                    readonly fullName: {
                        readonly type: "string";
                        readonly description: "Branded domain's FQDN";
                    };
                };
            };
            readonly title: {
                readonly type: "string";
                readonly description: "A title you assign to the branded short link in order to remember what's behind it. A random title will be assigned to the link if you do not specify one.";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which workspace id to be used to create links. No workspace specified will select default workspace, but we recommend your integration is workspaces-aware.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["fffa4cc5b6ee45d6g7897b06ac2d16af"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["What is Rebrandly"];
                };
                readonly slashtag: {
                    readonly type: "string";
                    readonly examples: readonly ["video"];
                };
                readonly destination: {
                    readonly type: "string";
                    readonly examples: readonly ["https://www.youtube.com/watch?v=3VmtibKpmXI"];
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly examples: readonly ["2016-07-13T10:54:12.000Z"];
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly examples: readonly ["2016-07-13T10:54:12.000Z"];
                };
                readonly shortUrl: {
                    readonly type: "string";
                    readonly examples: readonly ["rebrand.ly/video"];
                };
                readonly domain: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly examples: readonly ["8f104cc5b6ee4a4ba7897b06ac2ddcfb"];
                        };
                        readonly fullName: {
                            readonly type: "string";
                            readonly examples: readonly ["rebrand.ly"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly property: {
                    readonly type: "string";
                    readonly examples: readonly ["slashtag"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Already exists"];
                };
                readonly code: {
                    readonly type: "string";
                    readonly examples: readonly ["AlreadyExists"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly property: {
                    readonly type: "string";
                    readonly examples: readonly ["domain.id"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not found"];
                };
                readonly code: {
                    readonly type: "string";
                    readonly examples: readonly ["NotFound"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateScriptEndpoint: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["name", "value"];
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "The name you want to associated to the script";
            };
            readonly value: {
                readonly type: "string";
                readonly description: "A javascript snippet (including <script> and </script> HTML tags)";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which workspace id to be used to create scripts. No workspace specified will select main workspace.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["ftag4cc5b6ee45d6g7897b06ac2d16af"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Test alert"];
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["https://custom.rebrandly.com/user/abcdecc5b6ee45d6g7897b06ac2d1xyz"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateTagEndpoint: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["name", "color"];
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "The name you want to associated to the tag";
            };
            readonly color: {
                readonly type: "string";
                readonly description: "The hexadecimal code for a color you want to assign to the tag";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which workspace id to be used to create tags. No workspace specified will select main workspace.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["fffa4cc5b6ee45d6g7897b06ac2d16af"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["promo"];
                };
                readonly color: {
                    readonly type: "string";
                    readonly examples: readonly ["FF0044"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteLinkEndpoint: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique identifier of the link you want to delete";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which workspace id to filter links by. No workspace specified will select main workspace.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["fffa4cc5b6ee45d6g7897b06ac2d16af"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["What is Rebrandly"];
                };
                readonly slashtag: {
                    readonly type: "string";
                    readonly examples: readonly ["video"];
                };
                readonly destination: {
                    readonly type: "string";
                    readonly examples: readonly ["https://www.youtube.com/watch?v=3VmtibKpmXI"];
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly examples: readonly ["2016-07-13T10:54:12.000Z"];
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly examples: readonly ["2016-07-13T10:54:12.000Z"];
                };
                readonly shortUrl: {
                    readonly type: "string";
                    readonly examples: readonly ["rebrand.ly/video"];
                };
                readonly domain: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly examples: readonly ["8f104cc5b6ee4a4ba7897b06ac2ddcfb"];
                        };
                        readonly fullName: {
                            readonly type: "string";
                            readonly examples: readonly ["rebrand.ly"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly property: {
                    readonly type: "string";
                    readonly examples: readonly ["domain.id"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not found"];
                };
                readonly code: {
                    readonly type: "string";
                    readonly examples: readonly ["NotFound"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteLinks: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["links"];
        readonly properties: {
            readonly links: {
                readonly type: "array";
                readonly description: "List of ids (max 25) of the link you want to delete";
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the workspace where links were created. No workspace specified will select default workspace, but we recommend your integration is workspaces-aware.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly links: {
                    readonly type: "array";
                    readonly description: "List of ids of the link that have just been deleted";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly count: {
                    readonly type: "integer";
                    readonly description: "Number of links that have just been deleted";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteScriptEndpoint: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique identifier of the script you want to delete";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which workspace id to filter scripts by. No workspace specified will select main workspace.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["ftag4cc5b6ee45d6g7897b06ac2d16af"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Test alert"];
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["https://custom.rebrandly.com/user/abcdecc5b6ee45d6g7897b06ac2d1xyz"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly property: {
                    readonly type: "string";
                    readonly examples: readonly ["domain.id"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not found"];
                };
                readonly code: {
                    readonly type: "string";
                    readonly examples: readonly ["NotFound"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteTag: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique identifier of the tag you want to delete";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which workspace id to filter tags by. No workspace specified will select main workspace.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["fffa4cc5b6ee45d6g7897b06ac2d16af"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["promo"];
                };
                readonly color: {
                    readonly type: "string";
                    readonly examples: readonly ["FF0044"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly property: {
                    readonly type: "string";
                    readonly examples: readonly ["domain.id"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not found"];
                };
                readonly code: {
                    readonly type: "string";
                    readonly examples: readonly ["NotFound"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DetachScript: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique identifier of the Link resource";
                };
                readonly script: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique identifier of the Script resource";
                };
            };
            readonly required: readonly ["id", "script"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which workspace id the link and tag belong to. No workspace specified will select main workspace.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly property: {
                    readonly type: "string";
                    readonly examples: readonly ["domain.id"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not found"];
                };
                readonly code: {
                    readonly type: "string";
                    readonly examples: readonly ["NotFound"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DetachTag: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique identifier of the Link resource";
                };
                readonly tag: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique identifier of the Tag resource";
                };
            };
            readonly required: readonly ["id", "tag"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which workspace id the link and tag belong to. No workspace specified will select main workspace.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly property: {
                    readonly type: "string";
                    readonly examples: readonly ["domain.id"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not found"];
                };
                readonly code: {
                    readonly type: "string";
                    readonly examples: readonly ["NotFound"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAccount: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["3aehje9d536s46d59ba5bcf49b582ear"];
                };
                readonly fullName: {
                    readonly type: "string";
                    readonly examples: readonly ["Stanford University"];
                };
                readonly username: {
                    readonly type: "string";
                    readonly examples: readonly ["fake@stanford.edu"];
                };
                readonly email: {
                    readonly type: "string";
                    readonly examples: readonly ["fake@stanford.edu"];
                };
                readonly avatarUrl: {
                    readonly type: "string";
                    readonly examples: readonly ["https://avatars.rebrandly.com/account/3aehje9d536s46d59ba5bcf49b582ear"];
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly examples: readonly ["2016-07-13T10:54:12.000Z"];
                };
                readonly subscription: {
                    readonly type: "object";
                    readonly properties: {
                        readonly createdAt: {
                            readonly type: "string";
                            readonly examples: readonly ["2016-07-13T10:54:12.000Z"];
                        };
                        readonly limits: {
                            readonly type: "object";
                            readonly properties: {
                                readonly links: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly used: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [7504];
                                        };
                                        readonly max: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [10000];
                                        };
                                    };
                                };
                                readonly domains: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly used: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [17];
                                        };
                                        readonly max: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [100];
                                        };
                                    };
                                };
                                readonly workspaces: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly used: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [1];
                                        };
                                        readonly max: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [50];
                                        };
                                    };
                                };
                                readonly teammates: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly used: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [5];
                                        };
                                        readonly max: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [100];
                                        };
                                    };
                                };
                                readonly tags: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly used: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [0];
                                        };
                                        readonly max: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [50];
                                        };
                                    };
                                };
                                readonly scripts: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly used: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [0];
                                        };
                                        readonly max: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [50];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetLink: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique identifier of the branded short link you want to get details for";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Workspace where the link has been created";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["fffa4cc5b6ee45d6g7897b06ac2d16af"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["What is Rebrandly"];
                };
                readonly slashtag: {
                    readonly type: "string";
                    readonly examples: readonly ["video"];
                };
                readonly destination: {
                    readonly type: "string";
                    readonly examples: readonly ["https://www.youtube.com/watch?v=3VmtibKpmXI"];
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly examples: readonly ["2016-07-13T10:54:12.000Z"];
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly examples: readonly ["2016-07-13T10:54:12.000Z"];
                };
                readonly shortUrl: {
                    readonly type: "string";
                    readonly examples: readonly ["rebrand.ly/video"];
                };
                readonly domain: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly examples: readonly ["8f104cc5b6ee4a4ba7897b06ac2ddcfb"];
                        };
                        readonly fullName: {
                            readonly type: "string";
                            readonly examples: readonly ["rebrand.ly"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly property: {
                    readonly type: "string";
                    readonly examples: readonly ["domain.id"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not found"];
                };
                readonly code: {
                    readonly type: "string";
                    readonly examples: readonly ["NotFound"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetLinkScripts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique identifier of the Link resource";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly orderDir: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sorting direction to apply to your scripts collection";
                };
                readonly orderBy: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sorting criteria to apply to your scripts collection. The only available option is by `name` property.";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 25;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "How many scripts to load (max: 25)";
                };
                readonly last: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the last script you fetched, see Infinite Scrolling section";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which workspace id to filter links by. No workspace specified will select main workspace.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly examples: readonly ["ftag4cc5b6ee45d6g7897b06ac2d16af"];
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly examples: readonly ["Test alert"];
                    };
                    readonly uri: {
                        readonly type: "string";
                        readonly examples: readonly ["https://custom.rebrandly.com/user/abcdecc5b6ee45d6g7897b06ac2d1xyz"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly property: {
                    readonly type: "string";
                    readonly examples: readonly ["domain.id"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not found"];
                };
                readonly code: {
                    readonly type: "string";
                    readonly examples: readonly ["NotFound"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetLinkTags: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique identifier of the Link resource";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly orderDir: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sorting direction to apply to your tags collection";
                };
                readonly orderBy: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sorting criteria to apply to your tags collection. The only available option is by `name` property.";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 25;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "How many tags to load (max: 25)";
                };
                readonly last: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the last tag you fetched, see Infinite Scrolling section";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which workspace id to filter links by. No workspace specified will select main workspace.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly examples: readonly ["fffa4cc5b6ee45d6g7897b06ac2d16af"];
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly examples: readonly ["promo"];
                    };
                    readonly color: {
                        readonly type: "string";
                        readonly examples: readonly ["FF0044"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly property: {
                    readonly type: "string";
                    readonly examples: readonly ["domain.id"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not found"];
                };
                readonly code: {
                    readonly type: "string";
                    readonly examples: readonly ["NotFound"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetLinks: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "domain.id": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter branded short links which refer to a specific branded domain id (or specify a comma-separated set of ids)";
                };
                readonly "domain.fullName": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter branded short links which refer to a specific branded domain's name (FQDN)";
                };
                readonly slashtag: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter branded short links according to their slashtag value. Use in conjunction with domain.id or domain.fullName parameter to get a specific link. WARNING: this will not take effect if you don't specify also a domain.id or a domain.fullName along with the request";
                };
                readonly "creator.id": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter branded short links which have been created by a specific teammate id (or specify a comma-separated set of ids)";
                };
                readonly dateFrom: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter branded short links according to the date they have been created, so as to exclude links created before this date. Format is YYYY-MM-DD.";
                };
                readonly dateTo: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter branded short links according to the date they have been created, so as to exclude links created after this date. Format is YYYY-MM-DD.";
                };
                readonly orderBy: {
                    readonly type: "string";
                    readonly default: "createdAt";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sorting criteria to apply to your branded short links collection among `createdAt`, `updatedAt`.";
                };
                readonly orderDir: {
                    readonly type: "string";
                    readonly default: "desc";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sorting direction to apply to your branded short links collection";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 25;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "How many branded short links to load (max: 25)";
                };
                readonly last: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the last link you fetched, see Infinite Scrolling section";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which workspace id to filter links by. No workspace specified will select default workspace (if any).";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly examples: readonly ["fffa4cc5b6ee45d6g7897b06ac2d16af"];
                    };
                    readonly title: {
                        readonly type: "string";
                        readonly examples: readonly ["What is Rebrandly"];
                    };
                    readonly slashtag: {
                        readonly type: "string";
                        readonly examples: readonly ["video"];
                    };
                    readonly destination: {
                        readonly type: "string";
                        readonly examples: readonly ["https://www.youtube.com/watch?v=3VmtibKpmXI"];
                    };
                    readonly createdAt: {
                        readonly type: "string";
                        readonly examples: readonly ["2016-07-13T10:54:12.000Z"];
                    };
                    readonly updatedAt: {
                        readonly type: "string";
                        readonly examples: readonly ["2016-07-13T10:54:12.000Z"];
                    };
                    readonly shortUrl: {
                        readonly type: "string";
                        readonly examples: readonly ["rebrand.ly/video"];
                    };
                    readonly domain: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["8f104cc5b6ee4a4ba7897b06ac2ddcfb"];
                            };
                            readonly fullName: {
                                readonly type: "string";
                                readonly examples: readonly ["rebrand.ly"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly property: {
                    readonly type: "string";
                    readonly examples: readonly ["domain.id"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not found"];
                };
                readonly code: {
                    readonly type: "string";
                    readonly examples: readonly ["NotFound"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetScript: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique identifier of the script you want to get details for";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which workspace id to filter scripts by. No workspace specified will select main workspace.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["ftag4cc5b6ee45d6g7897b06ac2d16af"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Test alert"];
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["https://custom.rebrandly.com/user/abcdecc5b6ee45d6g7897b06ac2d1xyz"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly property: {
                    readonly type: "string";
                    readonly examples: readonly ["domain.id"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not found"];
                };
                readonly code: {
                    readonly type: "string";
                    readonly examples: readonly ["NotFound"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetScripts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly orderBy: {
                    readonly type: "string";
                    readonly default: "name";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sorting criteria to apply to your scripts collection. The only available option is by `name` property.";
                };
                readonly orderDir: {
                    readonly type: "string";
                    readonly default: "desc";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sorting direction to apply to your scripts collection";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 25;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "How many scripts to load (max: 25)";
                };
                readonly last: {
                    readonly type: "string";
                    readonly default: "0";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the last script you fetched, see Infinite Scrolling section";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which workspace id to filter scripts by. No workspace specified will select main workspace.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly examples: readonly ["ftag4cc5b6ee45d6g7897b06ac2d16af"];
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly examples: readonly ["Test alert"];
                    };
                    readonly uri: {
                        readonly type: "string";
                        readonly examples: readonly ["https://custom.rebrandly.com/user/abcdecc5b6ee45d6g7897b06ac2d1xyz"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly property: {
                    readonly type: "string";
                    readonly examples: readonly ["domain.id"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not found"];
                };
                readonly code: {
                    readonly type: "string";
                    readonly examples: readonly ["NotFound"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetSharedDomain: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique identifier of the branded domain you want to get details about";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which workspace id to filter domains by. No workspace specified will select main workspace.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["ddda4cc5b6ee45d6g7897b06ac2d1ain"];
                };
                readonly fullName: {
                    readonly type: "string";
                    readonly examples: readonly ["acme.com"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly property: {
                    readonly type: "string";
                    readonly examples: readonly ["domain.id"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not found"];
                };
                readonly code: {
                    readonly type: "string";
                    readonly examples: readonly ["NotFound"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetSharedDomains: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly active: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter branded domains depending on whether they can be used to brand short links or not";
                };
                readonly orderBy: {
                    readonly type: "string";
                    readonly default: "createdAt";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sorting criteria to apply to your branded domains collection among `createdAt`, `updatedAt` and `fullName`.";
                };
                readonly orderDir: {
                    readonly type: "string";
                    readonly default: "desc";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sorting direction to apply to your branded short links collection among `desc` and `asc`.";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 25;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "How many branded domains to load (max: 25)";
                };
                readonly last: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the last domain you fetched, see Infinite Scrolling section";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which workspace id to filter shared domains by.";
                };
            };
            readonly required: readonly ["workspace"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly examples: readonly ["ddda4cc5b6ee45d6g7897b06ac2d1ain"];
                    };
                    readonly fullName: {
                        readonly type: "string";
                        readonly examples: readonly ["acme.com"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetSharedWorkspaces: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly orderBy: {
                    readonly type: "string";
                    readonly default: "createdAt";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sorting criteria to apply to your workspaces collection among `name`, `createdAt` and `updatedAt`.";
                };
                readonly orderDir: {
                    readonly type: "string";
                    readonly default: "desc";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sorting direction to apply to your workspaces collection";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 25;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "How many workspaces to load (max: 25)";
                };
                readonly last: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the last workspace you fetched, see Infinite Scrolling section";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["fffa4cc5b6ee45d6g7897b06ac2d16af"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Marketing"];
                };
                readonly avatarUrl: {
                    readonly type: "string";
                    readonly examples: readonly ["https://avatars.rebrandly.com/workspace/fffa4cc5b6ee45d6g7897b06ac2d16af"];
                };
                readonly role: {
                    readonly type: "string";
                    readonly examples: readonly ["admin"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly property: {
                    readonly type: "string";
                    readonly examples: readonly ["domain.id"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not found"];
                };
                readonly code: {
                    readonly type: "string";
                    readonly examples: readonly ["NotFound"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTags: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly orderBy: {
                    readonly type: "string";
                    readonly default: "name";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sorting criteria to apply to your tags collection. The only available option is by `name` property.";
                };
                readonly orderDir: {
                    readonly type: "string";
                    readonly default: "desc";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sorting direction to apply to your tags collection";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 25;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "How many tags to load (max: 25)";
                };
                readonly last: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the last tag you fetched, see Infinite Scrolling section";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which workspace id to filter tags by. No workspace specified will select main workspace.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly examples: readonly ["fffa4cc5b6ee45d6g7897b06ac2d16af"];
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly examples: readonly ["promo"];
                    };
                    readonly color: {
                        readonly type: "string";
                        readonly examples: readonly ["FF0044"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly property: {
                    readonly type: "string";
                    readonly examples: readonly ["domain.id"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not found"];
                };
                readonly code: {
                    readonly type: "string";
                    readonly examples: readonly ["NotFound"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const TagDetailsEndpoint: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique identifier of the tag you want to get details for";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which workspace id to filter links by. No workspace specified will select main workspace.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["fffa4cc5b6ee45d6g7897b06ac2d16af"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["promo"];
                };
                readonly color: {
                    readonly type: "string";
                    readonly examples: readonly ["FF0044"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly property: {
                    readonly type: "string";
                    readonly examples: readonly ["domain.id"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not found"];
                };
                readonly code: {
                    readonly type: "string";
                    readonly examples: readonly ["NotFound"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateLinkEndpoint: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly destination: {
                readonly type: "string";
                readonly description: "The destination URL you want your branded short link to point to. Example: https://google.com";
            };
            readonly title: {
                readonly type: "string";
                readonly description: "A title you assign to the branded short link in order to remember what's behind it.";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique identifier of the branded short link you want to update";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which workspace id to filter links by. No workspace specified will select main workspace.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["fffa4cc5b6ee45d6g7897b06ac2d16af"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["What is Rebrandly"];
                };
                readonly slashtag: {
                    readonly type: "string";
                    readonly examples: readonly ["video"];
                };
                readonly destination: {
                    readonly type: "string";
                    readonly examples: readonly ["https://www.youtube.com/watch?v=3VmtibKpmXI"];
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly examples: readonly ["2016-07-13T10:54:12.000Z"];
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly examples: readonly ["2016-07-13T10:54:12.000Z"];
                };
                readonly shortUrl: {
                    readonly type: "string";
                    readonly examples: readonly ["rebrand.ly/video"];
                };
                readonly domain: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly examples: readonly ["8f104cc5b6ee4a4ba7897b06ac2ddcfb"];
                        };
                        readonly fullName: {
                            readonly type: "string";
                            readonly examples: readonly ["rebrand.ly"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly property: {
                    readonly type: "string";
                    readonly examples: readonly ["domain.id"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not found"];
                };
                readonly code: {
                    readonly type: "string";
                    readonly examples: readonly ["NotFound"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateScriptEndpoint: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["name", "value"];
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "The new name you want to associated to the script";
            };
            readonly value: {
                readonly type: "string";
                readonly description: "A new javascript snippet (including <script> and </script> HTML tags) to replace the old one";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique identifier of the Script resource you want to update";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The workspace unique identifier of the workspace where the script has been created. If the script is in the main workspace, no workspace header must be specified.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["ftag4cc5b6ee45d6g7897b06ac2d16af"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Test alert"];
                };
                readonly uri: {
                    readonly type: "string";
                    readonly examples: readonly ["https://custom.rebrandly.com/user/abcdecc5b6ee45d6g7897b06ac2d1xyz"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateTagEndpoint: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["name", "color"];
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "The new name you want to associated to the tag";
            };
            readonly color: {
                readonly type: "string";
                readonly description: "The hexadecimal code for a new color you want to assign to the tag";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique identifier of the Tag resource you want to update";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly workspace: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The workspace unique identifier of the workspace where the tag has been created. If the tag is in the main workspace, no workspace header must be specified.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["fffa4cc5b6ee45d6g7897b06ac2d16af"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["promo"];
                };
                readonly color: {
                    readonly type: "string";
                    readonly examples: readonly ["FF0044"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { AttachScript, AttachTag, CountLinks, CountScripts, CountSharedDomains, CountTags, CreateExpressLink, CreateLink, CreateScriptEndpoint, CreateTagEndpoint, DeleteLinkEndpoint, DeleteLinks, DeleteScriptEndpoint, DeleteTag, DetachScript, DetachTag, GetAccount, GetLink, GetLinkScripts, GetLinkTags, GetLinks, GetScript, GetScripts, GetSharedDomain, GetSharedDomains, GetSharedWorkspaces, GetTags, TagDetailsEndpoint, UpdateLinkEndpoint, UpdateScriptEndpoint, UpdateTagEndpoint };

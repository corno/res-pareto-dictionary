import * as pd from 'pareto-core-data'

import {
    dictionary,
    typeReference,
    data,
    sfunction,
    type,
    glossaryParameter,
    imp,
    externalTypeReference,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Type": null,
    }),
    'imports': d({
        "common": imp({}),
    }),
    'types': d({
        "Dictionary": type(dictionary(glossaryParameter("Type"))),
    }),
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
        
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "IsEmpty": sfunction(externalTypeReference("common", "Boolean"), data(typeReference("Dictionary"))),
        }),
    },

}
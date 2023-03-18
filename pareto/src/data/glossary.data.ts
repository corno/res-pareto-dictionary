import * as pd from 'pareto-core-data'

import {
    dictionary,
    typeReference,
    data,
    sfunc,
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
        'constructors': d({}),
        'functions': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'constructors': d({}),
        'functions': d({
            "IsEmpty": sfunc(data(typeReference("Dictionary")), externalTypeReference("common", "Boolean")),
        }),
    },

}
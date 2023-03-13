import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    sdata,
    sfunc,
    type,
    optional,
    number,
    glossaryParameter,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Type": null,
    }),
    'types': d({
        "Dictionary": type(dictionary(glossaryParameter("Type"))),
    }),
    'type': ['synchronous', {
        'builders': d({
        }),
        'functions': d({
            "IsEmpty": sfunc(typeReference("Dictionary"), null, null, sdata(typeReference("common", "Boolean"))),
        }),
    }],
}
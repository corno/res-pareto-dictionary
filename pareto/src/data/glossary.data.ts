import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    data,
    func,
    type,
    optional,
    number,
    glossaryParameter,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({
        "common": "glo-pareto-common",
    }),
    'parameters': d({
        "Type": null,
    }),
    'types': d({
        "Dictionary": type(dictionary(glossaryParameter("Type")))
    }),
    'interfaces': d({
    }),
    'functions': d({
        "IsEmpty": func(typeReference("Dictionary"), null, null, data(typeReference("common", "Boolean"), false))
        }),
}
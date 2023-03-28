import * as pd from 'pareto-core-data'

import {
    dictionary,
    typeReference,
    data,
    sfunction,
    ref,
    typeParameter,
    imp,
    externalTypeReference,
    parametrizedType,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "common": imp({}),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "Dictionary": parametrizedType({ "Type": null }, dictionary(ref(typeParameter("Type")))),
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),

    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "IsEmpty": sfunction(externalTypeReference("common", "Boolean"), data(typeReference("Dictionary", { "Type": typeParameter("Type") })), { "Type": null }),
        }),
    },

}
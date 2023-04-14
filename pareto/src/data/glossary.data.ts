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
    optional,
    group,
    member,
    aInterface,
    streamconsumer,
    aInterfaceMethod,
    type,
    string,
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
            "Error": type(group({
                "key": member(string()),
            })),
            "Dictionary": parametrizedType({ "Type": null }, dictionary(ref(typeParameter("Type")))),
            "FilterableDictionary": parametrizedType({ "Type": null }, dictionary(optional(ref(typeParameter("Type"))))),
            "UnsafeMergeParameters": parametrizedType({ "Type": null }, group({
                "primary": member(ref(typeReference("Dictionary", { "Type": typeParameter("Type")}))),
                "secondary": member(ref(typeReference("Dictionary", { "Type": typeParameter("Type")}))),
            })),
            "UnsafeAddEntryParameters": parametrizedType({ "Type": null }, group({
                "dictionary": member(ref(typeReference("Dictionary", { "Type": typeParameter("Type")}))),
                "key": member(string()),
                "value": member(ref(typeParameter("Type"))),
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({
            "Error": aInterface(streamconsumer(
                aInterfaceMethod(typeReference("Error")),
                aInterfaceMethod(null),
            ))
        }),
        'algorithms': d({}),

    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "IsEmpty": sfunction(externalTypeReference("common", "Boolean"), data(typeReference("Dictionary", { "Type": typeParameter("Type") })), { "Type": null }),
            "Filter": sfunction(typeReference("Dictionary", { "Type": typeParameter("Type") }), data(typeReference("FilterableDictionary", { "Type": typeParameter("Type") })), { "Type": null }),
            "UnsafeMerge": sfunction(typeReference("Dictionary", { "Type": typeParameter("Type") }), data(typeReference("UnsafeMergeParameters", { "Type": typeParameter("Type") })), { "Type": null }),
            "UnsafeAddEntry": sfunction(typeReference("Dictionary", { "Type": typeParameter("Type") }), data(typeReference("UnsafeAddEntryParameters", { "Type": typeParameter("Type") })), { "Type": null }),
            "MergeAndIgnore": sfunction(typeReference("Dictionary", { "Type": typeParameter("Type") }), data(typeReference("UnsafeMergeParameters", { "Type": typeParameter("Type") })), { "Type": null }),
            "MergeAndOverwrite": sfunction(typeReference("Dictionary", { "Type": typeParameter("Type") }), data(typeReference("UnsafeMergeParameters", { "Type": typeParameter("Type") })), { "Type": null }),
        }),
    },

}
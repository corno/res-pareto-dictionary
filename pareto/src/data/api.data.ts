import * as pd from 'pareto-core-data'

import { aSideEffect, algorithm, dependent, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "contains": algorithm(sfunction("this", {}, "Contains")),
        "isEmpty": algorithm(sfunction("this", {}, "IsEmpty")),
        "filter": algorithm(sfunction("this", {}, "Filter")),
        "unsafeRekey": algorithm(sfunction("this", {}, "UnsafeRekey")),
        "unsafeMerge": algorithm(sfunction("this", {}, "UnsafeMerge"), {}, dependent(null, {}, {
            "error": aSideEffect("this", {}, "Error")
        })),
        "unsafeAddEntry": algorithm(sfunction("this", {}, "UnsafeAddEntry"), {}, dependent(null, {}, {
            //"error": aSideEffect("this", {}, "Error")
        })),
        "mergeAndOverwrite": algorithm(sfunction("this", {}, "MergeAndOverwrite"), {}, dependent(null, {}, {
            "error": aSideEffect("this", {}, "Error")
        })),
        "mergeDictionaries": algorithm(sfunction("this", {}, "MergeDictionaries"), {}, dependent(null, {}, {
        })),
        "mergeAndIgnore": algorithm(sfunction("this", {}, "MergeAndIgnore"), {}, dependent(null, {}, {
            "error": aSideEffect("this", {}, "Error")
        })),
        
    }),
}
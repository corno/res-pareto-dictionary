import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace D {
    
    
    
    
    
    
    
    
    
}

export namespace A {
    
    export type contains = () => g_this.SYNC.A.F.Contains
    
    export type filter = () => g_this.SYNC.A.F.Filter
    
    export type isEmpty = () => g_this.SYNC.A.F.IsEmpty
    
    export type mergeAndIgnore = ($se: {
        readonly 'error': g_this.ASYNC.I.Error
    }) => g_this.SYNC.A.F.MergeAndIgnore
    
    export type mergeAndOverwrite = ($se: {
        readonly 'error': g_this.ASYNC.I.Error
    }) => g_this.SYNC.A.F.MergeAndOverwrite
    
    export type mergeDictionaries = () => g_this.SYNC.A.F.MergeDictionaries
    
    export type unsafeAddEntry = () => g_this.SYNC.A.F.UnsafeAddEntry
    
    export type unsafeMerge = ($se: {
        readonly 'error': g_this.ASYNC.I.Error
    }) => g_this.SYNC.A.F.UnsafeMerge
    
    export type unsafeRekey = () => g_this.SYNC.A.F.UnsafeRekey
}

export type API = {
    readonly 'contains': A.contains
    readonly 'filter': A.filter
    readonly 'isEmpty': A.isEmpty
    readonly 'mergeAndIgnore': A.mergeAndIgnore
    readonly 'mergeAndOverwrite': A.mergeAndOverwrite
    readonly 'mergeDictionaries': A.mergeDictionaries
    readonly 'unsafeAddEntry': A.unsafeAddEntry
    readonly 'unsafeMerge': A.unsafeMerge
    readonly 'unsafeRekey': A.unsafeRekey
}
import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace D {
    
    
}

export namespace A {
    
    export type filter = () => g_this.SYNC.A.F.Filter
    
    export type isEmpty = () => g_this.SYNC.A.F.IsEmpty
}

export type API = {
    readonly 'filter': A.filter
    readonly 'isEmpty': A.isEmpty
}
import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"
export namespace A {
    
    export type isEmpty = g_this.SYNC.F.IsEmpty
}

export type API = {
    isEmpty: A.isEmpty
}
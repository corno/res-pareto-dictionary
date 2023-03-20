import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace A {
    
    export type isEmpty = <GAnnotation>() => g_this.SYNC.A.F.IsEmpty<GAnnotation>
}

export type API = {
    readonly 'isEmpty': A.isEmpty
}
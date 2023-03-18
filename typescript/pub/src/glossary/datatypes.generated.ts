import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace T {
    
    export namespace Dictionary {
        
        export type D<GType> = GType
    }
    
    export type Dictionary<GType> = pt.Dictionary<GType>
}
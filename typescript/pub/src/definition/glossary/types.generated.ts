import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"

export namespace T {
    
    export namespace Dictionary {
        
        export type D<GPType> = GPType
    }
    
    export type Dictionary<GPType> = pt.Dictionary<GPType>
}
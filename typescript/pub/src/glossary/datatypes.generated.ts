import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace N {}

export namespace T {
    
    export namespace Dictionary {
        
        export type D<TType> = TType
    }
    
    export type Dictionary<TType> = pt.Dictionary<TType>
    
    export namespace FilterableDictionary {
        
        export namespace D {
            
            export type O<TType> = TType
        }
        
        export type D<TType> = [ false ] | [ true, TType]
    }
    
    export type FilterableDictionary<TType> = pt.Dictionary<[ false ] | [ true, TType]>
}
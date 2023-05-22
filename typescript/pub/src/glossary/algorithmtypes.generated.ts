import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {
        
        export type Error = {
            'data': ($: T.Error, ) => void
            'end': () => void
        }
    }
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace F {
            export type Contains = <TType>($: T.DictionaryAndKey<TType>) => g_common.T.Boolean
        }
        
        
        export namespace F {
            export type Filter = <TType>($: T.FilterableDictionary<TType>) => T.Dictionary<TType>
        }
        
        
        export namespace F {
            export type IsEmpty = <TType>($: T.Dictionary<TType>) => g_common.T.Boolean
        }
        
        
        export namespace F {
            export type MergeAndIgnore = <TType>($: T.MergeParameters<TType>) => T.Dictionary<TType>
        }
        
        
        export namespace F {
            export type MergeAndOverwrite = <TType>($: T.MergeParameters<TType>) => T.Dictionary<TType>
        }
        
        
        export namespace F {
            export type MergeDictionaries = <TType>($: T.MergeDictionariesParameters<TType>) => T.Dictionary<TType>
        }
        
        
        export namespace F {
            export type UnsafeAddEntry = <TType>($: T.UnsafeAddEntryParameters<TType>) => T.Dictionary<TType>
        }
        
        
        export namespace F {
            export type UnsafeMerge = <TType>($: T.MergeParameters<TType>) => T.Dictionary<TType>
        }
        
        
        export namespace F {
            export type UnsafeRekey = <TType>($: T.Dictionary<TType>, $c: {
                'map': ($: T.KeyValuePair<TType>) => g_common.T.String,
            }) => T.Dictionary<TType>
        }
    }
}
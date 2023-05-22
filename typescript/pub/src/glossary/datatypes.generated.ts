import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace N {}

export namespace T {
    
    export namespace Dictionary {
        
        export type D<TType> = TType
    }
    
    export type Dictionary<TType> = pt.Dictionary<TType>
    
    export namespace DictionaryAndKey {
        
        export namespace dictionary {
            
            export type D<TType> = TType
        }
        
        export type dictionary<TType> = pt.Dictionary<TType>
        
        export type key<TType> = string
    }
    
    export type DictionaryAndKey<TType> = {
        readonly 'dictionary': pt.Dictionary<TType>
        readonly 'key': string
    }
    
    export namespace Error {
        
        export type key = string
    }
    
    export type Error = {
        readonly 'key': string
    }
    
    export namespace FilterableDictionary {
        
        export namespace D {
            
            export type O<TType> = TType
        }
        
        export type D<TType> = [ false ] | [ true, TType]
    }
    
    export type FilterableDictionary<TType> = pt.Dictionary<[ false ] | [ true, TType]>
    
    export namespace KeyValuePair {
        
        export type key<TType> = string
        
        export type value<TType> = TType
    }
    
    export type KeyValuePair<TType> = {
        readonly 'key': string
        readonly 'value': TType
    }
    
    export namespace MergeDictionariesParameters {
        
        export namespace dictionaries {
            
            export type D<TType> = T.Dictionary<TType>
        }
        
        export type dictionaries<TType> = pt.Dictionary<T.Dictionary<TType>>
        
        export type escape<TType> = string
        
        export type separator<TType> = string
    }
    
    export type MergeDictionariesParameters<TType> = {
        readonly 'dictionaries': pt.Dictionary<T.Dictionary<TType>>
        readonly 'escape': string
        readonly 'separator': string
    }
    
    export namespace MergeParameters {
        
        export type primary<TType> = T.Dictionary<TType>
        
        export type secondary<TType> = T.Dictionary<TType>
    }
    
    export type MergeParameters<TType> = {
        readonly 'primary': T.Dictionary<TType>
        readonly 'secondary': T.Dictionary<TType>
    }
    
    export namespace UnsafeAddEntryParameters {
        
        export type dictionary<TType> = T.Dictionary<TType>
        
        export type keyValuePair<TType> = T.KeyValuePair<TType>
    }
    
    export type UnsafeAddEntryParameters<TType> = {
        readonly 'dictionary': T.Dictionary<TType>
        readonly 'keyValuePair': T.KeyValuePair<TType>
    }
}
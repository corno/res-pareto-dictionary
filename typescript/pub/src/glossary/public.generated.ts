import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"

export namespace B {}

export namespace C {}

export namespace F {
    
    export type IsEmpty = <GType>($: T.Dictionary<GType>) => g_common.T.Boolean
}
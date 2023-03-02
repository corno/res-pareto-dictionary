import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"

export type FIsEmpty = <GPType>($: T.Dictionary<GPType>,) => gcommon.T.Boolean
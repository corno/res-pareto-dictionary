import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.unsafeRekey = () => {
    return <T>($: g_this.T.Dictionary<T>, $c: {
        'map': ($: g_this.T.KeyValuePair<T>) => string,
    }) => {
        const out: { [key: string]: T } = {}
        $.__forEach(() => false, ($, key) => {
            const newKey = $c.map({
                'key': key,
                'value': $,
            })
            if (out[newKey] !== undefined) {
                pi.panic(`duplicate key: ${newKey}`)
            }
            out[newKey] = $
        })
        return pi.wrapRawDictionary(out)
    }
}
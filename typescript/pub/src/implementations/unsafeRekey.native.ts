import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.unsafeRekey = () => {
    return <RT, T>($: g_this.T.Dictionary<T>, $c: {
        'map': ($: g_this.T.KeyValuePair<T>) => g_this.T.KeyValuePair<RT>,
    }) => {
        const out: { [key: string]: RT } = {}
        $.__forEach(() => false, ($, key) => {
            const res = $c.map({
                'key': key,
                'value': $,
            })
            if (out[res.key] !== undefined) {
                pi.panic(`duplicate key: ${res.key}`)
            }
            out[res.key] = res.value
        })
        return pi.wrapRawDictionary(out)
    }
}
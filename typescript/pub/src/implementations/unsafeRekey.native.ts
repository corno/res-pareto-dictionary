import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.unsafeRekey = () => {
    return <T, NT>($: g_this.T.Dictionary<T>, $c: {
        'map': g_this.SYNC.A.F.MapKeyValue,
    }) => {
        const out: { [key: string]: NT } = {}
        $.__forEach(() => false, ($, key) => {
            const res = $c.map<NT, T>({
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
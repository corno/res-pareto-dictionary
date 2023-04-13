import * as pi from 'pareto-core-internals'

import { A } from "../api.generated"

import * as g_this from "../glossary"

export const $$: A.filter = () => {
    return <T>($: g_this.T.FilterableDictionary<T>) => {
        const out: { [key: string]: T } = {}
        $.__forEach(() => false, ($, key) => {
            if ($[0] === true) {
                out[key] = $[1]
            }
        })
        return pi.wrapRawDictionary(out)
    }
}
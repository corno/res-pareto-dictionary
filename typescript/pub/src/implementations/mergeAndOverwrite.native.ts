import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.unsafeMerge = () => {
    return <T>($: g_this.T.UnsafeMergeParameters<T>) => {
        const out: { [key: string]: T } = {}
        $.primary.__forEach(() => false, ($, key) => {
            out[key] = $
        })
        $.secondary.__forEach(() => false, ($, key) => {
            if (out[key] !== undefined) {
                //error message
            }
            out[key] = $
        })
        return pi.wrapRawDictionary(out)
    }
}
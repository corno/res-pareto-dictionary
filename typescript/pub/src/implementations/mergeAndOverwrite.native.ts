import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.unsafeMerge = ($se) => {
    return <T>($: g_this.T.MergeParameters<T>) => {
        const out: { [key: string]: T } = {}
        $.primary.__forEach(() => false, ($, key) => {
            out[key] = $
        })
        $.secondary.__forEach(() => false, ($, key) => {
            if (out[key] !== undefined) {
                $se.error.data({
                    'key': key,
                })
            }
            out[key] = $
        })
        $se.error.end()
        return pi.wrapRawDictionary(out)
    }
}
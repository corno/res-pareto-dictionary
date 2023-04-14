import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.unsafeAddEntry = () => {
    return <T>($: g_this.T.UnsafeAddEntryParameters<T>) => {
        const out: { [key: string]: T } = {}
        $.dictionary.__forEach(() => false, ($, key) => {
            out[key] = $
        })
        if (out[$.key] !== undefined) {
            pi.panic(`key already exists: ${$.key}`)
            // $se.error.data({
            //     'key': key,
            // })
        }
        out[$.key] = $.value
        return pi.wrapRawDictionary(out)
    }
}
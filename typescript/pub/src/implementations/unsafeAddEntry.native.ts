import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.unsafeAddEntry = () => {
    return <T>($: g_this.T.UnsafeAddEntryParameters<T>) => {
        const out: { [key: string]: T } = {}
        $.dictionary.__forEach(() => false, ($, key) => {
            out[key] = $
        })
        if (out[$.keyValuePair.key] !== undefined) {
            pi.panic(`key already exists: ${$.keyValuePair.key}`)
            // $se.error.data({
            //     'key': key,
            // })
        }
        out[$.keyValuePair.key] = $.keyValuePair.value
        return pi.wrapRawDictionary(out)
    }
}
import * as pt from 'pareto-core-types'
import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.mergeDictionaries = () => {
    function replace(haystack: string, needle: string, replacement: string): string {
        let newString = ""
        let curPos = 0
        while (true) {
            const newPos = haystack.indexOf(needle, curPos)
            if (newPos === -1) {
                newString += haystack.substring(curPos)
                break
            }
            newString += haystack.substring(curPos, newPos) + replacement
            curPos = newPos + replacement.length
        }
        return newString
    }
    return <T>($: g_this.T.MergeDictionariesParameters<T>) => {
        const params = $
        const out: { [key: string]: T } = {}
        $.dictionaries.__forEach(() => false, ($, outerKey) => {
            $.__forEach(() => false, ($, innerKey) => {
                out[`${replace(replace(outerKey, params.escape, params.escape + params.escape), params.separator, params.escape + params.separator)}${params.separator}${innerKey}`] = $
            })
        })
        return pi.wrapRawDictionary(out)
    }
}
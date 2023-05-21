
import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.contains = () => {
    return ($) => {
        return $.dictionary.__getEntry($.key, () => true, () => false)
    }
}


import { CisEmpty } from "../definition/api.generated"

export const $$: CisEmpty = ($) => {
    let isEmpty = true
    $.__forEach(() => false, ($) => {
        isEmpty = false
    })
    return isEmpty
}

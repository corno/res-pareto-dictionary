

import { isEmpty } from "../api.generated"

export const $$: isEmpty = ($) => {
    let isEmpty = true
    $.__forEach(() => false, ($) => {
        isEmpty = false
    })
    return isEmpty
}

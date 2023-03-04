

import { isEmpty } from "../definition/api.generated"

export const $$: isEmpty = ($) => {
    let isEmpty = true
    $.__forEach(() => false, ($) => {
        isEmpty = false
    })
    return isEmpty
}

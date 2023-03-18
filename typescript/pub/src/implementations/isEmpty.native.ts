

import { A } from "../api.generated"

export const $$: A.isEmpty = ($) => {
    let isEmpty = true
    $.__forEach(() => false, ($) => {
        isEmpty = false
    })
    return isEmpty
}

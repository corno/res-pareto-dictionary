import { API } from "./api.generated"
import { $$ as ifilter } from "./implementations/filter.native"
import { $$ as iisEmpty } from "./implementations/isEmpty.native"

export const $api: API = {
    'filter': ifilter,
    'isEmpty': iisEmpty,
}
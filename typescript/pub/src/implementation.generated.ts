import { API } from "./api.generated"
import { $$ as iisEmpty } from "./implementations/isEmpty.native"

export const $api: API = {
    'isEmpty': iisEmpty,
}
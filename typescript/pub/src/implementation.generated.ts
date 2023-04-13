import { API } from "./api.generated"
import { $$ as ifilter } from "./implementations/filter.native"
import { $$ as iisEmpty } from "./implementations/isEmpty.native"
import { $$ as imergeAndIgnore } from "./implementations/mergeAndIgnore.native"
import { $$ as imergeAndOverwrite } from "./implementations/mergeAndOverwrite.native"
import { $$ as iunsafeMerge } from "./implementations/unsafeMerge.native"

export const $api: API = {
    'filter': ifilter,
    'isEmpty': iisEmpty,
    'mergeAndIgnore': imergeAndIgnore,
    'mergeAndOverwrite': imergeAndOverwrite,
    'unsafeMerge': iunsafeMerge,
}
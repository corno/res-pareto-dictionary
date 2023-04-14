import { API } from "./api.generated"
import { $$ as ifilter } from "./implementations/filter.native"
import { $$ as iisEmpty } from "./implementations/isEmpty.native"
import { $$ as imergeAndIgnore } from "./implementations/mergeAndIgnore.native"
import { $$ as imergeAndOverwrite } from "./implementations/mergeAndOverwrite.native"
import { $$ as iunsafeAddEntry } from "./implementations/unsafeAddEntry.native"
import { $$ as iunsafeMerge } from "./implementations/unsafeMerge.native"
import { $$ as iunsafeRekey } from "./implementations/unsafeRekey.native"

export const $api: API = {
    'filter': ifilter,
    'isEmpty': iisEmpty,
    'mergeAndIgnore': imergeAndIgnore,
    'mergeAndOverwrite': imergeAndOverwrite,
    'unsafeAddEntry': iunsafeAddEntry,
    'unsafeMerge': iunsafeMerge,
    'unsafeRekey': iunsafeRekey,
}
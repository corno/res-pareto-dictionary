import { API } from "./api.generated"
import { $$ as icontains } from "./implementations/contains.native"
import { $$ as ifilter } from "./implementations/filter.native"
import { $$ as iisEmpty } from "./implementations/isEmpty.native"
import { $$ as imergeAndIgnore } from "./implementations/mergeAndIgnore.native"
import { $$ as imergeAndOverwrite } from "./implementations/mergeAndOverwrite.native"
import { $$ as imergeDictionaries } from "./implementations/mergeDictionaries.native"
import { $$ as iunsafeAddEntry } from "./implementations/unsafeAddEntry.native"
import { $$ as iunsafeMerge } from "./implementations/unsafeMerge.native"
import { $$ as iunsafeRekey } from "./implementations/unsafeRekey.native"

export const $api: API = {
    'contains': icontains,
    'filter': ifilter,
    'isEmpty': iisEmpty,
    'mergeAndIgnore': imergeAndIgnore,
    'mergeAndOverwrite': imergeAndOverwrite,
    'mergeDictionaries': imergeDictionaries,
    'unsafeAddEntry': iunsafeAddEntry,
    'unsafeMerge': iunsafeMerge,
    'unsafeRekey': iunsafeRekey,
}
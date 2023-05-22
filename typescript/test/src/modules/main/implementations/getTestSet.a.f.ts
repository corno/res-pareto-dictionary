
import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'
import * as pm from 'pareto-core-map'
import * as pd from 'pareto-core-dev'
import * as pt from 'pareto-core-types'

import * as g_test from "lib-pareto-test"


import * as g_pub from "../../../../../pub"

import { A } from "../api.generated"

export const $$: A.getTestSet = () => {

    const d = pm.wrapRawDictionary


    type X = pt.Dictionary<X>

    const x: X = d({
        "A": d({}),
        "B": d({
            "BA": d({})
        })
    })

    function flatten($: X): pt.Dictionary<null> {
        return g_pub.$r.unsafeAddEntry()({
            'dictionary': g_pub.$r.mergeDictionaries()({
                'dictionaries': $.map(($) => flatten($)),
                'escape': "_",
                'separator': "$",
            }),
            'keyValuePair': {
                'key': "",
                'value': null
            }
        })
    }
    flatten(x).__forEach(() => false, ($, key) => {
        pd.logDebugMessage(`>>>>>>>>>>>>>>>>>>>> ${key}`)
    })

    g_pub.$r.mergeDictionaries()({
        'dictionaries': pm.wrapRawDictionary({
            "Foo": pm.wrapRawDictionary({
                "Foo": null
            }),
            "$": pm.wrapRawDictionary({
                "Foo": null
            }),
            "_": pm.wrapRawDictionary({
                "Foo": null
            }),
            "Foo2": pm.wrapRawDictionary({
                "$": null
            }),
        }),
        'separator': "$",
        'escape': "_",
    }).__forEach(() => false, ($, key) => {
        pd.logDebugMessage(key)
    })

    const builder = ps.createUnsafeDictionaryBuilder<g_test.T.TestElement>()

    function createBooleanTest(name: string, test: boolean) {
        builder.add(name, {
            'type': ['test', {
                type: ['boolean', test]
            }]
        })
    }

    createBooleanTest(
        "isEmpty",
        g_pub.$r.isEmpty()(pm.wrapRawDictionary({}))
    )
    createBooleanTest(
        "isNotEmpty",
        !g_pub.$r.isEmpty()(pm.wrapRawDictionary({ "A": "B" }))
    )
    return pa.asyncValue({
        elements: builder.getDictionary()
    })
}
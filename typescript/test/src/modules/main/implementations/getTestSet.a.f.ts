
import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'
import * as pm from 'pareto-core-map'

import * as g_test from "lib-pareto-test"


import * as g_pub from "../../../../../pub"

import { getTestSet } from "../api.generated"

export const $$: getTestSet = () => {

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
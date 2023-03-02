
import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'
import * as pm from 'pareto-core-map'

import * as gtest from "lib-pareto-test"


import * as gpub from "../../../../../pub"

import { CgetTestSet } from "../definition/api.generated"

export const $$: CgetTestSet = () => {

    const builder = ps.createUnsafeDictionaryBuilder<gtest.T.TestElement>()

    function createBooleanTest(name: string, test: boolean) {
        builder.add(name, {
            'type': ['test', {
                type: ['boolean', test]
            }]
        })
    }

    createBooleanTest(
        "isEmpty",
        gpub.$r.isEmpty(pm.wrapRawDictionary({}))
    )
    createBooleanTest(
        "isNotEmpty",
        !gpub.$r.isEmpty(pm.wrapRawDictionary({ "A": "B" }))
    )
    return pa.asyncValue({
        elements: builder.getDictionary()
    })
}
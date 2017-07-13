// @flow
import _ from 'lodash'

const f = forward ? _.take : _.takeRight
const needed = f(batch, amount - results.length)

if (forward) {
    results = [...results, ...needed]
} else {
    results = [...needed, ...results]
}

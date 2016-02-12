// third party imports
import {assert} from 'chai'
// local imports
import * as color from 'util/color'


describe('color', function () {
    describe('randomColor', function () {
        it('returns an array', function () {
            assert.isTrue(Array.isArray(color.randomColor()))
        })


        it('returns an array of length 3', function () {
            const actual = color.randomColor().length
            const expected = 3

            assert.equal(actual, expected)
        })


        it('returns an array with values in [0, 100)', function () {
            for (var i = 0; i < 100; i++) {
                color.randomColor().forEach(value => {
                    assert.isTrue(value >= 0)
                    assert.isTrue(value < 100)
                })
            }
        })
    })


    describe('toCSS', function () {
        it('returns a string when given a color', function () {
            const c = color.randomColor()

            const actual = typeof color.toCSS(c)
            const expected = 'string'

            assert.equal(actual, expected)
        })


        it('returns a string when given a color and an alpha', function () {
            const c = color.randomColor()

            const actual = typeof color.toCSS(c, 0.3)
            const expected = 'string'

            assert.equal(actual, expected)
        })


        it('puts the given color values into the returned string', function () {
            const c = [22.34, 17.8, 0.001]
            const css = color.toCSS(c)

            c.forEach(value => {
                assert.isTrue(css.indexOf(value) !== -1)
            })
        })


        it('puts the given color and alpha values into the returned string', function () {
            const c = [22.34, 17.8, 0.001]
            const alpha = 0.007
            const css = color.toCSS(c, alpha)

            const expectedValues = [...c, alpha]

            expectedValues.forEach(value => {
                assert.isTrue(css.indexOf(value) !== -1)
            })
        })
    })
})

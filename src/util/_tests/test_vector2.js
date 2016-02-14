// third party imports
import {assert} from 'chai'
// local imports
import * as vector2 from '../vector2'


const errorMargin = 0.0001


describe('vector2', function () {
    describe('isWithin', function () {
        it('returns true when vector is within bounds', function () {
            assert.isTrue(vector2.isWithin(
                [3, -5],
                [0, -5.1],
                [3.01, 0]
            ))
        })


        it('returns false when vector x is below bounds', function () {
            assert.isFalse(vector2.isWithin(
                [3, -5],
                [3.1, -5.1],
                [7, 0]
            ))
        })


        it('returns false when vector x is above bounds', function () {
            assert.isFalse(vector2.isWithin(
                [3, -5],
                [0, -5.1],
                [2, 0]
            ))
        })


        it('returns false when vector y is below bounds', function () {
            assert.isFalse(vector2.isWithin(
                [3, -5],
                [0, 0],
                [7, 2]
            ))
        })


        it('returns false when vector y is above bounds', function () {
            assert.isFalse(vector2.isWithin(
                [3, -5],
                [0, -7],
                [7, -6]
            ))
        })
    })


    describe('dot', function () {
        it('seems to work fine', function () {
            const actual = vector2.dot([3, 5], [-1, 2])
            const expected = 7

            assert.equal(actual, expected)
        })
    })


    describe('scale', function () {
        it('seems to work fine', function () {
            const actual = vector2.scale(-2, [-15, 7.5])
            const expected = [30, -15]

            assert.deepEqual(actual, expected)
        })
    })


    describe('magnitude', function () {
        it('seems to work fine', function () {
            const actual = vector2.magnitude([3, 4])
            const expected = 5

            assert.equal(actual, expected)
        })
    })


    describe('magnitudeSquared', function () {
        it('seems to work fine', function () {
            const actual = vector2.magnitudeSquared([3, 4])
            const expected = 25

            assert.equal(actual, expected)
        })
    })


    describe('normalize', function () {
        it('seems to work fine', function () {
            const actual = vector2.normalize([7, 7])
            const expected = [Math.SQRT1_2, Math.SQRT1_2]

            assert.deepEqual(actual, expected)
        })
    })


    describe('add', function () {
        it('seems to work fine', function () {
            const actual = vector2.add([20, -1], [-15, 7.5])
            const expected = [5, 6.5]

            assert.deepEqual(actual, expected)
        })
    })


    describe('subtract', function () {
        it('seems to work fine', function () {
            const actual = vector2.subtract([20, -1], [-15, 7.5])
            const expected = [35, -8.5]

            assert.deepEqual(actual, expected)
        })
    })


    describe('mod', function () {
        it('seems to work fine', function () {
            const actual = vector2.mod([15, 7.5], [4, 6])
            const expected = [3, 1.5]

            assert.deepEqual(actual, expected)
        })
    })


    describe('operate', function () {
        it('works fine with identity matrix', function () {
            const actual = vector2.operate([[1, 0], [0, 1]], [4.4, -235])
            const expected = [4.4, -235]

            assert.deepEqual(actual, expected)
        })


        it('works fine with typical matrix', function () {
            const actual = vector2.operate([[1, 5], [-2, 3]], [-3, 6])
            const expected = [27, 24]

            assert.deepEqual(actual, expected)
        })
    })


    describe('rotate', function () {
        it('rotates fine by pi/2', function () {
            const actual = vector2.rotate(Math.PI / 2, [4.4, 0])
            const expected = [0, 4.4]

            assert.closeTo(actual[0], expected[0], errorMargin)
            assert.closeTo(actual[1], expected[1], errorMargin)
        })


        it('rotates fine by pi/4', function () {
            const actual = vector2.rotate(Math.PI / 4, [1, 0])
            const expected = [Math.SQRT1_2, Math.SQRT1_2]

            assert.closeTo(actual[0], expected[0], errorMargin)
            assert.closeTo(actual[1], expected[1], errorMargin)
        })
    })


    describe('flipX', function () {
        it('seems to work fine', function () {
            const actual = vector2.flipX([20, -1])
            const expected = [-20, -1]

            assert.deepEqual(actual, expected)
        })
    })


    describe('flipY', function () {
        it('seems to work fine', function () {
            const actual = vector2.flipY([20, -1])
            const expected = [20, 1]

            assert.deepEqual(actual, expected)
        })
    })


    describe('flip', function () {
        it('seems to work fine', function () {
            const actual = vector2.flip([20, -1])
            const expected = [-20, 1]

            assert.deepEqual(actual, expected)
        })
    })
})

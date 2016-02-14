// third party imports
import {assert} from 'chai'
// local imports
import * as vector3 from '../vector3'


const errorMargin = 0.0001


describe('vector3', function () {
    describe('isWithin', function () {
        it('returns true when vector is within bounds', function () {
            assert.isTrue(vector3.isWithin(
                [3, -5, 0],
                [0, -5.1, -1],
                [3.01, 0, 0.1]
            ))
        })


        it('returns false when vector x is below bounds', function () {
            assert.isFalse(vector3.isWithin(
                [3, -5, 0],
                [3.1, -5.1, -1],
                [7, 0, 0.1]
            ))
        })


        it('returns false when vector x is above bounds', function () {
            assert.isFalse(vector3.isWithin(
                [3, -5, 0],
                [0, -5.1, -1],
                [2, 0, 0.1]
            ))
        })


        it('returns false when vector y is below bounds', function () {
            assert.isFalse(vector3.isWithin(
                [3, -5, 0],
                [0, 0, -1],
                [7, 2, 0.1]
            ))
        })


        it('returns false when vector y is above bounds', function () {
            assert.isFalse(vector3.isWithin(
                [3, -5, 0],
                [0, -7, -1],
                [7, -6, 0.1]
            ))
        })


        it('returns false when vector z is below bounds', function () {
            assert.isFalse(vector3.isWithin(
                [3, -5, -1.1],
                [0, -5.1, -1],
                [7, 0, 0.1]
            ))
        })


        it('returns false when vector z is above bounds', function () {
            assert.isFalse(vector3.isWithin(
                [3, -5, 2],
                [0, -5.1, -1],
                [7, -0, 0.1]
            ))
        })
    })


    describe('dot', function () {
        it('seems to work fine', function () {
            const actual = vector3.dot([3, 5, -1], [-1, 2, 7])
            const expected = 0

            assert.equal(actual, expected)
        })
    })


    describe('scale', function () {
        it('seems to work fine', function () {
            const actual = vector3.scale(-2, [-15, 7.5, 1])
            const expected = [30, -15, -2]

            assert.deepEqual(actual, expected)
        })
    })


    describe('magnitude', function () {
        it('seems to work fine', function () {
            const actual = vector3.magnitude([3, 4, -5])
            const expected = Math.sqrt(50)

            assert.equal(actual, expected)
        })
    })


    describe('magnitudeSquared', function () {
        it('seems to work fine', function () {
            const actual = vector3.magnitudeSquared([3, 4, -5])
            const expected = 50

            assert.equal(actual, expected)
        })
    })


    describe('normalize', function () {
        it('seems to work fine', function () {
            const SQRT1_3 = 1 / Math.sqrt(3)

            const actual = vector3.normalize([7, 7, 7])
            const expected = [SQRT1_3, SQRT1_3, SQRT1_3]

            assert.closeTo(actual[0], expected[0], errorMargin)
            assert.closeTo(actual[1], expected[1], errorMargin)
            assert.closeTo(actual[2], expected[2], errorMargin)
        })
    })


    describe('add', function () {
        it('seems to work fine', function () {
            const actual = vector3.add([20, -1, 5], [-15, 7.5, -2])
            const expected = [5, 6.5, 3]

            assert.deepEqual(actual, expected)
        })
    })


    describe('subtract', function () {
        it('seems to work fine', function () {
            const actual = vector3.subtract([20, -1, 5], [-15, 7.5, -2])
            const expected = [35, -8.5, 7]

            assert.deepEqual(actual, expected)
        })
    })


    describe('mod', function () {
        it('seems to work fine', function () {
            const actual = vector3.mod([20, -1, 5], [-15, 7.5, -2])
            const expected = [-10, 6.5, -1]

            assert.deepEqual(actual, expected)
        })
    })


    describe('operate', function () {
        it('works fine with identity matrix', function () {
            const actual = vector3.operate(
                [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
                [4.4, -235, 0.23]
            )
            const expected = [4.4, -235, 0.23]

            assert.deepEqual(actual, expected)
        })


        it('works fine with typical matrix', function () {
            const actual = vector3.operate(
                [[1, 5, 7], [-2, 3, 0], [-1, 4, -2]],
                [-3, 6, 1]
            )
            const expected = [34, 24, 25]

            assert.deepEqual(actual, expected)
        })
    })


    // describe('rotate', function () {
    //     it('rotates fine by pi/2', function () {
    //         const actual = vector3.rotate(Math.PI / 2, [4.4, 0])
    //         const expected = [0, 4.4]
    //
    //         assert.closeTo(actual[0], expected[0], errorMargin)
    //         assert.closeTo(actual[1], expected[1], errorMargin)
    //     })
    //
    //
    //     it('rotates fine by pi/4', function () {
    //         const actual = vector3.rotate(Math.PI / 4, [1, 0])
    //         const expected = [Math.SQRT1_2, Math.SQRT1_2]
    //
    //         assert.closeTo(actual[0], expected[0], errorMargin)
    //         assert.closeTo(actual[1], expected[1], errorMargin)
    //     })
    // })


    describe('flipX', function () {
        it('seems to work fine', function () {
            const actual = vector3.flipX([20, -1, 10])
            const expected = [-20, -1, 10]

            assert.deepEqual(actual, expected)
        })
    })


    describe('flipY', function () {
        it('seems to work fine', function () {
            const actual = vector3.flipY([20, -1, 8])
            const expected = [20, 1, 8]

            assert.deepEqual(actual, expected)
        })
    })


    describe('flipZ', function () {
        it('seems to work fine', function () {
            const actual = vector3.flipZ([20, -1, 8])
            const expected = [20, -1, -8]

            assert.deepEqual(actual, expected)
        })
    })


    describe('flip', function () {
        it('seems to work fine', function () {
            const actual = vector3.flip([20, -1, 2])
            const expected = [-20, 1, -2]

            assert.deepEqual(actual, expected)
        })
    })
})

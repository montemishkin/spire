export default () => {
    const a = document.createElement('a')

    a.href = document.getElementById('canvas').toDataURL()
    a.download = 'spire'

    a.click()
}

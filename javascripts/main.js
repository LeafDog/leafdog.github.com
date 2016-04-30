(function () {
    const then = Date.parse(new Date(2016, 1, 10, 20))
    var time = {
        'years': 0,
        'months': 0,
        'days': 0,
        'hours': 0,
        'minutes': 0,
        'seconds': 0,
        'milliseconds': 0
    }

    function getTime(then) {
        return function () {
            function handler() {
                var now = Date.now()
                time.milliseconds = now - then

                time.years = Math.floor(time.milliseconds / 1000 / 60 / 60 / 24 / 365)
                time.milliseconds -= time.years * 1000 * 60 * 60 * 24 * 365

                time.months = Math.floor(time.milliseconds / 1000 / 60 / 60 / 24 / 31)
                time.milliseconds -= time.months * 1000 * 60 * 60 * 24 * 31

                time.days = Math.floor(time.milliseconds / 1000 / 60 / 60 / 24)
                time.milliseconds -= time.days * 1000 * 60 * 60 * 24

                time.hours = Math.floor(time.milliseconds / 1000 / 60 / 60)
                time.milliseconds -= time.hours * 1000 * 60 * 60

                time.minutes = Math.floor(time.milliseconds / 1000 / 60)
                time.milliseconds -= time.minutes * 1000 * 60

                time.seconds = minutes = Math.floor(time.milliseconds / 1000)
                time.milliseconds -= time.seconds * 1000

                if (time.years) {
                    $('#time').html(`${time.years}年${time.months}个月${time.days}天${time.hours}小时${time.minutes}分${time.seconds}秒`)
                }
                else {
                    $('#time').html(`${time.months}个月${time.days}天${time.hours}小时${time.minutes}分${time.seconds}秒`)

                }

            }

            handler()
            setInterval(handler, 1000)
        }
    }

    var getPastTime = getTime(then)
    getPastTime()
})()









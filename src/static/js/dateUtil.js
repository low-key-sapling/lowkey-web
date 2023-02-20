function yearTime(e, currentDate) {
    let date = new Date();
    if (currentDate) {
        date = new Date(currentDate);
    }
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    let d = date.getDate();
    d = d < 10 ? "0" + d : d;

    let h = date.getHours();
    h = h < 10 ? "0" + h : h;
    let mm = date.getMinutes();
    mm = mm < 10 ? "0" + mm : mm;
    let s = date.getSeconds();
    s = s < 10 ? "0" + s : s;

    //年
    if (e === 'year') {
        return y;
    }
    //月
    if (e === 'mouth') {
        return m;
    }
    //日
    if (e === 'day') {
        return d;
    }
    //日期 yyyy-mm-dd
    if (e === 'date') {
        return y + '-' + m + '-' + d;
    }
    //时间 hh:mm:ss
    if (e === 'time') {
        return h + ':' + mm + ':' + s;
    }
    //日期时间 yyyy-mm-dd hh:mm:ss
    if (e === 'dateTime') {
        return y + '-' + m + '-' + d + '  ' + h + ':' + mm + ':' + s;
    }
    //中文年月日
    if (e === 'date_cn') {
        return y + '年' + m + '月' + d + '日';
    }
    //中文年月日时间
    if (e === 'dateTime_cn') {
        return y + '年' + m + '月' + d + '日' + '  ' + h + ':' + mm + ':' + s;
    }
}

function week() {
    const date = new Date();
    let h = date.getDay() - 1;
    let we = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期七']
    return we[h]
}

function appleTime() {
    // 苹果时间
    const end = Date.now()
    let start = 1000 * 60 * 60 * 8
    let interval = end + start; //结束 - 开始 = 毫秒值
    let appleDate = new Date(interval);
    let y = appleDate.getFullYear();
    let m = appleDate.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    let d = appleDate.getDate();
    d = d < 10 ? "0" + d : d;

    let h = appleDate.getHours();
    h = h < 10 ? "0" + h : h;
    let mm = appleDate.getMinutes();
    mm = mm < 10 ? "0" + mm : mm;
    let s = appleDate.getSeconds();
    s = s < 10 ? "0" + s : s;

    return y + '-' + m + '-' + d + '  ' + h + ':' + mm + ':' + s;
}


module.exports = {
    yearTime: yearTime,
    week: week,
    appleTime: appleTime
}


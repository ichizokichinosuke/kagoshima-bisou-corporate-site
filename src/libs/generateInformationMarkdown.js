const fs = require('fs')
const holiday_jp = require('@holiday-jp/holiday_jp')

const nowDate = new Date()
const nowYear = nowDate.getFullYear()
const nowMonth = nowDate.getMonth() + 1
const nextMonth = nowMonth == 12 ? 1 : nowMonth + 1

// 月のインデックスは0-11
const nextMonthBeginDate = new Date(nowYear, nextMonth - 1, 1)

// アンダーフローにより桁借りされる
const nextMonthLastDate = new Date(nowYear, nextMonth, 0)

const dayOfWeekBeginDate = nextMonthBeginDate.getDay()
const beginNearSundayDate =
  dayOfWeekBeginDate == 0
    ? nextMonthBeginDate.getDate()
    : nextMonthBeginDate.getDate() + 7 - dayOfWeekBeginDate

const dayOfWeekLastDate = nextMonthLastDate.getDay()
const lastNearSundayDate =
  dayOfWeekLastDate == 0
    ? nextMonthLastDate.getDate()
    : nextMonthLastDate.getDate() - dayOfWeekLastDate

let sundayAndHolidayObj = []
for (let d = beginNearSundayDate; d <= lastNearSundayDate; d += 7) {
  sundayAndHolidayObj.push({
    date: d,
    week: '日',
  })
}

const holidays = holiday_jp.between(nextMonthBeginDate, nextMonthLastDate)

holidays.forEach((holiday) => {
  sundayAndHolidayObj.push({
    date: holiday.date.getDate(),
    week: holiday.week,
  })
})

sundayAndHolidayObj.sort((a, b) => a.date - b.date)

let displayString = ''

sundayAndHolidayObj.forEach((element) => {
  displayString += `<span style="color: red;">${nextMonth}/${element.date}（${element.week}）</span>\n\n`
})

// console.log(displayString)

const timestamp = nowDate.toISOString()

const mdData = `---
templateKey: information-post
title: ${nextMonth}月休業日のお知らせ
date: ${timestamp}
featuredpost: true
description: >-

tags:
- 定休日
---

${nextMonth}月の休業日をお知らせします。

${displayString}

定休日、夜間等の持ち込みなどございましたらお気軽にご相談、お問い合わせください！

`

fs.writeFileSync(`./${timestamp}-regular-holiday.md`, mdData)

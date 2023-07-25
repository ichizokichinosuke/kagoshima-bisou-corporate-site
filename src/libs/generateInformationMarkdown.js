const fs = require('fs')
const holiday_jp = require('@holiday-jp/holiday_jp')

const nowDate = new Date(2023, 19, 25)
const nowYear = nowDate.getFullYear()
const nowMonth = nowDate.getMonth() + 1
const nextMonth = nowMonth + 1

// 月のインデックスは[0-11]
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
  const week = holiday.week
  if (week == '日') return
  sundayAndHolidayObj.push({
    date: holiday.date.getDate(),
    week: week,
  })
})

sundayAndHolidayObj.sort((a, b) => a.date - b.date)

const displayNextMonth = nextMonthBeginDate.getMonth() + 1
let displayString = ''

sundayAndHolidayObj.forEach((element) => {
  displayString += `<span style="color: red;">${displayNextMonth}/${element.date}（${element.week}）</span>\n\n`
})

const timestamp = nowDate.toISOString()

const mdData = `---
templateKey: information-post
title: ${displayNextMonth}月休業日のお知らせ
date: ${timestamp}
featuredpost: true
description: >-

tags:
- 定休日
---

${displayNextMonth}月の休業日をお知らせします。

${displayString}

定休日、夜間等の持ち込みなどございましたらお気軽にご相談、お問い合わせください！

`

fs.writeFileSync(`./src/pages/information/regularHoliday-${timestamp}.md`, mdData)

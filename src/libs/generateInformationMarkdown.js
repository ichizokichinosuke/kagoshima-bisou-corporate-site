const fs = require('fs')
const holiday_jp = require('@holiday_jp/holiday_jp')

const nowDate = new Date()
const nowMonth = nowDate.getMonth() + 1
const nextMonth = nowMonth == 12 ? 1 : nowMonth + 1
const nextNextMonth = nowMonth + 2
const nextNextMonthYear = nowMonth >= 11 ? nowDate.getFullYear() + 1 : nowDate.getFullYear()

// const nextNextMonthBeginDate = new Date(nowDate.getFullYear(), nextMonth, 1)

// 月のインデックスは0-11
const nextMonthBeginDate = new Date(nowDate.getFullYear(), nextMonth - 1, 1)

// アンダーフローにより桁借りされる
const nextMonthLastDate = new Date(nowDate.getFullYear(), nextMonth, 0)

console.log(nowDate)

// console.log(nextNextMonthBeginDate)

console.log(nextMonthBeginDate)

console.log(nextMonthLastDate)

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

let sundayList = []
for (let d = beginNearSundayDate; d <= lastNearSundayDate; d += 7) {
  sundayList.push(d)
}

console.log(sundayList)

const nextMonthHolidays = holiday_jp.between(nextMonthBeginDate, nextMonthLastDate)

console.log(nextMonthHolidays)

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

<span style="color: red;">8/6（日）</span>

<span style="color: red;">8/11（金）</span>

<span style="color: red;">8/12（土）</span>

<span style="color: red;">8/13（日）</span>

<span style="color: red;">8/14（月）</span>

<span style="color: red;">8/20（日）</span>

<span style="color: red;">8/27（日）</span>

定休日、夜間等の持ち込みなどございましたらお気軽にご相談、お問い合わせください！

`

// fs.writeFileSync(`./${nowDate}-regular-holiday.md`, mdData)

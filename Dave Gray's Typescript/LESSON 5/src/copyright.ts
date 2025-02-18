// Original JS Code
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear

// My Answer
// const year = document.getElementById('year') as HTMLElement
// const thisYear = (new Date().getFullYear() as unknown) as string
// year.setAttribute('datetime', thisYear)
// year.textContent = thisYear

// 1st Variation
// let year: HTMLElement | null
// year = document.getElementById('year')
// let thisYear: string
// thisYear = new Date().getFullYear().toString()
// if (year) {
//     year.setAttribute('datetime', thisYear)
//     year.textContent = thisYear
// }

// 2nd Variation;
const year = document.getElementById("year") as HTMLSpanElement
const thisYear : string = new Date().getFullYear().toString()
year.setAttribute('datetime', thisYear)
year.textContent = thisYear
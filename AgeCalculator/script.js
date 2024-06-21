
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function CalculateAge() {
    let currentDate = new Date();
    let inputDate = new Date(document.getElementById("input-date").value);
    let birthday, birthmonth, birthyear;
    let birthDetail = {
        date: inputDate.getDate(),
        month: inputDate.getMonth() + 1,
        year: inputDate.getFullYear()
    };

    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();

    Leapyear(currentYear);

    if (birthDetail.year > currentYear || 
        (birthDetail.month > currentMonth && birthDetail.year == currentYear) || 
        (birthDetail.date > currentDay && birthDetail.month == currentMonth && birthDetail.year == currentYear)) {
        alert("Not born yet!");
        displayResult("-", "-", "-");
        return;
    }

    birthyear = currentYear - birthDetail.year;

    if (currentMonth >= birthDetail.month) {
        birthmonth = currentMonth - birthDetail.month;
    } else {
        birthyear--;
        birthmonth = 12 + currentMonth - birthDetail.month;
    }

    if (currentDay >= birthDetail.date) {
        birthday = currentDay - birthDetail.date;
    } else {
        birthmonth--;
        let days = months[currentMonth - 2];
        birthday = days + currentDay - birthDetail.date;
        if (birthmonth < 0) {
            birthmonth = 11;
            birthyear--;
        }
    }

    displayResult(birthyear, birthmonth, birthday);
}

function displayResult(bYear, bMonth, bDate) {
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("date").textContent = bDate;
}

function Leapyear(ayear) {
    if (ayear % 4 === 0 && (ayear % 100 !== 0 || ayear % 400 === 0)) {
        months[1] = 29;
    } else {
        months[1] = 28;
    }
}

let form = document.getElementById("myform")
form.addEventListener('submit', function (e) {
    e.preventDefault()
    let bsalary = Number(document.getElementById('b_salary').value)
    let benefit = Number(document.getElementById('benefitss').value)

    let grosssalary = gross(bsalary, benefit)
    document.getElementById('gross_salary').innerHTML = grosssalary
    let NHIF = calc_nhif(grosssalary)
    document.getElementById('nhif').innerHTML = NHIF
    let NSSF = calc_nssf(grosssalary)
    document.getElementById('nssf').innerHTML = NSSF
    let NHDF = calc_nhdf(grosssalary)
    document.getElementById('nhdf').innerHTML = NHDF
    let taxable_income = calc_taxable_income(grosssalary, NSSF, NHDF)
    document.getElementById('taxable_income').innerHTML = taxable_income
    let PAYEE = calc_payee(taxable_income)
    document.getElementById('payee').innerHTML = PAYEE
    let net_pay = calc_netsalary(grosssalary, NHIF, NSSF, NHDF, PAYEE)
    document.getElementById('net_pay').innerHTML = net_pay
})

//Write a program that takes input of someone's basic salary and benefits, adds them to find the gross salary then uses  the gross salary to find the NHIF. 
function gross(slry, bnf) {
    let gr_sal = (slry + bnf);
    return gr_sal;
}

//use the gross salary to calc nhif
function calc_nhif(grss) {
    let nhif_contribution = 0
    if (grss > 0 && grss <= 5999) {
        nhif_contribution = 150
    } else if (grss > 6000 && grss <= 7999) {
        nhif_contribution = 300
    } else if (grss > 8000 && grss < 12000) {
        nhif_contribution = 400
    } else if (grss > 12000 && grss <= 14999) {
        nhif_contribution = 500
    } else if (grss >= 15000 && grss <= 19999) {
        nhif_contribution = 600
    } else if (grss >= 20000 && grss <= 24999) {
        nhif_contribution = 750
    } else if (grss >= 25000 && grss <= 29999) {
        nhif_contribution = 850
    } else if (grss >= 30000 && grss <= 34999) {
        nhif_contribution = 900
    } else if (grss >= 35000 && grss <= 39999) {
        nhif_contribution = 950
    } else if (grss >= 40000 && grss <= 44999) {
        nhif_contribution = 1000
    } else if (grss >= 45000 && grss <= 49999) {
        nhif_contribution = 1100
    } else if (grss >= 50000 && grss <= 59999) {
        nhif_contribution = 1200
    } else if (grss >= 60000 && grss <= 69999) {
        nhif_contribution = 1300
    } else if (grss >= 70000 && grss <= 79999) {
        nhif_contribution = 1400
    } else if (grss >= 80000 && grss <= 89999) {
        nhif_contribution = 1500
    } else if (grss >= 90000 && grss <= 99999) {
        nhif_contribution = 1600
    } else {
        nhif_contribution = 1700
    }
    return nhif_contribution
}


//Continue with the program above, then use  the gross salary to find the NSSF. 
// To find the Kenya NSSF Rate  using 6% of the Gross Salary. BUT ONLY A MAXIMUM OF 18,000 Gross Salary CAN BE USED IN NSSF. 
function calc_nssf(x, rate = 0.06) {
    let nssf_contri = 0
    if (x > 0 && x <= 18000) {
        nssf_contri = x * 0.06
    } else {
        nssf_contri = 18000 * 0.06
    }
    return nssf_contri
}

//Continue with the same program and calculate an individual’s NHDF using:
//  i.e NHDF = gross_salary *  0.015
function calc_nhdf(y) {
    let nhdf_contri = y * 0.015
    return nhdf_contri
}

//Calculate the taxable income.
// i.e taxable_income = gross salary - (NSSF + NHDF) 
function calc_taxable_income(a, b, c) {
    let taxable_income = a - (b + c)
    return taxable_income
}

//Continue with the same program and find the person's PAYEE using the taxable income above.
function calc_payee(tax) {
    let payee = 0
    let relief = 2400
    if (tax >= 0 && tax <= 24000) {
        payee = 0
    } else if (tax > 24000 && tax <= 32333) {
        payee = ((tax - 24000) * 0.25) + (24000 * 0.1) - relief
    } else if (tax > 32333 && tax <= 500000) {
        payee = (24000 * 0.1) + (8333 * 0.25) + ((tax - 24000) * 0.3) - relief
    } else if (tax > 500000 && tax <= 800000) {
        payee = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + ((tax - 24000) * 0.325) - relief
    } else if (tax > 800000) {
        payee = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + (300000 * 0.325) + ((tax - 24000) * 0.35) - relief
    } return payee
}

//Continue with the same program and calculate an individual’s Net Salary using:
//  net_salary = gross_salary - (nhif + nhdf +  nssf + payee)
function calc_netsalary(a, b, c, d, e) {
    let net_salary = a - (b, c, d, e)
    return net_salary
}

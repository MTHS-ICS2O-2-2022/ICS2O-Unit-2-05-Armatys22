// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: dom
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates pay per hour and tax.
 */
function calculate() {
  // input
  const payment = parseInt(document.getElementById("payment").value)
  const hours_worked = parseInt(document.getElementById("hours_worked").value)

  // process
  const payment_pay =  (payment * hours_worked) * (1.00 - 0.18)
  const tax_lax =  (payment * hours_worked) *  0.18


  // output
document.getElementById('pay').innerHTML = `Your pay will be: $ ${payment_pay.toFixed(2)}`
document.getElementById('tax').innerHTML = `the goverment gets: $ ${tax_lax.toFixed(2)}`
}
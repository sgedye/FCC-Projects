/*** Project 10 : Javascript Project 5 - Cash Register: ***/

/* 
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
The checkCashRegister() function should always return an object with a status key and a change key.
Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

// My solution
function checkCashRegister(price, cash, cid) {
  // Here is your change, ma'am.
  let status = "OPEN";
  let change =
    [["ONE HUNDRED", 0],
    ["TWENTY", 0],
    ["TEN", 0],
    ["FIVE", 0],
    ["ONE", 0],
    ["QUARTER", 0],
    ["DIME", 0.0],
    ["NICKEL", 0.00],
    ["PENNY", 0.00]];
  //Work out difference (cash - price)
  let cashBack = cash - price;
  let totalCID = cid[0][1] + cid[1][1] + cid[2][1] + cid[3][1] + cid[4][1] + cid[5][1] + cid[6][1] + cid[7][1] + cid[8][1];
	if ((totalCID - cashBack) < 0.00) {
    return {"status": "INSUFFICIENT_FUNDS", "change": []};	
	} else if (Math.abs(totalCID - cashBack) < 0.01) {
    return {"status": "CLOSED", "change": [...cid]};
  } else {
		while (cashBack >= 100 && cid[8][1] >= 100) {
			cashBack -= 100;
			change[0][1] += 100; 
			cid[8][1] -= 100;
		}
		while (cashBack >= 20 && cid[7][1] >= 20) {
			cashBack -= 20;
			change[1][1] += 20;
			cid[7][1] -= 20;
		}
		while (cashBack >= 10 && cid[6][1] >= 10) {
			cashBack -= 10;
			change[2][1] += 10;
			cid[6][1] -= 10;	
		}
		while (cashBack >= 5 && cid[5][1] >= 5) {
			cashBack -= 5;
			change[3][1] += 5;
			cid[5][1] -= 5;	
		}
		while (cashBack >= 1 && cid[4][1] >= 1) {
			cashBack -= 1;
			change[4][1] += 1;
			cid[4][1] -= 1;			
		}
		while (cashBack >= 0.25 && cid[3][1] >= 0.25) {
			cashBack -= 0.25;
			change[5][1] += 0.25;
			cid[3][1] -= 0.25;
		}
		while (cashBack >= 0.10 && cid[2][1] >= 0.10) {
			cashBack -= 0.10;
			change[6][1] += 0.10;
			cid[2][1] -= 0.10;
		}
		while (cashBack >= 0.05 && cid[1][1] >= 0.05) {
			cashBack -= 0.05;
			change[7][1] += 0.05;
			cid[1][1] -= 0.05;
		}
		while (cashBack > 0.00 && cid[0][1] > 0.00) {
			cashBack -= 0.01;
			change[8][1] += 0.01;
			cid[0][1] -= 0.01;
		}
		if ((change[0][1] + change[1][1] + change[2][1] + change[3][1] + change[4][1] + change[5][1] + change[6][1] + change[7][1] + change[8][1]) - (cash-price) < 0.00) {
			console.log(change);
			return {"status": "INSUFFICIENT_FUNDS", "change": []};
		}
  }
  let tempArr = [];
  for (let i=0; i<change.length; i++) {
    if (change[i][1] > 0) {
      tempArr.push(change[i]);
    }
  }
  let result = {"status": status, "change": tempArr};
  return result;
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

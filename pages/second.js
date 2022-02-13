// Page 2

document.getElementById("deposit-btn").addEventListener("click", function () {
    const getAmount = document.getElementById("deposit-amount");
    const depoAmmount = getAmount.value;
    // Total Deposit Balance
    const depoTotal = document.getElementById("depo-ammount");
    const previousDeposit = depoTotal.innerText;
    const newDepositAmmount = parseFloat(previousDeposit) + parseFloat(depoAmmount);
    depoTotal.innerText = newDepositAmmount;
    // Total Balance
    const totalBalance = document.getElementById("balance-total");
    number = parseFloat(totalBalance.innerText)
    totalBalance.innerText = parseFloat(depoAmmount) + number;

    getAmount.value = "";


})


document.getElementById("withdraw-btn").addEventListener("click", function () {
    const getAmount = document.getElementById("withdraw-amount");
    const withAmmount = getAmount.value;
    // Total Withdraw
    const withdrawBalance = document.getElementById("with-ammount");
    const previousWithdraw = withdrawBalance.innerText;
    const newWithdraw = parseFloat(previousWithdraw) + parseFloat(withAmmount)
    withdrawBalance.innerText = newWithdraw;
    // New Total Balance
    const totalBalance = document.getElementById("balance-total");
    number = parseFloat(totalBalance.innerText)
    totalBalance.innerText = number - parseFloat(withAmmount);

    getAmount.value = "";
})

// Logout Button

document.getElementById("logout-btn").addEventListener("click", function () {
    window.location.href = "../index.html"
})
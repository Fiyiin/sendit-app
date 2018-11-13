
function cancelOrder() {
    let ans = confirm("Are you sure yo want to cancel");
    if (ans) {
        alert("Your order has been cancelled")
    } else {
        alert("Delivery will proceed as scheduled")
    }
}

function changeDestination() {
    let ans = prompt("Enter new location")
    if (ans) {
        alert("Done")
    } else {
        alert("Delivery will proceed as scheduled")
    }
}
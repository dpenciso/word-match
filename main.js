function getValue() {
    let str1 = document.querySelector("#input1").value;
    let str2 = document.querySelector("#input2").value;
    if (str1.length !== str2.length) {
        alert("You must enter the same number of characters for both inputs")
    }
        else {
            function canMatch(str1, str2) {
                for (let i = 0; i < str1.length; i++) {
                    if (str2.indexOf(str1[i]) <= -1) return false
                }
                for (let i = 0; i < str2.length; i++) {
                    if (str1.indexOf(str2[i]) <= -1) return false
                }
                return true;
            }
        }
    
    alert(canMatch(str1, str2))
}








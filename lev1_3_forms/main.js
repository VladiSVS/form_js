function difference(a, b, z) {
    a = document.getElementById("ageOne").value
    b = document.getElementById("ageTwo").value
    z = a % b
    document.getElementById("result").innerHTML = z
}
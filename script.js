(function () {
    document.body.innerHTML += `<style id="hslVariable">
    </style>`
    const range = document.getElementById("hslRange")
    const style = document.getElementById("hslVariable")
    let hue = range.value
    style.innerHTML = `:root{--hue: ${hue};`
range.addEventListener("input", (event) => {
      hue = range.value
      style.innerHTML = `:root{--hue: ${hue};`
})
})();
  
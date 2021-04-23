// ES5
var Vibrant = require('node-vibrant')

// Using builder
const population = Vibrant
.from('logo.png')
.quality(1)
.clearFilters()
.getSwatches().then((swatch)=>{
  console.log(swatch.Vibrant)
  console.log(swatch.Muted)
  console.log(swatch.DarkVibrant)
  console.log(swatch.DarkMuted)
  console.log(swatch.LightVibrant)
  console.log(swatch.LightMuted)
})


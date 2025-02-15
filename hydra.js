// todo actualy order it
// 2
s0.initImage("https://media.discordapp.net/attachments/1338791614738464828/1338791670321385512/glazmo.png?ex=67ac5e67&is=67ab0ce7&hm=9c4fd7337d7a0962add86afdad79eec52d6af3a5c35b5836fec47bfb6cc641eb&=&format=webp&quality=lossless&width=767&height=432")

bpm = 1000

src(s0).add(o0, [0, 1.9]).diff(o0).modulateScale(voronoi(1000, 1000), 0.03)
  .diff(noise(1000, 1000).thresh(0.9, 0))
  .out(o0)


// 3

voronoi(1, 0.1, 0.9)
    .blend(solid(1, 1, 1))
    //.add(shape(3, 0.2).rotate(1, 1).modulate(noise(1000, 1000), 0.05))
    .blend(o0, 0.9)
    //.blend(src(o0).kaleid(time % 5).scroll(1, 1))
    .out(o0)

// 4

await loadScript("https://hyper-hydra.glitch.me/hydra-text.js")

hydraText.font = "GT America Trial"

bpm = 180

text("GLA\nZMO")
  .repeatX([1, 2, 3, 2, 1])
  .blend(voronoi(1, 1, 0))
  .add(o0, [0, 1.9]).diff(o0).modulateScale(voronoi(1000, 1000), 0.03)
  .out(o0)

// 5

s0.initImage("https://media.discordapp.net/attachments/1326262980240998450/1334502977276219483/IMG_8062.jpg?ex=67ad3eff&is=67abed7f&hm=c2266cc711e12166988c41418ad567185738e22bb3b807176f669211e433746e&=&format=webp&width=324&height=432")

bpm = 1000

src(s0).saturate(0).add(o0, [0, 1.9]).diff(o0).modulateScale(voronoi(1000, 1000), 0.03)
.add(shape(3, [0.1, 0.12, 0.06, 0.04, 0.08, 0.02]).color(0, 1, 0, 1).rotate(10, 1).modulate(noise(1000, 1000)))
  .diff(noise(1000, 1000).thresh(0.9, 0))
  .out(o0)

// 56 neco neco

osc(20, 0.01, 1.1)
    .kaleid(3)
    .mult(voronoi().color(0, 1, 0, 1).rotate(0, -0.1)).modulate(noise(1000, 1000))
    .color(0,1,0)
    .rotate(0, 0.1)
    .blend(o0)
      .out(o0)

// 56 jneconeco

voronoi(1000, 1000)
  .thresh(1, 1.5)
    .mult(shape(3, [0.5, 0.6, 0.3, 0.2, 0.4, 0.1]).color(0, 1, 0, 1).rotate(10, 1)).modulate(noise(1000, 1000))
    .blend(voronoi(1, 1, 0).thresh(0.5, 0).blend(noise(1000, 1000)))
     .blend(o0)
  .out(o0)

// 56 neco neco

shape(1, 1)
  .mult(
    voronoi(1000, 2)
    .blend(o0)
    .luma()
  )
  .add(
    shape(3, 0.125)
       .rotate(1, 1)
       .mult(
         voronoi(1000, 10)
         .luma()
       )
       .rotate(1.5)
  )
  //.scrollX([0.1,-0.0625,0.005,0.00001], 0)
  .scrollX([0.1, 0, -0.1, 0], 0)
  .scrollY([0.1, 0, -0.1, 0])
  .out(o0)

<p align="center">
  <img src="http://puu.sh/pqnMl/7731f31414.png" height="200"/>
</p>

# Intro
Prototypen er utstyrt med reedbrytere bak en treplate, foran treplaten ligger selve skallet til produktet. Skallet har hull slik at man kan plassere brikker rett ovenfor reedbryterene. Arduinoen sender en string ut på seriell basert på hvilke reedbrytere som er aktive, denne stringen leses av wifimodulen og liker 	deretter vidre via en iframe til den ekstrene webserveren med riktige parametere.

Den eksterne webserveren vil generere middagen basert på hvilke parametere 	som ble tilsedt og hvilke oppskrifter den har å jobbe med. Når oppskriftene er ferdiggenererte vil de vises til brukeren.


meteor-speakingurl
==================
`meteor add ongoworks:speakingurl`

Wraps (speakingurl)[https://github.com/pid/speakingurl] as a Meteor package.

Exports `getSlug`


Example:
```
var slug;

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !");
console.log(slug); // Output: schoener-titel-laesst-gruessen-bel-ete
```

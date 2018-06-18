<template>
<div class="">
  <div class="row">
    <div class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">textsms</i>
          <input type="text" id="autocomplete-input" class="autocomplete">
          <label for="autocomplete-input">Autocomplete</label>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import data from '../cards.json'

var cardNames = {};
var cards = {};
data.forEach((e, i) => {
  cardNames[e.name] = null;
  cards[e.id] = {
    name: e.name,
    desc: e.desc
  };
});
/*
$(document).ready(function() {
  $('input.autocomplete').autocomplete({
    data: cardNames
  });
});
*/

export default {
  name: 'Cards',
  data() {
    return {
      cards: cards
    }
  }
}
</script>

<template>
<div>
  <div id="flow">
    <span class="flow-1"></span>
    <span class="flow-2"></span>
    <span class="flow-3"></span>
  </div>
  <div class="section">
    <div class="box">
      <b-field label="Card Finder">
        <b-autocomplete rounded v-model="name" :data="filteredCards" placeholder="Enter Card Name...." icon="magnify" @select="option => selected = option">
          <template slot="empty">No results found</template>
        </b-autocomplete>
      </b-field>
    </div>

    <div class="row columns" v-if="selected">
      <div class="column is-one-one">
        <div class="card large">
          <div class="card-content">
            <div class="media">
              <!--
              <div class="media-left">
                <figure class="image is-96x96">
                  <img src="https://i.imgsafe.org/a4/a4bb9acc5e.jpeg" alt="Image">
                </figure>
              </div>
              -->
              <div class="media-content">
                <p class="is-size-2 has-text-centered has-text-weight-light has-text-grey">{{ selected }}</p>
                <p class="is-size-4 has-text-centered has-text-weight-light has-text-grey">ID: {{ cards[selected].id }}</p>
              </div>
            </div>
            <div class="content">
              {{ cards[selected].desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import data from '../cards.json'

var cardNames = [];
var cards = {};
data.forEach((e, i) => {
  cardNames.push(e.name);
  cards[e.name] = {
    id: e.id,
    desc: e.desc
  };
});

export default {
  data() {
    return {
      cardNames: cardNames,
      cards: cards,
      name: '',
      selected: null
    }
  },
  computed: {
    filteredCards() {
      return this.cardNames.filter((option) => {
        return option
          .toString()
          .toLowerCase()
          .indexOf(this.name.toLowerCase()) >= 0
      })
    }
  }
}
</script>

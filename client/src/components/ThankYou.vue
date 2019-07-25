<template>
  <v-flex
    xs12
    md10
    lg4
    offset-xs0
    offset-md0
    offset-lg1
  >
    <v-card>
      <v-card-title>
        <span class="display-1 text--primary">Thank you!</span>
      </v-card-title>
      <v-card-text
        :key="idx"
        v-for="(message, idx) in messages"
      >{{ message }}</v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'ThankYou',
  components: {},
  created() {
    this.$store.commit('changeBackground', 'thankyou');
  },
  data() {
    return {
      messages: [
        'Thank you for your time & cooperation.',
        '시간을 내주고 협조해 주셔서 감사합니다.',
        'ご協力ありがとうございました',
      ],
    };
  },
};
</script>

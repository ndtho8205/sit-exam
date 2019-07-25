<template>
  <v-flex
    xs12
    md10
    lg6
    offset-xs0
    offset-md0
    offset-lg1
  >
    <v-card>

      <v-card-title>
        <span class="display-1 text--primary">Agreement</span>
      </v-card-title>

      <v-card-text
        :key="idx"
        v-for="(message, idx) in messages"
      >{{ message }}</v-card-text>

      <v-card-actions>
        <v-btn @click="$emit('agree', false)">Not Agree</v-btn>
        <v-btn
          color="primary"
          @click="$emit('agree', true)"
        >Agree</v-btn>
      </v-card-actions>

    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'Agreement',
  components: {},
  data() {
    return {
      messages: [
        'Your name and nationality will be published for the purpose of this research. '
        + 'Other personal data will not be made public.\n\n'
        + 'Do you agree?',
        '동의서\n'
        + '당신의 이름과 국적은 연구의 목적을 위해 사용될 것입니다. 다른 개인 정보는 공개되지 않을 것입니다.\n\n'
        + '이에 동의하십니까?',
        '同意書\n'
        + 'あなたのお名前と国籍は研究の目的のため使用されます。他の個人情報は公開されません\n\n'
        + 'これに同意されますか？',
      ],
    };
  },
};
</script>

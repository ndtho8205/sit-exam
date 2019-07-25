<template>
  <v-layout
    align-start
    justify-space-between
    column
  >
    <v-flex align-self-end>
      <VueCountdown
        v-if="step != this.questions.length + 2"
        :time="330 * 1000"
        :auto-start="false"
        ref="countdown"
        @end="end"
        width="100%"
        :transform="transform"
      >
        <template slot-scope="props">
          <span class="title">
            Time Remaining:
            <span class="font-weight-black pink--text text--darken-3 headline">
              {{ props.minutes }} : {{ props.seconds }}
            </span>
          </span>
        </template>
      </VueCountdown>
    </v-flex>

    <v-card
      flat
      tile
    >
      <v-card-title class="title font-weight-regular justify-space-between">
        <span>{{ currentTitle }}</span>
      </v-card-title>

      <v-window v-model="step">
        <v-window-item :value="0">
          <v-card-text
            :key="idx"
            v-for="(description, idx) in descriptions"
          >{{ description }}</v-card-text>
        </v-window-item>

        <v-window-item
          v-for="(question, questionId) in questions"
          :value="questionId + 1"
          :key="questionId"
        >
          <v-card-text>{{ question.question }}</v-card-text>
          <v-card-text>
            <v-radio-group
              v-model="answers[questionId + 1]"
              class="ma-0"
            >
              <v-radio
                v-for="(option, optionId) in question.options"
                :key="optionId"
                :label="option"
                :value="String.fromCharCode(optionId+65)"
              ></v-radio>
            </v-radio-group>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="questions.length + 1">
          <v-card-text>Are you sure you want to submit this answer?</v-card-text>
        </v-window-item>

        <v-window-item :value="questions.length + 2">
          <v-card-text>
            <span class="display-4 font-weight-black green--text text--lighten-1">{{ score }}</span>
            <span class="display-1 font-weight-medium green--text text--lighten-3">/100</span>
          </v-card-text>
        </v-window-item>
      </v-window>

      <v-card-actions>
        <v-btn
          @click="handlePrev"
          v-if="step != 0 && step != this.questions.length + 2"
          :disabled="step == 1 || timeup"
        >{{step == questions.length + 1 ? "Cancel" : "Back"}}</v-btn>
        <v-btn
          color="primary"
          :disabled=" 0 < step && step <= this.questions.length && !hasAnswer(step)"
          @click="handleNext"
        >{{ nextButtonLabel }}</v-btn>
      </v-card-actions>

    </v-card>
  </v-layout>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown';
import fetch from '../utils/fetch';

export default {
  name: 'ExamQuestion',
  components: {
    VueCountdown,
  },
  props: {
    examId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      step: 0,
      timeup: false,
      score: 0,
      descriptions: [],
      questions: [],
      answers: {},
    };
  },
  created() {
    // this.$nextTick(() => {
    //   this.step = 25;
    // });

    fetch.getExam(this.examId, this.$store.state.studentInfo.lang, (res, err) => {
      if (!res || err) {
        this.$store.commit('setError', `${err.message}. Please try again or contact your administrator.`);
        return;
      }
      if (!res.data || !res.data.descriptions || !res.data.questions) {
        this.$store.commit('setError', 'Cannot get required information from server. Please try again or contact your administrator.');
        return;
      }

      this.descriptions = res.data.descriptions;
      this.questions = res.data.questions;
    });
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        case 0:
          return 'Explanation';
        case this.questions.length + 1:
          return 'Submit';
        case this.questions.length + 2:
          return 'Score';
        default:
          return `Question ${this.step}/${this.questions.length}`;
      }
    },
    nextButtonLabel() {
      switch (this.step) {
        case 0:
          return 'Start';
        case this.questions.length + 1:
          return 'Submit';
        case this.questions.length + 2:
          return 'Continue';
        default:
          return 'Next';
      }
    },
  },
  methods: {
    start() {
      this.step = 1;
      this.$refs.countdown.start();
    },
    end() {
      this.timeup = true;
      this.step = this.questions.length + 1;
    },
    handlePrev() {
      if (this.step > 1) {
        this.step -= 1;
      }
    },
    handleNext() {
      switch (this.step) {
        case 0:
          return this.start();
        case this.questions.length + 1:
          return this.submitAnswer();
        case this.questions.length + 2:
          return this.continue();
        default:
          if (this.hasAnswer(this.step) && this.step <= this.questions.length) {
            this.step += 1;
          }
          return 0;
      }
    },
    submitAnswer() {
      this.$store.commit('clearError');
      const data = {
        studentId: this.$store.state.studentInfo.id,
        answers: { ...this.answers },
      };
      const callback = (res, err) => {
        if (!res || err) {
          this.$store.commit('setError', `${err.message}. Please try again or contact your administrator.`);
          return;
        }
        if (!res.data) {
          this.$store.commit('setError', 'Cannot get required information from server. Please try again or contact your administrator.');
          return;
        }

        this.$refs.countdown.abort();
        this.score = res.data.score;
        this.step += 1;
      };
      fetch.postAnswer(this.examId, this.$store.state.studentInfo.lang, data, callback);
    },
    continue() {
      this.$emit('endExamQuestion');
    },
    transform(props) {
      Object.entries(props).forEach(([key, value]) => {
        // Adds leading zero
        const digits = value < 10 ? `0${value}` : value;
        // eslint-disable-next-line no-param-reassign
        props[key] = `${digits}`;
      });

      return props;
    },
    hasAnswer(questionId) {
      return hasOwnProperty.call(this.answers, questionId);
    },
  },
};
</script>

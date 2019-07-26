<template>
  <v-flex
    xs12
    md10
    lg6
    offset-xs0
    offset-md0
    offset-lg1
  >
    <v-stepper v-model="step">

      <v-stepper-header>
        <v-stepper-step
          :complete="step > 1"
          step="1"
          color="primary darken-2"
        >Test 1</v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step
          :complete="step > 2"
          step="2"
          color="primary darken-2"
        >Test 2</v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step
          :complete="step > 3"
          step="3"
          color="primary darken-2"
        >Study</v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step
          :complete="step > 4"
          step="4"
          color="primary darken-2"
        >Test 3</v-stepper-step>
      </v-stepper-header>

      <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        absolute
        rounded
        height="3"
        top
        class="ma-0"
        color="deep-purple accent-4"
      ></v-progress-linear>

      <v-stepper-items>
        <v-stepper-content step="1">
          <ExamQuestion
            :examId="1"
            v-on:endExamQuestion="step = 2"
            v-on:onLoading="handleLoading"
          />
        </v-stepper-content>

        <v-stepper-content step="2">
          <ExamQuestion
            :examId="2"
            v-on:endExamQuestion="step = 3"
            v-on:onLoading="handleLoading"
          />
        </v-stepper-content>

        <v-stepper-content step="3">
          <ExamStudy v-on:endExamStudy="step = 4" />
        </v-stepper-content>

        <v-stepper-content step="4">
          <ExamQuestion
            :examId="3"
            v-on:endExamQuestion="endExam"
            v-on:onLoading="handleLoading"
          />
        </v-stepper-content>
      </v-stepper-items>

    </v-stepper>
  </v-flex>
</template>

<script>
import ExamQuestion from './ExamQuestion.vue';
import ExamStudy from './ExamStudy.vue';

export default {
  name: 'Exam',
  components: {
    ExamQuestion,
    ExamStudy,
  },
  data() {
    return {
      loading: true,
      step: 0,
      exams: {},
    };
  },
  methods: {
    hasExamAnswer(examId) {
      return hasOwnProperty.call(this.exams, examId);
    },
    endExam() {
      this.$emit('endExam');
    },
    handleLoading(status) {
      this.loading = status;
      if (this.loading) {
        setTimeout(() => { this.loading = false; }, 2000);
      }
    },
  },
};
</script>

<template>
  <v-app>
    <v-content
      :style="{ backgroundImage: 'url(' + background[mode] + ')' }"
      class="white background"
    >
      <v-alert
        prominent
        v-if="isError"
        v-model="isError"
        border="left"
        transition="scale-transition"
        type="error"
        class="absolute"
      >
        <div>Oops! {{ errorMsg }}</div>
      </v-alert>
      <v-container
        fluid
        fill-height
      >
        <v-layout align-center>
          <v-slide-x-transition mode="out-in">
            <component
              :is="step"
              v-on:agree="agree"
              v-on:submitStudentInfo="submitStudentInfo"
              v-on:endExam="endExam"
            />
          </v-slide-x-transition>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

import Agreement from './components/Agreement.vue';
import StudentInfo from './components/StudentInfo.vue';
import Exam from './components/Exam.vue';
import ThankYou from './components/ThankYou.vue';

export default {
  name: 'App',
  components: {
    Agreement,
    StudentInfo,
    Exam,
    ThankYou,
  },
  data() {
    return {
      step: 'Agreement',
      background: {
        // eslint-disable-next-line global-require
        default: require('./assets/bg_default.png'),
        // eslint-disable-next-line global-require
        thankyou: require('./assets/bg_thankyou.png'),
      },
    };
  },
  computed: {
    ...mapState({
      isError: state => state.log.isError,
      errorMsg: state => state.log.errorMsg,
      mode: state => state.mode,
    }),
  },

  methods: {
    agree(agree) {
      this.step = agree ? 'StudentInfo' : 'ThankYou';
    },
    submitStudentInfo() {
      this.step = 'Exam';
    },
    endExam() {
      this.step = 'ThankYou';
    },
  },
};
</script>

<style scoped>
.absolute {
  position: absolute;
  right: 0;
  top: 0;
}
.background {
  background-position: bottom right;
  background-size: 55%;
}
</style>

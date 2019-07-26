<template>
  <v-layout
    align-start
    justify-space-between
    column
  >
    <v-flex align-self-end>
      <VueCountdown
        v-if="step != 2"
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

        <v-window-item :value="1">
          <div style="max-height: 600px; overflow-y: scroll">
            <v-card-text
              v-for="(item, idx) in items"
              :key="idx"
            >
              <span class="headline font-weight-bold">{{idx + 1}}. </span>
              <span>{{ item }}</span>
            </v-card-text>
          </div>
        </v-window-item>

        <v-window-item :step="2">
          <v-card-text>Let's move to the last test!</v-card-text>
        </v-window-item>
      </v-window>

      <v-card-actions>
        <v-btn
          color="primary"
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
  name: 'ExamStudy',
  components: {
    VueCountdown,
  },
  data() {
    return {
      step: 0,
      timeup: false,
      descriptions: [],
      items: [],
    };
  },
  created() {
    fetch.getStudyList(this.$store.state.studentInfo.lang, (res, err) => {
      if (!res || err) {
        this.$store.commit('setError', `${err.message}. Please try again or contact your administrator.`);
        return;
      }
      if (!res.data || !res.data.descriptions || !res.data.items) {
        this.$store.commit('setError', 'Cannot get required information from server. Please try again or contact your administrator.');
        return;
      }

      this.descriptions = res.data.descriptions;
      this.items = res.data.items;
    });
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        case 0:
          return 'Explanation';
        case 2:
          return 'Finish';
        default:
          return 'Study time';
      }
    },
    nextButtonLabel() {
      switch (this.step) {
        case 0:
          return 'Start';
        case 2:
          return 'Continue';
        default:
          return 'Done';
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
      this.step += 1;
    },
    handleNext() {
      switch (this.step) {
        case 0:
          return this.start();
        case 2:
          return this.continue();
        default:
          this.step += 1;
          this.$refs.countdown.abort();
          return 0;
      }
    },
    continue() {
      this.$emit('endExamStudy');
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
  },
};
</script>

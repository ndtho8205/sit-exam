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
        <span class="display-1 text--primary">Information</span>
      </v-card-title>

      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
        >
          <v-text-field
            v-model="info.name"
            :rules="nameRules"
            label="Name (in English)"
            required
          ></v-text-field>

          <v-radio-group
            v-model="info.gender"
            mandatory
            :rules="[v => !!v || 'Gender is required']"
          >
            <template v-slot:label>
              <div>Gender</div>
            </template>
            <v-radio
              key="male"
              label="Male"
              value="male"
            />
            <v-radio
              key="female"
              label="Female"
              value="female"
            />
            <v-radio
              key="other"
              label="Other"
              value="other"
            />
          </v-radio-group>

          <v-text-field
            v-model="info.email"
            :rules="emailRules"
            label="E-mail"
            required
          />

          <v-autocomplete
            v-model="info.country"
            :items="countryList"
            :rules="[v => !!v || 'Country is required']"
            label="Country"
            required
          ></v-autocomplete>

          <v-divider />

          <v-radio-group
            v-model="lang"
            mandatory
            :rules="[v => !!v || 'Language is required']"
          >
            <template v-slot:label>
              <div>Choose your language</div>
            </template>
            <v-radio
              key="en"
              label="English"
              value="en"
            />
            <v-radio
              key="kr"
              label="Korean"
              value="kr"
            />
            <v-radio
              key="jp"
              label="Japanese"
              value="jp"
            />
          </v-radio-group>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="primary"
          @click="handleSubmit"
        >Continue</v-btn>
      </v-card-actions>

    </v-card>
  </v-flex>
</template>

<script>
import countries from '../utils/country';
import fetch from '../utils/fetch';

export default {
  name: 'StudentInfo',
  components: {},
  data() {
    return {
      valid: false,
      nameRules: [
        v => !!v || 'Name is required',
        v => /^[a-zA-Z ,.'-]+$/.test(v) || 'Name must be valid',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      countryList: countries,
      lang: 'en',
      info: {
        name: '',
        gender: '',
        country: '',
        email: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$store.commit('clearError');

      if (!this.$refs.form.validate()) {
        return;
      }

      const studentInfo = {
        ...this.info,
      };

      fetch.postStudentInfo(studentInfo, (res, err) => {
        if (!res || err) {
          this.$store.commit('setError', `${err.message}. Please try again or contact your administrator.`);
          return;
        }
        if (!res.data || !res.data.studentId) {
          this.$store.commit('setError', 'Cannot get required information from server. Please try again or contact your administrator.');
          return;
        }
        const { studentId } = res.data;
        this.$store.commit('updateStudent', {
          id: studentId,
          lang: this.lang,
        });
        this.$emit('submitStudentInfo');
      });
    },

  },
};
</script>

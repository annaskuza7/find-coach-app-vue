<template>
  <BaseCard>
    <section>
      <h2>Register as a coach now!</h2>
      <CoachForm @save-data="saveData" />
    </section>
  </BaseCard>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  components: {
    CoachForm,
  },

  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      this.$router.push('/coaches');
    },
  },
};
</script>

<style scoped></style>

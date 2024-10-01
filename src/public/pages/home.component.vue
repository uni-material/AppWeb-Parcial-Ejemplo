<script>
import axios from 'axios';

export default {
  data() {
    return {
      exams: [],
      indicators: {
        'Exam Count': 0,
        'Highest Score': 0,
        'Lowest Score': 0,
        'Average Score': 0,
      },
    };
  },
  mounted() {
    this.fetchMentalStateExams();
  },
  methods: {
    async fetchMentalStateExams() {
      try {
        const response = await axios.get('http://localhost:3000/mentalStateExams');
        this.exams = response.data;
        this.calculateIndicators();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    calculateIndicators() {
      if (this.exams.length === 0) return;

      this.indicators['Exam Count'] = this.exams.length;

      const totalScores = this.exams.map(exam =>
          exam.orientationScore +
          exam.registrationScore +
          exam.attentionAndCalculationScore +
          exam.recallScore +
          exam.languageScore
      );

      this.indicators['Highest Score'] = Math.max(...totalScores);
      this.indicators['Lowest Score'] = Math.min(...totalScores);
      this.indicators['Average Score'] = (totalScores.reduce((a, b) => a + b, 0) / totalScores.length).toFixed(2);
    },
  },
};
</script>


<template>
  <div class="home" aria-label="Mental State Exam Analytics">
    <h1>Mental State Exam Analytics</h1>
    <h2>Score Analytics</h2>
    <div class="card" role="region" aria-labelledby="analytics-card">
      <h3 id="analytics-card" class="visually-hidden">Analytics Indicators</h3>
      <div class="indicator" v-for="(value, key) in indicators" :key="key">
        <span>{{ key }}:</span>
        <span>{{ value }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  margin-top: 20px;
}
.indicator {
  margin-bottom: 8px;
}
</style>

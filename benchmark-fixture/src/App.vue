<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { listExpenses } from "./api";
import type { Expense } from "./types";

const expenses = ref<Expense[]>([]);
const sort = ref<"date" | "amount">("date");
const error = ref("");
const sortedExpenses = computed(() => [...expenses.value].sort((a, b) => sort.value === "amount" ? b.amount - a.amount : b.date.localeCompare(a.date)));
onMounted(async () => { try { expenses.value = await listExpenses(); } catch { error.value = "Unable to load expenses"; } });
</script>

<template>
  <main>
    <h1>Expenses</h1>
    <label>Sort <select v-model="sort" aria-label="Sort expenses"><option value="date">Date</option><option value="amount">Amount</option></select></label>
    <p v-if="error" role="alert">{{ error }}</p>
    <ul><li v-for="expense in sortedExpenses" :key="expense.id">
      <span>{{ expense.title }}</span> — <span>{{ expense.categoryId }}</span> — <span>{{ expense.amount }}</span> — <time>{{ expense.date }}</time>
    </li></ul>
  </main>
</template>

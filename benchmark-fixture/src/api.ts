import type { Expense } from "./types";
const initial: Expense[] = [{ id: "e1", title: "Coffee", categoryId: "food", amount: 250, date: "2026-10-01" }, { id: "e2", title: "Bus", categoryId: "travel", amount: 60, date: "2026-10-02" }];
let store = initial.map(item => ({ ...item }));
export async function listExpenses(): Promise<Expense[]> { return store.map(item => ({ ...item })); }
export async function updateExpense(id: string, patch: Omit<Expense, "id">): Promise<Expense> {
  const index = store.findIndex(item => item.id === id);
  if (index < 0) throw new Error("Expense not found");
  if (!patch.title.trim() || !patch.categoryId.trim() || !Number.isFinite(patch.amount) || patch.amount <= 0 || !/^\d{4}-\d{2}-\d{2}$/.test(patch.date)) throw new Error("Invalid expense");
  store[index] = { id, ...patch };
  return { ...store[index] };
}
export function resetExpenses(): void { store = initial.map(item => ({ ...item })); }

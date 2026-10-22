import { beforeEach, describe, expect, it } from "vitest";
import { listExpenses, resetExpenses, updateExpense } from "../src/api";
beforeEach(() => resetExpenses());
describe("expense API contract", () => {
 it("updates one expense without modifying another", async () => { await updateExpense("e1", { title: "Tea", categoryId: "food", amount: 100, date: "2026-10-03" }); const list = await listExpenses(); expect(list[0]?.title).toBe("Tea"); expect(list[1]?.title).toBe("Bus"); });
 it("rejects invalid amounts", async () => { await expect(updateExpense("e1", { title: "Tea", categoryId: "food", amount: -1, date: "2026-10-03" })).rejects.toThrow(); });
});

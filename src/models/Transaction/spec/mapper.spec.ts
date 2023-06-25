import { describe } from "vitest";
import { TransactionDto } from "..";
import { mapTransactionDtoToModel } from "../src/mapper";

describe("transaction mapper", () => {
  describe("mapTransactionDtoToModel", () => {
    it("should map single transaction data transfer object", () => {
      const dto: TransactionDto = {
        id: "123",
        amount: 10,
        title: "some transaction",
      };

      const model = mapTransactionDtoToModel(dto);

      expect(model.id).toBe("123");
      expect(model.title).toBe("some transaction");
      expect(model.amount).toBe(10);
    });

    it("should not include extra keys", () => {
      const dto = {
        id: "123",
        amount: 10,
        title: "some transaction",
        someOtherKey: 100,
      };

      const model = mapTransactionDtoToModel(dto);

      expect(model).not.toHaveProperty("someOtherKey");
    });
  });
});

import { database } from "./../firebase";

describe("List équipement et checkpoints", () => {
  it("should not be undefined if calling Equipements from firebase", () => {
    const ref = database.ref();

    const equipements = ref.child("Equipements").get();

    expect(equipements).toBeDefined();
  });

  it("should not be undefined if calling Checkpoints from firebase", () => {
    const ref = database.ref();

    const checkpoints = ref.child("Checkpoints").get();

    expect(checkpoints).toBeDefined();
  });
});

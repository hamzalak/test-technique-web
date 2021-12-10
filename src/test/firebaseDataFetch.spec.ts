import { database } from "./../firebase";

describe("List équipement et checkpoints", () => {
  it("should not be undefined if calling Equipements from firebase", async () => {
    const ref = database.ref();

    const equipements = await ref.child("Equipments").get();

    expect(equipements.exists()).toBe(true);
  });

  it("should not be undefined if calling Checkpoints from firebase", async () => {
    const ref = database.ref();

    const checkpoints = await ref.child("Checkpoints").get();

    expect(checkpoints.exists()).toBe(true);
  });
});

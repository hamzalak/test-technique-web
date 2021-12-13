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

describe("List checkpoint relatif à un équipement", () => {
  const arr: (string | null)[] = [];
  it("should return all checkpoints related to equipements ; example LHXpVfII4J53rgKtuAi", async () => {
    database
      .ref("checkpoints")
      .orderByChild("equipmentKey")
      .equalTo("-LHXpVfII4J53rgKtuAi")
      //.equal("-LHXpVfII4J53rgKtuAi")
      .once("value", function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          arr.push(childSnapshot.key);
        });
      });

    expect(arr).toHaveLength;
  });
});

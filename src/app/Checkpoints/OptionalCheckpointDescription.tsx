export function OptionalCheckpointDescription({
  text,
  option,
}: {
  text: string | undefined;
  option: "Recommandation" | "Nom du défault";
}) {
  return text ? (
    <div>
      {option} :{text}
    </div>
  ) : (
    <div>{option} : aucun/e</div>
  );
}

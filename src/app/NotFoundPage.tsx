import Typewriter from "typewriter-effect";

export function NotFoundPage() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          fontSize: "6em",
        }}
      >
        <Typewriter
          onInit={() => {}}
          options={{
            strings: ["Page Non Trouvée", "404"],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>
    </>
  );
}

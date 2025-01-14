import Typewriter from "typewriter-effect";

export function Home() {
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
            strings: ["Test", "Technique", "Beeldi"],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>
    </>
  );
}

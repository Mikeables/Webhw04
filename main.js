const aliceTumbling = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
  ];
  
  const bottonTiming = {
    duration: 2000,
    iterations: 1,
    fill: "forwards",
  };
  
  const botton1 = document.querySelector("#botton1");
  const botton2 = document.querySelector("#botton2");
  const botton3 = document.querySelector("#botton3");
  
  async function runAnimations() {
    await botton1.animate(aliceTumbling, bottonTiming).finished;
    await botton2.animate(aliceTumbling, bottonTiming).finished;
    await botton3.animate(aliceTumbling, bottonTiming).finished;
    console.log("All bottons completed");
  }
  
  runAnimations();
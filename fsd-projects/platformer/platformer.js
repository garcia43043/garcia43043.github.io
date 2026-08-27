$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(1350, 400, 50, 50, "purple");
createPlatform(1000, 700, 50, 50, "hotpink");
createPlatform(1100, 600, 50, 50, "yellow");
createBadPlatform(500, 400, 100, 20, "red");
createBadPlatform(1000, 400, 100, 20, "red");
createPlatform(1200, 500, 50, 30, "blue");
createPlatform(1100, 400, 50, 40, "hotpink");
createPlatform(800, 400, 50, 50, "yellow");
createPlatform(650, 400, 50, 30, "blue");
createPlatform(450, 400, 50, 40, "purple");

    // TODO 3 - Create Collectables
createCollectable("diamond", 1350, 50, 0.5, 0.7);
createCollectable("diamond", 200, 170, 0.5, 0.7);
createCollectable("diamond", 450, 350, 0.5, 0.7);


    
    // TODO 4 - Create Cannons

createCannon("right", 300, 1000);
createCannon("top", 200, 2000, 20, 10, 100, 400, 2)
createCannon("top", 800, 2000, 20, 10, 100, 400, 2)    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

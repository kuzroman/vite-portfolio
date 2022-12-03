<template>
<!--  <div class="box border relative z-10">-->

<!--  </div>-->
</template>

<script>
import Matter from 'matter-js'
const {
  Engine,
  Render,
  World,
  Bodies,
  Body,
  Events,
  Composite,
  Composites,
  Constraint,
  Vertices,
  Mouse,
  MouseConstraint,
  Query,
  Common,
  Runner
} = Matter

// import decomp from "poly-decomp";

export default {
  mounted() {
    // create an engine
    const engine = Engine.create();

    // create a renderer
    const render = Render.create({
      // element: document.querySelector('.box'),
      element: document.body,
      engine: engine,
      options: {
        // width: 800,
        // height: 400,
        width: 800,
        height: 600,
        wireframes: false,
        // background: "white"
      }
    });

    // add all the bodies to the world
    Composite.add(engine.world, [
      Bodies.rectangle(400, 200, 80, 80),
      Bodies.rectangle(450, 50, 80, 80),
      Bodies.circle(380, 100, 40, 10),
      Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
      Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
      Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
      Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
    ]);

    // add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    Composite.add(engine.world, mouseConstraint);

    // setInterval(() => {
    //   Matter.Body.applyForce(ballA, ballA.position, { x: 0, y: -ballA.mass / 10 })
    // }, 100)

    // run the renderer
    Render.run(render);

    // create runner
    const runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);
  }
};
</script>

<style lang="scss">
//@import "../assets/styles/props";

canvas {
  //width: 100%;
  //height: 100%;
  //transform: rotate(-23deg);
  margin: 0 auto;
}
</style>

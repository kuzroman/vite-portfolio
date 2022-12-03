<template>
  <div class="box">

  </div>
</template>

<script>
import Matter from 'matter-js'
const { Engine, Render, World, Bodies, Body, Events, Composite, Composites, Constraint,
  Vertices, Mouse, Bounds, MouseConstraint, Query, Common, Runner } = Matter

export default {
  mounted() {
    const engine = Engine.create({
      gravity: {
        y: 1
      }
    });

    const render = Render.create({
      element: document.querySelector('.box'),
      // element: document.body,
      engine: engine,
      options: {
        // width: 800,
        // height: 600,
        wireframes: false,
        // background: "white"
        showAngleIndicator: true,
      }
    });

    // Bounds.create(500, 0, 800, 50)

    Composite.add(engine.world, [
      Bodies.rectangle(400, 200, 80, 80, { chamfer: {radius: 10}, restitution: 0.8 }),
      Bodies.rectangle(450, 50, 80, 80, { chamfer: {radius: 10}, frictionAir: 0.1}),
      Bodies.circle(380, 100, 40, {restitution: 0.8}),
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
    // keep the mouse in sync with rendering
    // render.mouse = mouse;
    // fit the render viewport to the scene
    // Render.lookAt(render, {
    //   min: { x: 0, y: 0 },
    //   max: { x: 800, y: 600 }
    // });


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

.box {
  width: 800px;
  height: 600px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>

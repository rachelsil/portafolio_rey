let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #d65db1;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #d65db1;">Soy Ingeniera Química y actualmente enseño programación por bloques a niños, estoy estudiando desarrollo Front End Jr.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();

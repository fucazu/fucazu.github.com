let animation = bodymovin.loadAnimation({
  container: document.getElementById('logo'),
  path: 'data.json',
  renderer: 'svg',
  loop: false,
  autoplay: true,
  name: "Logo",
})

let direction = 1;
animation.onComplete = function () {
  direction = direction * -1;
  animation.setDirection(direction);
  if (direction === 1) {
    setTimeout(() => animation.play(), 3000);
  } else {
    animation.play();
  }
};

window.addEventListener('resize', function () {
  animation.resize();
});
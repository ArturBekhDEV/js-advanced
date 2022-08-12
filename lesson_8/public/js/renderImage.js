// Проста функція яка у блоці з id tagert малює нам картинку із зазначеним урл.
let RenderImage = (image) => {
  let TargetBlock = document.getElementById("target");
      TargetBlock.appendChild(image);
};

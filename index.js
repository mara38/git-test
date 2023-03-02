console.log("helloooooouuuu");
// alert('hi');
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('prev-page');
    console.log('clicked');
      btn.addEventListener('click', () => {
        location.href='index.html';
    });
  });

document.getElementById('change').addEventListener('click', () => {
    document.body.style.backgroundColor="gray";
    console.log(e);
});
const h2 = document.querySelector('h2');
const inpt = document.querySelector('.inpt');
const btn = document.querySelector('.btn');
const reset = document.querySelector('.reset');
const message = document.querySelector('.message');
const randomN = Math.trunc(Math.random() * 20) + 1;
// btn.classList.remove('hidden');

btn.addEventListener('click', function () {
  let input = Number(inpt.value);

  if (!input) {
    message.textContent = 'No number';
  } else if (input === randomN) {
    message.textContent = 'You did it 🏆!';
    btn.classList.add('hidden');
    reset.classList.remove('hidden');

    h2.textContent = input;
    document.querySelector('body').style.backgroundColor = '#20bf6b';
    document.querySelector('body').style.color = '#3867d6';
  } else if (input < randomN) {
    message.textContent = 'You guess is Low!';
  } else if (input > randomN) {
    message.textContent = 'You guess is Hight!';
  }
});

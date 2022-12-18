// buttons declared
const colorBtn = document.getElementById('btn'); 

const book_name_text = document.createElement('p');
const author_text = document.createElement('p');
const pages_text = document.createElement('p');
const read_status_text = document.createElement('p');
const main_grid = document.getElementById('main_grid');
const form = document.createElement('form');
  // Selects button

const body = document.querySelector('body');

const colors = ['blue', 'red'];
colorBtn.addEventListener('click',changeColor);   // add an event listener to cause something to happen (name of event, callback function;)




function changeColor(){
  // body.style.backgroundColor = 'yellow';
  

  const overlay_active = document.querySelector('.overlay');
  overlay_active.classList.add('active');

  const add_book_form = document.createElement('div');
  main_grid.appendChild(add_book_form);
  add_book_form.classList.add('book_form');

  // Input names
  const book_name = document.createElement('input');
  const author  = document.createElement('input');
  author.type = 'text'; 
  const pages = document.createElement('input');
  pages.type = 'number';
  const read_status = document.createElement('input');
  read_status.type = 'checkbox';

  
// book name
  add_book_form.append(book_name_text);
  book_name_text.innerHTML = 'book'; 
  add_book_form.appendChild(book_name);
  book_name.classList.add('book_name');
// Text
  add_book_form.appendChild(author_text);
  author_text.innerHTML = 'author';
  add_book_form.appendChild(author);
  author.classList.add('author');
// Pages
  add_book_form.appendChild(pages_text);
  pages_text.innerHTML = 'pages';
  add_book_form.appendChild(pages);
  pages.classList.add('pages');
// checkbox is read or not
  add_book_form.appendChild(read_status_text);
  read_status_text.innerHTML = 'Read?'
  add_book_form.appendChild(read_status);
  read_status.classList.add('read_status');
  
  
  const submit_book_btn = document.createElement('button');
  const add_book_icon = document.createElement('img');
  add_book_form.appendChild(submit_book_btn);
  submit_book_btn.appendChild(add_book_icon);
  submit_book_btn.classList.add('submit_book_btn');
  add_book_icon.src = document.getElementById('add_notebook_img').src;

  submit_book_btn.addEventListener('click',add_book_card);

  // overlay_active.backgroundColor = 'red';
}



function add_book_card() {
  const name = document.querySelector('.book_name').value;
  const author_name = document.querySelector('.author').value;
  const page_count = document.querySelector('.pages').value;
  const read_status_box = document.querySelector('.read_status').checked;

  const overlay_active = document.querySelector('.overlay');
  overlay_active.classList.remove('active');

  const remove_book_form = document.querySelector('.book_form');
  remove_book_form.remove();

  book_card = document.createElement('div');
  main_grid.appendChild(book_card);
  book_card.classList.add('book_card');

  const book_name = document.createElement('div');
  book_card.appendChild(book_name);
  book_name.innerHTML = name;
  book_name.classList.add('book_name_div');

  const author_div = document.createElement('div');
  book_card.appendChild(author_div);
  author_div.innerHTML = author_name;
  author_div.classList.add('author_div');


  const pages_div = document.createElement('div');
  book_card.appendChild(pages_div);
  pages_div.innerHTML = page_count;
  pages_div.classList.add('pages_div');


  const read_status_div = document.createElement('div');
  book_card.appendChild(read_status_div);
  read_status_div.innerHTML = read_status_box;
  read_status_div.classList.add('read_status_div');


}


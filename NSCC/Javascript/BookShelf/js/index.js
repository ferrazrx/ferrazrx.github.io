(function(){
  //Appstate
  let $ = document;
  let state = {
    manifest: null,
    currentBook: null,
    currentBookTitle: null
  };

//Get JSON
  function getContent(url){
    return new Promise((resolve, reject)=>{
      let request = new XMLHttpRequest();
      request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
          resolve(request.responseText);
        }
      }
      request.open("GET", url, true);
      request.send();
    })
  };

// Show book to the user
  function showBook(tableOfContent, content){
      $.querySelector(".nav-content-table").innerHTML = tableOfContent;
      $.querySelector(".content").innerHTML = content;
      $.querySelector("#nav-list-tab").classList.remove("active", "show");
      $.querySelector("#nav-book-tab").classList.add("active", "show");
      $.querySelector("#nav-list").classList.remove("active", "show");
      $.querySelector("#nav-book").classList.add("active", "show");
  }

//Create a localStorage item for the book saved
  function saveBookInLocalStorage(book, title, url, icon, lastupdate){
    let save = new Promise((resolve, reject)=>{
      let book_splited = book.split("<!--Content-->");
      let date = new Date();
      let update = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDay();
      let book_object = {
          book_title: title,
          book_table_content: book_splited[1],
          book_content: book_splited[2],
          book_url: url,
          lastupdate : update
      }
      localStorage.setItem(title, JSON.stringify(book_object));
      resolve(update);
    });
    save.then((update)=>{
      icon.classList = "fa fa-file-code-o"
      lastupdate.innerHTML = "Last Update - " + update;
    });
  }

//  Delete LocalStorage item from that book
  function deleteBookInLocalStorage(title, icon, lastupdate){
    localStorage.removeItem(title);
    icon.classList = "";
    lastupdate.innerHTML = "Last Update - Not Downloaded ";
  }

//Create list of books in the document
  function createListOfBooks(list){
    //Check if the book is available offline
    let book_JSON = localStorage.getItem(list.title);
    let checked = false;
    if(localStorage.getItem(list.title)){
        let book = JSON.parse(book_JSON);
        list.lastupdate = "Last Update - " + book.lastupdate;
        checked = true;
    };
    //Build list
    let a = $.createElement("a");
    a.setAttribute("class", "list-group-item list-group-item-action flex-column align-items-start" );
    let div = $.createElement("div");
    div.setAttribute("class", "d-flex w-100 justify-content-between");
    let h5 = $.createElement("h5");
    h5.setAttribute("class", "mb-1");
    h5.innerHTML = list.title;
    let small = $.createElement("small");
    small.innerHTML = checked? list.lastupdate : "Last Update - Not Downloaded ";
    let p = $.createElement("p");
    p.setAttribute("class", "mb-1");
    p.innerHTML = list.author;
    let checkbox = $.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "form-check-input");
    checkbox.setAttribute("id", "downloaded");
    checkbox.setAttribute("data-book", list.title)
    checkbox.setAttribute("data-url", list.url)

    //check if the book is downloaded and chech the checkbox
    if(checked) checkbox.checked = true;

    let label = $.createElement("label");
    label.setAttribute("class","form-check-label");
    label.setAttribute("for", "downloaded");
    let go = $.createElement("button");
    go.setAttribute("data-url", list.url);
    go.setAttribute("data-title", list.title);
    go.setAttribute("class", "btn btn-primary");
    go.innerHTML = ">";
    let i = $.createElement('i');

    //Check if the book is downloaded and set icon
    if(checked) i.setAttribute("class", "fa fa-file-code-o downloaded");

    div.append(h5);
    div.append(small);
    div.append(checkbox);
    div.append(label);
    div.append(go);
    a.append(div);
    a.append(p);
    h5.after(i);

    //Add Event listeners to the checkbox
    checkbox.addEventListener("change", function(e){
      if(e.target.checked){
          let element = e.target.dataset;
          getContent("./books/"+ element.url).then((book)=>{
            saveBookInLocalStorage(book, element.book, element.url, i, small);
          });
      }else{
        let element = e.target.dataset;
        deleteBookInLocalStorage(element.book, i, small);
      }
    });

    //Add Event listeners to the showbook button
    go.addEventListener("click", function(e){
      e.target.innerHTML = "<i class='fa fa-refresh fa-spin' style='font-size:24px'></i>";
      if(localStorage.getItem(e.target.dataset.title)){
          let book = JSON.parse(localStorage.getItem(e.target.dataset.title));
          showBook(book.book_table_content,"<div class='alert alert-success' role='alert'> Book Downloaded! </div>" + book.book_content);
          e.target.innerHTML = ">"
      }else{
        getContent("./books/"+ e.target.dataset.url).then((book)=>{
            let book_splited = book.split("<!--Content-->");
            showBook(book_splited[1], book_splited[2]);
            e.target.innerHTML = ">"
        });
      }
    })
    return a;
  }

  //Onload
  window.onload = ()=>{
    getContent("./manifest.json").then((manifest)=>{
      state.manifest = JSON.parse(manifest);
      let list = $.querySelector(".book-list");
      state.manifest.books.forEach(function(book){
        //Create a list of books in the DOM
        list.append(createListOfBooks(book));
      });
    });
  };
})();

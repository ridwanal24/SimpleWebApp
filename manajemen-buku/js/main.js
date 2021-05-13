// add data
formInput.addEventListener('submit', function (e) {
    e.preventDefault();
    addItemToStorage({
        id: +new Date(),
        title: this.querySelector('.title').value,
        author: this.querySelector('.author').value,
        year: Number(this.querySelector('.year').value),
        isComplete: false
    });
    getFromStorage();
    showToBrowser(getDataBukuAll());

    this.querySelector('.title').value = '';
    this.querySelector('.author').value = '';
    this.querySelector('.year').value = '';
});

// action to list
document.querySelector('.section-right').addEventListener('click', function (e) {
    // remove
    if (e.target.classList.contains('btn-delete')) {
        if (confirm('Yakin Mau Menghapus?')) {
            let data = getDataBukuAll().filter(function (item) {
                console.log(Number(item.id), Number(e.target.parentElement.dataset.id))
                if (item.id == e.target.parentElement.dataset.id) {
                    return false;
                }
                return true;
            });
            replaceToStorage(data);
            getFromStorage();
            showToBrowser(getDataBukuAll());
        }
    }
    // move to done
    if (e.target.classList.contains('btn-done')) {
        let data = getDataBukuAll().map(function (item) {
            if (item.id == e.target.parentElement.dataset.id) {
                item.isComplete = true;
            }
            return item;
        });
        replaceToStorage(data);
        getFromStorage();
        showToBrowser(getDataBukuAll());
    }
    // move to undone
    if (e.target.classList.contains('btn-undone')) {
        let data = getDataBukuAll().map(function (item) {
            if (item.id == e.target.parentElement.dataset.id) {

                item.isComplete = false;
            }
            return item;
        });
        replaceToStorage(data);
        getFromStorage();
        showToBrowser(getDataBukuAll());
    }
    // open edit data form
    if (e.target.classList.contains('btn-edit')) {
        document.querySelector(".modal").style.display = "block";
        console.log(e.target.parentElement.dataset.id)
        let data = getDataBukuAll().filter(function (item) {
            return item.id == e.target.parentElement.dataset.id;
        });

        document.querySelector('.form-edit .title').value = data[0].title;
        document.querySelector('.form-edit .author').value = data[0].author;
        document.querySelector('.form-edit .year').value = data[0].year;
        document.querySelector('.form-edit .id').value = data[0].id;
    }

});

// save edit modal
document.querySelector('.form-edit').addEventListener('submit', function (e) {
    e.preventDefault();
    let data = getDataBukuAll().map((item) => {
        if (item.id == this.querySelector('.id').value) {
            item.isComplete = false;
            item.title = this.querySelector('.title').value;
            item.author = this.querySelector('.author').value;
            item.year = Number(this.querySelector('.year').value);
        }
        return item;
    });
    replaceToStorage(data);
    getFromStorage();
    showToBrowser(getDataBukuAll());
    document.querySelector(".modal").style.display = "none";
});

// close modal
document.querySelector('.close').addEventListener('click', function () {
    document.querySelector(".modal").style.display = "none";
});

window.onclick = function (e) {
    if (e.target == document.querySelector('.modal')) {
        document.querySelector('.modal').style.display = "none";
    }
}

// filter data
document.querySelector('.search').addEventListener('input', function () {
    if (this.value != '') {
        getFromStorage();
        let data = getDataBukuAll().filter((item) => {
            if (item.title.toLowerCase().includes(this.value.toLowerCase())) {
                return true;
            } else {
                return false;
            }
        });
        showToBrowser(data);
    } else {
        getFromStorage();
        showToBrowser(getDataBukuAll());
    }
});

// when onload
window.addEventListener('load', function () {
    if (checkStorage()) {
        if (window.localStorage.getItem('dataBuku') == null) {
            window.localStorage.setItem('dataBuku', '[]');
        }
        getFromStorage();
        showToBrowser(getDataBukuAll());
    } else {
        this.alert('Browser anda tidak support');
    }
});


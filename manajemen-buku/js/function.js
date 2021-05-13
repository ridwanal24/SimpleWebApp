const formInput = document.querySelector('form.form-add');
const belumSelesaiArea = document.querySelector('.belum-selesai .content');
const sudahSelesaiArea = document.querySelector('.sudah-selesai .content');

function checkStorage() {
    return typeof (Storage) == undefined ? false : true;
}

function addItemToStorage(data) {
    dataBuku.push(data);
    window.localStorage.setItem('dataBuku', JSON.stringify(dataBuku));
}

function replaceToStorage(data) {
    dataBuku = data;
    window.localStorage.setItem('dataBuku', JSON.stringify(data));
}

function getFromStorage() {
    dataBuku = JSON.parse(window.localStorage.getItem('dataBuku'));
}

function getDataBukuAll() {
    return dataBuku;
}

function showToBrowser(data) {
    let txtBelumSelesai = '';
    let txtSudahSelesai = '';

    for (const item of data) {
        if (item.isComplete) {
            txtSudahSelesai += `
            <div class="card book-item" data-id="${item.id}">
                <p class="book-title">${item.title}</p>
                <p class="book-author">${item.author}</p>
                <p class="book-year">${item.year}</p>
                <button class="btn-undone"><i class="fas fa-ban"></i> Belum selesai</button>
                <button class="btn-edit"><i class="fas fa-pencil-alt"></i> Edit</button>
                <button class="btn-delete"><i class="fas fa-trash"></i> Hapus</button>
            </div>`;
        } else {
            txtBelumSelesai += `
            <div class="card book-item" data-id="${item.id}">
                <p class="book-title">${item.title}</p>
                <p class="book-author">${item.author}</p>
                <p class="book-year">${item.year}</p>
                <button class="btn-done"><i class="fas fa-check"></i> Sudah selesai</button>
                <button class="btn-edit"><i class="fas fa-pencil-alt"></i> Edit</button>
                <button class="btn-delete"><i class="fas fa-trash"></i> Hapus</button>
            </div>`;
        }
    }
    belumSelesaiArea.innerHTML = txtBelumSelesai == '' ? '<p class="no-data">Rak Kosong</p>' : txtBelumSelesai;
    sudahSelesaiArea.innerHTML = txtSudahSelesai == '' ? '<p class="no-data">Rak Kosong</p>' : txtSudahSelesai;
}
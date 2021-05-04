const globalData = [];
document.querySelector("input").disabled = true;
// fetch
fetch("https://reqres.in/api/users/")
    .then((data) => data.json())
    .then(({ data }) => {
        data.forEach((item) => {
            let list = {};
            list["id"] = item.id;
            list["username"] = "@" + item.first_name + "_" + item.id;
            list["fullname"] = item.first_name + " " + item.last_name;
            list["email"] = item.email;
            list["avatar"] = item.avatar;
            globalData.push(list);
        });
        console.log(globalData);
        document.querySelector("input").disabled = false;
        showList(globalData);
    });

document.querySelector("input").addEventListener("keyup", function () {
    let filtered;
    if (this.value != "") {
        filtered = globalData.filter((item) => {
            return (
                item.email.toLowerCase().includes(this.value.toLowerCase()) ||
                item.username
                    .toLowerCase()
                    .includes(this.value.toLowerCase()) ||
                item.fullname.toLowerCase().includes(this.value.toLowerCase())
            );
        });
    } else {
        filtered = globalData;
    }
    // console.log(filtered);
    showList(filtered);
});

function showList(data) {
    let text = "";
    data.forEach((item) => {
        text += `
            <div class="card">
                <div class="image">
                    <img src="${item.avatar}" alt="Foto Profil">
                </div>
                <div class="username">
                    ${item.username} 
                </div>
                <div class="name">
                    ${item.fullname}
                </div>
                <div class="email">
                    ${item.email}
                </div>
            </div>
        `;
    });
    document.querySelector(".result").innerHTML = text;
    if (data.length == 0) {
        document.querySelector(".result").innerHTML = "User tidak terdaftar";
    }
}

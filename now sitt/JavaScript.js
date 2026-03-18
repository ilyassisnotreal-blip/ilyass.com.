

// 💬 نظام التعليقات
let comments = JSON.parse(localStorage.getItem("comments")) || [];

function showComments() {
    let container = document.getElementById("comments");
    container.innerHTML = "";
    comments.forEach((c, index) => {
        let div = document.createElement("div");
        div.className = "comment-box";
        div.innerHTML = `
            <strong>${c.name}:</strong> ${c.text}
            <br>
            <button onclick="deleteComment(${index})">❌ حذف</button>
        `;
        container.appendChild(div);
    });
}

function addComment() {
    let name = document.getElementById("name").value.trim();
    let comment = document.getElementById("comment").value.trim();

    if(name === "" || comment === "") {
        alert("اكتب الاسم والتعليق!");
        return;
    }

    comments.push({name: name, text: comment});
    localStorage.setItem("comments", JSON.stringify(comments));
    showComments();

    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
}

function deleteComment(index) {
    comments.splice(index, 1);
    localStorage.setItem("comments", JSON.stringify(comments));
    showComments();
}

// عرض التعليقات عند فتح الصفحة
showComments();
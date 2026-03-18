// 💬 نظام التعليقات
let comments = JSON.parse(localStorage.getItem("comments")) || [];

// عرض التعليقات
function showComments() {
    let container = document.getElementById("comments");
    if (!container) return;

    container.innerHTML = "";

    comments.forEach((c, index) => {
        let div = document.createElement("div");
        div.className = "comment-box";

        let name = document.createElement("strong");
        name.textContent = c.name + ": ";

        let text = document.createElement("span");
        text.textContent = c.text;

        let br = document.createElement("br");

        let btn = document.createElement("button");
        btn.textContent = "❌ حذف";
        btn.onclick = () => deleteComment(index);

        div.appendChild(name);
        div.appendChild(text);
        div.appendChild(br);
        div.appendChild(btn);

        container.appendChild(div);
    });
}

// إضافة تعليق
function addComment() {
    let name = document.getElementById("name").value.trim();
    let comment = document.getElementById("comment").value.trim();

    if (name === "" || comment === "") {
        alert("اكتب الاسم والتعليق!");
        return;
    }

    comments.push({ name: name, text: comment });
    localStorage.setItem("comments", JSON.stringify(comments));

    showComments();

    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
}

// حذف تعليق
function deleteComment(index) {
    if (!confirm("هل أنت متأكد من حذف التعليق؟")) return;

    comments.splice(index, 1);
    localStorage.setItem("comments", JSON.stringify(comments));
    showComments();
}

// تحميل الصفحة
document.addEventListener("DOMContentLoaded", showComments);


comments.push({
    name: name,
    text: comment,
    date: new Date().toLocaleString()
});

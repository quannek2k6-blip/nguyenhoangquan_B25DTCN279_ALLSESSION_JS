let contacts = [
    { id: 1, name: "Nguyễn Văn An", phone: "0901234567", email: "nguyenvanan@email.com" },
    { id: 2, name: "Trần Thị Bình", phone: "0912345678", email: "tranthibinh@email.com" },
    { id: 3, name: "Lê Văn Cường", phone: "0923456789", email: "levancuong@email.com" },
    { id: 4, name: "Phạm Thị Dung", phone: "0934567890", email: "phamthidung@email.com" },
    { id: 5, name: "Hoàng Văn Em", phone: "0945678901", email: "hoangvanem@email.com" }
];
function renderContacts() {
    let str = ""; 
    for(let i = 0; i < contacts.length; i++) {
        let contact = contacts[i];
        str += `
            <tr>
                <td>${i + 1}</td>
                <td>${contact.name}</td>
                <td>${contact.phone}</td>
                <td>${contact.email}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-edit" onclick="updateContact(${contact.id})">Sửa</button>
                        <button class="btn-delete" onclick="deleteContact(${contact.id})">Xóa</button>
                    </div>
                </td>
            </tr>
        `;
    }
    document.getElementById('contact-tbody').innerHTML = str;
}
function updateContact(index) {
    let name = document.getElementById("contact-name").value.trim();
    let phone = document.getElementById("contact-phone").value.trim();
    let email = document.getElementById("contact-email").value.trim();
    if(!name || name.trim() === "") {
        alert("Họ tên không được để trống!");
    }
    if(name.length < 2) {
        alert("Họ tên phải có ít nhất 2 ký tự!");
    }
    if(!phone || phone.trim() === "") {
        alert("Số điện thoại không được để trống!");
    }
    if(!email || email.trim() === "") {
        alert("Email không được để trống!");
    }
}
function deleteContact(id) {
    let contactDelete = contacts.find(contact => {contact.id === id});
    if(!contactDelete) {
        return;
    }
    let confirmed = confirm("Bạn có chắc chắn muốn xóa liên hệ này?");
    if(confirmed) {
        contacts = contacts.filter(contact => contact.id !== id);
    }
    alert("Xóa liên hệ thành công!");
    renderContacts();
}
renderContacts();
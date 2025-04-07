function switchTab(selectedTab) {
    // Xóa lớp 'active' khỏi tất cả các tab
    document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.remove("active");
    });

    // Thêm lớp 'active' vào tab được chọn
    selectedTab.classList.add("active");

    // Thay đổi nội dung form dựa trên tab được chọn
    // ông muốn sửa gia diện thì cứ sửa cái innerHTML ở dưới nha
    const inputDiv = document.getElementById('input');
    const buttonSubmit = document.getElementById('button_submit');
    
    if (selectedTab.id === 'login') {
        inputDiv.innerHTML = `
            <div class="mb-3 mt-1">
                <label class="col-5 form-label mb-3" for="Sdt"> Số điện thoại :</label>
                <input type="Sdt" name="Sdt" placeholder="số điện thoại" id="txtSdt" class="col-7 form-control">
            </div>
            <div class="mb-3 mt-1">
                <label class="col-5 form-label mb-3" for="Sdt"> Mật khẩu</label>
                <input type="password" name="password" placeholder="mật khẩu" id="txtPass" class="col-7 form-control">
            </div>
            <div>
                <a href="" style="margin-left: 82%;" id="quenmatkhau"> Quên mật khẩu?</a>
            </div>
        `;
        buttonSubmit.innerHTML = `
            <button type="button" class="btn mt-3" style="background-color: rgb(255, 29, 29); color: white; width: 100%; height: 60px; font-weight: bold;" onclick="handleLogin()"> ĐĂNG NHẬP</button>
        `;
    } else if (selectedTab.id === 'resistance') {
        inputDiv.innerHTML = `
            <div class="mb-3 mt-1">
                <label class="col-5 form-label mb-3" for="Sdt"> Số điện thoại :</label>
                <input type="Sdt" name="Sdt" placeholder="số điện thoại" id="txtSdt" class="col-7 form-control">
            </div>
            <div class="mb-3 mt-1">
                <label class="col-5 form-label mb-3" for="Sdt"> Mật khẩu</label>
                <input type="password" name="password" placeholder="mật khẩu" id="txtPass" class="col-7 form-control">
            </div>
            <div class="mb-3 mt-1">
                <label class="col-5 form-label mb-3" for="confirmPassword"> Xác nhận mật khẩu</label>
                <input type="password" name="confirmPassword" placeholder="xác nhận mật khẩu" id="txtConfirmPass" class="col-7 form-control">
            </div>
        `;
        buttonSubmit.innerHTML = `
            <button type="button" class="btn mt-3" style="background-color: rgb(255, 29, 29); color: white; width: 100%; height: 60px; font-weight: bold;" onclick="handleRegister()"> ĐĂNG KÝ</button>
        `;
    }
}

function handleLogin() {
    const sdt = document.getElementById('txtSdt').value;
    const password = document.getElementById('txtPass').value;
    // Xử lý logic đăng nhập ở đây
    console.log('Đăng nhập với số điện thoại:', sdt, 'và mật khẩu:', password);
}

function handleRegister() {
    const sdt = document.getElementById('txtSdt').value;
    const password = document.getElementById('txtPass').value;
    const confirmPassword = document.getElementById('txtConfirmPass').value;
    // Xử lý logic đăng ký ở đây
    console.log('Đăng ký với số điện thoại:', sdt, 'mật khẩu:', password, 'và xác nhận mật khẩu:', confirmPassword);
}
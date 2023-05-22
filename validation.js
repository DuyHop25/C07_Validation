// =========== Các hàm xử lý trung gian =============
let flag = true;
/**
 * Hàm xác thực email hợp lệ hay không
 * @param {string} email Email cần được xác thực
 * @returns true nếu email hợp lệ, ngược lại trả về false
 */
function validateEmail(email) {
  let count = 0;
  for (let i = 0; i < email.length; i++) {
    if (email[i] == "@") count++;
  }
  return count == 1;
}


/**
 * Hàm xác thực password. Password hợp lệ cần thỏa 3 điều kiện sau
 * 1: It nhat 6 ky tu
 * 2: Co it nhat 1 ky tu dac biet
 * 3: Co it nhat 1 ky tu hoa
 * @param {string} psw Password cần được xác thực
 * @returns true nếu psw hợp lệ, ngược lệ trả về false
 */
function validatePsw(psw) {
  if (psw.length < 6) return false;

  let flagSpecialChar = false;
  let flagCapital = false;
  for (let i = 0; i < psw.length; i++) {
    // Nếu ký tự thứ i là ký tự đặc biệt
    if (!((psw[i] >= "A" && psw[i] <= "Z") || (psw[i] >= "a" && psw[i] <= "z")))
      flagSpecialChar = true;
    else if (psw[i] >= "A" && psw[i] <= "Z") flagCapital = true;
  }
  return flagSpecialChar && flagCapital;
}

// =========== Các hàm xử lý sự kiện =============

/**
 * Hàm xác thực dữ liệu toàn bộ form
 */
function setValidateFormEvent() {
  const signBtn = document.getElementsByClassName("signupbtn")[0];
  signBtn.addEventListener("click", function () {
  // Lấy giá trị của các trường
  const email = document.getElementById("email").value;
  const psw = document.getElementById("psw").value;
  const psw_repeat = document.getElementById("psw-repeat").value;

  const err_email = document.getElementById("err-email");
  const err_psw = document.getElementById("err-psw");
  const err_psw_repeat = document.getElementById("err-psw-repeat");
  
  // Kiểm tra và hiện những cảnh báo của các trường
  if(!validateEmail(email)){
    err_email.innerHTML = "Vui lòng nhập đúng định dạng email";
    flag = false;
  }

  if(!validatePsw(psw)){
    err_psw.innerHTML = "Password có chứa ít nhất 6 ký tự, có ít nhất 1 ký tự đặc biệt, có ít nhất 1 ký tự hoa";
    flag = false;
  }

  if(psw_repeat != psw){
    err_psw_repeat.innerHTML = "Mật khẩu không trùng khớp";
    flag = false;
  }

  if(flag == true)
    alert("Đăng ký thành công");
    location.reload();
  });
}

function setCancelModalEvent() {
  const modal = document.getElementById("id01");
  const cancelBtn = document.getElementsByClassName("cancelbtn")[0];
  cancelBtn.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

// ======================== Các lệnh toàn cục ===================
setCancelModalEvent();
setValidateFormEvent();



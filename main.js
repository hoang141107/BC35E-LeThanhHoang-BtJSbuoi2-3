// Bài 1: Tính Tiền Lương
var btnTinhLuong = document.getElementById("btnTinhLuong");
btnTinhLuong.onclick = function () {


    // Đầu vào
    const LUONG_NGAY = 100000;
    var soNgayLam = document.getElementById("soNgayLam").value * 1;


    // Xử lí
    var tongLuong = LUONG_NGAY * soNgayLam;
    // formart tiền
    var currentFormat = new Intl.NumberFormat("VN-vn");


    var ketQua = "<p class='alert alert-success' >Tổng Lương: " + currentFormat.format(tongLuong) + " VND</p>";

    // Đầu ra
    document.getElementById("showInfoLuongNhanVien").innerHTML = ketQua;

};


// Bài 2: Tính Giá Trị Trung Bình
var btnTinhGiaTriTB = document.getElementById("btnTinhGiaTriTB");
btnTinhGiaTriTB.onclick = function () {
//    Đầu vào
var giaTri1 = document.getElementById("giaTri1").value * 1; 
var giaTri2 = document.getElementById("giaTri2").value * 1; 
var giaTri3 = document.getElementById("giaTri3").value * 1; 
var giaTri4 = document.getElementById("giaTri4").value * 1; 
var giaTri5 = document.getElementById("giaTri5").value * 1; 
// Xử lí
var trungBinh = (giaTri1 + giaTri2 + giaTri3 + giaTri4 + giaTri5) / 5 ;
// Đầu ra
var ketQua = "<div class= 'alert alert-success'>";
ketQua += "<p>Giá Trị Trung Bình của 5 Số: " + trungBinh + "</p>";
ketQua += "</div>";
document.getElementById("showInfoGiaTriTB").innerHTML = ketQua;
}


// Bài 3: Quy Đổi Tiền
document.getElementById("btnQuyDoi").onclick = function () {
    //    Đầu vào
    var usd = document.getElementById("usd").value * 1;
    var vnd = document.getElementById("vnd").value * 1;
    // Xử lí
    var currentFormat = new Intl.NumberFormat("VN-vn");
    var quyDoi = vnd * usd ;
    // Đầu ra
    var ketQua = "<div class= 'alert alert-success'>";
    ketQua += "<p>Tiền Đã Quy Đổi: " + currentFormat.format(quyDoi) + " VND</p>" ;
    ketQua += "</div>";
    document.getElementById("showInfoQuyDoi").innerHTML = ketQua;
};


// Bài 4: Tính Diện Tích, Chu Vi Hình Chữ Nhật
document.getElementById("btnTinh").onclick = function () {
    //    Đầu vào
    var cd = document.getElementById("cd").value * 1;
    var cr = document.getElementById("cr").value * 1;

    // Xử lí
    var chuVi = ( cd + cr ) * 2 ;
    var dienTich = cd * cr ;

    // Đầu ra
    var ketQua = "<div class= 'alert alert-success'>";
    ketQua += "<p>Chu Vi: " + chuVi + "</p>" ;
    ketQua += "<p>Diện Tích: " + dienTich + "</p>" ;
    ketQua += "</div>";
    document.getElementById("showInfoTinh").innerHTML = ketQua;
}


// Bài 5: Tính Tổng 2 Ký Số
document.getElementById("btnTinhTong2KySo").onclick = function () {
    // Đầu vào
    var number = document.getElementById("number").value * 1;
    // Xử lí
    var hangChuc = Math.floor(number % 100 / 10);
    var hangDV = number % 10;

    var tongKySo = hangChuc + hangDV;

    var ketQua = "<div class= 'alert alert-success'>";
    ketQua += "Tổng 2 Ký Số: " + tongKySo;
    ketQua += "</div>";

    // Đầu ra
    document.getElementById("showInfoTinhTong2KySo").innerHTML = ketQua;
};




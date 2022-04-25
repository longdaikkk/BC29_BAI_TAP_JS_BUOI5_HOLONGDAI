const kv_a = 2;
const kv_b = 1;
const kv_c = 0.5;
const kv_x = 0;

const dt_1 = 2.5;
const dt_2 = 1.5;
const dt_3 = 1;
const dt_0 = 0;

function getEle(id) {
    return document.getElementById(id);
}

function diemKhuVuc(khuVuc) {
    var kq = "";
    switch (khuVuc) {
        case "A":
            kq = kv_a;
            break;
        case "B":
            kq = kv_b;
            break;
        case "C":
            kq = kv_c;
            break;
        case "X":
            kq = kv_x;
            break;
        default:
            alert("Chọn khu vực");
            break;
    }
    return kq;
}

function diemDoiTuong(doiTuong) {
    var kq = "";
    switch (doiTuong) {
        case "1":
            kq = dt_1;
            break;
        case "2":
            kq = dt_2;
            break;
        case "3":
            kq = dt_3;
            break;
        case "0":
            kq = dt_0;
            break;
        default:
            alert("Chọn đối tượng");
            break;
    }
    return kq;
}

function diemTB(toan, ly, hoa) {
    var kq = 0;
    kq = toan + hoa + ly;
    return kq;
}

getEle("kiemTra").onclick = function () {
    var diemChuan = getEle("diemChuan").value * 1;
    var khuVuc = getEle("khuVuc").value;
    var doiTuong = getEle("doiTuong").value;
    var toan = getEle("toan").value * 1;
    var ly = getEle("ly").value * 1;
    var hoa = getEle("hoa").value * 1;
    var tongDiem = 0;
    var result = "";

    tongDiem = diemDoiTuong(doiTuong) + diemKhuVuc(khuVuc) + diemTB(toan, ly, hoa);

    if (tongDiem >= diemChuan && toan > 0 && ly > 0 && hoa > 0) {
        result = "đậu";
    } else {
        result = "rớt";
    }

    getEle("ketQua").innerHTML = "Bạn đã " + result;
    getEle("ketQua").innerHTML += ". Tổng điểm " + tongDiem;
}

/**
 * Tính tiền điện
 */
function tinhTien(soKw){
    var tongTien = 0;
    if(soKw <= 50){
        tongTien = soKw*500;
    }else if(soKw <= 100){
        tongTien = 50*500 + (soKw - 50)*650;
    }else if(soKw <= 200){
        tongTien = 50*500 + 50*650 + (soKw - 100)*850;
    }else if(soKw <= 350){
        tongTien = 50*500 + 50*650 + 100*850 + (soKw - 200)*1100;
    }else{
        tongTien = 50*500 + 50*650 + 100*850 + 150*1100 + (soKw - 350)*1300;
    }
    return tongTien;
}
getEle("tinhTien").onclick = function(){
    var soKw = getEle("soKw").value*1;
    var ten = getEle("hoTen").value;
    var tien = tinhTien(soKw);
    var currentFormat = new Intl.NumberFormat("vn-VN");
    

    if(getEle("hoTen").value==""){
    getEle("ketQua2").innerHTML = "Nhập Tên Hộ";
    }else{
        getEle("ketQua2").innerHTML = ten + ": " + currentFormat.format(tien) + "VND";
    }
}
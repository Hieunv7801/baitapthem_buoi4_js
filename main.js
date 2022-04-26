/**
 * Mô hình 3 khối
 * Đầu vào:
 *  + Nhập vào tháng năm cần tìm
 * Xử lí:
 *  + Nếu là tháng 1, 3, 5, 7, 8, 10, 12 thì có 30 ngày
    + Nếu là tháng 4, 6, 9, 11 thì có 31 ngày
    + Nếu là tháng 2 và là năm nhuận thì có 29 ngày ngược lại 28 ngày
    + (Năm nhuận là năm chia chẵn cho 4)
   Đầu ra:
    Tháng đó có bao nhiêu ngày.
 */
function getMyEle(ele) {
    return document.getElementById(ele);
}
function Month() {
    var soNgay = "";
    var month = getMyEle("thang").value * 1;
    var year = getMyEle("year").value * 1;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            soNgay = "Có 30 ngày";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            soNgay = "Có 31 ngày";
            break;
        case 2:
            if (year % 4 == 0)
                soNgay = "Năm này là năm nhuận có 29 ngày";
            else
                soNgay = "Có 28 ngày";
            break;
        default:
            break;
    }
    return soNgay;
}
function Xem() {
    var thang = Month();
    getMyEle("showMonth").innerHTML = thang;
}

/**
 * Mô hình 3 khối
 * Đầu vào:
 *  + nhập vào số có 3 chữ số
 * Xử lí: 
 *  + Chia lấy dư cho 10 để lấy hàng đơn vị
 *  + Chia lấy phần nguyên cho 10 rồi chia lấy dư cho 10 để lấy hàng chục
 *  + chia 100 để lấy hàng trăm
 * Đầu ra:
 *  + cách đọc
 */
function cachDoc() {
    var number = getMyEle("number").value * 1;
    var donVi = number % 10;
    var hangChuc = Math.floor((number / 10) % 10);
    var hangTram = number / 100;

    //in ra hàng trăm
    switch (hangTram) {
        case 1:
            var hang_tram = "Một trăm ";
            break;
        case 2:
            hang_tram = ("Hai trăm ");
            break;
        case 3:
            hang_tram = ("Ba trăm ");
            break;
        case 4:
            hang_tram = ("Bốn trăm ");
            break;
        case 5:
            hang_tram = ("Năm trăm ");
            break;
        case 6:
            hang_tram = ("Sáu trăm ");
            break;
        case 7:
            hang_tram = ("Bảy trăm ");
            break;
        case 8:
            hang_tram = ("Tám trăm ");
            break;
        case 9:
            hang_tram = ("Chín trăm ");
            break;
    }
    //in ra hang chuc
    switch (hangChuc) {
        case 1:
            var hang_chuc = "mười"
            break;
        case 2:
            hang_chuc = ("hai mươi ");
            break;
        case 3:
            hang_chuc = ("ba mươi ");
            break;
        case 4:
            hang_chuc = ("bốn mươi ");
            break;
        case 5:
            hang_chuc = ("năm mươi ");
            break;
        case 6:
            hang_chuc = ("sáu mươi ");
            break;
        case 7:
            hang_chuc = ("bảy mươi ");
            break;
        case 8:
            hang_chuc = ("tám mươi ");
            break;
        case 9:
            hang_chuc = ("chín mươi ");
            break;
    }
    //in ra hàn đơn vị
    switch (donVi) {
        case 1:
            var don_vi = "một ";
            break;
        case 2:
            don_vi = ("hai ");
            break;
        case 3:
            don_vi = ("ba ");
            break;
        case 4:
            don_vi = ("bốn ");
            break;
        case 5:
            don_vi = ("lăm ");
            break;
        case 6:
            don_vi = ("sáu ");
            break;
        case 7:
            don_vi = ("bảy ");
            break;
        case 8:
            don_vi = ("tám ");
            break;
        case 9:
            don_vi = ("chín ");
            break;
    }
    return docc = hang_tram+" "+hang_chuc+" "+don_vi;
}
function Read(){
    var cach_doc = cachDoc();
    getMyEle("showRead").innerHTML = cach_doc;
}


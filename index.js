//Xây dựng layout
// Xây dựng môi hình 3 khối
//Viết các chức năng xử lý cho ng dùng

// Đầu vào: Chọn loại xe (grab car, suv, black), số Km (x<=1, 1<x<=19, x>19), tgian chờ (y%3), bảng giá tương ứng với từng loại xe
// Các bước xử lý:
//+ Số km <=1 => tiền trả =
// Đầu ra: Số tiền cần trả
// Tạo ra hằng số giúp lưu trữ tên của 3 loại xe
const UBER_CAR = "uberCar";
const UBER_SUV = "uberSUV";
const UBER_BLACK = "uberBlack";

document.getElementById("btn-tinhTien").onclick = function () {
  // console.log('haha');
  var loaiXe = document.querySelector(
    ".type input[name='selector']:checked"
  ).value;
  //   console.log(loaiXe);
  var soKm = document.getElementById("txt-km").value * 1;
  var thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  //   console.log(soKm, thoiGianCho);
  var giaKmDauTien = tinhGiaTienChang1 (loaiXe);
  var giakmTiepTheo = tinhGiaTienChang2 (loaiXe);
  var giakmCuoiCung = tinhGiaTienChang3 (loaiXe);
  var giaCho = tinhGiaCho (loaiXe);
  console.log(giaKmDauTien);
  console.log(giakmTiepTheo);
  console.log(giakmCuoiCung);
  // if (loaiXe == UBER_CAR) {
  //   giaKmDauTien = 8000;
  // } else if (loaiXe == UBER_SUV) {
  //   giaKmDauTien = 9000;
  // } else {
  //   giaKmDauTien = 10000;
  // }
  // switch (loaiXe) {
  //   case UBER_CAR: {
  //     giaKmDauTien = 8000;
  //     break;
  //   }
  //   case UBER_SUV: {
  //     giaKmDauTien = 9000;
  //     break;
  //   }
  //   case UBER_BLACK: {
  //     giaKmDauTien = 10000;
  //     break;
  //   }
  // }

  // switch (loaiXe) {
  //   case UBER_SUV: {
  //     giaKmDauTien = 7500;
  //     break;
  //   }
  //   case UBER_SUV: {
  //     giaKmDauTien = 8500;
  //     break;
  //   }
  //   case UBER_BLACK: {
  //     giaKmDauTien = 9500;
  //     break;
  //   }
  // }

  // switch (loaiXe) {
  //   case UBER_BLACK: {
  //     giaKmDauTien = 7000;
  //     break;
  //   }
  //   case UBER_SUV: {
  //     giaKmDauTien = 8000;
  //     break;
  //   }
  //   case UBER_BLACK: {
  //     giaKmDauTien = 9000;
  //     break;
  //   }
  // }
  // cách dùng cấu trúc điều kiệu switch case
  // var giakmTiepTheo = 0;
  // if (loaiXe == "uberCar") {
  //   giakmTiepTheo = 7500;
  // } else if (loaiXe == "uberSUV") {
  //   giakmTiepTheo = 8500;
  // } else {
  //   giakmTiepTheo = 9500;
  // }

  // var giakmCuoiCung = 0;
  // if (loaiXe == "uberCar") {
  //   giakmCuoiCung = 7000;
  // } else if (loaiXe == "uberSUV") {
  //   giakmCuoiCung = 8000;
  // } else {
  //   giakmCuoiCung = 9000;
  // }
  function tinhGiaTienChang1(LX) {
    switch (LX) {
      case UBER_CAR: {
        return 8000;
      }
      case UBER_SUV: {
        return 9000;
      }
      case UBER_BLACK: {
        return 10000;
      }
    }
  }

  function tinhGiaTienChang2(LX) {
    switch (LX) {
      case UBER_CAR: {
        return 7500;
      }
      case UBER_SUV: {
        return 8500;
      }
      case UBER_BLACK: {
        return 9500;
      }
    }
  }

  function tinhGiaTienChang3(LX) {
    switch (LX) {
      case UBER_CAR: {
        return 7000;
      }
      case UBER_SUV: {
        return 8000;
      }
      case UBER_BLACK: {
        return 9000;
      }
    }
  }

  function tinhGiaCho(GC) {
    switch (GC) {
      case UBER_CAR: {
        return 2000;
      }
      case UBER_SUV: {
        return 3000;
      }
      case UBER_BLACK: {
        return 3500;
      }
    }
  }

  // var giaCho = 0;
  // if (loaiXe == "uberCar") {
  //   giaCho = 2000;
  // } else if (loaiXe == "uberSUV") {
  //   giaCho = 3000;
  // } else {
  //   giaCho = 3500;
  // }

  var tienPhaiTra = 0;
  if (soKm <= 1) {
    tienPhaiTra = giaKmDauTien * soKm;
  } else if (soKm > 1 && soKm <= 19) {
    tienPhaiTra = giaKmDauTien * 1 + (soKm - 1) * giakmTiepTheo;
  } else {
    tienPhaiTra =
      giaKmDauTien * 1 + 18 * giakmTiepTheo + (soKm - 19) * giakmCuoiCung;
  }

  // var tienCho = 0;
  var soLanCho = Math.floor(thoiGianCho / 3);
  if (thoiGianCho < 3) {
    tienCho = 0;
  } else {
    tienCho = soLanCho * giaCho;
  }
  // console.log(tienCho);
  var tinhTien = tienPhaiTra + tienCho;
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = tinhTien;

  if (soKm < 1) {
    document.getElementById("sd1").innerHTML = soKm;
  } else {
    document.getElementById("sd1").innerHTML = 1;
  }
  // document.getElementById('sd1').innerHTML = soKm;
  document.getElementById("dg1").innerHTML = giaKmDauTien;
  document.getElementById("tt1").innerHTML = giaKmDauTien;

  if (soKm < 1) {
    document.getElementById("sd2").innerHTML = 0;
    document.getElementById("dg2").innerHTML = giakmTiepTheo;
    document.getElementById("tt2").innerHTML = 0;
  } else if (soKm <= 19) {
    document.getElementById("sd2").innerHTML = soKm - 1;
    document.getElementById("dg2").innerHTML = giakmTiepTheo;
    document.getElementById("tt2").innerHTML = (soKm - 1) * giakmTiepTheo;
  } else {
    document.getElementById("sd2").innerHTML = 18;
    document.getElementById("dg2").innerHTML = giakmTiepTheo;
    document.getElementById("tt2").innerHTML = 18 * giakmTiepTheo;
  }

  if (soKm < 1) {
    document.getElementById("sd3").innerHTML = 0;
    document.getElementById("dg3").innerHTML = giakmCuoiCung;
    document.getElementById("tt3").innerHTML = 0;
  } else if (soKm <= 19) {
    document.getElementById("sd3").innerHTML = 0;
    document.getElementById("dg3").innerHTML = giakmCuoiCung;
    document.getElementById("tt3").innerHTML = 0;
  } else {
    document.getElementById("sd3").innerHTML = soKm - 19;
    document.getElementById("dg3").innerHTML = giakmCuoiCung;
    document.getElementById("tt3").innerHTML = (soKm - 19) * giakmCuoiCung;
  }

  if (thoiGianCho < 3) {
    document.getElementById("tgc1").innerHTML = thoiGianCho;
    document.getElementById("tgc2").innerHTML = giaCho;
    document.getElementById("tgc3").innerHTML = 0;
  } else {
    document.getElementById("tgc1").innerHTML = thoiGianCho;
    document.getElementById("tgc2").innerHTML = giaCho;
    document.getElementById("tgc3").innerHTML =
      Math.floor(thoiGianCho / 3) * giaCho;
  }

  document.getElementById("tongSoTien").innerHTML = "Tổng: " + tinhTien;
};



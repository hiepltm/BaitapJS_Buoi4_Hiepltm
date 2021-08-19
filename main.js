/**
 * BÀI 1: XUẤT 3 SỐ NGUYÊN THEO THỨ TỰ TĂNG DẦN
 * Khối 1: input
 * num1, num2, num3
 * 
 * Khối 2:
 * - Nếu num1 > num2 && num1 > num3
 *  + Đồng thời  num2 > num3        => num1 > num2 > num3
 *  + Ngược lại                     => num1 > num3 > num2
 * - nếu num2 > num 1 && num 2 > num3
 *  + Đồng thời num1 > num3         => num2 > num1 > num3
 *  + Ngược lại                     => num2 > num3 > num1
 * - neu num3 > num1 && num3 > num2
 *  + Đồng thời num1 > num2         => num3 > num1 > num2
 *  + Ngược lại                     => num3 > num2 > num1
 * 
 * Khối 3: output
 * Hiển thị giá trị num1, num2, num3 theo thứ tự tăng dần
 * 
 */

 document.getElementById("btnSort").onclick = function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    if(num1 > num2 && num1 > num3){
        if(num2 > num3){
            document.getElementById("txtNotify").innerHTML = ("Thứ tự tăng dần: " +num3+"<"+num2+"<"+num1);
        }else{
            document.getElementById("txtNotify").innerHTML = ("Thứ tự tăng dần: " +num2+"<"+num3+"<"+num1);
        }
    }else if(num2 > num1 && num2 > num3){
        if(num1 > num3){
            document.getElementById("txtNotify").innerHTML = ("Thứ tự tăng dần: " +num3+"<"+num1+"<"+num2);
        }else{
            document.getElementById("txtNotify").innerHTML = ("Thứ tự tăng dần: " +num1+"<"+num3+"<"+num2);
        }
    }else if(num3 > num1 && num3 > num2){
        if(num1 > num2){
            document.getElementById("txtNotify").innerHTML = ("Thứ tự tăng dần: " +num2+"<"+num1+"<"+num3);
        }else{
            document.getElementById("txtNotify").innerHTML = ("Thứ tự tăng dần: " +num1+"<"+num2+"<"+num3);
        }
    }else{
        document.getElementById("numNotify").innerHTML = ("Hãy nhập lại");
    }
}


/**
 * BÀI 2: CHƯƠNG TRÌNH CHÀO HỎI
 * KHỐI 1: Nhập user
 * KHỐI 2:
 * - Nếu user là "Bố" => Hiển thị UI: "Xin chào bố"
 * - Nếu user là "Mẹ" => Hiển thị UI: "Xin chào mẹ"
 * - Nếu user là "Anh trai" => Hiển thị UI: "Xin chào anh"
 * - Nếu user là "Em gái" => Hiển thị UI: "Xin chào em"
 * KHÔI 3: Hiển thị UI lời chào
 * 
 */
document.getElementById("btnHello").onclick=function (){
    var user= document.getElementById("user").value;
    switch (user) {
        case "Bố":
            document.getElementById("helloNotify").innerHTML="Xin chào bố";
            break;
        case "Mẹ":
            document.getElementById("helloNotify").innerHTML="Xin chào mẹ";
            break;
        case "Anh trai":
            document.getElementById("helloNotify").innerHTML="Xin chào anh";
            break;
        case "Em gái":
            document.getElementById("helloNotify").innerHTML="Xin chào em";
            break;
}
}


/**
 * BÀI 3: ĐẾM SỐ LƯỢNG SỐ CHẴN, SỐ LẺ
 * KHỐI 1: so1, so2, so3
 * KHỐI 2:
 * Khai báo biến: evenCount, oddCount
 * Nếu so1 chia hết cho 2 => Tăng 1 đơn vị cho biến evenCount
 * Nếu so2 chia hết cho 2 => Tăng 1 đơn vị cho biến evenCount
 * Nếu so3 chia hết cho 2 => Tăng 1 đơn vị cho biến evenCount
 * oddCount=3-evenCount;
 * Hiển thị lên UI
 */

document.getElementById("btnCount").onclick=function (){
    var evenCount=0;
    var oddCount=0;
    var so1=document.getElementById("so1").value;
    var so2=document.getElementById("so2").value;
    var so3=document.getElementById("so3").value;

    if (so1%2==0){
        evenCount++;}
    if (so2%2==0){
        evenCount++;}
    if (so3%2==0){
        evenCount++;}
    oddCount=3-evenCount;
    document.getElementById("chanleNotify").innerHTML="Số lượng số chẵn là: "+evenCount+"<br>Số lượng số lẻ là: "+oddCount;

}


/**
 * XÁC ĐỊNH LOẠI TAM GIÁC
 * Khối 1: input
 * edge1, edge2, edge3
 * 
 * Khối 2:
 * - Nếu edge1 == edge2 || edge2 == edge3 || edge1 == edge3
 * => Tam giác cân
 * - Nếu edge1 == edge2 == edge3
 * => Tam giác đều
 * - Nếu edge1*edge1 + edge2*edge2 == edge3*edge3 
 * || edge2*edge2 + edge3*edge3 == edge1*edge1 
 * || edge1*edge1 + edge3*edge3 == edge2*edge2 
 * => Tam giác vuông
 * 
 * Khối 3: output
 * Loại tam giác
 */

 document.getElementById("btnCalc").onclick = function(){
    var edge1 = parseFloat(document.getElementById("edge1").value);
    var edge2 = parseFloat(document.getElementById("edge2").value);
    var edge3 = parseFloat(document.getElementById("edge3").value);
    if (edge1 == edge2 || edge2 == edge3 || edge1 == edge3){
        document.getElementById("triangleNotify").innerHTML="Đây là tam giác cân";
    }else if (edge1==edge2==edge3) {
        document.getElementById("triangleNotify").innerHTML="Đây là tam giác đều";
    }else if (edge1*edge1 + edge2*edge2 == edge3*edge3 
        || edge2*edge2 + edge3*edge3 == edge1*edge1 
        || edge1*edge1 + edge3*edge3 == edge2*edge2 ){
        document.getElementById("triangleNotify").innerHTML="Đây là tam giác vuông";
    }else {
        document.getElementById("triangleNotify").innerHTML="Đây là tam giác thường";
    }
}
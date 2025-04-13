import React from "react";
import { useState } from "react";
function validate(sName,sID,sEmail,sPhone,major,gender){

    if(!sName || !sID || !sEmail || !sPhone||!major || !gender){
        return{valid: false, message: "Các trường không được để trống!"};
    }
    if(!sName){
        return{valid: false, message: "Tên sản phẩn không được để trống!"};
    }

    const IDRegex = /^SV\d{3}$/;
    if(!IDRegex.test(sID)){
        return{valid: false, message: "Mã sinh viên chưa đúng định dạng 'SVXXX'"};
    } 

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(sEmail)){
        return{valid: false, message: "Email không hợp lệ!"};
    } 

    const phoneRegex = /^(0|\+84)(3[2-9]|5[2689]|7[0-9]|8[1-9]|9[0-9])\d{7}$/;
    if(!phoneRegex.test(sPhone)){
        return{valid: false ,message: "Số điện thoại không đúng định dạng!"};
    }
 

    return{valid: true};
}

export default validate
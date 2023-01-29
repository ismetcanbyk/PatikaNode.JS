const circleArea =(r)=>{
    let area = Math.PI*r*r;
    return area;
}

const circleCircumference =(r)=>{
    let circumference = 2*Math.PI*r;
    return circumference;
}



// export default {
//     circleArea,
//     circleCircumference
// };


module.exports = {
    circleArea,
    circleCircumference
};
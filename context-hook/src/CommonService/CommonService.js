
export const calculateSum = (array, property, property2,reqTye) => {
   
        const total = array.reduce((preSum, obj) => {
            return reqTye === "proOne" ?
                (preSum + obj[property]) :
                ((preSum + obj[property]) * obj[property2]);
        }, 0);

        return total;
   
}
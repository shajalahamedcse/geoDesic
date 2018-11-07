'use strict';


class LonLat{
      // earth's mean radius in km
    constructor(radius){
        this.radius = Number(radius);
    }


    distance (startPoint, endPoint){
        
        // lat == φ , lon == λ
        var R = this.radius;
        var lat1 = this.toRadians(startPoint.latitude);
        var lon1 = this.toRadians(startPoint.longitude);
       
        
        var lat2 = this.toRadians(endPoint.latitude);
        var lon2 = this.toRadians(endPoint.longitude);  
        var lonDelta = lon2 - lon1;
        var latDelta = lat2 - lat1;

        var a = (Math.sin(latDelta/2) * Math.sin(latDelta/2)) +
                (Math.cos(lat1) * Math.cos(lat2) ) *
                (Math.sin(lonDelta/2) * Math.sin(lonDelta/2));
    
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1- a));

        var d = R*c;

        return d;

/*
var r = 3959;
var a = Math.pow(Math.cos(lat2) * Math.sin(lonDelta) , 2) + Math.pow(Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lonDelta) , 2);
var b = Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lonDelta);
var angle = Math.atan2(Math.sqrt(a) , b);

return angle * r;
*/
        
}
    toRadians(degrees) {
        return degrees *  (Math.PI / 180);
    }
}


module.exports = LonLat;
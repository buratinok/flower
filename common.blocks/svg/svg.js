(function($) {

var s = Snap("#flower");
s.attr({
    viewBox: "0 0 1920 1080"
})
Snap.load("assets/image/flower.svg", function (f) {
    g2 = f.select('#flower_2');
    g3 = f.select('#flower_3');
    g4 = f.select('#flower_4');
    g5 = f.select('#flower_5');
    g6 = f.select('#flower_6');
    g7 = f.select('#flower_7');
    g8 = f.select('#flower_8 ');
    g10 = f.select('#flower_10 ');
    g11 = f.select('#flower_11 ');
    g13 = f.select('#flower_13 ');
    g14 = f.select('#flower_14 ');
    g16 = f.select('#flower_16');
    g17 = f.select('#flower_17');
    g18 = f.select('#flower_18');
    g19 = f.select('#flower_19');
    g20 = f.select('#flower_20');
    g21 = f.select('#flower_21');
    g22 = f.select('#flower_22');
    g23 = f.select('#flower_23');
    g24 = f.select('#flower_24');
    g25 = f.select('#flower_25');
    g26 = f.select('#flower_26');
    g27 = f.select('#flower_27');
    g28 = f.select('#flower_28');
    g29 = f.select('#flower_29');
    g = s.group(g2,g3,g4,g5,g6,g7,g8,g10,g11,g13,g14,g16,g17,g18,g19,g20,g21,g22,g23,g24,g25,g26,g27,g28,g29);

    function atributs(obj){
        obj.attr({
            fill: "#fff",
            stroke: "#00978F",
            strokeWidth: 5,

        });
    };
    atributs(g);
    function twist(obj,x,y,r,length){
        var start = obj.transform();
        obj.animate({transform: 't'+x+','+y+','+ 'r'+r },length,function(){
            obj.animate({transform: start},length,function(){
                twist(obj,x,y,r,length);
            })
        })
    };
    twist(g2,-5, 0, -5, 2000);
    twist(g3,2, 0, 5, 4000);
    twist(g4,-5, 10, 0, 4000);
    twist(g5,6, 2, 0, 2000);
    twist(g6,6, 2, 3, 3000);
    twist(g7,3, 1, 1, 2000);
    twist(g8,3, 1, 3, 2000);
    twist(g10,6, 2, 2, 3000);
    twist(g11,2, 3, 5, 2000);
    twist(g16,3, -7, 0, 2000);
    twist(g17,3, 2, 0, 2000);
    twist(g18,-5, 10, 0, 4000);
    twist(g19,2, -8, 2, 2000);
    twist(g20,2, -5, 2, 4000);
    twist(g21,0, 0, -5, 4000);
    twist(g22,-7, 10, 5, 3000);
    twist(g23,-4, 10, 5, 3000);
    twist(g24,5, 0, 5, 5000);
    twist(g25,5, 0, 5, 5000);
    twist(g26,5, 0, 5, 5000);
    twist(g28,10, -5, 2, 2000);
    twist(g29,-7, 10, 2, 3000);
  /*          g.hover(
                function (){
                    g.attr({
                        fill: "#f0f",
                        stroke: "blue",
                        strokeWidth: 4
                    });
                },

        function animOn() {
            g.animate({
                transform: "t10,-300, r0"
            }, 4500, mina.easeinout);
        },
        function animOut() {
            g.nimate({
                transform: "t10,305, r50"
            }, 4500, mina.easeinout);
        }
    );
   // s.append(ga)*/
    s.append(g)
})
})(jQuery);
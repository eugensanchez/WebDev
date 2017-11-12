function Kunde(vorname,nachname,geburtsdatum)
{
    this.name=vorname;
    this.nname = nachname;
    this.datum = geburtsdatum
}
function attributListe()
{
    var out="";
    var k1 = [1,2,3,4,5,6,7,8]
    for (var att in k1)
        out = out+"<div class=\"comments\">\n" +
            "        <p>\n" +
            "            <span style=\"color:gold\" class=\"fa fa-star\"></span>\n" +
            "            <span class=\"fa fa-star\"></span>\n" +
            "            <span class=\"fa fa-star\"></span>\n" +
            "            <span class=\"fa fa-star\"></span>\n" +
            "            <span class=\"fa fa-star\"></span>\n" +
            "\n" +
            "            Autor von 17.Oktober\n" +
            "        </p>\n" +
            "        <p>\n" +
            "            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n" +
            "\n" +
            "            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\n" +
            "\n" +
            "            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.\n" +
            "\n" +
            "            Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer\n" +
            "        </p>\n" +
            "    </div>"
    var node = document.getElementById("comment");
    node.innerHTML = out;

}




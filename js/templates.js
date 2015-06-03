this["template"] = this["template"] || {};
this["template"]["timelines"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n\n\n  <aside>\n    <span class=\"fa-stack fa-lg timeIcon\">\n      <i class=\"fa fa-circle fa-stack-2x outer-ring\"></i>\n      <i class=\"fa fa-circle fa-stack-2x inner-ring\"></i>\n      <i class=\"fa "
    + alias3(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"icon","hash":{},"data":data}) : helper)))
    + " fa-stack-1x fa-inverse\"></i>\n    </span>\n\n    \n    <div class=\"timeDate\">\n      <h4 class=\"date\">"
    + alias3(((helper = (helper = helpers.clockDate || (depth0 != null ? depth0.clockDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"clockDate","hash":{},"data":data}) : helper)))
    + "</h4>\n      <h4 class=\"hour\">"
    + alias3(((helper = (helper = helpers.clockHour || (depth0 != null ? depth0.clockHour : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"clockHour","hash":{},"data":data}) : helper)))
    + "</h4>\n    </div>\n  </aside>\n\n\n<section>\n\n  <div class=\"rightStuff\">\n    <div class=\"arrow-left\"></div>\n    <figure>\n      <h3>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n      <p>"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</p>\n    </figure>\n  </div>\n\n  </section>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.timelines : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n\n      \n\n\n\n\n\n     \n\n\n";
},"useData":true});
sap.ui.define( [ "sap/ui/core/UIComponent" ],
    function (UIComponent) {
        "use strict";

        return UIComponent.extend("Example1.app.Component", {
            metadata: {
                rootView: "Example1.app.view.App",
                routing: {
                    config: {
                        routerClass:        "sap.m.routing.Router",
                        viewPath:           "Example1.app.view",
                        controlId:          "rootControl",
                        controlAggregation: "pages",
                        viewType:           "XML"
                    },

                    routes: [ 
                        {   name    : "main",
                            pattern : "",
                            target  : "main" },
                        {   name    : "detail",
                            pattern : "detail",
                            target  : "detail" }
                    ],

                    targets: {  
                        main    : { viewName: "main" },
                        detail  : { viewName: "detail" }                        
                    }

                }

            },

            init : function() {
                UIComponent.prototype.init.apply(this, arguments);
                this.getRouter().initialize();
            }
        })

}, true);
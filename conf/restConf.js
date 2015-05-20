/*
All routes might belong to none, one or more groups.
Grouping routes helps us apply middlewares targeting only specific sets of routes
Grouping routes follows waterfall inheritance model. A group assigned to a route is been inherited by default by
    all of its subroutes. For example:
    routes:{
        routeA:{
            groups:['groupA'],
            subRoutes:{
                routeB:{
                    // routeB by default belongs to 'groupA'
                }
            }
        }
    }
    we can always change the groups that groupB (or any other sub-route) belongs to by redefining the groups attribute
    for example if want routeB not to belong on groupA but to belong on groupB then we can do it by:
    routes:{
        routeA:{
            groups:['groupA'],
            subRoutes:{
                routeB:{
                    groups:['groupB']
                }
            }
        }
    }
    and if want groupB to belong on groups at all then an empty groups attribute would do it:
    routes:{
        routeA:{
            groups:[],
            subRoutes:{
                routeB:{
                    // routeB by default belongs to 'groupA'
                }
            }
        }
    }
 */


module.exports.conf = function(fieldsLoader){
    return {
        // API routes signatures
        routes:{
            "sample-route":{
                get:{
                    alias: "sample-route",
                    groups:['groupA']
                }
            }
        }
    }
};
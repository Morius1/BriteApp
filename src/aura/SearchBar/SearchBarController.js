({
    setSearch : function(cmp, event, helper) {
//            var searchData = cmp.get("v.searchData");
//            var searchMode = 'Movies';
//            var searchMode = cmp.find("select").get("v.value");
            var searchMode = document.getElementById("select").value;
            var searchData = document.getElementById("input").value;
            var evt = $A.get("e.c:searchSend");
            console.log(searchData);
            console.log(searchMode);
            evt.setParams({ "query": searchData, "mode": searchMode});
            evt.fire();
        },
        loadOptions: function (component, event, helper) {
                var opts = [
                    { valueS: "Movies", label: "Movies", selected: true},
                    { valueS: "Actors", label: "Actors" }
                ];
                component.set("v.options", opts);
        },
        showFavourite : function(cmp, event, helper) {
            var evt = $A.get("e.c:showLists");
            evt.setParams({ "mode": true});
            evt.fire();
        },
        showBlackList : function(cmp, event, helper) {
            var evt = $A.get("e.c:showLists");
            evt.setParams({ "mode": false});
            evt.fire();
        },
        showUserMovies : function(cmp, event, helper) {
            var evt = $A.get("e.c:showUserMovies");
            evt.fire();
        }
})
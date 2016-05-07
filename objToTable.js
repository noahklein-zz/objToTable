objToTable = (function() {

    return {
        makeTable: makeTable,
        makeTbody: makeTbody,
        makeRow: makeRow,
        makeTd: makeTd
    };

    function makeTable(obj) {
        var table = document.createElement('table');
        table.appendChild(makeTbody(obj));
        return table;
    }


    function makeTbody(obj) {
        var tbody = document.createElement('tbody');
        Object.keys(obj).forEach(function(key) {
            var row = makeRow(key, obj[key]);
            tbody.appendChild(row);
        });
        return tbody;
    }

    function makeRow(key, val) {
        var tr = document.createElement('tr');
        tr.appendChild(makeTd(key));
        tr.appendChild(makeTd(val));
        return tr;
    }

    function makeTd(text) {
        var td = document.createElement('td'),
            text = document.createTextNode(text);
        td.appendChild(text);
        return td;
    }

})();


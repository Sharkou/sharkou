function colorer(text, color) {
    return '<span style="color:' + color + ';">' + text + '</span>';
}

String.prototype.replaceAll = function(search, replacement) {
    return this.replace(new RegExp(search, 'i'), replacement);
};

function replaceAll (str) {
    for (key in obj) {
        str = str.replaceAll(obj[key].re, colorer(new RegExp(obj[key].re, 'i').exec(str), obj[key].color));
    }
    return str;
}

function syntaxHighlights() {
    var codes = document.getElementsByTagName('pre');
    for (var i = 0; i < codes.length; i++) {
        var data = codes[i].textContent;
        for (var attr in obj) {
            var regex = new RegExp(obj[attr].re, 'gi');
            /*var text = regex.exec(data);*/            
            var text = data.match(regex);
            if (text) {
                for (var n = 0; n < text.length; n++) {
                    
                    data.match(regex).forEach(function(e) {                        
                        data = data.replace(e, colorer(text[0], obj[attr].color));
                        // console.log(text[n]);
                    });
                    
                }   
            }                     
            codes[i].innerHTML = data;
        }
    }
}

var color = {
    default: '#535353',
    string: '#e88500',
    number: '#6d8600',
    keyword: 'rgb(30, 100, 234)',
    variable: '#b95ae3',
    comment: '#949494',
    function: 'rgb(30, 100, 234)'
};

var obj = {
    string: {
        re: '\'.+\'',
        color: color.string
    },
    number: {
        re: ' [0-9]+',
        color: color.number
    },
    number2: {
        re: '[0-9]+,',
        color: color.number
    },
    variable: {
        re: 'var [A-Za-z0-9]+ ',
        color: color.variable
    },
    new: {
        re: 'new',
        color: color.keyword
    },
    const: {
        re: 'const',
        color: color.keyword
    },
    var: {
        re: 'var',
        color: color.keyword
    },
    function: {
        re: 'function',
        color: color.keyword
    },
    name: {
        re: 'function [A-Za-z]+',
        color: color.variable
    },
    /*method: {
        re: '\\.[A-Za-z]+',
        color: '#b77fdb'
    },*/
    log: {
        re: 'log',
        color: color.variable
    },
    id: {
        re: 'id',
        color: color.variable
    },
    name: {
        re: 'name',
        color: color.variable
    },
    active: {
        re: 'active',
        color: color.variable
    },
    layer: {
        re: 'layer',
        color: color.variable
    },    
    _true: {
        re: 'true',
        color: color.keyword
    },
    _false: {
        re: 'false',
        color: color.keyword
    },
    this: {
        re: 'this',
        color: color.keyword
    },
    update: {
        re: 'update',
        color: color.variable
    },
    draw: {
        re: 'draw',
        color: color.variable
    },
    _x: {
        re: 'x ',
        color: color.variable
    },
    _y: {
        re: 'y ',
        color: color.variable
    },
    life: {
        re: 'life',
        color: color.variable
    },
    comment: {
        re: '/\\*.*\\*/',
        color: color.comment
    },
    translate: {
        re: 'translate',
        color: color.variable
    },
    point: {
        re: 'point',
        color: color.function
    },
    line: {
        re: 'line',
        color: color.function
    },
    rect: {
        re: 'rect',
        color: color.function
    },
    circle: {
        re: 'circle',
        color: color.function
    },
    fill: {
        re: 'fill',
        color: color.function
    },
    strokeWeight: {
        re: 'strokeWeight',
        color: color.function
    },
    stroke: {
        re: 'stroke',
        color: color.function
    }    
};

window.addEventListener('load', syntaxHighlights);

/*var colorationIntervalID = window.setInterval(function() {
    document.getElementById('code').innerHTML = replaceAll(document.getElementById('code').textContent);
}, 2000);*/

function uniq(a) {
    var seen = {};
    var out = [];
    var len = a.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = a[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }
    return out;
}
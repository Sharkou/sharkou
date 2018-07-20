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
                        console.log(text[n]);
                    });
                    
                }   
            }                     
            codes[i].innerHTML = data;
        }
    }
}

var obj = {
    string: {
        re: '\'.+\'',
        color: '#d89333'
    },
    number: {
        re: ' [0-9]+',
        color: '#85a300'
    },
    number2: {
        re: '[0-9]+,',
        color: '#85a300'
    },
    variable: {
        re: 'var [A-Za-z0-9]+ ',
        color: '#b77fdb'
    },
    new: {
        re: 'new',
        color: '#6c9ef8'
    },
    const: {
        re: 'const',
        color: '#6c9ef8'
    },
    var: {
        re: 'var',
        color: '#6c9ef8'
    },
    function: {
        re: 'function',
        color: '#6c9ef8'
    },
    name: {
        re: 'function [A-Za-z]+',
        color: '#6c9ef8'
    },
    method: {
        re: '\\.[A-Za-z]+',
        color: '#b77fdb'
    },
    comment: {
        re: '/\\*.*\\*/',
        color: '#767676'
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